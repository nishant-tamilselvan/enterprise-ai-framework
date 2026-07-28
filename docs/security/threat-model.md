---
title: Enterprise AI Threat Model
version: 0.1.0
last_reviewed: 2026-07-26
---

# Enterprise AI threat model

Threat modeling covers adversarial attacks, accidental failure, misuse by authorized actors, supplier compromise, and emergent behavior.

## Assets

Mission decisions, affected-person rights, sensitive data, identity and authorization, prompts and policies, models and weights, retrieval indexes, tools and credentials, evaluation sets, logs and evidence, service availability, and institutional trust.

## Representative threats

| Threat | Example mitigations |
| --- | --- |
| Prompt injection | Instruction/data separation, provenance, tool authorization, isolation |
| Sensitive-data disclosure | Minimization, access trimming, output controls, redaction, testing |
| Data or model poisoning | Provenance, signed artifacts, curation, anomaly detection, rollback |
| Insecure tool use | Typed contracts, allowlists, least privilege, approval, transaction limits |
| Model or dependency compromise | Supplier assurance, hashes, attestations, isolation, monitoring |
| Evasion and abuse | Rate controls, behavior analysis, adversarial evaluation, response playbooks |
| Hallucination or unsafe advice | Grounding, citations, abstention, human review, constrained use |
| Availability and cost attack | Quotas, budgets, caching, circuit breakers, graceful degradation |
| Cross-tenant leakage | Isolation, authorization at retrieval, scoped memory, penetration testing |
| Audit manipulation | Append-only evidence, separation of duties, time synchronization |

## Required outputs

Record system and trust-boundary diagrams, assumptions, threats, affected assets, controls, validation evidence, residual risks, owners, and reassessment triggers. Link threats to incident response and production detection.
