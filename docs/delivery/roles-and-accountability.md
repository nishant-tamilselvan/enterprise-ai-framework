---
title: Roles and Accountability
version: 0.1.0
last_reviewed: 2026-07-28
---

# Roles and accountability in AI-assisted delivery

AI does not remove roles; it moves their centre of gravity from *producing* artefacts to
*specifying, directing, and validating* them. Collaboration remains essential — AI does not
enable fully independent single-person delivery. Governance, accountability, and
cross-functional review still apply.

![Roles shift, accountability stays: seven roles each hold one accountable outcome — product owner (business intent and requirement approval), architect (specification completeness and standards), developer (implementation correctness against the spec), verification specialist (evidence the solution meets the spec), security and privacy reviewer (controls approved before build), delivery coordinator (delivery flow and governance checkpoints), and operational owner (live solution operation). Four accountability principles anchor them: one accountable owner per outcome, separation of duties, human accountability for AI output, and operational ownership persists.](../assets/images/delivery-roles.webp)

## Roles shift, they do not disappear

| Traditional focus | AI-assisted focus |
| --- | --- |
| Writing code | Specification ownership and validation |
| Creating work items | Creating detailed specifications |
| Manual testing | Automated verification and evaluation |
| Iteration administration | Delivery coordination and governance |
| Implementation effort | Quality, review, and accountability |

## Accountability principles

These principles prevent the failure modes AI introduces: speed outrunning review, unclear
ownership of generated code, and unreviewed change.

1. **One accountable owner per outcome.** Every outcome has exactly one accountable role;
   others are responsible, consulted, or informed. Shared accountability is no
   accountability.
2. **Separation of duties.** Whoever directs the AI to implement a change is not its sole
   approver. A second human reviews before release.
3. **Human accountability for AI output.** A named human is accountable for every
   AI-generated artefact through to production. AI is a tool, never an accountable party.
4. **Operational ownership persists.** Accountability does not end at release. A named owner
   is accountable for the solution's supportability, maintenance, and drift once live.

## Role definitions

Roles keep familiar names to reduce change friction; only their focus shifts.

- **Product owner — business intent and requirement approval.** Clarifies requirements,
  answers open business questions, approves the requirements portion of the specification,
  and validates delivered outcomes. Approves business requirements and acceptance, not
  architecture or security detail.
- **Architect — specification engineer.** Translates requirements into detailed
  specifications; applies architecture, security, data, and platform constraints; defines
  acceptance and validation criteria; records decisions; and reviews AI-generated
  implementation against the specification. Standards and reusable patterns are embedded in
  the workflow so governance is enforced by tooling, not by one person's availability.
- **Developer — implementation lead.** Executes implementation from approved
  specifications using AI coding assistants; validates generated code; performs
  test-driven development; resolves edge cases; and maintains the solution.
- **Verification specialist — verification and evaluation.** Validates implementations
  against the specification; executes automated testing; assesses release readiness;
  reviews specification testability early; and retains exploratory testing.
- **Security and privacy reviewer.** Performs risk-triaged review of sensitive
  specifications and validates that security and privacy controls are addressed before
  implementation. A sensitivity triage step determines which specifications require review,
  keeping the gate proportionate.
- **Delivery coordinator.** Facilitates collaboration, manages delivery flow and
  work-in-progress limits, coordinates dependencies, and supports governance checkpoints.
- **Operational owner.** Owns the solution after release — supportability, monitoring,
  incident response, and drift — so AI-generated code always has a named owner in
  production.

## Responsibility across lifecycle gates

The matrix maps delivery roles to the governance
[lifecycle gates](../governance/operating-model.md). Legend: **A** accountable (exactly one
per gate), **R** responsible, **C** consulted, **I** informed.

| Lifecycle gate | Product owner | Architect | Developer | Verification | Security and privacy | Delivery coordinator | Operational owner |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Intake | **A** | C | I | I | I | R | I |
| Assessment | C | **A** | C | C | R | R | C |
| Design | C | **A** | C | C | R | I | I |
| Build and validate | I | C | **A** | R | C | R | I |
| Authorize and release | R | R | C | R | R | **A** | C |
| Operate and monitor | I | C | R | C | C | I | **A** |
| Change or retire | C | **A** | R | C | C | R | R |

Notes:

- At **Authorize and release**, the delivery coordinator is accountable for running the gate
  and confirming all sign-offs are collected; for higher risk tiers, final authorization
  escalates to the designated authorization authority. Each contributor remains responsible
  for their own sign-off, satisfying separation of duties.
- The architect is accountable at **Assessment**, **Design**, and **Change or retire**. This
  concentration is a bottleneck risk; mitigate it by embedding governance in tooling and by
  requiring a second approver before release.

## Mapping to enterprise accountability owners

The delivery roles are the team-level expression of the accountability owners named in the
governance [operating model](../governance/operating-model.md):

| Enterprise accountability owner | Delivery role that carries it |
| --- | --- |
| Service owner | Product owner |
| Risk owner | Architect (with delivery coordinator) |
| Data owner | Product owner with security and privacy reviewer |
| Model or AI engineering owner | Developer (build) with architect (design) |
| Security owner | Security and privacy reviewer |
| Privacy contact | Security and privacy reviewer |
| Operational owner | Operational owner |
| Authorization authority | Escalation point for authorize and release |

## Accountability at a glance

For communication, the gate-level matrix reduces to a single accountable owner per
deliverable. This is a summary view; the matrix above governs at gate level.

| Deliverable | Accountable owner |
| --- | --- |
| Business outcomes | Product owner |
| Specification | Architect (requirements portion: product owner) |
| Implementation quality | Developer |
| Verification and testing | Verification specialist |
| Security and privacy compliance | Security and privacy reviewer |
| Delivery coordination | Delivery coordinator |
| Live solution operation | Operational owner |
