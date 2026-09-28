# Contributing

Thank you for helping build an open, trustworthy Enterprise AI architecture framework.

## Ways to contribute

- Propose or review a whitepaper or blueprint.
- Correct technical, regulatory, accessibility, or editorial issues.
- Add evidence and authoritative references.
- Improve diagrams, terminology, and compliance mappings.
- Report security concerns through the private process in `SECURITY.md`.

## Before opening a change

1. Search issues and pull requests for related work.
2. Use an issue template for substantial proposals or errata.
3. Discuss changes that alter scope, terminology, governance, or normative guidance before implementation.
4. Keep pull requests focused and independently reviewable.

## Contribution workflow

1. Fork the repository and create a branch from `master`.
2. Use a descriptive branch name such as `docs/context-boundaries`.
3. Write concise commits and sign each commit with `git commit -s`.
4. Run the documentation build and the local checks (see [Local checks](#local-checks)).
5. Submit a pull request using the repository template.
6. Address reviewer feedback and preserve a clear decision record.

## Developer Certificate of Origin

Contributions use the Developer Certificate of Origin (DCO) process. A `Signed-off-by` line certifies that you have the right to submit the contribution under this repository's license. Use your real name and an email address you control.

Add the line with `git commit -s`. A required check fails any pull request that contains a commit without it. To fix an unsigned commit, run `git commit --amend -s` for the last commit, or `git rebase --signoff master` for several, then force-push your branch.

## Local checks

Install the hooks once, then they run on every commit:

```bash
pip install pre-commit
pre-commit install
pre-commit run --all-files
```

| Hook | Checks |
| --- | --- |
| File hygiene | Large files, merge conflict markers, YAML and JSON syntax, line endings, trailing whitespace |
| markdownlint-cli2 | Markdown style, using `.markdownlint-cli2.jsonc` |
| gitleaks | Secrets in staged changes |
| Denylist | Credentials, internal hostnames and personal paths, from `scripts/ci/denylist.txt` |

The denylist also reads a gitignored `.denylist.local` file for organization names that must not appear in the repository. CI reads the same patterns from a repository secret and never prints them.

## Editorial standards

- Use clear international English and define specialist terms.
- Prefer short sentences, active voice, and descriptive headings.
- Use `MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT`, and `MAY` only for intentionally normative guidance.
- Distinguish verified requirements from recommendations and examples.
- Cite primary, authoritative, and current sources.
- Include publication or access dates where source content may change.
- Avoid unqualified claims of compliance, safety, accuracy, or regulatory approval.
- Write technology-neutral guidance unless an example requires a named technology.
- Add accessible alt text and source files for diagrams.
- Credit every figure in a caption. A figure made with an AI tool names the tool, and a person checks its text and facts before it is published.
- Use kebab-case file names and relative repository links.

## Document lifecycle

Documents progress through `Draft`, `Public Review`, `Candidate`, `Stable`, and `Deprecated` statuses. Every page under `docs/`, except blog posts, states these fields in its frontmatter:

| Field | Meaning |
| --- | --- |
| `doc_status` | Lifecycle status from the list above. The key is not `status`, because MkDocs Material reserves that name. |
| `version` | The framework release in which the page last changed in substance |
| `owners` | The role accountable for the page |
| `audience` | The readers the page is written for |
| `last_reviewed` | The date of the last content review |

Blog posts use the blog plugin's frontmatter (`date`, `authors`, `categories`).

## Compliance mappings

Mappings are informative unless explicitly approved otherwise. Include control or clause identifiers, source version, architectural responsibility, implementation evidence, validation method, status, and known gaps. Never represent a mapping as certification.

## Review expectations

Maintainers evaluate technical correctness, evidence quality, neutrality, security and privacy implications, accessibility, consistency, and alignment with project scope. Normative and governance changes follow the decision model in [GOVERNANCE.md](GOVERNANCE.md): two maintainer approvals when two maintainers are available, and approval by the sole maintainer after public discussion until then.

## License of contributions

By contributing, you license documentation and other content under Creative Commons Attribution 4.0 International, and code under the MIT License, as the README's License section describes. A file that clearly states another license follows that license instead.
