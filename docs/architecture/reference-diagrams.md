---
icon: material/draw
title: Reference Diagrams
doc_status: Draft
version: 0.1.0
owners: Framework maintainers
audience: Enterprise and solution architects
last_reviewed: 2026-07-26
---

# Reference diagrams

Reference diagrams communicate logical responsibilities and trust boundaries. Product selection remains outside their scope.

## Enterprise Context Architecture wheel

Requirements Management captures context requirements at the center of seven ECA context domains.

```mermaid
flowchart TB
    RM((Requirements Management))
    P[People &amp; Org]
    B[Business]
    I[Information]
    T[Technology]
    G[Governance]
    N[Integration]
    O[Operational]

    P --- RM
    B --- RM
    I --- RM
    T --- RM
    G --- RM
    N --- RM
    O --- RM
```

## Controlled AI service flow

```mermaid
sequenceDiagram
    actor User
    participant Channel
    participant IAM as Identity and Policy
    participant Orchestrator
    participant Context as Context and Retrieval
    participant Gateway as AI Gateway
    participant Model
    participant Tools as Tool Broker
    participant Audit as Evidence Store

    User->>Channel: Request
    Channel->>IAM: Authenticate and authorize
    IAM-->>Orchestrator: Identity, purpose, constraints
    Orchestrator->>Context: Retrieve authorized context
    Context-->>Orchestrator: Content, provenance, classification
    Orchestrator->>Gateway: Versioned request and policy
    Gateway->>Model: Minimized prompt
    Model-->>Gateway: Candidate response or tool request
    Gateway-->>Orchestrator: Screened result
    opt Tool action requested
        Orchestrator->>IAM: Re-authorize action
        Orchestrator->>Tools: Typed, bounded command
        Tools-->>Orchestrator: Validated result
    end
    Orchestrator->>Audit: Evidence and outcome
    Orchestrator-->>Channel: Result, citations, limitations
    Channel-->>User: Present or request review
```

## Diagram contribution rules

Store editable sources in `docs/assets/diagrams/`, export accessible SVG where practical, avoid vendor logos in logical views, label trust boundaries, and include a text explanation for every published diagram.
