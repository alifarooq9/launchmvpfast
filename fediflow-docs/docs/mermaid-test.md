# Mermaid Diagram Test

This page demonstrates Mermaid diagram support in your documentation site.

## Simple Flowchart

```mermaid
flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]
```

## System Architecture Example

```mermaid
flowchart TB
    subgraph "Frontend Layer"
        UI[Web UI]
        API[API Gateway]
    end
    
    subgraph "Business Logic Layer"
        AUTH[Authentication]
        SERV[Business Services]
    end
    
    subgraph "Data Layer"
        DB[(Database)]
        CACHE[(Cache)]
    end
    
    UI --> API
    API --> AUTH
    API --> SERV
    SERV --> DB
    SERV --> CACHE
```

## Sequence Diagram

```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant API
    participant Database
    
    User->>Frontend: Login Request
    Frontend->>API: Authenticate
    API->>Database: Verify Credentials
    Database-->>API: User Data
    API-->>Frontend: JWT Token
    Frontend-->>User: Welcome Message
```

## Entity Relationship Diagram

```mermaid
erDiagram
    USER ||--o{ ORDER : places
    USER {
        string id
        string name
        string email
    }
    ORDER ||--|{ LINE-ITEM : contains
    ORDER {
        int orderNumber
        string deliveryAddress
    }
    LINE-ITEM {
        string productCode
        int quantity
        float pricePerUnit
    }
```

## Git Flow Diagram

```mermaid
gitgraph
    commit
    branch develop
    checkout develop
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout develop
    merge feature
    checkout main
    merge develop
    commit
```

These diagrams should render properly if Mermaid is configured correctly!
