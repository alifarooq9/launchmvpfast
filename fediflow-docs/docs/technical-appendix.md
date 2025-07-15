---
sidebar_position: 95
title: Technical Appendix
---

# Technical Appendix

## Appendix A: System Requirements & Specifications

### A.1 Minimum System Requirements

#### Production Environment
- **CPU**: 8 cores (16 threads) Intel Xeon or AMD EPYC
- **Memory**: 32GB RAM minimum, 64GB recommended
- **Storage**: 1TB NVMe SSD for system, 10TB for data storage
- **Network**: 10Gbps network interface
- **Operating System**: Ubuntu 22.04 LTS or Red Hat Enterprise Linux 9

#### Development Environment
- **CPU**: 4 cores (8 threads) Intel i7 or AMD Ryzen 7
- **Memory**: 16GB RAM minimum, 32GB recommended
- **Storage**: 512GB NVMe SSD
- **Network**: 1Gbps network interface
- **Operating System**: Ubuntu 22.04 LTS, macOS 13+, or Windows 11

### A.2 Software Dependencies

#### Core Runtime Dependencies
```yaml
Node.js: >=18.0.0
PostgreSQL: >=15.0
Redis: >=7.0
Docker: >=24.0
Kubernetes: >=1.28
Nginx: >=1.22
```

#### Development Dependencies
```yaml
TypeScript: >=5.0
React: >=18.0
Next.js: >=14.0
Prisma: >=5.0
tRPC: >=10.0
Tailwind CSS: >=3.0
```

## Appendix B: Database Schema Reference

### B.1 Core Entity Relationships

```sql
-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    profile JSONB,
    preferences JSONB,
    is_active BOOLEAN DEFAULT true
);

-- Organizations Table
CREATE TABLE organizations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    domain VARCHAR(255) UNIQUE NOT NULL,
    type organization_type NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    settings JSONB,
    subscription_tier tier_type DEFAULT 'free'
);

-- Courses Table (Academic Module)
CREATE TABLE courses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    organization_id UUID REFERENCES organizations(id),
    code VARCHAR(20) NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    instructor_id UUID REFERENCES users(id),
    semester VARCHAR(20),
    year INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### B.2 Index Optimization

```sql
-- Performance Indexes
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_organizations_domain ON organizations(domain);
CREATE INDEX idx_courses_org_semester ON courses(organization_id, semester, year);
CREATE INDEX idx_posts_author_created ON posts(author_id, created_at DESC);

-- Full-Text Search Indexes
CREATE INDEX idx_posts_content_search ON posts USING gin(to_tsvector('english', content));
CREATE INDEX idx_users_profile_search ON users USING gin(profile);
```

### B.3 Triggers and Functions

```sql
-- Auto-update timestamp trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply to relevant tables
CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

## Appendix C: API Reference Documentation

### C.1 Authentication Endpoints

#### POST /auth/login
```typescript
interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    username: string;
    email: string;
    organizationId: string;
  };
  expiresIn: number;
}
```

#### POST /auth/register
```typescript
interface RegisterRequest {
  username: string;
  email: string;
  password: string;
  organizationDomain: string;
  inviteCode?: string;
}

interface RegisterResponse {
  user: {
    id: string;
    username: string;
    email: string;
  };
  requiresVerification: boolean;
}
```

### C.2 Core Platform Endpoints

#### GET /api/organizations/:id
```typescript
interface OrganizationResponse {
  id: string;
  name: string;
  domain: string;
  type: 'university' | 'healthcare' | 'government' | 'enterprise';
  settings: {
    features: string[];
    branding: BrandingConfig;
    privacy: PrivacySettings;
  };
  memberCount: number;
  createdAt: string;
}
```

#### POST /api/posts
```typescript
interface CreatePostRequest {
  content: string;
  visibility: 'public' | 'unlisted' | 'followers' | 'private';
  mediaAttachments?: string[];
  courseId?: string;
  tags?: string[];
}

interface PostResponse {
  id: string;
  content: string;
  author: UserProfile;
  createdAt: string;
  visibility: string;
  mediaAttachments: MediaAttachment[];
  engagementStats: EngagementStats;
}
```

### C.3 Academic Service Endpoints

