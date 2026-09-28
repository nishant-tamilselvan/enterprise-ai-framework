---
icon: material/format-list-checks
title: NIST AI RMF Mapping
doc_status: Draft
version: 0.3.0
owners: Framework maintainers
audience: Compliance, legal, privacy, and assurance teams
last_reviewed: 2026-09-28
source_framework: NIST AI RMF 1.0 (NIST AI 100-1); Generative AI Profile (NIST AI 600-1)
---

# NIST AI RMF mapping

--8<-- "compliance-disclaimer.md"

The NIST AI Risk Management Framework (AI RMF) is voluntary guidance for managing risks to people, organizations and society from AI systems. It has four functions. GOVERN is cross-cutting. MAP, MEASURE and MANAGE apply across the AI lifecycle. This page maps each of the 19 categories to the framework, then maps the trustworthiness characteristics and the Generative AI Profile risks.

| Item | Value |
| --- | --- |
| Core document | NIST AI 100-1, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, released 2023-01-26 |
| Generative AI Profile | NIST AI 600-1, *Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile*, July 2024 |
| Structure | 4 functions, 19 categories, 72 subcategories |
| Revision | NIST is revising AI RMF 1.0 under the White House AI Action Plan. No draft had been published by 2026-09-28. The Playbook will be updated after the revision. |
| Last checked | 2026-09-28 |

!!! note "Revision in progress"
    The AI Action Plan directs NIST to remove references to misinformation, diversity,
    equity and inclusion, and climate change. Category titles such as GOVERN 3 and some
    AI 600-1 risk names may change. Recheck this page against the revised framework when
    NIST publishes it.

## Functions and categories

The category text below is NIST's own wording, shortened where marked with an ellipsis. NIST publications are in the public domain in the United States.

### GOVERN

| Category | NIST outcome | Framework alignment | Example evidence |
| --- | --- | --- | --- |
| GOVERN 1 | Policies, processes, procedures and practices for mapping, measuring and managing AI risks are in place, transparent and implemented effectively | [Policies](../governance/policies.md), [operating model](../governance/operating-model.md) | Approved AI policy, AI inventory, risk tolerance statement |
| GOVERN 2 | Accountability structures are in place so that teams and individuals are empowered, responsible and trained | [Roles and accountability](../delivery/roles-and-accountability.md) | RACI, named risk owners, training records |
| GOVERN 3 | Workforce diversity, equity, inclusion and accessibility processes are prioritized … | Team composition in [team topologies](../delivery/team-topologies.md), accessibility review | Staffing plan, accessibility review records |
| GOVERN 4 | Organizational teams are committed to a culture that considers and communicates AI risk | Governance forums, concern reporting | Forum minutes, reported concerns and outcomes |
| GOVERN 5 | Processes are in place for robust engagement with relevant AI actors | Stakeholder and affected-party analysis in the [context architecture](../architecture/context-architecture.md) | Engagement records, feedback channels |
| GOVERN 6 | Policies and procedures address AI risks and benefits from third-party software, data and other supply chain issues | Supplier model, supply-chain controls in the [threat model](../security/threat-model.md) | Supplier assessments, AI-BOMs, contracts, exit plans |

### MAP

| Category | NIST outcome | Framework alignment | Example evidence |
| --- | --- | --- | --- |
| MAP 1 | Context is established and understood | [Enterprise Context Architecture](../architecture/context-architecture.md) context domains | Context record, intended and prohibited use |
| MAP 2 | Categorization of the AI system is performed | Risk tiering in [risk management](../governance/risk-management.md) | Classification rationale, risk tier |
| MAP 3 | AI capabilities, targeted usage, goals, and expected benefits and costs … are understood | Specification in [specification-driven delivery](../delivery/specification-driven-delivery.md) | Specification, benefit case, baseline comparison |
| MAP 4 | Risks and benefits are mapped for all components, including third-party software and data | [Reference diagrams](../architecture/reference-diagrams.md), system boundary, component inventory | Component inventory, dependency map, AI-BOM |
| MAP 5 | Impacts to individuals, groups, communities, organizations and society are characterized | Impact assessment | Impact assessment, affected-party analysis |

### MEASURE

| Category | NIST outcome | Framework alignment | Example evidence |
| --- | --- | --- | --- |
| MEASURE 1 | Appropriate methods and metrics are identified and applied | Evaluation service, outcome and harm indicators | Evaluation plan, metric definitions |
| MEASURE 2 | AI systems are evaluated for trustworthy characteristics | Evaluation service, red teaming, security testing | Evaluation results, red-team report, bias and robustness tests |
| MEASURE 3 | Mechanisms for tracking identified AI risks over time are in place | Operational monitoring | Monitoring dashboards, drift alerts, risk register updates |
| MEASURE 4 | Feedback about efficacy of measurement is gathered and assessed | Independent assurance, management review | Assurance reports, metric reviews |

### MANAGE

| Category | NIST outcome | Framework alignment | Example evidence |
| --- | --- | --- | --- |
| MANAGE 1 | AI risks from the MAP and MEASURE functions are prioritized, responded to and managed | Lifecycle gates, risk treatment | Risk treatment decisions, gate approvals |
| MANAGE 2 | Strategies to maximize benefits and minimize negative impacts are planned, prepared, implemented, documented and informed by relevant AI actors | Deployment constraints, human oversight design | Deployment plan, oversight design, fallback design |
| MANAGE 3 | AI risks and benefits from third-party entities are managed | Supplier governance | Supplier monitoring, contract controls |
| MANAGE 4 | Risk treatments, including response and recovery, and communication plans are documented and monitored regularly | [AI incident response](../security/incident-response.md), corrective action | Incident records, post-incident reviews, communication plans |

