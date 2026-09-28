# Release Notes

Release notes explain architecture impact, compatibility, migration, assurance implications, and known limitations. The repository follows Semantic Versioning.

## Releases

| Version | Date | Status | Notes |
| --- | --- | --- | --- |
| 0.3.0 | 2026-09-28 | Draft | [Read notes](v0.3.0.md) |
| 0.2.0 | 2026-07-28 | Draft | [Read notes](v0.2.0.md) |
| 0.1.0 | 2026-07-26 | Draft foundation | [Read notes](v0.1.0.md) |

Use the [release-notes template](templates/release-notes-template.md) for future releases. Git tags should use the form `vMAJOR.MINOR.PATCH`.

## Cutting a release

| Step | What to do |
| --- | --- |
| 1. Date the release | Move the Unreleased entries in `CHANGELOG.md` under a dated heading, and add its compare link. Set the version and date in `CITATION.cff`, this table, the release notes, and the README roadmap. |
| 2. Publish the post | Remove `draft: true` from the release blog post, and set its date. |
| 3. Check the skipped links | CI skips the European Commission site, because it blocks GitHub-hosted runners at times. Run `lychee --include 'digital-strategy\.ec\.europa\.eu' --exclude-path site --exclude-path .venv "**/*.md"` and fix any link that fails. |
| 4. Merge, tag, and release | Merge the release pull request. Tag the merge commit `vX.Y.Z`, and publish a GitHub release from the release notes. |
