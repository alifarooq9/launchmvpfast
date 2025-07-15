---
sidebar_position: 8
title: Disaster Recovery
---

# Disaster Recovery

## Overview

FediFlow's disaster recovery strategy ensures business continuity through comprehensive backup systems, automated failover procedures, and rapid recovery capabilities with minimal data loss and downtime.

## Recovery Objectives

### Recovery Time Objective (RTO)
- **Critical Services**: 15 minutes
- **Standard Services**: 1 hour
- **Non-Critical Services**: 4 hours
- **Full System Recovery**: 24 hours

### Recovery Point Objective (RPO)
- **Database**: 5 minutes (continuous replication)
- **File Storage**: 15 minutes (snapshot frequency)
- **Configuration**: 1 hour (versioned backups)
- **User-generated Content**: 5 minutes (real-time sync)

### Service Level Agreements
- **Availability Target**: 99.9% uptime (8.76 hours downtime/year)
- **Maximum Incident Duration**: 4 hours
- **Data Loss Tolerance**: < 1 minute for critical data
- **Communication Timeline**: 15 minutes for initial notification

## Backup Strategy

### Database Backup Architecture
```bash
#!/bin/bash
# Automated PostgreSQL backup script

BACKUP_DIR="/backups/postgresql"
RETENTION_DAYS=30
DATABASES=("fediflow_production" "fediflow_analytics")

# Function to create database backup
create_backup() {
    local db_name=$1
    local timestamp=$(date +%Y%m%d_%H%M%S)
    local backup_file="${BACKUP_DIR}/${db_name}_${timestamp}.sql.gz"
    
    echo "Creating backup for database: $db_name"
    
    # Create compressed backup with custom format
    pg_dump \
        --host=$DB_HOST \
        --port=$DB_PORT \
        --username=$DB_USER \
        --format=custom \
        --compress=9 \
        --verbose \
        --file="${backup_file%.gz}" \
        "$db_name"
    
    # Compress the backup
    gzip "${backup_file%.gz}"
    
    # Verify backup integrity
    if pg_restore --list "$backup_file" > /dev/null 2>&1; then
        echo "Backup verified: $backup_file"
        
        # Upload to S3 with encryption
        aws s3 cp "$backup_file" \
            "s3://fediflow-backups/postgresql/$db_name/" \
            --server-side-encryption AES256 \
            --storage-class STANDARD_IA
        
        # Create point-in-time recovery base backup
        if [ "$db_name" = "fediflow_production" ]; then
            pg_basebackup \
                --host=$DB_HOST \
                --port=$DB_PORT \
                --username=$DB_USER \
                --pgdata="${BACKUP_DIR}/basebackup_${timestamp}" \
                --format=tar \
                --gzip \
                --compress=9 \
                --progress \
                --verbose
        fi
    else
        echo "Backup verification failed: $backup_file"
        exit 1
    fi
}

# Create backups for all databases
for db in "${DATABASES[@]}"; do
    create_backup "$db"
done

# Cleanup old local backups
find "$BACKUP_DIR" -name "*.gz" -mtime +$RETENTION_DAYS -delete

echo "Backup process completed successfully"
```

### File Storage Backup
```yaml
# Kubernetes CronJob for file storage backup
apiVersion: batch/v1
kind: CronJob
metadata:
  name: file-storage-backup
  namespace: fediflow-production
spec:
  schedule: "0 */4 * * *"  # Every 4 hours
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: backup
            image: amazon/aws-cli:latest
            command:
            - /bin/bash
            - -c
            - |
              # Sync files to backup bucket
              aws s3 sync /data/uploads s3://fediflow-backups/uploads/ \
                --delete \
                --storage-class STANDARD_IA \
                --server-side-encryption AES256
              
              # Create snapshot of current state
              TIMESTAMP=$(date +%Y%m%d_%H%M%S)
              aws s3 sync /data/uploads s3://fediflow-backups/snapshots/$TIMESTAMP/ \
                --server-side-encryption AES256
            volumeMounts:
            - name: upload-storage
              mountPath: /data/uploads
            env:
            - name: AWS_ACCESS_KEY_ID
              valueFrom:
                secretKeyRef:
                  name: aws-credentials
                  key: access-key-id
            - name: AWS_SECRET_ACCESS_KEY
              valueFrom:
                secretKeyRef:
                  name: aws-credentials
                  key: secret-access-key
          volumes:
          - name: upload-storage
            persistentVolumeClaim:
              claimName: fediflow-uploads
          restartPolicy: OnFailure
```

