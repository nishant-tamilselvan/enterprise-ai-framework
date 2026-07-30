# Enterprise AI Framework

[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)
[![Documentation](https://github.com/nishant-tamilselvan/enterprise-ai-framework/actions/workflows/docs-deploy.yml/badge.svg)](https://github.com/nishant-tamilselvan/enterprise-ai-framework/actions/workflows/docs-deploy.yml)
[![Markdown Quality](https://github.com/nishant-tamilselvan/enterprise-ai-framework/actions/workflows/markdown-lint.yml/badge.svg)](https://github.com/nishant-tamilselvan/enterprise-ai-framework/actions/workflows/markdown-lint.yml)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](releases/v0.1.0.md)
[![Docs site](https://img.shields.io/badge/docs-live-brightgreen.svg)](https://nishant-tamilselvan.github.io/enterprise-ai-framework/)

The Enterprise AI Framework is an open, vendor-neutral architecture framework for responsible AI adoption in government, public-sector, and regulated organizations.

**Live documentation:** <https://nishant-tamilselvan.github.io/enterprise-ai-framework/>

[![Enterprise Context Architecture as a cross-cutting perspective on the TOGAF ADM cycle. Seven context domains (People & Org, Business, Information, Technology, Governance, Integration, and Operational) surround Requirements Management at the centre. The eight ADM phases, A through H, encircle the domains.](docs/assets/diagrams/eca-adm-overview.png)](https://nishant-tamilselvan.github.io/enterprise-ai-framework/architecture/context-architecture/#context-wheel)

> [!IMPORTANT]
> Use this project for architecture guidance. Organizations remain responsible for obtaining qualified legal, regulatory, security, procurement, and compliance advice and satisfying their obligations.

## Vision

The framework enables organizations to adopt AI through a shared architectural language that connects mission outcomes, business context, governance, data, models, integration, security, operations, and assurance.

The initial body of work defines the **Enterprise Context Architecture (ECA)**: a cross-cutting perspective that places AI capabilities within the organizational, regulatory, operational, and technical contexts that determine whether they can be trusted and sustained.

## Scope

The framework covers:

- architectural perspectives and principles;
- enterprise capability and operating models;
- responsible AI governance and risk management;
- data, model, context, and integration layers;
- identity, zero-trust security, privacy, and resilience;
- lifecycle operations, evaluation, monitoring, and assurance;
- public-sector and regulated-industry reference blueprints; and
- traceable mappings to major standards and regulatory frameworks.

It is vendor-neutral and remains independent of any specific cloud, model provider, product, or implementation platform.

## Target audience

- Government executives, CIOs, CTOs, CDOs, and CAIOs
- Enterprise, solution, security, data, and AI architects
- Responsible AI, risk, privacy, compliance, and audit leaders
- Digital-service and public-policy teams
- Engineering, platform, MLOps, and cybersecurity practitioners
- Researchers, standards bodies, and technology partners

## Start here

| Area | Document |
| --- | --- |
| Live documentation site | <https://nishant-tamilselvan.github.io/enterprise-ai-framework/> |
| Framework entry point | [Documentation home](docs/index.md) |
| Core architecture | [Enterprise Context Architecture (ECA)](docs/architecture/context-architecture.md) |
| Capability model | [Enterprise AI Capability Model](docs/architecture/capability-model.md) |
| Governance | [Governance overview](docs/governance/overview.md) |
| Security | [Security overview](docs/security/overview.md) |
| Compliance | [Compliance mappings](docs/compliance/overview.md) |
| Blueprints | [Domain blueprints](docs/blueprints/overview.md) |
| Definitions | [Glossary](docs/glossary.md) |
| Releases | [Release notes](releases/README.md) |

## Repository structure

```text
.
├── .github/                 # Workflows and contribution templates
├── docs/
│   ├── architecture/        # Core architecture and capability model
│   ├── governance/          # Operating model, policies, and risk
│   ├── security/            # Security, privacy, and threat modeling
│   ├── compliance/          # Standards and regulatory mappings
│   ├── blueprints/          # Reusable domain reference architectures
│   ├── blog/                # Editorial posts and announcement templates
│   └── assets/              # Diagrams, images, and branding
├── releases/                # Versioned release notes and template
├── CHANGELOG.md             # Notable changes by version
├── CONTRIBUTING.md          # Contribution workflow and editorial rules
├── GOVERNANCE.md            # Stewardship and decision model
├── LICENSE                  # Creative Commons Attribution 4.0
├── mkdocs.yml               # Documentation-site configuration
└── requirements-docs.txt    # Reproducible documentation dependencies
```

## Principles

1. **Mission and public value**: architecture starts with outcomes and affected people.
2. **Accountability**: decision rights, evidence, and human oversight are explicit.
3. **Proportionate controls**: assurance depth reflects impact and exposure.
4. **Secure defaults**: zero trust, minimization, and resilience span the lifecycle.
5. **Interoperability**: portable patterns and standards reduce lock-in.
6. **Evidence**: evaluation, traceability, and monitoring support every claim.
7. **Enterprise context**: organizational, legal, semantic, and operational context are first-class concerns.

## Contributing

The project accepts contributions from public servants, practitioners, researchers, standards experts, vendors, and civil-society participants.

1. Read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md).
2. Search existing issues before proposing a whitepaper or correction.
3. Open an issue using the appropriate template.
4. Create a focused branch and submit a pull request.
5. Sign off commits under the Developer Certificate of Origin process described in the contribution guide.

Editorial changes must distinguish normative requirements (`MUST`, `SHOULD`, `MAY`) from informative guidance and cite authoritative sources.

## Roadmap

### v0.1: Foundation

- Repository governance and publishing workflow
- Enterprise Context Architecture (ECA) outline
- Initial capability, governance, security, and compliance structures

### v0.2: Architecture baseline

- Architecture perspectives and layered reference model
- Enterprise AI capability model
- Context and integration patterns
- Reference diagrams and glossary expansion

### v0.3: Assurance and governance

- Governance operating model and policy patterns
- Threat model and zero-trust AI guidance
- NIST AI RMF and ISO/IEC 42001 mappings

### v0.4: Domain blueprints

- Public-sector retrieval-augmented generation blueprint
- Regulated-enterprise AI blueprint
- EU AI Act and FedRAMP mapping refinements
- Reference implementation with pre-adoption and post-adoption metrics

### v1.0: Stable framework

- Public review resolution
- Stable terminology and conformance model
- Versioned whitepaper publication package

Roadmap priorities may change through the process described in [GOVERNANCE.md](GOVERNANCE.md).

## Documentation site

MkDocs Material builds the site. Install dependencies from `requirements-docs.txt`, then run `mkdocs serve` locally or `mkdocs build --strict` for validation. GitHub Actions publishes changes to `master`.

## Releases and versioning

The framework uses [Semantic Versioning](https://semver.org/) for repository releases and [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) for notable changes. Each major or minor architecture release receives versioned notes under [`releases/`](releases/README.md).

## Citation

Use the metadata in [`CITATION.cff`](CITATION.cff). When adapting the framework, retain attribution, identify modifications, and link to the source and license.

## License

Unless a file identifies another license, the project licenses repository documentation, diagrams, architectural frameworks, and blueprints under the [Creative Commons Attribution 4.0 International License](LICENSE).

Copyright © 2026 NISHANT TAMILSELVAN and contributors.
