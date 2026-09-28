---
icon: material/account-tie-outline
title: Roles and Accountability
doc_status: Draft
version: 0.2.0
owners: Framework maintainers
audience: Delivery leads, product owners, and delivery teams
last_reviewed: 2026-07-28
---

# Roles and accountability in AI-assisted delivery

AI shifts role focus toward *specifying, directing, and validating* artifacts. Teams spend
less time producing them. AI-assisted delivery requires collaboration, governance,
accountability, and cross-functional review.

![Diagram of seven delivery roles and their accountable outcomes. The product owner holds business intent and requirement approval. The architect holds specification completeness and standards. The developer holds implementation correctness against the specification. The verification specialist holds evidence that the solution meets the specification. The security and privacy reviewer holds control approval before build. The delivery coordinator holds delivery flow and governance checkpoints. The operational owner holds live solution operation. Four principles support these assignments: one accountable owner per outcome, separation of duties, human accountability for AI output, and persistent operational ownership.](../assets/images/delivery-roles.webp)

<small>Figure: generated with NotebookLM from the framework's text · Enterprise AI Framework · [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)</small>

## How roles shift

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
  others are responsible, consulted, or informed. Assigning multiple accountable roles
  obscures ownership.
2. **Separation of duties.** A second human reviews changes before release, independently
  of the person who directed the AI implementation.
3. **Human accountability for AI output.** A named human is accountable for every
  AI-generated artifact through to production.
4. **Operational ownership persists.** A named owner remains accountable after release for
  the solution's supportability, maintenance, and drift.

## Role definitions

Familiar role names reduce change friction. Their focus shifts as follows.

- **Product owner: business intent and requirement approval.** Clarifies requirements,
  answers open business questions, approves the requirements portion of the specification,
  and validates delivered outcomes. The architect and security and privacy reviewer approve
  their respective details.
- **Architect: specification engineer.** Translates requirements into detailed
  specifications; applies architecture, security, data, and platform constraints; defines
  acceptance and validation criteria; records decisions; and reviews AI-generated
  implementation against the specification. Teams encode standards and reusable patterns
  in workflow tooling. This approach applies governance consistently and reduces dependence
  on one person's availability.
- **Developer: implementation lead.** Executes implementation from approved
  specifications using AI coding assistants; validates generated code; performs
  test-driven development; resolves edge cases; and maintains the solution.
- **Verification specialist: verification and evaluation.** Validates implementations
  against the specification; executes automated testing; assesses release readiness;
  reviews specification testability early; and retains exploratory testing.
- **Security and privacy reviewer.** Performs risk-triaged review of sensitive
  specifications and validates security and privacy controls before implementation. A
  sensitivity triage step identifies specifications that require review and keeps the gate
  proportionate.
- **Delivery coordinator.** Facilitates collaboration, manages delivery flow and
  work-in-progress limits, coordinates dependencies, and supports governance checkpoints.
- **Operational owner.** Owns supportability, monitoring, incident response, and drift after
  release. This role gives every AI-generated production component a named owner.

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
  and confirming that required approvers submitted their sign-offs. For higher risk tiers,
  final authorization escalates to the designated authorization authority. Each contributor
  remains responsible for their own sign-off. This division preserves separation of duties.
- The architect is accountable at **Assessment**, **Design**, and **Change or retire**. This
  concentration is a bottleneck risk. Teams mitigate it by embedding governance in tooling
  and requiring a second approver before release.

## Mapping to enterprise accountability owners

The delivery roles map to the accountability owners named in the governance
[operating model](../governance/operating-model.md):

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

## Deliverable accountability

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
