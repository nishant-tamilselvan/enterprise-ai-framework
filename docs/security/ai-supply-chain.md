---
title: AI Supply Chain Security
doc_status: Draft
version: 0.3.0
owners: Framework maintainers
audience: Security architects and engineers
last_reviewed: 2026-09-28
---

# AI supply chain security

An AI system depends on more than software packages. It also depends on models, adapters, datasets, prompts, tool servers and hosted AI services, and any of them can be tampered with or withdrawn. OWASP lists supply chain as LLM04:2026 and, for agents, ASI04. MITRE ATLAS covers it as AML.T0010, with sub-techniques for AI software, data, models, container registries and agent tools.

## Inventory of AI components

| Component | Record |
| --- | --- |
| Models and adapters | Name, version, source, license, hash, signature, intended use, evaluation results |
| Datasets | Source, license, collection date, preprocessing, hash, known limitations |
| AI software | Frameworks, runtimes, inference servers, with versions |
| Prompts and policies | Versioned system prompts and guardrail configurations |
| Tools and MCP servers | Publisher, version, tool definitions, permissions requested |
| Hosted AI services | Provider, model version, region, data terms, fallback |

## AI bill of materials

An AI bill of materials (AI-BOM) extends a software bill of materials (SBOM) to models and datasets. Two open formats support it.

| Format | AI support |
| --- | --- |
| [CycloneDX](https://cyclonedx.org/) | Machine learning BOMs since version 1.5. The current version is 1.7. |
| [SPDX](https://spdx.dev/) | Version 3.0 adds AI and Dataset profiles |

CISA and G7 partners published *Software Bill of Materials for AI: Minimum Elements* on 2026-05-12. Use it to decide which fields your AI-BOMs must carry. Generate the AI-BOM in the build pipeline, store it with the release, and ask suppliers for theirs.

## Integrity and provenance

| Control | How |
| --- | --- |
| Sign models | [OpenSSF model signing](https://github.com/sigstore/model-transparency) (v1.0 released 2025-04-04) signs model files with Sigstore bundles, using keyless signing, certificates or keys |
| Verify before loading | Check the signature and hash at deployment and at load time, and refuse unsigned artifacts |
| Build provenance | Produce [SLSA](https://slsa.dev/) provenance for training and packaging pipelines. SLSA v1.2 adds a Source track. |
| Safe formats | Prefer weight formats that cannot execute code on load, and scan formats that can |
| Pin versions | Pin model, dataset and tool versions, and alert on changes, including hosted model version changes |
| Mirror | Load models and packages from an internal registry, not straight from public hubs |

## Suppliers and hosted services

- Assess each AI supplier's security, data handling and incident notification terms.
- Record which controls the supplier provides and which you inherit.
- Plan an exit: a fallback model or a degraded mode if a supplier fails or changes terms.
- Watch for concentration risk, where many systems depend on one provider.

## Sources

Checked 2026-09-28.

- OWASP Top 10 for LLM Applications 2026 (LLM04:2026 Supply Chain): <https://genai.owasp.org/resource/owasp-genai-llm-top-10-2026/>
- MITRE ATLAS, technique AML.T0010 AI Supply Chain Compromise: <https://atlas.mitre.org/>
- CycloneDX specification releases: <https://github.com/CycloneDX/specification/releases>
- SPDX 3.0.1: <https://spdx.github.io/spdx-spec/v3.0.1/>
- Software Bill of Materials for AI: Minimum Elements (2026-05-12): <https://www.cisa.gov/resources-tools/resources/software-bill-materials-ai-minimum-elements>
- OpenSSF model signing v1.0: <https://openssf.org/blog/2025/04/04/launch-of-model-signing-v1-0-openssf-ai-ml-working-group-secures-the-machine-learning-supply-chain/>
- SLSA v1.2: <https://slsa.dev/blog/2025/11/announce-slsa-v1.2>