## Trustworthiness characteristics

AI 100-1 section 3 defines seven characteristics. MEASURE 2 evaluates them. Turn each one into measurable requirements in the specification.

| Section | Characteristic | Framework alignment |
| --- | --- | --- |
| 3.1 | Valid and Reliable | Evaluation against the specification, grounding, production metrics |
| 3.2 | Safe | Constrained use, human oversight, consequential action gates |
| 3.3 | Secure and Resilient | [Security overview](../security/overview.md), [zero-trust AI](../security/zero-trust-ai.md), graceful degradation |
| 3.4 | Accountable and Transparent | Named owners, audit evidence, user notices |
| 3.5 | Explainable and Interpretable | Citations, decision records, explanation to affected people |
| 3.6 | Privacy-Enhanced | [Data protection](../security/data-protection.md), minimization |
| 3.7 | Fair – with Harmful Bias Managed | Bias evaluation, representativeness checks, appeal routes |

## Generative AI Profile risks

AI 600-1 describes 12 risks that generative AI creates or makes worse, and suggests actions for each. The table maps them to the framework in NIST's order.

| Section | Risk | Framework controls |
| --- | --- | --- |
| 2.1 | CBRN Information or Capabilities | Prohibited-use policy, output filtering, provider safeguards |
| 2.2 | Confabulation | Grounding, citations, abstention, human review of consequential output |
| 2.3 | Dangerous, Violent, or Hateful Content | Content safety filters, abuse monitoring |
| 2.4 | Data Privacy | [Data protection](../security/data-protection.md), prompt and log minimization |
| 2.5 | Environmental Impacts | Right-sizing models, usage budgets, reporting |
| 2.6 | Harmful Bias and Homogenization | Bias evaluation, diverse evaluation sets |
| 2.7 | Human-AI Configuration | Human oversight design, automation-bias training, clear disclosure |
| 2.8 | Information Integrity | Provenance, content credentials, source citation |
| 2.9 | Information Security | [Threat model](../security/threat-model.md): prompt injection, output handling, supply chain |
| 2.10 | Intellectual Property | Licensed data sources, output review, supplier terms |
| 2.11 | Obscene, Degrading, and/or Abusive Content | Content safety filters, abuse reporting |
| 2.12 | Value Chain and Component Integration | Supplier assessment, AI-BOM, model signing |

## Related NIST work

| Publication | Status on 2026-09-28 | Use it for |
| --- | --- | --- |
| NIST AI 100-2e2025, *Adversarial Machine Learning: A Taxonomy and Terminology of Attacks and Mitigations* | Final, March 2025 | Naming attacks in the threat model |
| SP 800-218A, *Secure Software Development Practices for Generative AI and Dual-Use Foundation Models* | Final, July 2024 | Secure development of AI components |
| NIST IR 8596, *Cybersecurity Framework Profile for Artificial Intelligence (Cyber AI Profile)* | Initial preliminary draft, December 2025 | Mapping AI security to CSF 2.0 |
| Control Overlays for Securing AI Systems (COSAiS) | Concept paper and outline, no published overlay | SP 800-53 tailoring for AI (see the [FedRAMP mapping](fedramp-mapping.md)) |
| NIST AI 800-2, *Practices for Automated Benchmark Evaluations of Language Models* | Initial public draft, January 2026 | Evaluation practice |
| NIST AI 800-4, *Challenges to the Monitoring of Deployed AI Systems* | Final, March 2026 | Operational monitoring design |

In June 2025 the US AI Safety Institute became the Center for AI Standards and Innovation (CAISI), still inside NIST.

NIST lists crosswalks from the AI RMF to other frameworks. The ISO/IEC 42001 crosswalk it lists was written by a third party against the final draft of 42001. The EU AI Act crosswalk dates from January 2023 and maps to the proposed Act, not the adopted Regulation. Use them as starting points only.

## Tailoring questions

- Which profile applies: the Generative AI Profile, a sector profile, or an organizational profile?
- How does the specification turn each trustworthiness characteristic into a measurable requirement?
- Who evaluates the system independently of the team that builds and runs it?
- How do incidents and monitoring results feed back into GOVERN, MAP and MEASURE?

## Sources

Checked 2026-09-28.

- [NIST AI 100-1](https://doi.org/10.6028/NIST.AI.100-1)
- [NIST AI 600-1](https://doi.org/10.6028/NIST.AI.600-1)
- [AI RMF page and revision status](https://www.nist.gov/itl/ai-risk-management-framework)
- [AI RMF Playbook](https://airc.nist.gov/airmf-resources/playbook/)
- [AI RMF crosswalks](https://airc.nist.gov/airmf-resources/crosswalks/)
- [NIST AI 100-2e2025](https://doi.org/10.6028/NIST.AI.100-2e2025)
- [SP 800-218A](https://doi.org/10.6028/NIST.SP.800-218A)
- [NIST IR 8596 (draft)](https://csrc.nist.gov/pubs/ir/8596/iprd)
- [NIST AI 800-2 (draft)](https://doi.org/10.6028/NIST.AI.800-2.ipd)
- [NIST AI 800-4](https://doi.org/10.6028/NIST.AI.800-4)
- [CAISI](https://www.nist.gov/caisi)
