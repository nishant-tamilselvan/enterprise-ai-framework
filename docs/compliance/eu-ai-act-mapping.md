---
title: EU AI Act Mapping
doc_status: Draft
version: 0.3.0
owners: Framework maintainers
audience: Compliance, legal, privacy, and assurance teams
last_reviewed: 2026-09-28
source_framework: Regulation (EU) 2024/1689, as amended by Regulation (EU) 2026/1744
---

# EU AI Act mapping

--8<-- "compliance-disclaimer.md"

The EU AI Act (Regulation (EU) 2024/1689) regulates AI systems placed on the market or used in the European Union. Obligations depend on two things: your role, and the risk class of the system. This page sets out the dates that apply now, maps the main articles to the framework, and lists the guidance the Commission has published.

| Item | Value |
| --- | --- |
| Regulation | (EU) 2024/1689, published in the Official Journal on 2024-07-12, in force since 2024-08-01 |
| Amended by | (EU) 2026/1744, the Digital Omnibus on AI, published 2026-07-24, in force since 2026-07-27 |
| Harmonised standards | None cited in the Official Journal as of 2026-09-28 |
| Last checked | 2026-09-28 |

## Roles

Most obligations fall on one of two roles, defined in Article 3.

| Role | Who it is | Typical obligations |
| --- | --- | --- |
| Provider (Art 3(3)) | Develops an AI system or general-purpose AI model, or has one developed, and places it on the market or puts it into service under its own name | Risk management, data governance, technical documentation, conformity assessment, registration, post-market monitoring |
| Deployer (Art 3(4)) | Uses an AI system under its own authority, except for personal, non-professional use | Use as instructed, human oversight, input data quality, monitoring, log retention, informing people |

A public body that buys an AI system and uses it is usually a deployer. It becomes a provider if it puts its own name on the system or makes a substantial modification.

## Timeline

The Digital Omnibus replaced the original high-risk dates. Plans based on 2 August 2026 for high-risk systems are out of date.

| Date | What applies |
| --- | --- |
| 2025-02-02 | General provisions, AI literacy (Art 4) and prohibited practices (Art 5) |
| 2025-08-02 | General-purpose AI model obligations (Chapter V), governance, penalties, notified bodies |
| 2026-08-02 | General application, including transparency obligations (Art 50) and fines for general-purpose AI providers (Art 101) |
| 2026-12-02 | New prohibitions added by the Omnibus: non-consensual intimate imagery of identifiable people, and child sexual abuse material. Also the deadline for generative systems placed on the market before 2026-08-02 to meet the marking duty in Art 50(2). |
| 2027-08-02 | General-purpose AI models placed on the market before 2025-08-02 must comply (Art 111(3)) |
| 2027-12-02 | High-risk obligations for Annex III systems (Art 6(2)) |
| 2028-08-02 | High-risk obligations for Annex I product systems (Art 6(1)) |
| 2030-08-02 | High-risk systems used by public authorities and already on the market must comply (Art 111(2)) |

## Obligations for all AI systems

| Article | Obligation | Framework alignment | Example evidence |
| --- | --- | --- | --- |
| Art 4 AI literacy | Providers and deployers take measures to support the AI literacy of their staff. The Omnibus removed any required level of literacy. | [Roles and accountability](../delivery/roles-and-accountability.md), training | Training plan and records, role-based guidance |
| Art 5 Prohibited practices | Certain uses are banned outright, such as manipulative techniques, social scoring and some biometric uses | Prohibited-use policy and intake gate in [policies](../governance/policies.md) | Screening decision at intake, policy enforcement records |
| Art 50 Transparency | Tell people when they interact with an AI system. Mark synthetic audio, images, video and text in a machine-readable way. Disclose deepfakes, and emotion recognition or biometric categorisation. | User notices, output labeling, content provenance | Notice text, marking implementation, test results |

## High-risk systems

