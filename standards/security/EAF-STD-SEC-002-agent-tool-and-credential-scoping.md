---
id: EAF-STD-SEC-002
title: Agent tool and credential scoping
type: Standard
status: Draft
domain: Security
tags: [agents, tools, least-privilege, mcp, excessive-agency]
part_of_family: Security Baseline
classification: public
version: "1"
owner: Enterprise AI Framework maintainers
effective_date: 2026-09-28
last_reviewed: 2026-09-28
review_cycle_months: 12
summary: Agents get the fewest tools, the narrowest scopes, and short-lived credentials, with approval for consequential actions.
relationships:
  depends_on: [EAF-STD-SEC-001]
---

# Agent tool and credential scoping

> Draft from the Enterprise AI Framework. Review it through your own governance, then set `status: Approved` before you rely on it.

An agent can do as much damage as its tools allow, whatever its instructions say. These controls apply to every agent and tool.

| Control | What it prevents |
| --- | --- |
| Allowlisted, typed tools with narrow schemas | The agent calling tools it does not need, or passing arbitrary input |
| One credential per tool and task, denied by default | One compromised call reaching everything the agent can reach |
| Transaction and rate limits | Runaway loops, bulk exfiltration, and cost attacks |
| Egress allowlists | Data sent to attacker-controlled endpoints |
| Sandboxes with no standing credentials for generated code | Code execution escaping into the host or network |
| Human approval for consequential or irreversible actions | Injected instructions completing high-impact actions alone |
| Correlation ids across user, agent, model, and tool | Investigations that cannot reconstruct what happened |

Each agent has its own workload identity, separate from the user it acts for, and both identities are recorded on every action. An MCP server accepts only tokens issued for it.

Source: [Zero-trust AI](https://nishant-tamilselvan.github.io/enterprise-ai-framework/security/zero-trust-ai/#agent-and-tool-controls)