### Configuration Backup
```bash
#!/bin/bash
# Configuration and infrastructure backup

BACKUP_TIMESTAMP=$(date +%Y%m%d_%H%M%S)
CONFIG_BACKUP_DIR="/backups/config/$BACKUP_TIMESTAMP"

mkdir -p "$CONFIG_BACKUP_DIR"

# Backup Kubernetes configurations
echo "Backing up Kubernetes configurations..."
kubectl get all --all-namespaces -o yaml > "$CONFIG_BACKUP_DIR/k8s-all-resources.yaml"
kubectl get configmaps --all-namespaces -o yaml > "$CONFIG_BACKUP_DIR/k8s-configmaps.yaml"
kubectl get secrets --all-namespaces -o yaml > "$CONFIG_BACKUP_DIR/k8s-secrets.yaml"
kubectl get pv,pvc --all-namespaces -o yaml > "$CONFIG_BACKUP_DIR/k8s-storage.yaml"

# Backup Terraform state
echo "Backing up Terraform state..."
terraform state pull > "$CONFIG_BACKUP_DIR/terraform.tfstate"

# Backup application configurations
echo "Backing up application configurations..."
cp -r /etc/fediflow/ "$CONFIG_BACKUP_DIR/app-config/"

# Backup monitoring configurations
echo "Backing up monitoring configurations..."
cp -r /etc/prometheus/ "$CONFIG_BACKUP_DIR/prometheus/"
cp -r /etc/grafana/ "$CONFIG_BACKUP_DIR/grafana/"

# Create archive and upload
tar -czf "${CONFIG_BACKUP_DIR}.tar.gz" -C /backups/config "$BACKUP_TIMESTAMP"

aws s3 cp "${CONFIG_BACKUP_DIR}.tar.gz" \
    "s3://fediflow-backups/configurations/" \
    --server-side-encryption AES256

# Cleanup local files
rm -rf "$CONFIG_BACKUP_DIR" "${CONFIG_BACKUP_DIR}.tar.gz"

echo "Configuration backup completed"
```

## Cross-Region Replication

### Database Replication Setup
```yaml
# PostgreSQL streaming replication configuration
# Primary server (postgresql.conf)
wal_level = replica
max_wal_senders = 3
max_replication_slots = 3
archive_mode = on
archive_command = 'aws s3 cp %p s3://fediflow-wal-archive/%f'

# Standby server configuration
standby_mode = 'on'
primary_conninfo = 'host=primary.db.fediflow.edu port=5432 user=replicator'
restore_command = 'aws s3 cp s3://fediflow-wal-archive/%f %p'
```

### Application-Level Replication
```javascript
// Multi-region deployment configuration
const regionConfig = {
  primary: {
    region: 'us-east-1',
    database: {
      host: 'primary.db.us-east-1.fediflow.edu',
      role: 'primary'
    },
    redis: {
      host: 'primary.cache.us-east-1.fediflow.edu'
    }
  },
  secondary: {
    region: 'eu-west-1',
    database: {
      host: 'replica.db.eu-west-1.fediflow.edu',
      role: 'replica'
    },
    redis: {
      host: 'replica.cache.eu-west-1.fediflow.edu'
    }
  }
};

// Database connection with failover
class DatabaseManager {
  constructor(config) {
    this.primaryPool = new Pool(config.primary.database);
    this.replicaPool = new Pool(config.secondary.database);
    this.currentRegion = 'primary';
  }

  async query(sql, params, options = {}) {
    const useReplica = options.readOnly || this.currentRegion === 'secondary';
    const pool = useReplica ? this.replicaPool : this.primaryPool;

    try {
      return await pool.query(sql, params);
    } catch (error) {
      if (error.code === 'ECONNREFUSED' && !useReplica) {
        console.warn('Primary database unavailable, attempting failover...');
        return await this.replicaPool.query(sql, params);
      }
      throw error;
    }
  }

  async failover() {
    console.log('Initiating database failover...');
    
    // Promote replica to primary
    await this.replicaPool.query('SELECT pg_promote()');
    
    // Update connection configuration
    this.currentRegion = 'secondary';
    
    // Update DNS or load balancer configuration
    await this.updateDNSRecords();
    
    console.log('Database failover completed');
  }
}
```

## Automated Failover

