---
title: Public-Sector RAG Blueprint
status: Draft
version: 0.1.0
last_reviewed: 2026-07-26
---

# Public-sector retrieval-augmented generation blueprint

## Intended use

Assist authorized staff or the public in locating and understanding approved government information while preserving source authority, access controls, records obligations, accessibility, and a route to human service.

## Not intended for

Autonomous eligibility, enforcement, adjudication, benefits, immigration, law-enforcement, clinical, or other consequential decisions without a separately approved architecture and legal basis.

## Logical flow

1. Authenticate the actor where the service requires identity.
2. classify intent, purpose, data sensitivity, and risk;
3. retrieve only content authorized for that actor, purpose, jurisdiction, and time;
4. preserve document version, provenance, effective dates, and classification;
5. generate a bounded response with citations and uncertainty handling;
6. validate output for sensitive data, unsupported claims, and policy constraints;
7. present authoritative sources, limitations, and human escalation; and
8. retain privacy-minimized evidence and monitor quality and harm indicators.

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
