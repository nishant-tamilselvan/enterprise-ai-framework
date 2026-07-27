---
title: AI Data Protection
status: Draft
version: 0.1.0
last_reviewed: 2026-07-26
---

# AI data protection

## Protection lifecycle

1. Establish authority, purpose, provenance, rights, and permitted uses.
2. Minimize collection, prompt context, model exposure, logs, and retention.
3. Classify and label data before ingestion or retrieval.
4. Enforce tenant, user, purpose, and attribute-based access at query time.
5. Protect data in transit, at rest, in use where required, and in backups.
6. Detect sensitive data in inputs and outputs without relying on detection alone.
7. Support correction, access, deletion, legal hold, and records obligations.
8. Verify deletion across indexes, caches, fine-tunes, logs, and suppliers.

## AI-specific concerns

Address training-data leakage, memorization, embedding inversion, cross-tenant retrieval, prompt-log exposure, data poisoning, stale knowledge, unlicensed content, inferred sensitive attributes, and supplier reuse. Document when deletion from trained parameters is infeasible and select compensating controls.
