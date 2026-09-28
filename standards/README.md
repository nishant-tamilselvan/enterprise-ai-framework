# Enterprise AI Framework standards library

This folder holds some of the framework's rules as a standards library. Tools that read a library of this kind can search it, cite it, and base proposals on it. Each file is plain Markdown with YAML frontmatter, so people can read it too.

The format follows the one [AEGIS](https://github.com/nishant-tamilselvan/AEGIS) reads through its Enterprise Standards server. The [AEGIS reference implementation page](../docs/delivery/reference-implementation-aegis.md) explains how the two fit together.

## Documents

| Id | Type | Title | Source page |
| --- | --- | --- | --- |
| `EAF-STD-GOV-001` | Standard | [AI lifecycle gates](governance/EAF-STD-GOV-001-ai-lifecycle-gates.md) | Governance operating model |
| `EAF-POL-001` | Policy | [Compliance mappings are informative](governance/EAF-POL-001-informative-compliance-mappings.md) | Compliance mappings |
| `EAF-STD-DEL-001` | Standard | [Specification completeness](software-delivery/EAF-STD-DEL-001-specification-completeness.md) | Specification-driven delivery |
| `EAF-STD-SEC-001` | Standard | [Enforce AI security decisions outside the model](security/EAF-STD-SEC-001-enforce-outside-the-model.md) | Zero-trust AI |
| `EAF-STD-SEC-002` | Standard | [Agent tool and credential scoping](security/EAF-STD-SEC-002-agent-tool-and-credential-scoping.md) | Zero-trust AI |
| `EAF-PAT-001` | Pattern | [Name AI threats with public catalog identifiers](security/EAF-PAT-001-threat-catalog-identifiers.md) | Enterprise AI threat model |

The `EAF-` prefix keeps these ids apart from an organization's own ids, such as `ENT-STD-SEC-001`.

## Adopting the library

Every document is marked `status: Draft`, because the framework itself is a draft. AEGIS bases proposals only on `Approved` documents. To use the library:

1. Copy the documents into your own standards library.
2. Review each one through your governance. Change the text where your organization differs.
3. Set `status: Approved`, and set `owner`, `effective_date`, and `last_reviewed` to your own values.
4. Keep the `Source` link, so reviewers can trace each rule back to the framework.

## Checking the library

AEGIS ships a checker for this format. From an AEGIS clone:

```bash
python examples/enterprise-standards-server/library.py --check /path/to/enterprise-ai-framework/standards
```

The [AEGIS standards setup guide](https://nishant-tamilselvan.github.io/AEGIS/enterprise-standards-setup/) explains every field and how to connect a library to AEGIS.

## Keeping it in step

When a framework page that a document cites changes, update the document in the same pull request and raise its `version`. A rule here never goes beyond what its source page says.

## License

These documents are content, licensed under [CC BY 4.0](../LICENSE) like the rest of the framework.