### Health Check and Failover Orchestration
```bash
#!/bin/bash
# Automated failover orchestration script

PRIMARY_REGION="us-east-1"
SECONDARY_REGION="eu-west-1"
HEALTH_CHECK_INTERVAL=30
FAILURE_THRESHOLD=3

check_service_health() {
    local region=$1
    local endpoint="https://api.${region}.fediflow.edu/health"
    
    if curl -f -s --max-time 10 "$endpoint" > /dev/null; then
        return 0
    else
        return 1
    fi
}

initiate_failover() {
    echo "$(date): Initiating automated failover to $SECONDARY_REGION"
    
    # 1. Update Route53 DNS records
    aws route53 change-resource-record-sets \
        --hosted-zone-id "$HOSTED_ZONE_ID" \
        --change-batch file://failover-changeset.json \
        --region "$SECONDARY_REGION"
    
    # 2. Scale up secondary region infrastructure
    kubectl config use-context "$SECONDARY_REGION"
    kubectl scale deployment fediflow-api --replicas=5 -n fediflow-production
    kubectl scale deployment fediflow-worker --replicas=3 -n fediflow-production
    
    # 3. Promote database replica
    kubectl exec -n fediflow-production deployment/postgresql \
        -- psql -c "SELECT pg_promote();"
    
    # 4. Update application configuration
    kubectl patch configmap fediflow-config -n fediflow-production \
        --patch '{"data":{"DATABASE_ROLE":"primary"}}'
    
    # 5. Restart application pods
    kubectl rollout restart deployment/fediflow-api -n fediflow-production
    
    # 6. Send notifications
    send_notification "CRITICAL" "Automated failover completed to $SECONDARY_REGION"
    
    echo "$(date): Failover process completed"
}

send_notification() {
    local severity=$1
    local message=$2
    
    # Slack notification
    curl -X POST -H 'Content-type: application/json' \
        --data "{\"text\":\"[$severity] $message\"}" \
        "$SLACK_WEBHOOK_URL"
    
    # Email notification
    aws ses send-email \
        --source "alerts@fediflow.edu" \
        --destination "ToAddresses=oncall@fediflow.edu" \
        --message "Subject={Data='FediFlow Alert: $severity'},Body={Text={Data='$message'}}" \
        --region us-east-1
}

# Main monitoring loop
failure_count=0

while true; do
    if check_service_health "$PRIMARY_REGION"; then
        failure_count=0
        echo "$(date): Primary region healthy"
    else
        failure_count=$((failure_count + 1))
        echo "$(date): Primary region health check failed ($failure_count/$FAILURE_THRESHOLD)"
        
        if [ $failure_count -ge $FAILURE_THRESHOLD ]; then
            if check_service_health "$SECONDARY_REGION"; then
                initiate_failover
                break
            else
                send_notification "CRITICAL" "Both regions are unhealthy - manual intervention required"
                break
            fi
        fi
    fi
    
    sleep $HEALTH_CHECK_INTERVAL
done
```

### Kubernetes Failover Configuration
```yaml
# Multi-region service configuration
apiVersion: v1
kind: Service
metadata:
  name: fediflow-api-global
  annotations:
    external-dns.alpha.kubernetes.io/hostname: api.fediflow.edu
    external-dns.alpha.kubernetes.io/ttl: "60"
spec:
  type: LoadBalancer
  selector:
    app: fediflow-api
  ports:
  - port: 80
    targetPort: 3000

---
# Cluster-level failover policy
apiVersion: networking.istio.io/v1beta1
kind: DestinationRule
metadata:
  name: fediflow-api-failover
spec:
  host: fediflow-api
  trafficPolicy:
    outlierDetection:
      consecutive5xxErrors: 3
      interval: 30s
      baseEjectionTime: 30s
      maxEjectionPercent: 50
    connectionPool:
      tcp:
        maxConnections: 100
      http:
        http1MaxPendingRequests: 10
        maxRequestsPerConnection: 5
        consecutiveGatewayErrors: 3
        interval: 30s
        baseEjectionTime: 30s
```

## Recovery Procedures

