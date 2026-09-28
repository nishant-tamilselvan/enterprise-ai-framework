---
icon: material/cloud-check-outline
title: FedRAMP Mapping
doc_status: Draft
version: 0.3.0
owners: Framework maintainers
audience: Compliance, legal, privacy, and assurance teams
last_reviewed: 2026-09-28
source_framework: FedRAMP Consolidated Rules for 2026 (CR26); NIST SP 800-53 Rev. 5 Release 5.2.0
---

# FedRAMP mapping

--8<-- "compliance-disclaimer.md"

FedRAMP authorizes cloud services that United States federal agencies use. An AI capability inside a cloud service sits inside that service's authorization boundary. Its models, endpoints, vector stores, tools and external AI services need the same evidence as the rest of the system. This page shows where the framework supplies that evidence.

FedRAMP is changing quickly. The facts below were checked on 2026-09-28. Confirm them on [fedramp.gov](https://www.fedramp.gov/) before you plan an authorization.

## Current FedRAMP model

| Item | Status on 2026-09-28 |
| --- | --- |
| Consolidated Rules for 2026 (CR26) | One ruleset for FedRAMP, launched 2026-06-24. It replaces the separate Rev5 and 20x documentation, which is now legacy. |
| Certification classes | Class A (pilot), Class B (formerly Low), Class C (formerly Moderate). Class D (High) is expected as a pilot in late 2026 and formally in early 2027. |
| Class B and C pipelines | Open since 2026-08-31 |
| CR26 mandatory for all providers | 2027-01-01 |
| New Rev5 certifications | FedRAMP stops accepting them on 2027-06-11 |
| FedRAMP 20x | The outcome-based, automation-first model behind CR26. Providers show continuous, machine-validated evidence against Key Security Indicators (KSIs) instead of static annual assessments. |
| AI prioritization | Ran from August 2025 to April 2026 for conversational AI services for federal workers. It is closed to new entrants. |

### Key Security Indicators

KSIs express security outcomes that a provider proves with automated evidence. The Class A reference groups them into six themes. Each theme has direct AI implications.

| KSI theme | AI-specific evidence |
| --- | --- |
| CED Cybersecurity Education | Staff training on prompt injection, data leakage and safe tool use |
| CMT Change Management | Versioned models, prompts, policies, retrieval indexes and tool definitions, with approvals |
| CNA Cloud Native Architecture | Isolation of model runtimes, tool sandboxes and tenant data |
| IAM Identity and Access Management | Workload identity for agents, scoped tool credentials, retrieval authorization |
| INR Incident Response | AI incident playbooks and exercises (see [AI incident response](../security/incident-response.md)) |
| SVC Service Configuration | Hardened configuration for model gateways, vector stores and AI endpoints |

Classes B and C use a larger KSI set. Read the class reference that applies to your service.

## SP 800-53 control families

FedRAMP baselines draw on NIST SP 800-53 Rev. 5. The latest release is 5.2.0, dated 2025-08-27. The table covers the families where AI changes what evidence looks like. The other families (MA, MP, PE, PS) apply to AI systems as they do to any system.

| Family | AI-specific considerations | Framework evidence |
| --- | --- | --- |
| AC Access Control | Human and workload identity, agent delegation, retrieval authorization at query time | [Zero-trust AI](../security/zero-trust-ai.md) design, access tests, role matrix |
| AT Awareness and Training | AI-specific misuse, social engineering through generated content | Training records, acceptable-use rules |
| AU Audit and Accountability | Prompt and output sensitivity, correlation across agents and tools, provider logs | Logging design, retention schedule, integrity controls |
| CA Assessment, Authorization, and Monitoring | AI evaluations and red teaming as assessment inputs, continuous monitoring of model behavior | Evaluation reports, red-team findings, monitoring plan |
| CM Configuration Management | Model, prompt, policy, retrieval, tool and supplier versions as configuration items | Registries, baselines, change approvals |
| CP Contingency Planning | Fallback when a model or AI supplier is unavailable, rollback of model versions | Degradation design, recovery tests, exit plans |
| IA Identification and Authentication | Identities for models, agents and tools, not only for people | Workload identity inventory, credential scoping |
| IR Incident Response | Prompt injection, model abuse, data leakage, agent misbehavior, supplier events | [AI incident response](../security/incident-response.md) playbooks, exercises, reporting paths |
| PL Planning | AI components described in the system security plan | System description, boundary diagram |
| PM Program Management | AI inventory and governance at the program level | [Operating model](../governance/operating-model.md), AI inventory |
| PT PII Processing and Transparency | Personal data in prompts, retrieval, logs, training and provider processing | Privacy assessment, minimization, deletion evidence |
| RA Risk Assessment | AI threat modeling and impact assessment | [Threat model](../security/threat-model.md), [risk management](../governance/risk-management.md) |
| SA System and Services Acquisition | Secure development of AI components, including SP 800-218A practices | Development records, supplier assurance |
| SC System and Communications Protection | Isolation of model runtimes and tools, egress control, encryption | Architecture diagrams, network policy, configuration evidence |
| SI System and Information Integrity | Input and output validation, model artifact integrity, behavior monitoring | Validation controls, artifact verification, telemetry |
| SR Supply Chain Risk Management | External models, datasets, AI-BOMs, model signing, concentration risk | Supplier assessments, provenance, AI-BOM, signature verification |

## AI control overlays

NIST is developing Control Overlays for Securing AI Systems (COSAiS): SP 800-53 overlays for five AI use cases.

| Use case |
| --- |
| Using and adapting generative AI assistants |
| Using and fine-tuning predictive AI |
| Single-agent AI systems |
| Multi-agent AI systems |
| Developing AI systems |

NIST released a concept paper on 2025-08-14 and an annotated outline for predictive AI on 2026-01-08. As of 2026-09-28 the project page lists no published overlay. Until one is final, tailor the baseline yourself and record the AI-specific parameters in the system security plan.

## Federal AI policy context

These Office of Management and Budget (OMB) memoranda set agency obligations for AI use and acquisition. They sit alongside FedRAMP. They do not replace it.

| Memorandum | Subject |
| --- | --- |
| M-25-21 | Accelerating federal use of AI through innovation, governance, and public trust. Rescinds M-24-10. |
| M-25-22 | Driving efficient acquisition of AI in government. Rescinds M-24-18. |
| M-26-04 | Increasing public trust in AI through unbiased AI principles |

## Using this mapping

Record every AI component inside the authorization boundary, and every external AI service the system depends on. Document inherited controls, including those a model provider supplies, in the system security plan. Follow the current FedRAMP rules, the class that applies, and your sponsoring agency's requirements.

## Sources

Checked 2026-09-28.

- [FedRAMP 20x](https://www.fedramp.gov/20x/)
- [FedRAMP 2026 timeline](https://www.fedramp.gov/2026/timeline/)
- [Class A Key Security Indicators](https://www.fedramp.gov/2026/reference/20x/a/key-security-indicators/)
- [FedRAMP and AI](https://www.fedramp.gov/ai/)
- [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
- [NIST COSAiS project](https://csrc.nist.gov/Projects/cosais)
- [OMB M-25-21](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-21-Accelerating-Federal-Use-of-AI-through-Innovation-Governance-and-Public-Trust.pdf)
- [OMB M-25-22](https://www.whitehouse.gov/wp-content/uploads/2025/02/M-25-22-Driving-Efficient-Acquisition-of-Artificial-Intelligence-in-Government.pdf)
