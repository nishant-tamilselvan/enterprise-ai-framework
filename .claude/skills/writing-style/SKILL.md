---
name: writing-style
description: 'Enforceable writing style guide for prose in this repository: documentation pages, whitepapers, blueprints, release notes, blog posts, README and governance files, commit messages and pull request descriptions. Use before drafting or editing any prose, and when asked to review, tighten or de-slop text. Backed by a rule file and a checker script.'
---

# Writing style

The skill lives in one place so the rules cannot drift. Read and follow
[`.github/skills/writing-style/SKILL.md`](../../../.github/skills/writing-style/SKILL.md)
in full before you write.

The rules are in `.github/skills/writing-style/references/banned.json`. Run the checker on
each file you change:

```bash
python .github/skills/writing-style/scripts/sloplint.py <file>
```
