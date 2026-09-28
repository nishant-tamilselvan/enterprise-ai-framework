---
title: Compliance and Standards Mappings
doc_status: Draft
version: 0.3.0
owners: Framework maintainers
audience: Compliance, legal, privacy, and assurance teams
last_reviewed: 2026-09-28
---

# Compliance and standards mappings

--8<-- "compliance-disclaimer.md"

These mappings help teams trace architecture capabilities and evidence to external frameworks. Use them as informative starting points for qualified review.

## Available mappings

| Mapping | Source | Maps |
| --- | --- | --- |
| [NIST AI RMF](nist-ai-rmf-mapping.md) | NIST AI 100-1 and the Generative AI Profile (AI 600-1) | All 19 categories, the 7 trustworthiness characteristics, the 12 generative AI risks |
| [ISO/IEC 42001](iso-iec-42001-mapping.md) | ISO/IEC 42001:2023 | Clauses 4 to 10, and all 38 Annex A controls |
| [EU AI Act](eu-ai-act-mapping.md) | Regulation (EU) 2024/1689, as amended by (EU) 2026/1744 | Timeline, roles, obligations for all systems, provider and deployer obligations for high-risk systems, incident reporting, penalties |
| [FedRAMP](fedramp-mapping.md) | FedRAMP CR26 and NIST SP 800-53 Rev. 5 | Certification classes, Key Security Indicators, the SP 800-53 families where AI changes the evidence |
| [Control mapping template](templates/control-mapping-template.md) | Any framework | A blank traceability matrix |

Each mapping records the date its facts were checked. Recheck any date-sensitive fact against the source before you rely on it.

## Mapping method

1. Record the authoritative source, edition, jurisdiction, and access date.
2. Decompose requirements without changing their meaning.
3. Link each requirement to responsible capabilities and architecture layers.
4. Identify implementation and independent validation evidence.
5. Record applicability, inheritance, gaps, compensating controls, and status.
6. Obtain review from qualified legal, compliance, security, privacy, and audit functions.
7. Revalidate after authoritative-source or system changes.

!!! danger "Compliance evidence"
    A mapped architecture supports traceability. A compliance claim requires evidence that
    controls are implemented, operate effectively, and suit the specific organization and
    system.
