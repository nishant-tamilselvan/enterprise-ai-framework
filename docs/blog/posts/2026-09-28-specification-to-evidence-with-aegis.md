---
date: 2026-09-28
slug: from-specification-to-evidence-with-aegis
categories:
  - Delivery
  - Implementation lessons
---

# From specification to evidence: the delivery model in practice with AEGIS

The framework's [delivery model](../../delivery/overview.md) says the specification is the primary artifact, and that people approve each handoff. This post walks one example through AEGIS, an open-source tool that applies the model, from a one-line idea to a named release approval.

<!-- more -->

!!! info "Disclosure and status"
    I maintain both this framework and AEGIS. This post is a practitioner's walkthrough and
    my own view. It is not a project decision, and the framework does not require AEGIS. It
    applies to framework version 0.3.0 and AEGIS 0.2.0.

## Summary

AEGIS keeps the eight elements of a specification in fixed documents, validates them after every change, and blocks implementation until they are complete. Code agents then work on one approved work package at a time, and a person approves the release. The [reference implementation page](../../delivery/reference-implementation-aegis.md) holds the full mapping and the gaps.

## Context

AI makes code cheap to produce, so review becomes the constraint. The [specification-driven delivery](../../delivery/specification-driven-delivery.md) page asks teams to complete the specification before implementation, keep a named human accountable, and separate the author of a change from its approver. Those rules are easy to write down and hard to keep under deadline pressure. A tool can make some of them the default.

## The walkthrough

The example is a fictional `customer-portal`: a self-service portal where customers track orders and raise support tickets. The steps below use AEGIS's commands in Claude Code. GitHub Copilot uses the same commands as prompt files.

### 1. Install

```bash
pip install aegis-sdlc
```

In Claude Code, add the plugin:

```text
/plugin marketplace add nishant-tamilselvan/AEGIS
/plugin install aegis@aegis
```

[Getting started](https://nishant-tamilselvan.github.io/AEGIS/getting-started/) covers the other setups.

### 2. Connect the standards library

AEGIS agents search an organization's standards before they ask a question. This repository ships the framework's rules as a [starter library](https://github.com/nishant-tamilselvan/enterprise-ai-framework/tree/master/standards). Review those documents through your own governance first, because AEGIS uses only `Approved` standards.

### 3. Ideation: purpose, requirements, and approvals

```text
/start-ideation customer-portal A self-service portal where customers track orders and raise support tickets
```

The orchestrator asks a few questions at a time and waits for answers. It writes six business documents: product requirements, functional and non-functional requirements, a user journey map, a system blueprint, and an executive briefing. This covers the framework's **Intake** and **Assessment** gates, and the specification's purpose, requirements, and security requirements.

After each change, a validator checks ids and cross-references:

```bash
python -m artifact_tools validate docs/artifacts/customer-portal
```

### 4. Architecture: constraints and decisions

```text
/start-architecture customer-portal
```

Specialist agents propose the interface, data, security, deployment, and observability architecture. Each material choice becomes an architecture decision record. This is the framework's **Design** gate, and the specification's architecture constraints.

### 5. Implementation: bounded work, independent review

```text
/start-implementation customer-portal /path/to/customer-portal-repository
```

A read-only readiness gate runs first. It stops if any document is still a draft, a blocking decision is open, or a contract is missing. Then the planner splits the work into packages. Each package declares its paths, tests, and acceptance criteria. A code agent works on one package, and a hook blocks it from writing anywhere else. An independent reviewer reruns the checks and returns a pass or a list of changes.

This is the framework's **Build and validate** gate. The hook is the framework's [enforce outside the model](../../security/zero-trust-ai.md#enforce-outside-the-model) rule in practice.

### 6. Release: a named human decides

```bash
python -m artifact_tools implementation release-approve docs/artifacts/customer-portal --approver "Jane Doe"
```

AEGIS records the approver and never deploys by itself. This is the framework's **Authorize and release** gate.

## What AEGIS does not cover

Three parts of the framework need other tools or processes:

| Framework expectation | What to add |
| --- | --- |
| A second human approves each AI-assisted change | AEGIS's per-package reviewer is an agent. Require a human review of each pull request. |
| Operate and monitor | Your operations tooling and the [AI incident response](../../security/incident-response.md) process |
| Change or retire | Your change process, with the AEGIS documents as the specification record |

## Impact and next steps

The roadmap plans before-and-after adoption metrics for a reference implementation. The [reference implementation page](../../delivery/reference-implementation-aegis.md#measuring-adoption) suggests four measures. If you try the model with AEGIS or another tool, share what you measure in [Discussions](https://github.com/nishant-tamilselvan/enterprise-ai-framework/discussions).

## Evidence and references

- [Specification-driven delivery](../../delivery/specification-driven-delivery.md), framework version 0.3.0
- [Governance lifecycle gates](../../governance/operating-model.md#lifecycle-gates)
- [How AEGIS works](https://nishant-tamilselvan.github.io/AEGIS/how-it-works/)
- [AEGIS CLI reference](https://nishant-tamilselvan.github.io/AEGIS/cli-reference/)
- [AEGIS source](https://github.com/nishant-tamilselvan/AEGIS)