### Database Recovery Process
```bash
#!/bin/bash
# Point-in-time database recovery script

RECOVERY_TARGET_TIME="2024-01-15 14:30:00"
BACKUP_LOCATION="s3://fediflow-backups/postgresql/"
WAL_ARCHIVE="s3://fediflow-wal-archive/"

perform_pitr_recovery() {
    echo "Starting point-in-time recovery to: $RECOVERY_TARGET_TIME"
    
    # 1. Stop database service
    systemctl stop postgresql
    
    # 2. Backup current data directory
    mv /var/lib/postgresql/data /var/lib/postgresql/data.backup.$(date +%s)
    
    # 3. Download and restore base backup
    LATEST_BACKUP=$(aws s3 ls $BACKUP_LOCATION --recursive | sort | tail -n 1 | awk '{print $4}')
    aws s3 cp "s3://fediflow-backups/$LATEST_BACKUP" /tmp/base_backup.tar.gz
    
    mkdir -p /var/lib/postgresql/data
    tar -xzf /tmp/base_backup.tar.gz -C /var/lib/postgresql/data
    
    # 4. Configure recovery
    cat > /var/lib/postgresql/data/recovery.conf << EOF
standby_mode = 'off'
restore_command = 'aws s3 cp s3://fediflow-wal-archive/%f %p'
recovery_target_time = '$RECOVERY_TARGET_TIME'
recovery_target_action = 'promote'
EOF
    
    # 5. Set permissions and start recovery
    chown -R postgres:postgres /var/lib/postgresql/data
    chmod 700 /var/lib/postgresql/data
    
    systemctl start postgresql
    
    # 6. Monitor recovery progress
    while [ ! -f /var/lib/postgresql/data/recovery.done ]; do
        echo "Recovery in progress..."
        sleep 10
    done
    
    echo "Point-in-time recovery completed successfully"
}

# Verify recovery target time is valid
if [[ ! "$RECOVERY_TARGET_TIME" =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}\ [0-9]{2}:[0-9]{2}:[0-9]{2}$ ]]; then
    echo "Invalid recovery target time format"
    exit 1
fi

perform_pitr_recovery
```

### Application Recovery
```javascript
// Application-level recovery procedures
class RecoveryManager {
  constructor(config) {
    this.config = config;
    this.logger = new Logger('RecoveryManager');
  }

  async performFullRecovery() {
    this.logger.info('Starting full system recovery');
    
    try {
      // 1. Verify infrastructure health
      await this.verifyInfrastructure();
      
      // 2. Restore database connections
      await this.restoreDatabaseConnections();
      
      // 3. Restore cache and session data
      await this.restoreCacheData();
      
      // 4. Verify federation connectivity
      await this.verifyFederationConnectivity();
      
      // 5. Restore application services
      await this.restoreApplicationServices();
      
      // 6. Validate system integrity
      await this.validateSystemIntegrity();
      
      this.logger.info('Full system recovery completed successfully');
      
    } catch (error) {
      this.logger.error('Recovery failed:', error);
      await this.notifyRecoveryFailure(error);
      throw error;
    }
  }

  async restoreDatabaseConnections() {
    this.logger.info('Restoring database connections');
    
    // Test primary database connection
    try {
      await this.config.database.primary.query('SELECT 1');
      this.logger.info('Primary database connection restored');
    } catch (error) {
      // Attempt connection to replica
      await this.config.database.replica.query('SELECT 1');
      this.logger.info('Connected to replica database');
    }
  }

  async restoreCacheData() {
    this.logger.info('Restoring cache data');
    
    // Restore critical cache data from backup
    const criticalKeys = await this.getCriticalCacheKeys();
    
    for (const key of criticalKeys) {
      try {
        const backupValue = await this.getCacheBackup(key);
        if (backupValue) {
          await this.config.redis.set(key, backupValue);
          this.logger.debug(`Restored cache key: ${key}`);
        }
      } catch (error) {
        this.logger.warn(`Failed to restore cache key ${key}:`, error);
      }
    }
  }

  async verifyFederationConnectivity() {
    this.logger.info('Verifying federation connectivity');
    
    const federatedInstances = await this.getFederatedInstances();
    const connectivityResults = await Promise.allSettled(
      federatedInstances.map(instance => this.testFederationConnection(instance))
    );
    
    const healthyInstances = connectivityResults.filter(
      result => result.status === 'fulfilled'
    ).length;
    
    this.logger.info(`Federation connectivity: ${healthyInstances}/${federatedInstances.length} instances reachable`);
    
    if (healthyInstances < federatedInstances.length * 0.5) {
      throw new Error('Insufficient federation connectivity');
    }
  }

  async validateSystemIntegrity() {
    this.logger.info('Validating system integrity');
    
    const checks = [
      this.validateDatabaseIntegrity(),
      this.validateFileSystemIntegrity(),
      this.validateApplicationConfiguration(),
      this.validateSecuritySettings()
    ];
    
    const results = await Promise.allSettled(checks);
    const failures = results.filter(result => result.status === 'rejected');
    
    if (failures.length > 0) {
      this.logger.error('System integrity validation failed:', failures);
      throw new Error(`System integrity check failed: ${failures.length} checks failed`);
    }
    
    this.logger.info('System integrity validation passed');
  }
}
```

## Business Continuity Planning

