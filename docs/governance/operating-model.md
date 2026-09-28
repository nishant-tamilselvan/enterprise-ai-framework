---
icon: material/account-group-outline
title: Governance Operating Model
doc_status: Draft
version: 0.1.0
owners: Framework maintainers
audience: Governance, risk, and compliance leads
last_reviewed: 2026-07-26
---

# Governance operating model

## Decision forums

- **Portfolio forum.** Prioritizes investment and monitors value, concentration, and systemic risk.
- **AI review board.** Approves risk tier, control profile, release evidence, exceptions, and material changes.
- **Architecture and security review.** Validates boundaries, integrations, resilience, privacy, and threat mitigations.
- **Operational risk forum.** Reviews performance, incidents, complaints, drift, and corrective actions.

## Lifecycle gates

1. **Intake:** mission case, authority, affected parties, alternatives, preliminary prohibited uses.
2. **Assessment:** impact, risk, privacy, security, data, procurement, and accessibility analysis.
3. **Design:** architecture decisions, control plan, evaluation plan, human oversight, exit strategy.
4. **Build and validate:** traceable implementation, testing, red teaming, independent challenge.
5. **Authorize and release:** evidence review, residual-risk acceptance, deployment constraints.
6. **Operate and monitor:** SLOs, outcome and harm indicators, incidents, complaints, reassessment.
7. **Change or retire:** material-change review, records preservation, model/data removal, transition.

## Accountability record

Every governed system should name a service owner, risk owner, data owner, model or AI engineering owner, security owner, privacy contact, operational owner, and authorization authority. One person may hold multiple roles only when independence requirements permit it.

## Delivery alignment

For AI-assisted delivery, the [delivery operating model](../delivery/overview.md) expresses these gates and accountability owners at the team level: specification handoffs map to the lifecycle gates, and the delivery roles map to the named accountability owners. See [roles and accountability](../delivery/roles-and-accountability.md).
