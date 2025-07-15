---
sidebar_position: 3
title: API Documentation
---

# API Documentation

## Overview

FediFlow provides comprehensive API access through RESTful endpoints, GraphQL queries, and real-time WebSocket connections. The API is designed for federation, scalability, and developer-friendly integration.

## REST API Endpoints

### Authentication Endpoints

#### POST /api/auth/login
```json
{
  "email": "user@example.com",
  "password": "secure_password",
  "tenant": "institution_id"
}
```

Response:
```json
{
  "access_token": "jwt_token",
  "refresh_token": "refresh_token",
  "expires_in": 3600,
  "user": {
    "id": "uuid",
    "username": "user123",
    "email": "user@example.com"
  }
}
```

#### POST /api/auth/refresh
```json
{
  "refresh_token": "refresh_token"
}
```

### User Management

#### GET /api/users/profile
```bash
curl -H "Authorization: Bearer jwt_token" \
     GET /api/users/profile
```

#### PUT /api/users/profile
```json
{
  "display_name": "John Doe",
  "bio": "Computer Science Professor",
  "avatar_url": "https://example.com/avatar.jpg",
  "preferences": {
    "language": "en",
    "timezone": "UTC"
  }
}
```

### Activity Management

#### POST /api/activities
```json
{
  "type": "Create",
  "object": {
    "type": "Note",
    "content": "Hello, federated world!",
    "to": ["https://www.w3.org/ns/activitystreams#Public"],
    "cc": ["https://example.edu/users/followers"]
  }
}
```

#### GET /api/activities/\{id\}
```bash
curl -H "Authorization: Bearer jwt_token" \
     GET /api/activities/uuid-here
```

### Course Management

#### GET /api/courses
Query parameters:
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 20)
- `search`: Search term
- `department`: Filter by department

#### POST /api/courses
```json
{
  "course_code": "CS101",
  "title": "Introduction to Computer Science",
  "description": "Fundamentals of programming and computer science",
  "department": "Computer Science",
  "credits": 3,
  "metadata": {
    "prerequisites": ["MATH101"],
    "learning_outcomes": [
      "Understand basic programming concepts",
      "Apply problem-solving techniques"
    ]
  }
}
```

## GraphQL API

### Schema Overview

```graphql
type Query {
  user(id: ID!): User
  course(id: ID!): Course
  activities(
    first: Int
    after: String
    filter: ActivityFilter
  ): ActivityConnection
}

type Mutation {
  createActivity(input: CreateActivityInput!): Activity
  updateProfile(input: UpdateProfileInput!): User
  enrollInCourse(courseId: ID!): Enrollment
}

type Subscription {
  activityUpdates(userId: ID!): Activity
  courseNotifications(courseId: ID!): Notification
}
```

### Example Queries

#### Fetch User Profile with Courses
```graphql
query UserProfile($userId: ID!) {
  user(id: $userId) {
    id
    username
    displayName
    enrollments {
      course {
        id
        title
        courseCode
        department
      }
      role
      status
    }
  }
}
```

#### Create Activity with Federation
```graphql
mutation CreatePost($content: String!, $visibility: Visibility!) {
  createActivity(input: {
    type: CREATE
    object: {
      type: NOTE
      content: $content
      visibility: $visibility
    }
  }) {
    id
    published
    object {
      content
      replies {
        totalItems
      }
    }
  }
}
```

## WebSocket API

### Connection and Authentication

```javascript
const socket = new WebSocket('wss://api.fediflow.edu/ws');

// Authenticate after connection
socket.onopen = () => {
  socket.send(JSON.stringify({
    type: 'auth',
    token: 'jwt_token_here'
  }));
};
```

### Real-time Events

#### Activity Updates
```javascript
// Subscribe to activity updates
socket.send(JSON.stringify({
  type: 'subscribe',
  channel: 'activities',
  filters: {
    following: true,
    courses: ['course-uuid-1', 'course-uuid-2']
  }
}));

// Handle incoming activities
socket.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.type === 'activity') {
    console.log('New activity:', data.activity);
  }
};
```

#### Course Notifications
```javascript
// Subscribe to course-specific notifications
socket.send(JSON.stringify({
  type: 'subscribe',
  channel: 'course_notifications',
  course_id: 'course-uuid'
}));
```

## Webhook System

### Configuration

#### Register Webhook
```bash
curl -X POST https://api.fediflow.edu/api/webhooks \
  -H "Authorization: Bearer jwt_token" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://your-app.com/webhooks/fediflow",
    "events": ["activity.created", "course.updated"],
    "secret": "webhook_secret"
  }'
```

### Event Types

#### Activity Events
- `activity.created`: New activity posted
- `activity.updated`: Activity modified
- `activity.deleted`: Activity removed

#### Course Events
- `course.created`: New course added
- `course.updated`: Course information changed
- `enrollment.created`: Student enrolled
- `enrollment.updated`: Enrollment status changed

### Webhook Payload Example

```json
{
  "event": "activity.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "activity": {
      "id": "uuid-here",
      "type": "Create",
      "actor": "https://example.edu/users/professor",
      "object": {
        "type": "Note",
        "content": "Welcome to the new semester!"
      }
    }
  },
  "signature": "sha256=signature_here"
}
```

## CRUD Operations

### Standard Patterns

#### Create Resource
```http
POST /api/\{resource\}
Content-Type: application/json
Authorization: Bearer jwt_token

{
  "field1": "value1",
  "field2": "value2"
}
```

#### Read Resource
```http
GET /api/\{resource\}/\{id\}
Authorization: Bearer jwt_token
```

#### Update Resource
```http
PUT /api/\{resource\}/\{id\}
Content-Type: application/json
Authorization: Bearer jwt_token

{
  "field1": "new_value1"
}
```

#### Delete Resource
```http
DELETE /api/\{resource\}/\{id\}
Authorization: Bearer jwt_token
```

## Rate Limiting

### Limits by Endpoint Type
- Authentication: 10 requests per minute
- Read operations: 1000 requests per hour
- Write operations: 100 requests per hour
- Federation activities: 500 requests per hour

### Headers
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1642248000
```

## Error Handling

### Standard Error Response
```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Email format is invalid"
      }
    ]
  }
}
```

### HTTP Status Codes
- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `422`: Validation Error
- `429`: Rate Limit Exceeded
- `500`: Internal Server Error

## SDKs and Client Libraries

### JavaScript/TypeScript
```bash
npm install @fediflow/js-sdk
```

```javascript
import { FediFlowClient } from '@fediflow/js-sdk';

const client = new FediFlowClient({
  baseUrl: 'https://api.fediflow.edu',
  apiKey: 'your-api-key'
});

const activities = await client.activities.list();
```

### Python
```bash
pip install fediflow-python
```

```python
from fediflow import FediFlowClient

client = FediFlowClient(
    base_url='https://api.fediflow.edu',
    api_key='your-api-key'
)

activities = client.activities.list()
```