### Communication Plan
```yaml
# Incident communication workflow
incident_response:
  initial_notification:
    timeframe: "15 minutes"
    channels:
      - slack: "#incidents"
      - email: "oncall@fediflow.edu"
      - sms: "emergency-contacts"
    
  status_updates:
    frequency: "every 30 minutes"
    stakeholders:
      - executive_team
      - technical_team
      - customer_support
      - marketing_team
    
  external_communication:
    status_page: "status.fediflow.edu"
    social_media: "@fediflow_status"
    customer_emails: "automated via system"

escalation_matrix:
  level_1:
    duration: "0-30 minutes"
    team: "on_call_engineer"
  level_2:
    duration: "30-60 minutes"
    team: "technical_lead"
  level_3:
    duration: "60+ minutes"
    team: "engineering_manager"
  level_4:
    duration: "2+ hours"
    team: "executive_team"
```

### Testing and Validation
```bash
#!/bin/bash
# Disaster recovery testing script

DR_TEST_DATE=$(date +%Y%m%d)
TEST_RESULTS_DIR="/tmp/dr_test_$DR_TEST_DATE"
mkdir -p "$TEST_RESULTS_DIR"

# Test database backup and restore
test_database_recovery() {
    echo "Testing database backup and restore..."
    
    # Create test backup
    pg_dump --host=test-db --format=custom --file=/tmp/test_backup.dump fediflow_test
    
    # Simulate corruption by dropping a table
    psql --host=test-db -c "DROP TABLE test_activities;" fediflow_test
    
    # Restore from backup
    pg_restore --host=test-db --dbname=fediflow_test /tmp/test_backup.dump
    
    # Verify data integrity
    COUNT=$(psql --host=test-db -t -c "SELECT COUNT(*) FROM test_activities;" fediflow_test)
    
    if [ "$COUNT" -gt 0 ]; then
        echo "✓ Database recovery test passed"
        echo "database_recovery: PASS" >> "$TEST_RESULTS_DIR/results.txt"
    else
        echo "✗ Database recovery test failed"
        echo "database_recovery: FAIL" >> "$TEST_RESULTS_DIR/results.txt"
    fi
}

# Test failover procedures
test_failover() {
    echo "Testing automated failover..."
    
    # Simulate primary region failure
    kubectl scale deployment fediflow-api --replicas=0 -n fediflow-test
    
    # Wait for health check to fail
    sleep 120
    
    # Check if failover was triggered
    SECONDARY_REPLICAS=$(kubectl get deployment fediflow-api-secondary -n fediflow-test -o jsonpath='{.spec.replicas}')
    
    if [ "$SECONDARY_REPLICAS" -gt 0 ]; then
        echo "✓ Automated failover test passed"
        echo "automated_failover: PASS" >> "$TEST_RESULTS_DIR/results.txt"
    else
        echo "✗ Automated failover test failed"
        echo "automated_failover: FAIL" >> "$TEST_RESULTS_DIR/results.txt"
    fi
    
    # Restore primary
    kubectl scale deployment fediflow-api --replicas=3 -n fediflow-test
}

# Test backup integrity
test_backup_integrity() {
    echo "Testing backup integrity..."
    
    LATEST_BACKUP=$(aws s3 ls s3://fediflow-backups-test/postgresql/ | sort | tail -n 1 | awk '{print $4}')
    aws s3 cp "s3://fediflow-backups-test/postgresql/$LATEST_BACKUP" /tmp/integrity_test.backup
    
    # Verify backup can be read
    if pg_restore --list /tmp/integrity_test.backup > /dev/null 2>&1; then
        echo "✓ Backup integrity test passed"
        echo "backup_integrity: PASS" >> "$TEST_RESULTS_DIR/results.txt"
    else
        echo "✗ Backup integrity test failed"
        echo "backup_integrity: FAIL" >> "$TEST_RESULTS_DIR/results.txt"
    fi
}

# Execute all tests
test_database_recovery
test_failover
test_backup_integrity

# Generate test report
cat << EOF > "$TEST_RESULTS_DIR/report.md"
# Disaster Recovery Test Report

Date: $(date)
Test Environment: fediflow-test

## Test Results

$(cat "$TEST_RESULTS_DIR/results.txt")

## Next Steps

- Review any failed tests
- Update procedures based on findings
- Schedule next test for $(date -d '+1 month' +%Y-%m-%d)
EOF

echo "Disaster recovery test completed. Report available at: $TEST_RESULTS_DIR/report.md"
```

This comprehensive disaster recovery plan ensures FediFlow can quickly recover from various failure scenarios while maintaining data integrity and minimizing service disruption.