# CLAUDE.md

Instructions for Claude Code in this repository. The same rules apply to GitHub Copilot,
so this file imports the Copilot instructions instead of repeating them.

@.github/copilot-instructions.md

## Writing style in Claude Code

Claude Code does not discover skills under `.github/skills/`. Before you write or edit any
prose, load the `writing-style` skill. It is registered in `.claude/skills/` and points to
the single copy in `.github/skills/writing-style/`.

Run the checker on every Markdown file you change, and fix every error before you finish:

```bash
python .github/skills/writing-style/scripts/sloplint.py <file>
```

Warnings need judgement. Keep a flagged word when it is a quoted legal or standards term.

## Checks before you finish

| Check | Command |
| --- | --- |
| Pre-commit hooks | `pre-commit run --all-files` |
| Docs build | `mkdocs build --strict` |
