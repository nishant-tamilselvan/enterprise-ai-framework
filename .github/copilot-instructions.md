# Copilot Instructions — Enterprise AI Framework

This repository is a documentation and reference framework built with MkDocs. Most contributions are Markdown prose: architecture guidance, governance and compliance content, blueprints, release notes, and blog posts. Content is vendor-neutral and targets government, public-sector, and regulated organizations.

## Writing style

All prose in this repository follows the [Writing Style Guide](instructions/writing-style.instructions.md). It is auto-attached when you edit Markdown files, and it applies to documentation, README files, blog posts, release notes, commit messages, and pull request descriptions.

Apply it whenever you author or edit text. Key rules to keep in mind:

- Write in plain declarative language. State the claim and move on.
- Never use "this is not A, but B" constructions.
- No em dashes. Use commas, periods, parentheses, or colons.
- Avoid the banned vocabulary and AI-tell sentence openers listed in the guide.
- Use the active voice, name the actor, and keep numbers concrete.
- No emojis or decorative icons unless the user asks for them.

Run the Reviewer's Checklist in the guide before finishing any written change.

## Repository conventions

- Documentation lives in `docs/`; the MkDocs config is `mkdocs.yml`. Do not hand-edit the generated `site/` directory.
- Markdown is linted in CI (see `.github/workflows/markdown-lint.yml`). Keep new content lint-clean.
- Release notes go in `releases/`; follow the existing templates.
- Provide guidance, not legal, regulatory, security, procurement, or compliance advice.
