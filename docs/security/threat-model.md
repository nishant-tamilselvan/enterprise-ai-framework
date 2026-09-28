---
title: Enterprise AI Threat Model
version: 0.2.0
last_reviewed: 2026-09-28
---

# Enterprise AI threat model

An AI threat model covers the same ground as any threat model: adversarial attack, accidental failure, misuse by authorized people, supplier compromise and unexpected behaviour. AI adds two things. Natural language mixes instructions with data, so any text the model reads can try to steer it. Agents act on the model's output, so a steered model can take real actions.

This page names threats with public identifiers so teams can trace them to tests, controls and incidents:

| Catalogue | Edition used here |
| --- | --- |
| [OWASP Top 10 for LLM Applications](https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/) | 2026, released August 2026 (IDs such as `LLM01:2026`) |
| [OWASP Top 10 for Agentic Applications](https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/) | 2026, released 2025-12-09 (IDs such as `ASI01`) |
| [MITRE ATLAS](https://atlas.mitre.org/) | v2026.09 (IDs such as `AML.T0051`) |
| [NIST AI 100-2e2025](https://doi.org/10.6028/NIST.AI.100-2e2025) | Adversarial machine learning taxonomy, March 2025 |

Record the edition next to every ID. The 2026 LLM list reordered the 2025 list, so the same number now names a different risk.

| 2025 ID | 2026 ID | Risk |
| --- | --- | --- |
| LLM01:2025 | LLM01:2026 | Prompt Injection |
| LLM02:2025 | LLM02:2026 | Sensitive Information Disclosure |
| LLM03:2025 | LLM04:2026 | Supply Chain |
| LLM04:2025 | LLM05:2026 | Data and Model Poisoning |
| LLM05:2025 | LLM10:2026 | Improper Output Handling |
| LLM06:2025 | LLM03:2026 | Excessive Agency |
| LLM07:2025 | LLM08:2026 | System Prompt Leakage, renamed Hidden Context Exposure |
| LLM08:2025 | LLM09:2026 | Vector and Embedding Weaknesses |
| LLM09:2025 | LLM07:2026 | Misinformation |
| LLM10:2025 | LLM06:2026 | Unbounded Consumption |

OWASP scopes the LLM list to a model used as a component. When the model acts through tools, memory or other agents, use the Agentic list alongside it.

## Assets

| Asset | Why it matters |
| --- | --- |
| Mission decisions and affected people's rights | The harm an AI failure causes lands here |
| Sensitive data | Prompts, retrieved documents, logs, training and fine-tuning data |
| Identities, credentials and authorization | Agents and tools act with them |
| System prompts, policies and tool definitions | They steer the model and describe what it can do |
| Models, weights and adapters | Stolen, swapped or tampered artifacts change behaviour |
| Retrieval indexes, vector stores and agent memory | Poisoned entries persist and reach many users |
| Tools, plugins and MCP servers | They turn model output into actions |
| Evaluation sets, logs and evidence | Assurance and investigation depend on them |
| Availability and budget | Model calls cost money and capacity |
| Institutional trust | Public-facing failures damage it quickly |

## Trust boundaries

Draw each boundary on the system diagram and record what crosses it.

| Boundary | What crosses it | Default stance |
| --- | --- | --- |
| User to application | Prompts, files, images | Untrusted input |
| Application to model | Assembled context, system prompt | The model may follow any instruction in the context |
| Retrieval to model | Documents, web pages, emails, tickets | Untrusted input, even from internal sources |
| Model to downstream systems | Generated text, code, queries, tool calls | Untrusted output until validated |
| Agent to tool or MCP server | Tool calls, credentials, returned data | Authorize each call; treat returned data as untrusted |
| Agent to agent | Messages, delegated tasks | Authenticate both sides; validate every message |
| Organization to supplier | Models, datasets, hosted APIs, tool servers | Verify provenance and integrity |

## Threat catalogue

| Threat | OWASP | MITRE ATLAS | Main mitigations |
| --- | --- | --- | --- |
| Direct and indirect prompt injection | LLM01:2026, ASI01 | AML.T0051 (.000 direct, .001 indirect), AML.T0054 jailbreak | Separate instructions from data, mark provenance, least-privilege tools, human approval for consequential actions |
| Sensitive information disclosure | LLM02:2026 | AML.T0057, AML.T0024 | Minimize context, authorize retrieval per user, filter output, redact logs |
| AI supply chain compromise | LLM04:2026, ASI04 | AML.T0010 (.001 software, .002 data, .003 model, .005 agent tool) | Provenance, AI-BOM, signed models, pinned versions (see [AI supply chain](ai-supply-chain.md)) |
| Data and model poisoning | LLM05:2026 | AML.T0020, AML.T0018 | Curate and version data, verify artifacts, evaluate before release, keep rollback ready |
| Improper output handling | LLM10:2026, ASI05 | | Validate and encode output for its destination, parameterize queries, sandbox generated code |
| Excessive agency | LLM03:2026, ASI02, ASI03 | AML.T0053, AML.T0086, AML.T0101 | Narrow tools, scoped short-lived credentials, transaction limits, approval gates |
| Hidden context exposure (formerly system prompt leakage) | LLM08:2026 | AML.T0069 (.002 system prompt) | Keep secrets and authorization logic out of prompts, enforce controls outside the model |
| Vector and embedding weaknesses, RAG poisoning | LLM09:2026, ASI06 | AML.T0070, AML.T0071, AML.T0082 | Authorize at retrieval time, isolate tenants, validate sources before indexing |
| Misinformation and confabulation | LLM07:2026 | | Grounding, citations, abstention, human review of consequential output |
| Unbounded consumption | LLM06:2026 | AML.T0034, AML.T0029 | Quotas, budgets, rate limits, circuit breakers, graceful degradation |
| Tool poisoning, rug pulls and tool shadowing | ASI04 | AML.T0110, AML.T0099, AML.T0011.002 | Pin and review tool definitions, alert on changes, isolate servers, allowlist tools |
| Memory and context poisoning | ASI06 | AML.T0080 (.000 memory) | Scope memory per user and task, expire it, validate before writing |
| Insecure inter-agent communication | ASI07 | AML.T0118 | Mutual authentication, signed messages, schema validation |
| Cascading failures across agents | ASI08 | | Isolation, timeouts, circuit breakers, bounded retries |
| Human-agent trust exploitation | ASI09 | AML.T0100 | Clear disclosure, friction before consequential approval, training against automation bias |
| Rogue agents | ASI10 | AML.T0081 | Inventory agents, monitor behaviour against a baseline, keep a kill switch |
| Cross-tenant leakage | LLM02:2026, LLM09:2026 | | Tenant isolation in indexes, caches and memory; penetration testing |
| Audit manipulation | | | Append-only evidence, separation of duties, synchronized time |

## AI-specific threats in more depth

### Improper output handling

Model output is untrusted input to whatever consumes it. OWASP defines the weakness as "insufficient validation, sanitization, and handling of the outputs generated by large language models before they are passed downstream". Generated text reaches browsers, shells, SQL engines, template renderers and other agents. Encode output for its destination, use parameterized queries, run generated code in a sandbox with no standing credentials, and never pass output to `eval` or a shell.

### Excessive agency and multi-agent risk

An agent can do as much damage as its tools allow, whatever its instructions say. Give each agent the fewest tools, the narrowest scopes and the shortest-lived credentials its task needs. Require human approval for actions that are consequential, hard to reverse or outside a transaction limit. In multi-agent systems, authenticate every agent, validate every message against a schema, and stop one agent's failure from cascading with timeouts and circuit breakers.

OWASP's 2026 prompt injection entry recommends the "Rule of Two" as a minimum check on agent capabilities. Look for three capabilities in each agent:

| Capability | Example |
| --- | --- |
| A. Reads untrusted input | Web pages, emails, tickets, retrieved documents |
| B. Reaches sensitive data | Case files, personal records, credentials |
| C. Changes state or communicates externally | Sends email, writes records, calls external APIs |

An agent with all three needs human approval for every action. An agent with two of them needs a documented residual-risk assessment.

### MCP servers and tool poisoning

The Model Context Protocol (MCP) connects agents to tools. The model reads tool descriptions, so a malicious or compromised server can hide instructions in them. Invariant Labs described these tool poisoning attacks in April 2025. The same report named two variants.

| Variant | What happens |
| --- | --- |
| Rug pull | The server changes a tool description after the user approved it |
| Tool shadowing | One server's descriptions change how the agent uses other, trusted servers |

Pin tool definitions and alert on changes, show users the full description, run each server in isolation, and allowlist the servers an agent may use. The [zero-trust AI](zero-trust-ai.md) page covers MCP authorization controls.

### Hidden context exposure

Assume users can extract anything in the model's context: the system prompt, developer instructions, retrieved policy text and tool schemas. OWASP's 2026 entry defines the risk as "the unauthorized extraction, inference, or reconstruction of hidden, non-user-facing system instructions or operational context placed in a model's context". The fix is architectural: keep credentials, internal hostnames and authorization rules out of prompts, and enforce access control in code outside the model.

## Required outputs

Record these for every AI system, and review them at each lifecycle gate:

- system and trust-boundary diagrams
- assumptions and out-of-scope threats
- threats with their catalogue IDs and editions
- affected assets
- controls and their validation evidence
- residual risks, with owners and acceptance decisions
- reassessment triggers

Link each threat to a detection in production and to an [incident response](incident-response.md) playbook.

## Sources

Checked 2026-09-28.

- OWASP Top 10 for LLM Applications 2026: <https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/>
- OWASP Top 10 for LLM Applications 2025 (for the crosswalk): <https://genai.owasp.org/llm-top-10/>
- OWASP Top 10 for Agentic Applications for 2026: <https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications-for-2026/>
- MITRE ATLAS data v2026.09: <https://github.com/mitre-atlas/atlas-data>
- NIST AI 100-2e2025: <https://doi.org/10.6028/NIST.AI.100-2e2025>
- Invariant Labs, MCP tool poisoning attacks (2025-04-01): <https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks>
