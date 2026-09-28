---
title: AI Incident Response
version: 0.1.0
last_reviewed: 2026-09-28
---

# AI incident response

An AI incident is any event where an AI system causes or nearly causes harm, breaks a rule, or behaves outside its approved boundaries. Some AI incidents are security incidents, such as a prompt injection that leaks data. Others are not: a model that gives confidently wrong benefit advice, or one that treats a group of people unfairly. Run both kinds through one process, so nothing falls between the security team and the service owner.

Base the process on NIST SP 800-61 Rev. 3 (April 2025), which aligns incident response with the NIST Cybersecurity Framework 2.0. The OWASP GenAI Incident Response Guide 1.0 (July 2025) adds AI-specific detail.

## Incident types

| Type | Examples | Usual lead |
| --- | --- | --- |
| Security | Prompt injection, data leakage, tool or MCP server compromise, model theft, poisoned data | Security operations |
| Safety and harm | Harmful advice, unsafe actions by an agent, content that harms a person | Service owner with the risk owner |
| Fairness and rights | Systematic errors against a group, decisions affected people cannot contest | Risk owner with legal and privacy |
| Reliability | Confabulation across many responses, silent degradation after a model update, runaway cost | Operational owner |
| Supplier | Provider outage, provider breach, unannounced model change | Supplier owner |

## Preparation

| Item | What to have ready |
| --- | --- |
| Inventory | Every AI system, its owner, risk tier, models, tools and suppliers |
| Playbooks | One per incident type, linked to threats in the [threat model](threat-model.md) |
| Kill switches | A tested way to disable each agent, tool, model route or feature |
| Fallbacks | A degraded mode or a human process for each consequential service |
| Evidence | Correlated logs of prompts, context sources, outputs, tool calls and approvals, kept for the retention period |
| Contacts | Supplier security contacts and regulator reporting routes |
| Exercises | Tabletop exercises that include AI scenarios, at least once a year |

## Response steps

1. **Detect and report.** Take signals from monitoring, evaluations, user complaints, staff reports and suppliers. Give staff and the public a simple way to report AI problems.
2. **Triage.** Classify the incident type and severity. Decide whether a regulatory reporting clock has started.
3. **Contain.** Disable the affected tool, agent, model route or feature. Revoke exposed credentials. Switch to the fallback.
4. **Preserve evidence.** Snapshot the prompts, context, model version, tool definitions and logs involved before anything changes.
5. **Investigate.** Reconstruct what the system saw and did, using the correlation IDs. Check whether the same input affects other systems.
6. **Remediate.** Fix the root cause. That may be a prompt, a tool scope, a retrieval permission, a dataset, a model version or a supplier.
7. **Recover.** Re-enable the service after the fix passes the evaluations that would have caught the incident.
8. **Learn.** Hold a blameless review. Update the threat model, evaluations, playbooks and risk register.

## Regulatory reporting

Check each obligation that applies to you. The deadlines below are examples, not a complete list.

| Regime | Obligation |
| --- | --- |
| EU AI Act, Art 73 | Providers of high-risk systems report serious incidents within 15 days, 2 days for widespread infringement or critical infrastructure disruption, and 10 days for a death. See the [EU AI Act mapping](../compliance/eu-ai-act-mapping.md). |
| EU AI Act, Art 55 | Providers of general-purpose AI models with systemic risk report serious incidents to the AI Office |
| Data protection law | A personal data breach through an AI system is still a personal data breach. Apply the breach rules for your jurisdiction. |
| FedRAMP | Cloud services follow the incident reporting rules of their FedRAMP authorization. See the [FedRAMP mapping](../compliance/fedramp-mapping.md). |

## Information sharing

Share what you learn, without sensitive details, so others can defend against the same attack.

| Channel | Use |
| --- | --- |
| [CISA JCDC AI Cybersecurity Collaboration Playbook](https://www.cisa.gov/resources-tools/resources/ai-cybersecurity-collaboration-playbook) (January 2025) | Voluntary sharing of AI security incidents and vulnerabilities in the United States |
| [AI Incident Database](https://incidentdatabase.ai/) | Public record of AI harms |
| [OECD AI Incidents and Hazards Monitor](https://oecd.ai/en/incidents) | International tracking of AI incidents |
| Supplier security contacts | Report vulnerabilities in a model, tool or platform to its provider |

## Sources

Checked 2026-09-28.

- NIST SP 800-61 Rev. 3: <https://csrc.nist.gov/pubs/sp/800/61/r3/final>
- OWASP GenAI Incident Response Guide 1.0: <https://genai.owasp.org/resource/genai-incident-response-guide-1-0/>
- CISA JCDC AI Cybersecurity Collaboration Playbook: <https://www.cisa.gov/resources-tools/resources/ai-cybersecurity-collaboration-playbook>
- EU AI Act, Regulation (EU) 2024/1689: <http://data.europa.eu/eli/reg/2024/1689/oj>