A system is high-risk in two cases. It is a safety component of a product covered by Annex I. Or it falls in an Annex III use case, such as employment, essential public services, law enforcement or migration. Article 6(3) lets a provider document that an Annex III system poses no significant risk. That decision must still be registered.

### Provider obligations

| Article | Obligation | Framework alignment | Example evidence |
| --- | --- | --- | --- |
| Art 6 and Annex III | Classification | Risk tiering in [risk management](../governance/risk-management.md) | Classification rationale, Art 6(3) assessment where used |
| Art 9 | Risk management system across the lifecycle | [Risk management](../governance/risk-management.md), lifecycle gates | Risk plan, test evidence, residual-risk decisions |
| Art 10 | Data and data governance | [Data protection](../security/data-protection.md), information context | Provenance, quality analysis, representativeness checks |
| Art 11 and Annex IV | Technical documentation | Architecture decisions, [specification-driven delivery](../delivery/specification-driven-delivery.md) | System description, versions, dependencies, limitations |
| Art 12 | Record-keeping through automatic logging | Audit and evidence service | Logging design, retention schedule, integrity controls |
| Art 13 | Transparency and information for deployers | Instructions for use, system cards | Instructions for use, capability and limitation statements |
| Art 14 | Human oversight | Oversight design, consequential action gates | Oversight roles, competence records, override tests |
| Art 15 | Accuracy, robustness and cybersecurity | Evaluation service, [threat model](../security/threat-model.md), resilience | Test reports, security assessment, production metrics |
| Art 17 | Quality management system | [Operating model](../governance/operating-model.md) | QMS procedures (EN 18286:2026 supports this article) |
| Art 43 | Conformity assessment | Lifecycle gate before release | Conformity assessment record, EU declaration of conformity |
| Art 49 | Registration in the EU database | Inventory | Registration record |
| Art 72 | Post-market monitoring | Operational monitoring | Monitoring plan, complaints, corrective actions |
| Art 73 | Serious incident reporting | [AI incident response](../security/incident-response.md) | Incident reports and timelines |

### Deployer obligations

Article 26 applies to every deployer of a high-risk system. Article 27 adds a fundamental rights impact assessment for some deployers.

| Article | Obligation | Framework alignment | Example evidence |
| --- | --- | --- | --- |
| Art 26(1) | Use the system according to its instructions | Intended use in the context record | Operating procedures |
| Art 26(2) | Assign human oversight to people with the competence, training, authority and support they need | [Roles and accountability](../delivery/roles-and-accountability.md) | Oversight assignments, training records |
| Art 26(4) | Keep input data relevant and sufficiently representative, where the deployer controls it | Information context, data quality checks | Data quality records |
| Art 26(5) | Monitor operation, inform the provider of risks, suspend use where needed | Operational monitoring, incident process | Monitoring records, provider notifications |
| Art 26(6) | Keep automatically generated logs for at least six months | Audit and evidence service | Retention configuration |
| Art 26(7) | Inform workers' representatives and affected workers before using the system at work | Change and communication plan | Notices to workers |
| Art 26(8) | Public authorities register their use, and do not use an unregistered system | Inventory | Registration record |
| Art 26(11) | Inform people who are subject to decisions made or assisted by an Annex III system | User notices | Notice text |
| Art 27 | Fundamental rights impact assessment before first use, for public-law bodies, private providers of public services, and deployers of credit scoring and life or health insurance pricing systems | Impact assessment in [risk management](../governance/risk-management.md) | Completed assessment, notification to the market surveillance authority |

The Omnibus lets a deployer reuse parts of a data protection impact assessment in the Article 27 assessment. The AI Office will publish a questionnaire template.

## Serious incidents

Article 73 requires providers of high-risk systems to report serious incidents to the market surveillance authority. The deadline runs from when the provider establishes a causal link, or a reasonable likelihood of one.

