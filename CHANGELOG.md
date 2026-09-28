# Changelog

This file records all notable project changes.

The project uses the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- AI supply chain and AI incident response pages in the Security section.
- A shared disclaimer on every compliance mapping page (`includes/compliance-disclaimer.md`).
- `CLAUDE.md` and a `.claude/skills/writing-style` pointer, so Claude Code follows the same writing rules as Copilot.
- Draft release notes for 0.3.0.
- `LICENSES/MIT.txt`: code (scripts, theme overrides, workflows, and configuration) is now licensed under MIT. Content stays under CC BY 4.0.
- Supply-chain hardening: Dependabot for actions and pip (MkDocs stays on 1.x), OpenSSF Scorecard, CodeQL for workflows and Python, a gitleaks secret scan with a verified checksum, and a DCO sign-off check on pull requests.
- Pre-commit hooks: file hygiene, markdownlint, gitleaks, and a denylist check (`scripts/ci/denylist.py`) whose organization patterns stay out of the repository.
- `.gitattributes` for LF line endings, and `.markdownlint-cli2.jsonc`, which ignores `.venv`, `tmp`, and `site`.
- Security contact request issue template, for reporters who cannot use the private report form.
- `writing-style` skill under `.github/skills/`, with a machine-readable rule file (`references/banned.json`) and a checker script (`scripts/sloplint.py`).

### Changed

- The four compliance mappings cite article, clause and category identifiers, record the date their facts were checked, and list their sources. The EU AI Act mapping reflects the Digital Omnibus on AI (Regulation (EU) 2026/1744).
- The threat model, zero-trust and data protection pages name threats with OWASP and MITRE ATLAS identifiers and cover improper output handling, excessive agency, MCP tool poisoning and hidden context exposure, using OWASP LLM Top 10 2026 IDs with a crosswalk from the 2025 IDs.
- The Copilot instructions point at the `writing-style` skill instead of the old instructions file.
- `LICENSE` now holds the full Creative Commons Attribution 4.0 legal code, so GitHub detects the license as CC-BY-4.0.
- Workflows pin every action to a full commit SHA, set `persist-credentials: false`, and set job timeouts. The Pages workflow grants `pages: write` and `id-token: write` to the deploy job only, and it now also runs when `overrides/` changes.
- The Documentation quality workflow also builds the site in strict mode and runs the repository checks.
- The README License section, `CONTRIBUTING.md`, and `CITATION.cff` describe the two-license setup.
- `SECURITY.md` explains how to reach the private report form, and gives a fallback: a detail-free security contact request issue.

### Deprecated

### Removed

- `.markdownlint.json`, replaced by `.markdownlint-cli2.jsonc`.
- `.github/instructions/writing-style.instructions.md`, replaced by the `writing-style` skill. It named an internal source and quoted a budget figure that read as real.

### Fixed

- The frontmatter of the Enterprise Context Architecture page is valid YAML again, so its social card description loads.
- The "Illustrative only" note on the team topologies page renders its text inside the box.

### Security

## [0.2.0] - 2026-07-28

### Added

- **Delivery** section: an operating model for AI-assisted delivery, covering specification-driven delivery, roles and accountability (with a RACI across the governance lifecycle gates), and team topologies.
- Four hero infographics for the Delivery section (overview, specification, roles, and team topologies), each with descriptive alt text.
- Delivery navigation section, a home-page Delivery card, and a governance operating-model cross-link to the delivery model.
- Dedicated "ECA and the TOGAF ADM" page mapping each ADM phase (A through H) to ECA context domains.
- Enterprise Context Architecture wheel and ADM-cycle reference diagrams.
- Context ownership, right-sizing, and documentation-to-runtime guidance, plus a background note on what ECA builds on.
- Roadmap item for a reference implementation with before/after adoption metrics.

### Changed

- Adopted **Enterprise Context Architecture (ECA)** as the flagship model. ECA replaces the earlier "Enterprise AI Context Architecture (EAICA)" framing, defines seven context domains centred on Requirements Management, and provides a cross-cutting perspective on the TOGAF ADM.
- Folded financial considerations (value and cost, cost of operations, application and vendor portfolio lifecycle) into the Business, Operational, and Technology contexts.

### Fixed

- Corrected the ECA and TOGAF ADM phase labels (phases D through G) to the canonical TOGAF ADM naming.

## [0.1.0] - 2026-07-26

### Added

- Production-grade documentation repository structure.
- MkDocs Material publishing configuration.
- Architecture, governance, security, compliance, and blueprint document skeletons.
- Compliance mapping templates for NIST AI RMF, ISO/IEC 42001, the EU AI Act, and FedRAMP.
- Contribution, governance, security, citation, and release infrastructure.

[Unreleased]: https://github.com/nishant-tamilselvan/enterprise-ai-framework/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/nishant-tamilselvan/enterprise-ai-framework/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/nishant-tamilselvan/enterprise-ai-framework/releases/tag/v0.1.0
