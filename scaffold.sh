#!/usr/bin/env bash
set -euo pipefail

TARGET_DIR="${1:-.}"

DIRS=(
  .github/ISSUE_TEMPLATE .github/workflows
  docs/architecture docs/governance docs/security
  docs/compliance/templates docs/blueprints
  docs/blog/posts docs/blog/templates
  docs/assets/diagrams docs/assets/images docs/assets/branding
  releases/templates
)

FILES=(
  .gitignore .markdownlint.json README.md LICENSE CHANGELOG.md CONTRIBUTING.md
  CODE_OF_CONDUCT.md SECURITY.md GOVERNANCE.md CITATION.cff mkdocs.yml requirements-docs.txt
  .github/ISSUE_TEMPLATE/whitepaper-proposal.md
  .github/ISSUE_TEMPLATE/correction-or-erratum.md
  .github/ISSUE_TEMPLATE/config.yml
  .github/PULL_REQUEST_TEMPLATE.md
  .github/workflows/docs-deploy.yml
  .github/workflows/markdown-lint.yml
  docs/index.md
  docs/architecture/overview.md
  docs/architecture/context-architecture.md
  docs/architecture/capability-model.md
  docs/architecture/integration-layer.md
  docs/architecture/reference-diagrams.md
  docs/governance/overview.md
  docs/governance/operating-model.md
  docs/governance/risk-management.md
  docs/governance/policies.md
  docs/security/overview.md
  docs/security/zero-trust-ai.md
  docs/security/data-protection.md
  docs/security/threat-model.md
  docs/compliance/overview.md
  docs/compliance/nist-ai-rmf-mapping.md
  docs/compliance/iso-iec-42001-mapping.md
  docs/compliance/eu-ai-act-mapping.md
  docs/compliance/fedramp-mapping.md
  docs/compliance/templates/control-mapping-template.md
  docs/blueprints/overview.md
  docs/blueprints/public-sector-rag-blueprint.md
  docs/blueprints/regulated-enterprise-blueprint.md
  docs/blog/index.md
  docs/blog/posts/2026-07-26-welcome.md
  docs/blog/templates/blog-post-template.md
  docs/glossary.md
  docs/assets/diagrams/.gitkeep
  docs/assets/images/.gitkeep
  docs/assets/branding/.gitkeep
  releases/README.md
  releases/v0.1.0.md
  releases/templates/release-notes-template.md
)

mkdir -p "$TARGET_DIR"
for dir in "${DIRS[@]}"; do
  mkdir -p "$TARGET_DIR/$dir"
done

created=0
skipped=0
for file in "${FILES[@]}"; do
  path="$TARGET_DIR/$file"
  if [[ -e "$path" ]]; then
    ((skipped+=1))
    continue
  fi

  mkdir -p "$(dirname "$path")"
  case "$file" in
    *.md)
      title="$(basename "$file" .md | tr '-' ' ')"
      printf '# %s\n\n> Status: Draft\n\nContent will be developed through the project contribution process.\n' "$title" > "$path"
      ;;
    *.yml|*.yaml|*.cff)
      printf '# Placeholder configuration — replace with the repository baseline.\n' > "$path"
      ;;
    *.json)
      printf '{}\n' > "$path"
      ;;
    *.gitkeep)
      : > "$path"
      ;;
    LICENSE)
      printf 'Creative Commons Attribution 4.0 International\nhttps://creativecommons.org/licenses/by/4.0/legalcode\n' > "$path"
      ;;
    *)
      printf '# Placeholder — replace with the repository baseline.\n' > "$path"
      ;;
  esac
  ((created+=1))
done

printf '\nEnterprise AI Framework scaffold complete: %s created, %s already present.\n' "$created" "$skipped"
printf '%s\n' 'Review generated files, then run:'
printf '%s\n' \
  'git init' \
  'git config user.name "NISHANT TAMILSELVAN"' \
  'git config user.email "17031104+nishant-tamilselvan@users.noreply.github.com"' \
  'git add .' \
  'git commit -s -m "chore: scaffold Enterprise AI framework repo"' \
  'git branch -M master' \
  'git remote add origin https://github.com/nishant-tamilselvan/enterprise-ai-framework.git' \
  'git push -u origin master'
