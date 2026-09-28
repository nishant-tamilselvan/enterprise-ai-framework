---
title: ISO/IEC 42001 Mapping
doc_status: Draft
version: 0.3.0
owners: Framework maintainers
audience: Compliance, legal, privacy, and assurance teams
last_reviewed: 2026-09-28
source_framework: ISO/IEC 42001:2023
---

# ISO/IEC 42001 mapping

--8<-- "compliance-disclaimer.md"

ISO/IEC 42001:2023 sets requirements for an AI management system (AIMS). An organization uses it to govern how it develops, provides or uses AI systems, and an accredited body can certify that management system. This framework does not certify anything. It supplies architecture and operational evidence that an AIMS can reference.

| Item | Value |
| --- | --- |
| Standard | ISO/IEC 42001:2023, *Information technology: Artificial intelligence: Management system* |
| Edition | 1.0, published 2023-12-18, by ISO/IEC JTC 1/SC 42 |
| Structure | Clauses 4 to 10 are requirements. Annex A lists 38 reference controls in 9 control objectives. Annex B gives implementation guidance for them. |
| Certification | Accredited certification bodies audit against ISO/IEC 42006:2025 |
| Last checked | 2026-09-28 |

## Management system clauses

Clauses 4 to 10 follow the harmonized structure that other ISO management system standards use, such as ISO/IEC 27001. Teams that already run an information security management system can extend it rather than build a second one.

| Clause | Requirement area | Framework alignment | Example evidence |
| --- | --- | --- | --- |
| 4 Context of the organization | Internal and external issues, interested parties, AIMS scope | [Enterprise Context Architecture](../architecture/context-architecture.md) context domains, stakeholder and affected-party analysis | Context register, AIMS scope statement, interested-party register |
| 5 Leadership | Commitment, AI policy (5.2), roles and authorities (5.3) | [Operating model](../governance/operating-model.md), [policies](../governance/policies.md) | Approved AI policy, charters, RACI |
| 6 Planning | AI risk assessment (6.1.2), AI risk treatment (6.1.3), AI system impact assessment (6.1.4), AI objectives (6.2) | [Risk management](../governance/risk-management.md), risk tiering, impact assessment | Risk register, treatment plan, statement of applicability, impact assessments, measurable objectives |
| 7 Support | Resources, competence, awareness, communication, documented information | [Capability model](../architecture/capability-model.md), [roles and accountability](../delivery/roles-and-accountability.md) | Skills records, training records, communication plan, document control |
| 8 Operation | Operational planning and control, and running the assessments from clause 6 (8.2 to 8.4) | Lifecycle gates, [specification-driven delivery](../delivery/specification-driven-delivery.md), supplier governance | Design records, evaluations, gate approvals, supplier contracts |
| 9 Performance evaluation | Monitoring and measurement (9.1), internal audit (9.2), management review (9.3) | Outcome and harm indicators, independent assurance | Dashboards, audit reports, management review minutes |
| 10 Improvement | Continual improvement, nonconformity and corrective action | Incident handling, [AI incident response](../security/incident-response.md), lessons learned | Corrective actions, root-cause analyses, change history |

## Annex A controls

Annex A is a reference set. An organization selects the controls its risk treatment needs, and records each inclusion or exclusion with a justification in its statement of applicability (6.1.3).

| Objective | Controls | Framework alignment | Example evidence |
| --- | --- | --- | --- |
| A.2 Policies related to AI | A.2.2 AI policy; A.2.3 Alignment with other organizational policies; A.2.4 Review of the AI policy | [Policies](../governance/policies.md) | AI policy, policy crosswalk, review records |
| A.3 Internal organization | A.3.2 AI roles and responsibilities; A.3.3 Reporting of concerns | [Operating model](../governance/operating-model.md), [roles and accountability](../delivery/roles-and-accountability.md) | RACI, concern-reporting channel and records |
| A.4 Resources for AI systems | A.4.2 Resource documentation; A.4.3 Data resources; A.4.4 Tooling resources; A.4.5 System and computing resources; A.4.6 Human resources | [Capability model](../architecture/capability-model.md), system inventory | Component inventory, data and tool registers, staffing plan |
| A.5 Assessing impacts of AI systems | A.5.2 AI system impact assessment process; A.5.3 Documentation of AI system impact assessments; A.5.4 Assessing AI system impact on individuals or groups of individuals; A.5.5 Assessing societal impacts of AI systems | [Risk management](../governance/risk-management.md), impact assessment | Impact assessment procedure and records (ISO/IEC 42005 gives guidance) |
| A.6 AI system life cycle | A.6.1.2 Objectives for responsible development of AI system; A.6.1.3 Processes for responsible AI system design and development; A.6.2.2 AI system requirements and specification; A.6.2.3 Documentation of AI system design and development; A.6.2.4 AI system verification and validation; A.6.2.5 AI system deployment; A.6.2.6 AI system operation and monitoring; A.6.2.7 AI system technical documentation; A.6.2.8 AI system recording of event logs | [Specification-driven delivery](../delivery/specification-driven-delivery.md), lifecycle gates, evaluation service | Specifications, design records, evaluation reports, deployment approvals, monitoring plan, technical documentation, logging design |
| A.7 Data for AI systems | A.7.2 Data for development and enhancement of AI system; A.7.3 Acquisition of data; A.7.4 Quality of data for AI systems; A.7.5 Data provenance; A.7.6 Data preparation | [Data protection](../security/data-protection.md), information context | Data sheets, acquisition terms, quality analysis, lineage records, preparation steps |
| A.8 Information for interested parties of AI systems | A.8.2 System documentation and information for users; A.8.3 External reporting; A.8.4 Communication of incidents; A.8.5 Information for interested parties | Transparency notices, [AI incident response](../security/incident-response.md) | User documentation, system cards, external reports, incident notices |
| A.9 Use of AI systems | A.9.2 Processes for responsible use of AI systems; A.9.3 Objectives for responsible use of AI system; A.9.4 Intended use of the AI system | Intended and prohibited use in the context record, human oversight design | Acceptable-use rules, intended-use statement, oversight records |
| A.10 Third-party and customer relationships | A.10.2 Allocation of responsibilities; A.10.3 Suppliers; A.10.4 Customers | Supplier model, supply-chain controls in the [threat model](../security/threat-model.md) | Responsibility matrix, supplier assessments, customer terms |

Annex C lists possible AI-related organizational objectives and risk sources, such as fairness, transparency, safety, privacy and robustness. Annex D describes use of the management system across domains and sectors.

## Related standards

| Standard | Use it for |
| --- | --- |
| ISO/IEC 22989:2022 | AI concepts and terminology |
| ISO/IEC 23894:2023 | Guidance on AI risk management |
| ISO/IEC 5338:2023 | AI system life cycle processes |
| ISO/IEC 42005:2025 (published 2025-05-28) | Guidance on AI system impact assessment, which supports 6.1.4 and A.5 |
| ISO/IEC 42006:2025 (published 2025-07-07) | Requirements for bodies that audit and certify an AIMS |
| ISO/IEC 27001:2022 | Information security management, which shares the clause structure |

## Sources

Checked 2026-09-28.

- ISO/IEC 42001:2023 publication record: <https://webstore.iec.ch/en/publication/90574>
- ISO/IEC 42005:2025: <https://webstore.iec.ch/en/publication/107659>
- ISO/IEC 42006:2025: <https://webstore.iec.ch/en/publication/108460>
- ISO/IEC 23894:2023: <https://webstore.iec.ch/en/publication/82914>

The clause and control titles above are short identifiers. Read the licensed standard for the requirements themselves.
