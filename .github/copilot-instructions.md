# Copilot Instructions — Enterprise AI Framework

This repository is a documentation and reference framework built with MkDocs. Most contributions are Markdown prose: architecture guidance, governance and compliance content, blueprints, release notes, and blog posts. Content is vendor-neutral and targets government, public-sector, and regulated organizations.

## Writing style

All prose in this repository follows the [writing-style skill](skills/writing-style/SKILL.md). Load it before you write or edit documentation, README files, blog posts, release notes, commit messages, or pull request descriptions. The banned words, phrases, and sentence shapes live in [`banned.json`](skills/writing-style/references/banned.json).

Apply it whenever you author or edit text. Key rules to keep in mind:

- Write in plain declarative language. State the claim and move on.
- Never use "this is not A, but B" constructions.
- No em dashes. Use commas, periods, parentheses, or colons.
- Avoid the banned vocabulary and AI-tell sentence openers listed in the rule file.
- Use the active voice, name the actor, and keep numbers concrete.
- No emojis or decorative icons unless the user asks for them.

Before finishing any written change, run the checker on each file you touched, then work through the Reviewer's Checklist in the skill:

```bash
python .github/skills/writing-style/scripts/sloplint.py docs/path/to/page.md
```

## Repository conventions

- Documentation lives in `docs/`; the MkDocs config is `mkdocs.yml`. Do not hand-edit the generated `site/` directory.
- Markdown is linted in CI (see `.github/workflows/markdown-lint.yml`). Keep new content lint-clean.
- Release notes go in `releases/`; follow the existing templates.
- Provide guidance, not legal, regulatory, security, procurement, or compliance advice.
