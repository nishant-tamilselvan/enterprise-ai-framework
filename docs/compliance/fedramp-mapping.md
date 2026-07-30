---
title: FedRAMP Mapping
version: 0.1.0
last_reviewed: 2026-07-26
---

# FedRAMP mapping

FedRAMP applies to authorization and continuous monitoring of cloud services used by United States federal agencies. Include AI capabilities in the cloud system boundary and address them through the applicable FedRAMP baseline and agency authorization process.

## Architecture mapping areas

| Area | AI-specific considerations | Framework evidence |
| --- | --- | --- |
| Boundary and inventory | Models, endpoints, vector stores, tools, external AI services | Component inventory and context boundary |
| Access control | Human/workload identity, tool delegation, retrieval authorization | Zero-trust design, access tests, role matrix |
| Audit and accountability | Prompt/output sensitivity, correlation, provider logs | Logging design, retention, audit protections |
| Configuration and change | Model, prompt, policy, retrieval, tool, and supplier versions | Registries, baselines, change approvals |
| Incident response | Prompt injection, model abuse, leakage, supplier events | AI incident playbooks, exercises, reporting paths |
| Risk and supply chain | External models, training sources, dependencies, concentration | Supplier assessment, provenance, exit plans |
| System integrity | Input/output validation, model artifact integrity, monitoring | Threat controls, artifact verification, telemetry |
| Privacy | PII in prompts, retrieval, logs, training, and provider processing | Privacy assessment, minimization, deletion evidence |

Use the current FedRAMP authorization path, baseline, templates, and agency requirements. Document inherited controls and external AI dependencies in the System Security Plan. Use this document as architecture guidance only.
