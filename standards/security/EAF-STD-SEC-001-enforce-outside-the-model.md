---
id: EAF-STD-SEC-001
title: Enforce AI security decisions outside the model
type: Standard
status: Draft
domain: Security
tags: [zero-trust, authorization, prompt-injection, agents]
part_of_family: Security Baseline
classification: public
version: "1"
owner: Enterprise AI Framework maintainers
effective_date: 2026-09-28
last_reviewed: 2026-09-28
review_cycle_months: 12
summary: Access, tool, approval, and output decisions run in deterministic code outside the model, never in a prompt.
---

# Enforce AI security decisions outside the model

> Draft from the Enterprise AI Framework. Review it through your own governance, then set `status: Approved` before you rely on it.

A model can be steered by any text in its context, so it never decides what is allowed. Each decision below runs in deterministic code that the model cannot change.

| Decision | Where it is enforced |
| --- | --- |
| Who may see a document | The retrieval service, using the calling user's identity, before content reaches the model |
| Whether a tool call is allowed | A policy check between the agent and the tool, using the task's scope |
| Whether an action needs approval | A gate that pauses the workflow and records the approver |
| Whether output is safe to use | A validator for the destination, such as HTML encoding, SQL parameters, or schema checks |

Instructions in a system prompt are hints, not controls. Credentials never appear anywhere the model can read.

Source: [Zero-trust AI](https://nishant-tamilselvan.github.io/enterprise-ai-framework/security/zero-trust-ai/#enforce-outside-the-model)
