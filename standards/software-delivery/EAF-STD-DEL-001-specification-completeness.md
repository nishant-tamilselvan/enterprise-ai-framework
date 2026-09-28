---
id: EAF-STD-DEL-001
title: Specification completeness
type: Standard
status: Draft
domain: Software Delivery
tags: [specification, requirements, acceptance-criteria, delivery]
part_of_family: AI-Assisted Delivery
classification: public
version: "1"
owner: Enterprise AI Framework maintainers
effective_date: 2026-09-28
last_reviewed: 2026-09-28
review_cycle_months: 12
summary: Implementation starts only when the specification holds all eight required elements and each approval is recorded.
relationships:
  depends_on: [EAF-STD-GOV-001]
---

# Specification completeness

> Draft from the Enterprise AI Framework. Review it through your own governance, then set `status: Approved` before you rely on it.

The specification is the authoritative artifact for AI-assisted delivery. Implementation starts only when it holds all eight elements below.

| Element | Content |
| --- | --- |
| Purpose and context | The problem, the affected users, and the intended outcome |
| Requirements | Functional and non-functional requirements, each stated so a test can confirm it |
| Acceptance criteria | The conditions that define done, written so verification can check them directly |
| Architecture constraints | Patterns, boundaries, and integration points the implementation must respect |
| Security and privacy requirements | Data classification, access, and threat considerations |
| Standards references | The organizational standards, patterns, and templates that apply |
| Open questions and resolutions | A running log of ambiguities and how the team resolved them |
| Approvals | Who approved the requirements, the design, and security, and when |

Rules for every specification:

1. Check that the specification can be tested before implementation begins.
2. Keep a named person accountable for every AI-generated artifact through to production.
3. A second person approves each AI-assisted change.

Source: [Specification-driven delivery](https://nishant-tamilselvan.github.io/enterprise-ai-framework/delivery/specification-driven-delivery/)
