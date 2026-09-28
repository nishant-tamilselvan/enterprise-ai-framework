# Changelog

This file records all notable project changes.

The project uses the [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format and [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- A "Reference implementation: AEGIS" page in the Delivery section. It maps the specification, the lifecycle gates, and the security controls to AEGIS, and lists what AEGIS does not cover.
- "In practice" callouts on the specification-driven delivery, operating model, zero-trust, and threat model pages.
- `standards/`: six framework rules as a starter standards library in the format AEGIS reads, marked Draft for each organization to review and approve.
- A blog post walking one example from idea to release approval with AEGIS, and a draft post announcing 0.3.0.
- A "Tools and implementations" section in `CONTRIBUTING.md` that sets the rules for listing a tool.
- `.github/assets/` with a README banner, a social preview image and its editable source, and section icons, plus a note on their sources and licenses.
- A diagram viewer: select any diagram, or its Expand button, to open it full screen and zoom with the mouse wheel, a pinch, or buttons, and drag to move (`docs/javascripts/diagrams.js`).
- Provenance captions on the ECA wheel and the four Delivery images, all generated with NotebookLM, and a contribution rule that AI-generated figures name their tool.
- `.github/CODEOWNERS`, so GitHub requests a maintainer review on every pull request.
- Conduct contact request issue template, the private reporting route in the Code of Conduct.
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

- The README has a banner, release, CI, Scorecard, and license badges, a section guide with icons, a role-based starting guide, a quick start for running the site locally, and an updated repository map.
- Repository settings: a description and website, 16 topics, Discussions, auto-merge, required SHA pinning for actions, immutable releases, and a ruleset that protects release tags.
- Mermaid diagrams render in the page instead of in Material's closed shadow DOM, span the full content width, and follow the light and dark theme. The context wheels and the delivery diagrams use layouts that read at page width.
- Site navigation uses one tab per section, so the sidebar lists only the current section's pages. Pages show breadcrumbs, and the table of contents follows scrolling.
- Every page has an icon in the navigation, and each page title is followed by chips for its status, version, audience, and last review date.
- Stronger heading hierarchy, clearer sidebar section labels and active page, tinted table headers, and hero buttons with icons that meet contrast on the gradient.
- Source lists show named links instead of raw URLs, and the footer names both licenses.
- Every page under `docs/` except blog posts states `doc_status`, `version`, `owners`, `audience`, and `last_reviewed` in its frontmatter. `version` is the release in which the page last changed in substance, and `CONTRIBUTING.md` documents each field.
- The Delivery and ECA images shrink from about 17 MB to under 1 MB, with no visible loss of legibility.
- The site uses American spelling throughout. Official titles and EU legal terms keep their published spelling.
- The README version badge shows 0.2.0, and the roadmap lists what each release shipped.
- `CONTRIBUTING.md` and `GOVERNANCE.md` state the same approval rule, including how it works with one maintainer.
- The Code of Conduct gives a private reporting route and GitHub's own reporting feature.
- The Copilot instructions forbid organization names, point to the denylist check, and list the checks to run.
- The four compliance mappings cite article, clause and category identifiers, record the date their facts were checked, and list their sources. The EU AI Act mapping reflects the Digital Omnibus on AI (Regulation (EU) 2026/1744).
- The threat model, zero-trust and data protection pages name threats with OWASP and MITRE ATLAS identifiers and cover improper output handling, excessive agency, MCP tool poisoning and hidden context exposure, using OWASP LLM Top 10 2026 IDs with a crosswalk from the 2025 IDs.
- The Copilot instructions point at the `writing-style` skill instead of the old instructions file.
- `LICENSE` now holds the full Creative Commons Attribution 4.0 legal code, so GitHub detects the license as CC-BY-4.0.
- Workflows pin every action to a full commit SHA, set `persist-credentials: false`, and set job timeouts. The Pages workflow grants `pages: write` and `id-token: write` to the deploy job only, and it now also runs when `overrides/` changes.
- The Documentation quality workflow also builds the site in strict mode and runs the repository checks.
- The README License section, `CONTRIBUTING.md`, and `CITATION.cff` describe the two-license setup.
- `SECURITY.md` explains how to reach the private report form, and gives a fallback: a detail-free security contact request issue.

### Removed

- `.gitkeep` files from asset folders that hold files, and the empty `docs/assets/branding/` folder.
- `.markdownlint.json`, replaced by `.markdownlint-cli2.jsonc`.
- `.github/instructions/writing-style.instructions.md`, replaced by the `writing-style` skill. It named an internal source and quoted a budget figure that read as real.

### Fixed

- Three spelling errors inside the figures. The ECA wheel reads "ECA sits at the heart" instead of "site". The specification and team topologies figures use the American "artifact". Each fix reuses letters from the same image, and the captions say a word was corrected by hand.
- The link check retries slow sites up to four times with a 30-second timeout, so one timeout no longer fails the run.
- The ECA wheel's credit no longer claims personal copyright for a figure generated with NotebookLM.
- The changelog and the 0.2.0 release notes no longer claim that 0.2.0 adopted ECA. ECA shipped in 0.1.0, and the entries now sit under that release.
- The frontmatter of the Enterprise Context Architecture page is valid YAML again, so its social card description loads.
- The "Illustrative only" note on the team topologies page renders its text inside the box.

### Security

- Private vulnerability reporting is enabled on the repository, and `SECURITY.md` gives a fallback contact route.
- Every action is pinned to a commit SHA, and CI scans the full history for secrets.

## [0.2.0] - 2026-07-28

### Added

- **Delivery** section: an operating model for AI-assisted delivery, covering specification-driven delivery, roles and accountability (with a RACI across the governance lifecycle gates), and team topologies.
- Four hero infographics for the Delivery section (overview, specification, roles, and team topologies), each with descriptive alt text.
- Delivery navigation section, a home-page Delivery card, and a governance operating-model cross-link to the delivery model.
- Final ECA and TOGAF ADM overview diagram, with a figure credit, replacing the draft diagram.
- Landing page, custom logo, social cards, and navigation polish.
- Roadmap item for a reference implementation with before/after adoption metrics.

### Changed

- Page frontmatter drops the `status` field, which MkDocs Material reserves for navigation badges.

## [0.1.0] - 2026-07-26

### Added

- Production-grade documentation repository structure.
- **Enterprise Context Architecture (ECA)** as the flagship model: seven context domains centered on Requirements Management, positioned as a cross-cutting perspective on the TOGAF ADM. ECA replaces the pre-release working name "Enterprise AI Context Architecture (EAICA)". Financial considerations sit in the Business, Operational, and Technology contexts.
- "ECA and the TOGAF ADM" page mapping each ADM phase (A through H) to ECA context domains, with the context wheel and ADM-cycle reference diagrams.
- Context ownership, right-sizing, and documentation-to-runtime guidance, plus a background note on what ECA builds on.
- MkDocs Material publishing configuration.
- Architecture, governance, security, compliance, and blueprint document skeletons.
- Compliance mapping templates for NIST AI RMF, ISO/IEC 42001, the EU AI Act, and FedRAMP.
- Contribution, governance, security, citation, and release infrastructure.

[Unreleased]: https://github.com/nishant-tamilselvan/enterprise-ai-framework/compare/v0.2.0...HEAD
[0.2.0]: https://github.com/nishant-tamilselvan/enterprise-ai-framework/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/nishant-tamilselvan/enterprise-ai-framework/releases/tag/v0.1.0
