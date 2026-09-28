---
id: EAF-STD-GOV-001
title: AI lifecycle gates
type: Standard
status: Draft
domain: Governance
tags: [lifecycle, gates, accountability, ai-governance]
part_of_family: AI Governance
classification: public
version: "1"
owner: Enterprise AI Framework maintainers
effective_date: 2026-09-28
last_reviewed: 2026-09-28
review_cycle_months: 12
summary: Every AI system passes seven gates, from intake to retirement, each with named evidence and an accountable owner.
---

# AI lifecycle gates

> Draft from the Enterprise AI Framework. Review it through your own governance, then set `status: Approved` before you rely on it.

Every AI system passes these gates in order. A named owner signs off each gate, and the evidence is kept with the system's records.

| Gate | Evidence required |
| --- | --- |
| 1. Intake | Mission case, legal authority, affected parties, alternatives considered, preliminary prohibited uses |
| 2. Assessment | Impact, risk, privacy, security, data, procurement, and accessibility analysis |
| 3. Design | Architecture decisions, control plan, evaluation plan, human oversight design, exit strategy |
| 4. Build and validate | Traceable implementation, testing, red teaming, independent challenge |
| 5. Authorize and release | Evidence review, residual-risk acceptance, deployment constraints |
| 6. Operate and monitor | Service levels, outcome and harm indicators, incidents, complaints, reassessment |
| 7. Change or retire | Material-change review, records preservation, model and data removal, transition |

A material change sends the system back to the gate that covers it.

Source: [Governance operating model](https://nishant-tamilselvan.github.io/enterprise-ai-framework/governance/operating-model/#lifecycle-gates)
