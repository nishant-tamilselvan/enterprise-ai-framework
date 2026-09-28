---
id: EAF-PAT-001
title: Name AI threats with public catalog identifiers
type: Pattern
status: Draft
domain: Security
tags: [threat-model, owasp, mitre-atlas]
part_of_family: Security Baseline
classification: public
version: "1"
owner: Enterprise AI Framework maintainers
effective_date: 2026-09-28
last_reviewed: 2026-09-28
review_cycle_months: 12
summary: Threat models name each AI threat with an OWASP or MITRE ATLAS identifier and the catalog edition.
relationships:
  related_to: [EAF-STD-SEC-001]
---

# Name AI threats with public catalog identifiers

> Draft from the Enterprise AI Framework. Review it through your own governance, then set `status: Approved` before you rely on it.

Threat models, tests, controls, and incident records name each AI threat with a public identifier, so the same threat can be traced across them.

| Catalog | Example identifier |
| --- | --- |
| OWASP Top 10 for LLM Applications | `LLM01:2026` prompt injection |
| OWASP Top 10 for Agentic Applications | `ASI01` agent goal hijack |
| MITRE ATLAS | `AML.T0051` LLM prompt injection |

Record the catalog edition next to every identifier. Editions renumber their entries, so the same number can name a different risk in the next edition.

Source: [Enterprise AI threat model](https://nishant-tamilselvan.github.io/enterprise-ai-framework/security/threat-model/)