| Incident | Report within |
| --- | --- |
| General case | 15 days |
| Widespread infringement, or serious and irreversible disruption of critical infrastructure | 2 days |
| Death of a person | 10 days |

An initial report may be incomplete and followed by a full one. The [incident response](../security/incident-response.md) page covers the process.

## General-purpose AI models

Providers of general-purpose AI models have obligations under Article 53: technical documentation, information for downstream providers, a copyright policy and a public summary of training content. Models with systemic risk have more duties under Article 55, including evaluation, adversarial testing, incident reporting and cybersecurity. A deployer that builds on such a model should ask the model provider for the Article 53 information and keep it with the system's documentation.

## Penalties

| Breach | Maximum fine |
| --- | --- |
| Prohibited practices (Art 5) | EUR 35 million or 7% of worldwide annual turnover |
| Most operator obligations, including Arts 16, 26 and 50 | EUR 15 million or 3% |
| Incorrect or misleading information to authorities | EUR 7.5 million or 1% |
| General-purpose AI providers (Art 101) | EUR 15 million or 3% |

The higher amount applies, except for SMEs and small mid-caps, where the lower one applies.

## Commission guidance

| Document | Date |
| --- | --- |
| Guidelines on prohibited AI practices | 2025-02-04 |
| Guidelines on the definition of an AI system | 2025-02-06 |
| General-Purpose AI Code of Practice | 2025-07-10 |
| Guidelines on the scope of obligations for general-purpose AI providers | 2025-07-18 |
| Code of Practice on marking and labelling of AI-generated content | Final version 2026-06-10 |
| Guidelines on transparency obligations (Art 50) | Published July 2026 |
| Guidelines on high-risk classification (Art 6) | Draft 2026-05-19. The Commission plans final guidelines by the end of 2026. |

## Standards

No harmonised standards for the AI Act were cited in the Official Journal as of 2026-09-28, so none yet gives a presumption of conformity. CEN and CENELEC published EN 18286:2026, a quality management system standard that supports Article 17, in July 2026. Track the Commission's standardization page for citations.

## Sources

Checked 2026-09-28.

- Regulation (EU) 2024/1689: <http://data.europa.eu/eli/reg/2024/1689/oj>
- Regulation (EU) 2026/1744 (Digital Omnibus on AI): <http://data.europa.eu/eli/reg/2026/1744/oj>
- Commission news, AI Omnibus enters into force: <https://digital-strategy.ec.europa.eu/en/news/ai-omnibus-enters-force>
- European Parliament Legislative Train, Digital Omnibus on AI: <https://www.europarl.europa.eu/legislative-train/package-digital-package/file-digital-omnibus-on-ai>
- Guidelines on prohibited practices: <https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-prohibited-artificial-intelligence-ai-practices-defined-ai-act>
- Guidelines on the AI system definition: <https://digital-strategy.ec.europa.eu/en/library/commission-publishes-guidelines-ai-system-definition-facilitate-first-ai-acts-rules-application>
- General-Purpose AI Code of Practice: <https://digital-strategy.ec.europa.eu/en/policies/contents-code-gpai>
- Guidelines for general-purpose AI providers: <https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-providers-general-purpose-ai-models>
- Code of Practice on marking and labelling: <https://digital-strategy.ec.europa.eu/en/news/commission-publishes-code-practice-marking-and-labelling-ai-generated-content>
- Guidelines on transparency obligations: <https://digital-strategy.ec.europa.eu/en/policies/guidelines-ai-transparency-obligations>
- Draft guidelines on high-risk classification: <https://digital-strategy.ec.europa.eu/en/consultations/targeted-consultation-draft-guidelines-classification-high-risk-artificial-intelligence-systems>
- AI Act standardisation: <https://digital-strategy.ec.europa.eu/en/policies/ai-act-standardisation>
- EN 18286:2026: <https://www.cencenelec.eu/news-events/news/2026/en-in-the-spotlight/2026-07-30-ai-quality-management/>
