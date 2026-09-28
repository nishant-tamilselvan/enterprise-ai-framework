---
icon: material/shield-lock-outline
title: Enterprise AI Security Overview
doc_status: Draft
version: 0.3.0
owners: Framework maintainers
audience: Security architects and engineers
last_reviewed: 2026-09-28
---

# Enterprise AI security overview

AI security builds on established cybersecurity, privacy, resilience and supply-chain practice. It adds controls for three things that traditional systems do not have:

- models that behave probabilistically
- natural-language interfaces that mix instructions with data
- agents that act on a model's output

## Security objectives

- Preserve confidentiality, integrity, availability and authenticity, and use data only for its authorized purpose.
- Stop AI components from becoming a way around access control.
- Keep models and agents inside explicit capability boundaries.
- Identify untrusted content, and keep its provenance through every transformation.
- Detect and contain misuse, compromise, unsafe behavior and supplier failure.
- Keep enough evidence to investigate incidents, without retaining sensitive data longer than needed.

## Security pages

| Page | Covers |
| --- | --- |
| [Threat model](threat-model.md) | Assets, trust boundaries, and threats mapped to OWASP and MITRE ATLAS identifiers |
| [Zero-trust AI](zero-trust-ai.md) | Enforcing controls outside the model, agent identity, tool controls, MCP authorization |
| [Data protection](data-protection.md) | Where AI copies data, retrieval authorization, securing training and operational data |
| [AI supply chain](ai-supply-chain.md) | Inventory, AI bills of materials, model signing, supplier risk |
| [AI incident response](incident-response.md) | Incident types, response steps, regulatory reporting, information sharing |

## Control domains

| Domain | Where it is covered |
| --- | --- |
| Identity and access | [Zero-trust AI](zero-trust-ai.md) |
| Segmentation and isolation | [Zero-trust AI](zero-trust-ai.md), [threat model](threat-model.md) |
| Secure development | [AI supply chain](ai-supply-chain.md), NIST SP 800-218A |
| Model and data supply chain | [AI supply chain](ai-supply-chain.md) |
| Input and output protection | [Threat model](threat-model.md) |
| Context and memory isolation | [Data protection](data-protection.md) |
| Tool execution | [Zero-trust AI](zero-trust-ai.md) |
| Privacy | [Data protection](data-protection.md) |
| Observability and incident response | [AI incident response](incident-response.md) |
| Continuity and secure retirement | [AI supply chain](ai-supply-chain.md) (supplier exit), [data protection](data-protection.md) (deletion) |

## Reference sources

| Source | Use it for |
| --- | --- |
| [OWASP GenAI Security Project](https://genai.owasp.org/) | Top 10 lists for LLM and agentic applications, incident response guide |
| [MITRE ATLAS](https://atlas.mitre.org/) | Adversary tactics and techniques against AI systems |
| [NIST AI 100-2e2025](https://doi.org/10.6028/NIST.AI.100-2e2025) | Adversarial machine learning taxonomy |
| [Deploying AI Systems Securely](https://www.cisa.gov/news-events/alerts/2024/04/15/joint-guidance-deploying-ai-systems-securely) (April 2024) | Joint government guidance on deploying AI systems |
| [AI Data Security](https://www.cisa.gov/resources-tools/resources/ai-data-security-best-practices-securing-data-used-train-operate-ai-systems) (May 2025) | Joint government guidance on data used to train and run AI |

For the frameworks these controls support, see the [compliance mappings](../compliance/overview.md).