#### GET /api/academic/courses
```typescript
interface CourseListResponse {
  courses: Course[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    hasNext: boolean;
  };
}

interface Course {
  id: string;
  code: string;
  title: string;
  instructor: UserProfile;
  semester: string;
  year: number;
  enrollmentCount: number;
  isEnrolled: boolean;
}
```

## Appendix D: Configuration Examples

### D.1 Environment Variables

```bash
# Production Environment Configuration
NODE_ENV=production
PORT=3000

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/fediflow"
DATABASE_POOL_SIZE=20
DATABASE_SSL=true

# Redis Configuration
REDIS_URL="redis://localhost:6379"
REDIS_PASSWORD="secure_password"

# Authentication
JWT_SECRET="your-super-secure-jwt-secret"
JWT_EXPIRES_IN="24h"
REFRESH_TOKEN_EXPIRES_IN="7d"

# External Services
S3_BUCKET_NAME="fediflow-media"
S3_REGION="us-east-1"
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"

# Email Configuration
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_USER="noreply@fediflow.com"
SMTP_PASS="app-specific-password"

# Federation
ACTIVITYPUB_BASE_URL="https://your-instance.com"
FEDERATION_ENABLED=true
```

### D.2 Docker Compose Configuration

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://postgres:password@db:5432/fediflow
      - REDIS_URL=redis://redis:6379
    depends_on:
      - db
      - redis
    volumes:
      - ./uploads:/app/uploads
    restart: unless-stopped

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: fediflow
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
      - ./init.sql:/docker-entrypoint-initdb.d/init.sql
    ports:
      - "5432:5432"
    restart: unless-stopped

  redis:
    image: redis:7-alpine
    command: redis-server --requirepass password
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
    restart: unless-stopped

volumes:
  postgres_data:
  redis_data:
```

### D.3 Kubernetes Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fediflow-app
  namespace: fediflow
spec:
  replicas: 3
  selector:
    matchLabels:
      app: fediflow-app
  template:
    metadata:
      labels:
        app: fediflow-app
    spec:
      containers:
      - name: app
        image: fediflow/app:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: fediflow-secrets
              key: database-url
        - name: REDIS_URL
          valueFrom:
            secretKeyRef:
              name: fediflow-secrets
              key: redis-url
        resources:
          requests:
            memory: "512Mi"
            cpu: "250m"
          limits:
            memory: "2Gi"
            cpu: "1000m"
        livenessProbe:
          httpGet:
            path: /health
            port: 3000
          initialDelaySeconds: 30
          periodSeconds: 10
        readinessProbe:
          httpGet:
            path: /ready
            port: 3000
          initialDelaySeconds: 5
          periodSeconds: 5
```

## Appendix E: Security Configuration

### E.1 Security Headers Configuration

```nginx
# Nginx Security Headers
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' wss:; media-src 'self' https:; object-src 'none'; frame-ancestors 'self';" always;
add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;
```

### E.2 Rate Limiting Configuration

```typescript
// Rate limiting middleware configuration
const rateLimitConfig = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true,
  legacyHeaders: false,
  
  // Different limits for different endpoints
  endpoints: {
    '/auth/login': { max: 5, windowMs: 15 * 60 * 1000 },
    '/auth/register': { max: 3, windowMs: 60 * 60 * 1000 },
    '/api/posts': { max: 50, windowMs: 15 * 60 * 1000 },
    '/api/upload': { max: 10, windowMs: 15 * 60 * 1000 }
  }
};
```

## Appendix F: Monitoring & Observability

### F.1 Prometheus Metrics Configuration

```yaml
# prometheus.yml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: 'fediflow-app'
    static_configs:
      - targets: ['app:3000']
    metrics_path: '/metrics'
    scrape_interval: 30s

  - job_name: 'postgres'
    static_configs:
      - targets: ['postgres-exporter:9187']

  - job_name: 'redis'
    static_configs:
      - targets: ['redis-exporter:9121']

  - job_name: 'nginx'
    static_configs:
      - targets: ['nginx-exporter:9113']
```

### F.2 Application Metrics

```typescript
// Custom metrics collection
import { register, Counter, Histogram, Gauge } from 'prom-client';

// HTTP request metrics
const httpRequestDuration = new Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status']
});

const httpRequestTotal = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status']
});

// Business metrics
const activeUsers = new Gauge({
  name: 'fediflow_active_users',
  help: 'Number of currently active users'
});

const postsCreated = new Counter({
  name: 'fediflow_posts_created_total',
  help: 'Total number of posts created'
});

const federationEvents = new Counter({
  name: 'fediflow_federation_events_total',
  help: 'Total number of federation events',
  labelNames: ['type', 'direction']
});
```

