---
title: Public-Sector RAG Blueprint
doc_status: Draft
version: 0.1.0
owners: Framework maintainers
audience: Solution architects and delivery teams
last_reviewed: 2026-07-26
---

# Public-sector retrieval-augmented generation blueprint

## Authorized scope

The service assists authorized staff or the public in locating and understanding approved government information. It preserves source authority, access controls, records obligations, accessibility, and a route to human service.

## Excluded scope

This blueprint excludes autonomous eligibility, enforcement, adjudication, benefits, immigration, law-enforcement, clinical, and other consequential decisions. These uses require a separately approved architecture and legal basis.

## Logical flow

1. Authenticate the actor where the service requires identity.
2. Classify intent, purpose, data sensitivity, and risk.
3. Retrieve only content authorized for that actor, purpose, jurisdiction, and time.
4. Preserve document version, provenance, effective dates, and classification.
5. Generate a bounded response with citations and a clear account of uncertainty.
6. Validate output for sensitive data, unsupported claims, and policy constraints.
7. Present authoritative sources, limitations, and human escalation.
8. Retain privacy-minimized evidence and monitor quality and harm indicators.

## Minimum controls

- authoritative-source registry and document stewardship;
- permission-aware retrieval and tenant isolation;
- defenses against indirect prompt injection in source content;
- citations resolvable to source passage and version;
- abstention when evidence is insufficient, conflicting, stale, or inaccessible;
- multilingual, disability, and digital-access evaluation;
- separation of public information from protected case data;
- complaint, correction, appeal, and incident routes; and
- continuity path when the AI service is unavailable or inappropriate.

## Evaluation slices

Evaluate jurisdiction, language, reading level, accessibility mode, policy version, user population, rare requests, conflicting sources, adversarial content, stale documents, and protected-data attempts. Measure retrieval relevance, groundedness, citation correctness, refusal quality, harmful error, data leakage, latency, and escalation effectiveness.
