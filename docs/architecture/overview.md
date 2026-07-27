---
title: Architecture Overview
status: Draft
version: 0.1.0
last_reviewed: 2026-07-26
---

# Architecture overview

The framework treats an Enterprise AI service as a **socio-technical system**, not an isolated model. Its architecture connects strategic intent and legal authority to controls, implementation, evidence, and operational outcomes.

## Architecture perspectives

| Perspective | Primary question | Typical evidence |
| --- | --- | --- |
| Mission and value | What authorized outcome should improve? | Outcome model, benefit measures |
| Stakeholder and human | Who is affected and who remains accountable? | Impact assessment, oversight design |
| Governance and assurance | Who decides, verifies, accepts, and monitors risk? | RACI, approvals, assurance case |
| Information and context | Which data, meaning, provenance, and rights are required? | Catalog, ontology, lineage, licenses |
| Application and integration | How does AI participate in business processes? | Service contracts, sequence diagrams |
| Model and intelligence | Which models, prompts, tools, and evaluations are appropriate? | Model cards, test reports |
| Security and resilience | How is misuse, compromise, and failure contained? | Threat model, control evidence |
| Platform and operations | How is the system delivered and sustained? | SLOs, runbooks, monitoring |

## Core architecture artifacts

- [Enterprise Context Architecture (ECA)](context-architecture.md)
- [ECA and the TOGAF ADM](eca-togaf-adm.md)
- [Enterprise AI Capability Model](capability-model.md)
- [Integration Layer](integration-layer.md)
- [Reference Diagrams](reference-diagrams.md)

## Tailoring

Architecture depth should be proportionate to impact, novelty, autonomy, scale, data sensitivity, reversibility, and exposure. Low-impact assistive use cases may use a lightweight profile; consequential or high-impact systems require independent review and stronger evidence.
