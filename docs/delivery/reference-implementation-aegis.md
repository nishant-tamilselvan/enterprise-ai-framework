---
icon: material/robot-outline
title: "Reference Implementation: AEGIS"
doc_status: Draft
version: 0.3.0
owners: Framework maintainers
audience: Delivery leads, product owners, and delivery teams
last_reviewed: 2026-09-28
---

# Reference implementation: AEGIS

This page shows one way to put the framework's delivery model into practice with an open-source tool. The framework does not require this tool or any other. The model on the other Delivery pages stays tool-agnostic, and any method or tool that meets it is equally valid.

!!! info "Disclosure"
    The maintainer of this framework also maintains AEGIS. The framework lists tools under
    the rules in [CONTRIBUTING.md](https://github.com/nishant-tamilselvan/enterprise-ai-framework/blob/master/CONTRIBUTING.md#tools-and-implementations),
    and a listing is not an endorsement.

## What AEGIS is

[AEGIS](https://nishant-tamilselvan.github.io/AEGIS/) (Agentic Enterprise Guided Intelligent System) is a set of AI agents for GitHub Copilot in VS Code and for Claude Code. It turns an idea into approved requirements, then an architecture, then reviewed code. A Python tool validates every document the agents write.

| Item | Detail |
| --- | --- |
| License | MIT |
| Runs in | GitHub Copilot in VS Code, or Claude Code (as a clone or a plugin) |
| Command-line tool | [`aegis-sdlc`](https://pypi.org/project/aegis-sdlc/) on PyPI |
| Source | [github.com/nishant-tamilselvan/AEGIS](https://github.com/nishant-tamilselvan/AEGIS) |
| Documentation | [How it works](https://nishant-tamilselvan.github.io/AEGIS/how-it-works/), [Getting started](https://nishant-tamilselvan.github.io/AEGIS/getting-started/) |

AEGIS works in three phases:

| Phase | Produces |
| --- | --- |
| 1. Ideation | Six business documents: product requirements, functional and non-functional requirements, a user journey map, a system blueprint, and an executive briefing |
| 2. Architecture | Five technical documents (interfaces, data, security, deployment, observability) and architecture decision records |
| 3. Implementation | Bounded work packages, a decision ledger, and code in a target repository |

## How the framework maps to AEGIS

### The specification

The [anatomy of a specification](specification-driven-delivery.md#anatomy-of-a-specification) lists eight elements. AEGIS keeps each one in a fixed document with stable ids.

| Specification element | Where AEGIS keeps it |
| --- | --- |
| Purpose and context | Product requirements (`PR-`) and the user journey map (`UJ-`) |
| Requirements | Functional (`FR-`) and non-functional (`NFR-`) requirements |
| Acceptance criteria | Each work package's acceptance criteria and tests |
| Architecture constraints | The system blueprint (`BP-`), the five technical documents, and architecture decision records (`ADR-`) |
| Security and privacy requirements | The security architecture (`SEC-`) and security non-functional requirements |
| Standards references | Citations to the organization's standards library, which agents search before they ask a question |
| Open questions and resolutions | Open decisions in each document, and a ledger of implementation decisions (`IDEC-`) |
| Approvals | A named human approver recorded before release |

### The handoff chain and lifecycle gates

| Framework gate | AEGIS step |
| --- | --- |
| Intake and Assessment | Ideation. The orchestrator asks a few questions at a time and records the answers as requirements. |
| Design | Architecture. Specialist agents propose each technical document, and material choices become decision records. |
| Build and validate | Implementation. A read-only readiness gate checks that the specification is complete. Then code agents build one work package at a time, and an independent reviewer returns a pass or a list of changes. |
| Authorize and release | A person approves the release by name. AEGIS never deploys automatically. |
| Operate and monitor | Outside AEGIS. See the gaps below. |
| Change or retire | Outside AEGIS. A material change sends work back to the architecture phase, but monitoring and retirement are not covered. |

### Guardrails and security controls

| Framework rule | AEGIS control |
| --- | --- |
| Validate the specification's testability before implementation | A critic agent reviews every document, and a validator checks ids, cross-references, and traceability after each edit |
| Keep a named human accountable | Release needs a named approver, and every work package records who reviewed it |
| [Enforce controls outside the model](../security/zero-trust-ai.md#enforce-outside-the-model) | A deterministic hook blocks any file write outside the active work package's declared paths |
| [Excessive agency](../security/threat-model.md#excessive-agency-and-multi-agent-risk) (OWASP LLM03:2026) | Each code agent receives exactly one approved work package and its paths |
| [Prompt injection](../security/threat-model.md#threat-catalog) (OWASP LLM01:2026) | A rule that treats standards documents, web pages, issues, and tool output as data, never as instructions |
| [Data protection](../security/data-protection.md) | A rule that no secret is ever copied into a document, a decision, or evidence |

## Gaps

Record these gaps when you use AEGIS to meet the framework.

| Gap | Framework expectation | What to add |
| --- | --- | --- |
| Separation of duties | A second human approves each AI-assisted change | AEGIS's per-package reviewer is an agent. Add a human review of each pull request in your repository's branch rules. |
| Operate and monitor | SLOs, harm indicators, incidents, and reassessment | Use your operations tooling and the [AI incident response](../security/incident-response.md) process |
| Change or retire | Material-change review and records preservation | Run your change process, and keep the AEGIS documents as the specification record |
| Tool dependency | The model is tool-agnostic | AEGIS needs GitHub Copilot or Claude Code. Record that dependency in your supplier assessment. |

## Use the framework as a standards library

AEGIS agents search an organization's standards library before they ask the user a question, and they cite what they find. The repository ships a starter library, in AEGIS's format, built from this framework's rules. It covers the lifecycle gates, specification completeness, enforcing controls outside the model, agent tool scoping, and informative compliance mappings.

The library lives in [`standards/`](https://github.com/nishant-tamilselvan/enterprise-ai-framework/tree/master/standards). Its documents are marked `Draft`. AEGIS bases proposals only on `Approved` documents, so review each one through your own governance and change its status before you connect it. The [AEGIS standards setup guide](https://nishant-tamilselvan.github.io/AEGIS/enterprise-standards-setup/) explains how to connect a library.

## Measuring adoption

The roadmap plans before-and-after adoption metrics for a reference implementation. Suggested measures:

| Measure | What it shows |
| --- | --- |
| Time from idea to an approved specification | Whether guided ideation shortens the path to a buildable specification |
| Rework rate after the readiness gate | Whether specifications are complete when implementation starts |
| Review findings per work package | Whether bounded packages keep changes reviewable |
| Share of decisions that cite a standard | Whether the standards library is used |

Read the [walkthrough on the blog](../blog/posts/2026-09-28-specification-to-evidence-with-aegis.md) for one example from idea to release approval.
