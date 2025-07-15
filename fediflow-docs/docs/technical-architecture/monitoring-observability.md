---
sidebar_position: 7
title: Monitoring & Observability
---

# Monitoring & Observability

## Overview

FediFlow's monitoring and observability strategy provides comprehensive visibility into system health, performance, and user behavior through distributed tracing, metrics collection, log aggregation, and real-time alerting.

## Metrics Collection

### Application Metrics
```javascript
// Prometheus metrics implementation
const prometheus = require('prom-client');

// Custom metrics definitions
const httpRequestDuration = new prometheus.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.001, 0.01, 0.1, 1, 5, 10]
});

const federationActivityCount = new prometheus.Counter({
  name: 'federation_activities_total',
  help: 'Total number of federated activities processed',
  labelNames: ['type', 'instance', 'status']
});

const databaseConnectionPool = new prometheus.Gauge({
  name: 'database_connections_active',
  help: 'Number of active database connections',
  labelNames: ['pool_name']
});

// Middleware for request tracking
app.use((req, res, next) => {
  const start = Date.now();
  
  res.on('finish', () => {
    const duration = (Date.now() - start) / 1000;
    httpRequestDuration
      .labels(req.method, req.route?.path || req.path, res.statusCode)
      .observe(duration);
  });
  
  next();
});
```

### Infrastructure Metrics
```yaml
# Prometheus configuration for infrastructure monitoring
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  - "fediflow_rules.yml"

scrape_configs:
  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
    - role: pod
    relabel_configs:
    - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
      action: keep
      regex: true
    - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_path]
      action: replace
      target_label: __metrics_path__
      regex: (.+)

  - job_name: 'node-exporter'
    static_configs:
    - targets: ['node-exporter:9100']
    
  - job_name: 'postgres-exporter'
    static_configs:
    - targets: ['postgres-exporter:9187']
```

### Business Metrics
```javascript
// Business-level metrics tracking
const businessMetrics = {
  // User engagement metrics
  userSessions: new prometheus.Counter({
    name: 'user_sessions_total',
    help: 'Total number of user sessions',
    labelNames: ['tenant', 'user_type']
  }),
  
  courseEnrollments: new prometheus.Counter({
    name: 'course_enrollments_total',
    help: 'Total number of course enrollments',
    labelNames: ['tenant', 'course_type']
  }),
  
  contentCreation: new prometheus.Counter({
    name: 'content_created_total',
    help: 'Total content created by users',
    labelNames: ['tenant', 'content_type', 'user_role']
  }),
  
  federationReach: new prometheus.Gauge({
    name: 'federation_instances_connected',
    help: 'Number of federated instances connected',
    labelNames: ['tenant']
  })
};
```

## Distributed Tracing

### OpenTelemetry Implementation
```javascript
// OpenTelemetry setup
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { Resource } = require('@opentelemetry/semantic-conventions');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { BatchSpanProcessor } = require('@opentelemetry/sdk-tracing-base');

// Initialize tracing
const jaegerExporter = new JaegerExporter({
  endpoint: 'http://jaeger-collector:14268/api/traces',
});

const sdk = new NodeSDK({
  resource: new Resource({
    [SEMRESATTRS_SERVICE_NAME]: 'fediflow-api',
    [SEMRESATTRS_SERVICE_VERSION]: process.env.APP_VERSION,
    [SEMRESATTRS_DEPLOYMENT_ENVIRONMENT]: process.env.NODE_ENV,
  }),
  spanProcessor: new BatchSpanProcessor(jaegerExporter),
  instrumentations: [
    new HttpInstrumentation({
      requestHook: (span, request) => {
        span.setAttributes({
          'http.user_agent': request.headers['user-agent'],
          'http.tenant_id': request.headers['x-tenant-id']
        });
      }
    }),
    new ExpressInstrumentation(),
    new PgInstrumentation()
  ]
});

sdk.start();
```

