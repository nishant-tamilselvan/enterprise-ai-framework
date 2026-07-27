---
title: Zero-Trust AI
status: Draft
version: 0.1.0
last_reviewed: 2026-07-26
---

# Zero-trust AI

Zero trust assumes no implicit trust based on network location, component type, model reputation, or prior interaction.

## Principles

1. Verify user, workload, service, model, tool, and data identities explicitly.
2. Authorize purpose and action at each consequential trust boundary.
3. Apply least privilege and short-lived, task-bound capabilities.
4. Treat prompts, retrieved content, model output, and tool responses as untrusted.
5. Separate control instructions from data and preserve provenance.
6. Assume breach and limit blast radius by tenant, task, data class, and transaction.
7. Continuously evaluate identity, device, behavior, policy, and system health signals.

## Agent and tool controls

Use allowlisted typed tools, deny-by-default scopes, transaction limits, egress controls, sandboxing, deterministic validation, human approval for consequential actions, idempotency, rollback, and complete correlation. Never place unrestricted credentials in prompts or model-visible context.
