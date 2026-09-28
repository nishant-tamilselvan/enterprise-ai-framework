---
title: AI Data Protection
version: 0.2.0
last_reviewed: 2026-09-28
---

# AI data protection

AI systems copy data into more places than traditional applications: prompts, context windows, retrieval indexes, embeddings, caches, agent memory, logs, fine-tuning sets and supplier systems. Each copy needs the same protection as the source. Some copies, such as data absorbed into model weights, cannot be deleted in the normal way.

## Protection lifecycle

1. Establish the authority, purpose, provenance, rights and permitted uses for the data.
2. Minimize what goes into collection, prompt context, model exposure, logs and retention.
3. Classify and label data before ingestion or retrieval.
4. Enforce tenant, user, purpose and attribute-based access when a query runs.
5. Protect data in transit, at rest, in use where required, and in backups.
6. Detect sensitive data in inputs and outputs, but do not rely on detection alone.
7. Support correction, access, deletion, legal hold and records obligations.
8. Verify deletion across indexes, caches, memory, fine-tuned models, logs and suppliers.

## Where AI data lives

| Location | Main risk | Control |
| --- | --- | --- |
| Prompts and context windows | Oversharing with the model or its provider | Retrieve only what the task needs, redact before sending |
| Retrieval indexes and vector stores | Users retrieving documents they may not open (OWASP LLM09:2026) | Carry source permissions into the index, authorize per query |
| Embeddings | Inversion attacks that recover source text | Treat embeddings as sensitive as their source |
| Agent memory | Data from one user or task leaking into another | Scope memory per user and task, set expiry |
| Caches | Responses served to the wrong user | Key caches on identity and permissions |
| Logs and traces | Prompts and outputs kept longer than needed | Redact, minimize, set short retention |
| Fine-tuning and training data | Memorization and later disclosure (OWASP LLM02:2026) | Minimize and de-identify before training, test for extraction |
| Supplier systems | Provider retention or reuse for training | Contract terms, data residency, zero-retention options |

## Securing data used to train and operate AI

Joint guidance from CISA, NSA, FBI and international partners, published 2025-05-22, names three data risk areas. The table maps them to controls.

| Risk area | Controls |
| --- | --- |
| Data supply chain | Record the source and licence of every dataset, verify integrity with hashes or signatures, and prefer sources with provenance metadata |
| Maliciously modified (poisoned) data | Curate and review data before training or indexing, detect anomalies, version datasets, keep a rollback path (OWASP LLM05:2026, MITRE ATLAS AML.T0020 and AML.T0070) |
| Data drift | Monitor input distributions and output quality in production, and set reassessment triggers |

## AI-specific concerns

| Concern | Response |
| --- | --- |
| Memorization of training data | Minimize personal data before training, test for extraction |
| Inferred sensitive attributes | Treat model inferences about people as personal data |
| Stale knowledge | Date-stamp sources, expire outdated index entries |
| Unlicensed content | Check rights before ingestion, record licences |
| Deletion from trained weights | Record where deletion is infeasible, and select compensating controls such as output filtering, retraining schedules or model retirement |

## Sources

Checked 2026-09-28.

- AI Data Security: Best Practices for Securing Data Used to Train & Operate AI Systems (2025-05-22): <https://www.cisa.gov/resources-tools/resources/ai-data-security-best-practices-securing-data-used-train-operate-ai-systems>
- OWASP Top 10 for LLM Applications 2026: <https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/>
- MITRE ATLAS: <https://atlas.mitre.org/>
