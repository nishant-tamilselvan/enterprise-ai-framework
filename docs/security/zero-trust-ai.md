---
icon: material/shield-key-outline
title: Zero-Trust AI
doc_status: Draft
version: 0.3.0
owners: Framework maintainers
audience: Security architects and engineers
last_reviewed: 2026-09-28
---

# Zero-trust AI

Zero trust grants no implicit trust because of network location, component type, model reputation or earlier interactions. For AI, that includes the model itself: a model can be steered by any text in its context, so it cannot be the component that decides what is allowed.

## Principles

1. Verify the identity of every user, workload, service, model, agent, tool and data source.
2. Authorize the purpose and the action at each consequential trust boundary.
3. Grant least privilege through short-lived, task-bound credentials.
4. Treat prompts, retrieved content, model output and tool responses as untrusted.
5. Keep control instructions apart from data, and carry provenance with every piece of content.
6. Assume breach. Limit the blast radius by tenant, task, data class and transaction.
7. Evaluate identity, device, behavior, policy and system health signals continuously.

## Enforce outside the model

Put every security decision in deterministic code that the model cannot rewrite.

| Decision | Where to enforce it |
| --- | --- |
| Who may see a document | The retrieval service, using the calling user's identity, before content reaches the model |
| Whether a tool call is allowed | A policy check between the agent and the tool, using the task's scope |
| Whether an action needs approval | A gate that pauses the workflow and records the approver |
| Whether output is safe to use | A validator for the destination: HTML encoding, SQL parameters, schema checks |

A system prompt that says "never reveal salary data" is a hint, not a control.

!!! tip "In practice"
    AEGIS enforces this with a deterministic hook: code agents cannot write outside
    the active work package's declared paths. See the [AEGIS reference implementation](../delivery/reference-implementation-aegis.md#guardrails-and-security-controls). The framework does not require
    any particular tool.

## Agent and tool controls

| Control | What it prevents |
| --- | --- |
| Allowlisted, typed tools with narrow schemas | The agent calling tools it does not need, or passing arbitrary input |
| Deny-by-default scopes, one credential per tool and task | One compromised call reaching everything the agent can reach |
| Transaction and rate limits | Runaway loops, bulk exfiltration, cost attacks |
| Egress allowlists | Data sent to attacker-controlled endpoints |
| Sandboxes with no standing credentials for generated code | Code execution escaping into the host or network |
| Human approval for consequential or irreversible actions | Injected instructions completing high-impact actions alone |
| Idempotency keys and rollback | Duplicate or unrecoverable actions after retries |
| Correlation IDs across user, agent, model and tool | Investigations that cannot reconstruct what happened |

Never put credentials in prompts or anywhere the model can read them.

## Agent identity

Give each agent its own workload identity, separate from the user it acts for. Record both identities on every action, so the audit trail shows who asked and what acted. When an agent acts for a user, pass a token scoped to that user and task, and never a broad service credential.

In multi-agent systems, authenticate each agent to the others. Validate every message against a schema before acting on it, and do not let one agent grant another more privilege than it holds.

## MCP authorization

The Model Context Protocol (MCP) specification, version 2026-07-28, bases authorization on OAuth 2.1. Its security best practices name specific attacks. Check each MCP server you run or connect to against them.

| Requirement | Why |
| --- | --- |
| An MCP server must not accept tokens that were not issued for it | Token passthrough lets a client reuse a token meant for another service and bypass its controls |
| Validate the token audience, and use resource indicators (RFC 8707) | Tokens stay bound to one server |
| A proxy server that uses a static client ID must get per-client consent before forwarding to a third-party authorization server | Prevents the confused deputy problem |
| Exact-match redirect URI validation, and a single-use `state` value | Prevents authorization code theft |
| Request the minimum scopes | Limits what a stolen token can do |

Tool descriptions are part of the attack surface as well. The [threat model](threat-model.md) covers tool poisoning, rug pulls and tool shadowing.

## Sources

Checked 2026-09-28.

- [MCP security best practices](https://modelcontextprotocol.io/specification/latest/basic/security_best_practices)
- [MCP authorization (2026-07-28)](https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization)
- [OWASP Top 10 for Agentic Applications for 2026](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/)
- [Deploying AI Systems Securely, joint guidance (2024-04-15)](https://www.cisa.gov/news-events/alerts/2024/04/15/joint-guidance-deploying-ai-systems-securely)