## Appendix G: Testing Configuration

### G.1 Jest Configuration

```javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src', '<rootDir>/tests'],
  testMatch: [
    '**/__tests__/**/*.ts',
    '**/?(*.)+(spec|test).ts'
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/types/**/*.ts'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
  testTimeout: 30000
};
```

### G.2 End-to-End Testing

```typescript
// e2e/auth.test.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should login successfully with valid credentials', async ({ page }) => {
    await page.goto('/login');
    
    await page.fill('[data-testid="email"]', 'test@university.edu');
    await page.fill('[data-testid="password"]', 'password123');
    await page.click('[data-testid="login-button"]');
    
    await expect(page).toHaveURL('/dashboard');
    await expect(page.locator('[data-testid="user-menu"]')).toBeVisible();
  });

  test('should show error for invalid credentials', async ({ page }) => {
    await page.goto('/login');
    
    await page.fill('[data-testid="email"]', 'invalid@example.com');
    await page.fill('[data-testid="password"]', 'wrongpassword');
    await page.click('[data-testid="login-button"]');
    
    await expect(page.locator('[data-testid="error-message"]')).toContainText('Invalid credentials');
  });
});
```

## Appendix H: Deployment Scripts

### H.1 Production Deployment Script

```bash
#!/bin/bash
# deploy.sh - Production deployment script

set -e

echo "Starting FediFlow deployment..."

# Build application
echo "Building application..."
npm run build

# Run database migrations
echo "Running database migrations..."
npm run db:migrate

# Build and push Docker image
echo "Building Docker image..."
docker build -t fediflow/app:$BUILD_VERSION .
docker push fediflow/app:$BUILD_VERSION

# Update Kubernetes deployment
echo "Updating Kubernetes deployment..."
kubectl set image deployment/fediflow-app app=fediflow/app:$BUILD_VERSION -n fediflow

# Wait for rollout to complete
echo "Waiting for deployment to complete..."
kubectl rollout status deployment/fediflow-app -n fediflow

# Run health checks
echo "Running health checks..."
./scripts/health-check.sh

echo "Deployment completed successfully!"
```

### H.2 Database Migration Script

```bash
#!/bin/bash
# migrate.sh - Database migration script

set -e

echo "Starting database migration..."

# Backup current database
echo "Creating database backup..."
pg_dump $DATABASE_URL > "backup_$(date +%Y%m%d_%H%M%S).sql"

# Run migrations
echo "Running Prisma migrations..."
npx prisma migrate deploy

# Verify migration
echo "Verifying database schema..."
npx prisma db pull
npx prisma generate

echo "Database migration completed successfully!"
```

---

## Technical Support Information

### H.3 Troubleshooting Guide

#### Common Issues and Solutions

1. **Database Connection Issues**
   ```bash
   # Check database connectivity
   psql $DATABASE_URL -c "SELECT version();"
   
   # Restart database service
   sudo systemctl restart postgresql
   ```

2. **Redis Connection Issues**
   ```bash
   # Test Redis connection
   redis-cli -u $REDIS_URL ping
   
   # Clear Redis cache
   redis-cli -u $REDIS_URL FLUSHALL
   ```

3. **Memory Issues**
   ```bash
   # Check memory usage
   free -h
   
   # Restart application with increased memory
   NODE_OPTIONS="--max-old-space-size=8192" npm start
   ```

### H.4 Performance Tuning

#### Database Optimization
```sql
-- Analyze query performance
EXPLAIN ANALYZE SELECT * FROM posts WHERE author_id = $1 ORDER BY created_at DESC LIMIT 20;

-- Update table statistics
ANALYZE posts;

-- Rebuild indexes
REINDEX TABLE posts;
```

#### Application Optimization
```typescript
// Connection pool optimization
const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20, // Maximum number of connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```

---

*This technical appendix serves as a comprehensive reference for system administrators, developers, and technical personnel responsible for deploying, maintaining, and troubleshooting the FediFlow platform.*

*Last Updated: July 2025*