### Custom Span Creation
```javascript
// Custom tracing for business operations
const { trace } = require('@opentelemetry/api');

class ActivityService {
  async createActivity(activityData) {
    const tracer = trace.getTracer('fediflow-activity-service');
    
    return tracer.startActiveSpan('activity.create', async (span) => {
      try {
        span.setAttributes({
          'activity.type': activityData.type,
          'activity.actor': activityData.actor,
          'tenant.id': activityData.tenantId
        });
        
        // Database operation
        const activity = await tracer.startActiveSpan('db.activity.insert', async (dbSpan) => {
          dbSpan.setAttributes({
            'db.operation': 'INSERT',
            'db.table': 'activities'
          });
          return await this.db.activities.create(activityData);
        });
        
        // Federation delivery
        await tracer.startActiveSpan('federation.deliver', async (fedSpan) => {
          fedSpan.setAttributes({
            'federation.recipients': activity.recipients.length,
            'federation.instances': activity.targetInstances.length
          });
          await this.federationService.deliver(activity);
        });
        
        span.setStatus({ code: SpanStatusCode.OK });
        return activity;
        
      } catch (error) {
        span.recordException(error);
        span.setStatus({
          code: SpanStatusCode.ERROR,
          message: error.message
        });
        throw error;
      } finally {
        span.end();
      }
    });
  }
}
```

## Log Aggregation

### Structured Logging
```javascript
// Winston logger configuration
const winston = require('winston');
const { ElasticsearchTransport } = require('winston-elasticsearch');

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
      return JSON.stringify({
        timestamp,
        level,
        message,
        service: 'fediflow-api',
        version: process.env.APP_VERSION,
        tenantId: meta.tenantId,
        userId: meta.userId,
        traceId: meta.traceId,
        spanId: meta.spanId,
        ...meta
      });
    })
  ),
  transports: [
    new winston.transports.Console(),
    new ElasticsearchTransport({
      level: 'info',
      clientOpts: { node: process.env.ELASTICSEARCH_URL },
      index: 'fediflow-logs'
    })
  ]
});

// Context-aware logging middleware
app.use((req, res, next) => {
  req.logger = logger.child({
    tenantId: req.headers['x-tenant-id'],
    userId: req.user?.id,
    requestId: req.id,
    traceId: req.traceId,
    userAgent: req.headers['user-agent']
  });
  next();
});
```

### Log Parsing and Enrichment
```yaml
# Fluent Bit configuration for log processing
apiVersion: v1
kind: ConfigMap
metadata:
  name: fluent-bit-config
data:
  fluent-bit.conf: |
    [SERVICE]
        Flush         1
        Log_Level     info
        Daemon        off
        Parsers_File  parsers.conf

    [INPUT]
        Name              tail
        Path              /var/log/containers/*fediflow*.log
        Parser            docker
        Tag               kube.*
        Refresh_Interval  5
        Mem_Buf_Limit     50MB

    [FILTER]
        Name   kubernetes
        Match  kube.*
        Kube_URL https://kubernetes.default.svc:443
        Kube_CA_File /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
        Kube_Token_File /var/run/secrets/kubernetes.io/serviceaccount/token

    [FILTER]
        Name   parser
        Match  kube.*
        Key_Name log
        Parser json
        Reserve_Data On

    [FILTER]
        Name   nest
        Match  kube.*
        Operation lift
        Nested_under kubernetes

    [OUTPUT]
        Name  es
        Match *
        Host  elasticsearch.logging.svc.cluster.local
        Port  9200
        Index fediflow-logs-%Y.%m.%d
        Type  _doc
        Retry_Limit False
        Generate_ID On
```

## Real-Time Alerting

### Prometheus Alerting Rules
```yaml
# fediflow_rules.yml
groups:
- name: fediflow.rules
  rules:
  - alert: HighErrorRate
    expr: rate(http_requests_total{status=~"5.."}[5m]) / rate(http_requests_total[5m]) > 0.1
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "High error rate detected"
      description: "Error rate is {{ $value | humanizePercentage }} for {{ $labels.instance }}"

  - alert: DatabaseConnectionPoolExhausted
    expr: database_connections_active / database_connections_max > 0.9
    for: 2m
    labels:
      severity: warning
    annotations:
      summary: "Database connection pool nearly exhausted"
      description: "Connection pool {{ $labels.pool_name }} is {{ $value | humanizePercentage }} full"

  - alert: FederationDeliveryFailure
    expr: rate(federation_delivery_failures_total[10m]) > 10
    for: 5m
    labels:
      severity: warning
    annotations:
      summary: "High federation delivery failure rate"
      description: "Federation delivery failures: {{ $value }} per second"

  - alert: DiskSpaceRunningLow
    expr: (node_filesystem_avail_bytes / node_filesystem_size_bytes) < 0.1
    for: 5m
    labels:
      severity: critical
    annotations:
      summary: "Disk space running low"
      description: "Disk space on {{ $labels.instance }} is {{ $value | humanizePercentage }} full"
```

