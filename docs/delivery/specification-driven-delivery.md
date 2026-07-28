---
title: Specification-Driven Delivery
version: 0.1.0
last_reviewed: 2026-07-28
---

# Specification-driven delivery

In AI-assisted delivery the **specification** — not a backlog of work items — is the
authoritative artefact. Work items described fragments of intent that only made sense once
a team assembled them over successive iterations. A specification captures the whole intent
up front, in enough detail that an AI-assisted team can implement and validate against it
directly.

![The specification as the single source of truth: one versioned artefact holds eight components — purpose and context, requirements, acceptance criteria, architecture constraints, security and privacy requirements, standards references, open questions and resolutions, and approvals. It drives three outcomes: implementation validates the specification, verification checks against the specification, and committing it with the code provides an auditable historical record. The specification is authoritative and work items are derived from it.](../assets/images/delivery-specification.webp)

## From work items to specifications

| Dimension | Work-item-driven | Specification-driven |
| --- | --- | --- |
| Unit of truth | Many small work items and acceptance criteria | One versioned specification |
| Where requirements are discovered | During implementation, through refinement | Up front, during specification engineering |
| Primary effort | Writing and coordinating code | Writing and validating the specification |
| Role of implementation | Discovery of requirements | Validation of the specification |
| Refinement overhead | High (grooming, decomposition, estimation) | Low (specification review replaces grooming) |
| Historical record | Work items plus external documents | Specification committed with the code |
| Auditability | Scattered across tools | Versioned alongside the codebase |

Work items do not necessarily disappear — a team may still slice a specification into small
units for parallel delivery. The change is that the **specification is authoritative** and
work items are derived from it, not the other way around.

## Anatomy of a specification

A specification is authoritative only if it is complete enough to implement against without
re-discovering intent. Each specification should contain:

1. **Purpose and context** — the problem, the affected users, and the intended outcome.
2. **Requirements** — functional and non-functional, stated testably.
3. **Acceptance criteria** — the conditions that define done, written so verification can
   confirm them directly.
4. **Architecture constraints** — patterns, boundaries, and integration points the
   implementation must respect.
5. **Security and privacy requirements** — data classification, access, and threat
   considerations for sensitive components.
6. **Standards references** — the organisational standards, patterns, and reusable
   templates the solution must comply with.
7. **Open questions and resolutions** — a running log of ambiguities and how they were
   settled.
8. **Approvals** — a record of who approved requirements, design, and security, and when.

Treat this as a reusable checklist. A specification missing any element is not ready to
enter implementation.

## The specification-based handoff chain

Handoffs occur around the specification and its approvals, not around work-item status
changes. Each transition is an approval point — human judgement is inserted where it adds
the most quality, because AI throughput makes review, not authoring, the limiting factor.

```mermaid
flowchart LR
    PO["Product owner<br/>approves requirements"] --> ARCH["Architect<br/>approves design"]
    ARCH --> SEC["Security and privacy<br/>approve sensitive components"]
    SEC --> DEV["Developer<br/>implements (AI-assisted)"]
    DEV --> QA["Verification<br/>against specification"]
    QA --> REVIEW["Architect<br/>final review against specification"]
    REVIEW --> DONE(["Release-ready"])
```

This chain is not a competing process. It is the team-level expression of the governance
[lifecycle gates](../governance/operating-model.md): requirement and design approval align
to **Assessment** and **Design**; developer and verification work align to **Build and
validate**; the final review feeds **Authorize and release**. The named accountability
owners remain accountable at each gate.

## The specification as historical record

Because the specification is authoritative, it lives where the solution lives:

- **Commit specifications into the repository** alongside the code they describe.
- **Record architecture decisions** in the specification, or in linked decision records, so
  the rationale survives.
- **Capture business clarifications** in the specification's open-questions log rather than
  in transient channels.
- **Version approvals with the codebase**, so any release can show who approved what.

This provides the auditability and maintenance history teams previously assembled from
issue trackers and separate documentation systems — in one versioned place, tied to the
code.

## Guardrails

- Validate the **specification's testability** before implementation begins, so a flawed
  specification is not faithfully implemented and validated as correct.
- Keep a **named human accountable** for every AI-generated artefact through to production.
- Apply **separation of duties**: whoever directs the AI to implement a change is not its
  sole approver.