### Alertmanager Configuration
```yaml
# alertmanager.yml
global:
  smtp_smarthost: 'smtp.gmail.com:587'
  smtp_from: 'alerts@fediflow.edu'

route:
  group_by: ['alertname', 'cluster', 'service']
  group_wait: 10s
  group_interval: 10s
  repeat_interval: 1h
  receiver: 'web.hook'
  routes:
  - match:
      severity: critical
    receiver: 'critical-alerts'
  - match:
      severity: warning
    receiver: 'warning-alerts'

receivers:
- name: 'web.hook'
  webhook_configs:
  - url: 'http://webhook-service:8080/alerts'

- name: 'critical-alerts'
  email_configs:
  - to: 'oncall@fediflow.edu'
    subject: 'CRITICAL: {{ .GroupLabels.alertname }}'
    body: |
      {{ range .Alerts }}
      Alert: {{ .Annotations.summary }}
      Description: {{ .Annotations.description }}
      Labels: {{ .Labels }}
      {{ end }}
  slack_configs:
  - api_url: 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK'
    channel: '#alerts-critical'

- name: 'warning-alerts'
  slack_configs:
  - api_url: 'https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK'
    channel: '#alerts-warning'
```

## Performance Monitoring

### Application Performance Monitoring (APM)
```javascript
// Custom APM implementation
class PerformanceMonitor {
  constructor() {
    this.metrics = new Map();
    this.startTime = Date.now();
  }

  startTimer(operation) {
    const timerId = `${operation}_${Date.now()}_${Math.random()}`;
    this.metrics.set(timerId, {
      operation,
      startTime: process.hrtime.bigint()
    });
    return timerId;
  }

  endTimer(timerId) {
    const metric = this.metrics.get(timerId);
    if (!metric) return;

    const duration = Number(process.hrtime.bigint() - metric.startTime) / 1e6; // Convert to milliseconds
    
    // Update Prometheus metrics
    httpRequestDuration
      .labels(metric.operation)
      .observe(duration / 1000); // Convert to seconds for Prometheus

    this.metrics.delete(timerId);
    return duration;
  }

  trackMemoryUsage() {
    const memUsage = process.memoryUsage();
    
    Object.entries(memUsage).forEach(([key, value]) => {
      const gauge = prometheus.register.getSingleMetric(`process_memory_${key}_bytes`) ||
        new prometheus.Gauge({
          name: `process_memory_${key}_bytes`,
          help: `Process memory ${key} in bytes`
        });
      gauge.set(value);
    });
  }

  trackEventLoopLag() {
    const start = process.hrtime.bigint();
    setImmediate(() => {
      const lag = Number(process.hrtime.bigint() - start) / 1e6;
      const lagGauge = prometheus.register.getSingleMetric('event_loop_lag_milliseconds') ||
        new prometheus.Gauge({
          name: 'event_loop_lag_milliseconds',
          help: 'Event loop lag in milliseconds'
        });
      lagGauge.set(lag);
    });
  }
}
```

### Database Performance Monitoring
```sql
-- Database monitoring queries
-- Slow query monitoring
SELECT 
  query,
  calls,
  total_time / calls as avg_time,
  total_time,
  rows,
  100.0 * shared_blks_hit / nullif(shared_blks_hit + shared_blks_read, 0) AS hit_percent
FROM pg_stat_statements 
WHERE calls > 100
ORDER BY avg_time DESC
LIMIT 20;

-- Connection monitoring
SELECT 
  state,
  COUNT(*) as connection_count,
  AVG(EXTRACT(EPOCH FROM (now() - state_change))) as avg_duration
FROM pg_stat_activity 
WHERE pid != pg_backend_pid()
GROUP BY state;

-- Lock monitoring
SELECT 
  l.locktype,
  l.database,
  l.relation,
  l.page,
  l.tuple,
  l.virtualxid,
  l.transactionid,
  l.mode,
  l.granted,
  a.usename,
  a.query,
  a.query_start,
  age(now(), a.query_start) AS duration
FROM pg_locks l
LEFT JOIN pg_stat_activity a ON l.pid = a.pid
WHERE NOT l.granted
ORDER BY a.query_start;
```

## Health Checks

### Application Health Endpoints
```javascript
// Comprehensive health check implementation
app.get('/health', async (req, res) => {
  const healthCheck = {
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    version: process.env.APP_VERSION,
    environment: process.env.NODE_ENV,
    checks: {}
  };

  const checks = [
    {
      name: 'database',
      check: async () => {
        const start = Date.now();
        await db.raw('SELECT 1');
        return { status: 'ok', responseTime: Date.now() - start };
      }
    },
    {
      name: 'redis',
      check: async () => {
        const start = Date.now();
        await redis.ping();
        return { status: 'ok', responseTime: Date.now() - start };
      }
    },
    {
      name: 'federation',
      check: async () => {
        // Check federation connectivity
        const federatedInstances = await checkFederatedInstances();
        return {
          status: federatedInstances.healthy > federatedInstances.total * 0.5 ? 'ok' : 'degraded',
          healthy: federatedInstances.healthy,
          total: federatedInstances.total
        };
      }
    },
    {
      name: 'memory',
      check: async () => {
        const memUsage = process.memoryUsage();
        const maxHeap = 512 * 1024 * 1024; // 512MB limit
        return {
          status: memUsage.heapUsed < maxHeap * 0.9 ? 'ok' : 'warning',
          heapUsed: memUsage.heapUsed,
          heapTotal: memUsage.heapTotal,
          external: memUsage.external
        };
      }
    }
  ];

  try {
    const results = await Promise.allSettled(
      checks.map(async ({ name, check }) => {
        try {
          const result = await Promise.race([
            check(),
            new Promise((_, reject) => 
              setTimeout(() => reject(new Error('Timeout')), 5000)
            )
          ]);
          return { name, ...result };
        } catch (error) {
          return { name, status: 'error', error: error.message };
        }
      })
    );

    results.forEach(result => {
      if (result.status === 'fulfilled') {
        const { name, ...checkResult } = result.value;
        healthCheck.checks[name] = checkResult;
      } else {
        healthCheck.checks[result.reason.name] = {
          status: 'error',
          error: result.reason.message
        };
      }
    });

    // Determine overall status
    const hasErrors = Object.values(healthCheck.checks).some(check => check.status === 'error');
    const hasWarnings = Object.values(healthCheck.checks).some(check => check.status === 'warning');
    
    if (hasErrors) {
      healthCheck.status = 'error';
      res.status(503);
    } else if (hasWarnings) {
      healthCheck.status = 'warning';
      res.status(200);
    } else {
      res.status(200);
    }

    res.json(healthCheck);
  } catch (error) {
    res.status(503).json({
      status: 'error',
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
});

// Readiness probe (Kubernetes)
app.get('/ready', (req, res) => {
  // Check if application is ready to receive traffic
  if (appInitialized && !shutdownInProgress) {
    res.status(200).json({ status: 'ready' });
  } else {
    res.status(503).json({ status: 'not ready' });
  }
});
```

## Dashboard and Visualization

### Grafana Dashboard Configuration
```json
{
  "dashboard": {
    "id": null,
    "title": "FediFlow Application Overview",
    "tags": ["fediflow", "production"],
    "timezone": "UTC",
    "panels": [
      {
        "id": 1,
        "title": "Request Rate",
        "type": "graph",
        "targets": [
          {
            "expr": "rate(http_requests_total[5m])",
            "legendFormat": "{{method}} {{route}}"
          }
        ]
      },
      {
        "id": 2,
        "title": "Response Time",
        "type": "graph",
        "targets": [
          {
            "expr": "histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[5m]))",
            "legendFormat": "95th percentile"
          }
        ]
      },
      {
        "id": 3,
        "title": "Federation Activity",
        "type": "stat",
        "targets": [
          {
            "expr": "rate(federation_activities_total[1h])",
            "legendFormat": "Activities/hour"
          }
        ]
      }
    ]
  }
}
```

This comprehensive monitoring and observability framework ensures that FediFlow maintains high availability, performance, and reliability while providing deep insights into system behavior and user interactions.