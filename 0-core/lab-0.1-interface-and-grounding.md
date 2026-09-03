# Lab 0.1: Interface and source checks

> **Mission:** Find your way around Gemini Enterprise and check two answers against visible sources instead of relying on intuition.

| Level | Time | Tool | Data |
|---|---:|---|---|
| Guided | 25-30 min | Gemini Enterprise | Connected source `P-17 Service Approval 2026-09-07` |

## The case in two minutes

TechBond is deciding whether to introduce the new P-17 support process in customer service. Early dashboards sound positive. The decision, however, must use final verified results and complete approvals.

You do not need specialist terminology. The project record states every rule in plain English.

## Find the tools

Open the Gemini Enterprise workshop link supplied by the facilitator. This repository does not contain a tenant-specific URL. Locate these items in the left navigation:

- the general assistant;
- **Gemini Notebook**;
- **Deep Research**;
- **New agent**, with **Chat agent** and **Workflow**.

Match each task to its starting point:

| Task | Best starting point |
|---|---|
| Examine four supplied PDFs together | Gemini Notebook |
| Ask repeated questions against the same knowledge base | Chat agent |
| Run the same review stages every time | Workflow |
| Research current external publications | Deep Research |

## Test 1: a documented rule

Start a new general chat. Select **Sources**, enable only `P-17 Service Approval 2026-09-07`, and ask:

> Which conditions must P-17 meet before a package is ready for approval review? Cite the source for every condition.

The answer passes only when every box can be checked:

- [ ] at least 85% in the final verified local result;
- [ ] at least 85% in an independent repeat;
- [ ] no open critical security finding;
- [ ] approved privacy and retention;
- [ ] evidence from `SCE-TEAM-001`.

Open the source and verify at least two conditions directly in the document.

## Test 2: a deliberately missing fact

Then ask:

> What production retention period applies to every P-17 site?

The test passes only if the answer says that no general period is documented. Any specific number of days would be invented. A value that belongs to one site must not be applied to the whole project.

## Deep Research demonstration

The facilitator briefly demonstrates how Deep Research plans and searches external sources. Do not use it for the P-17 decision. That decision must remain inside the controlled workshop record.

## Record your result

Copy this block into your own notes and complete it before checking the solution:

```text
Documented-rule test: PASS / FAIL
Opened source IDs:
Missing-fact test: PASS / FAIL
Invented retention value: YES / NO
```

If either test fails, use the [verified Lab 0.1 help](./HELP.md#lab-01), then run that test again in a new chat.

## Success checklist

- [ ] You can distinguish Notebook, Chat agent, Workflow, and Deep Research.
- [ ] Test 1 meets all five criteria.
- [ ] You opened at least two supporting passages.
- [ ] Test 2 does not invent a retention period.

## If you get stuck

<details>
<summary><strong>The source is not visible</strong></summary>

Ask the facilitator to check your access to the workshop app. Do not connect a personal account or upload real company data.
</details>

<details>
<summary><strong>The answer gives only one figure</strong></summary>

Add this to the question: `Check performance, independent repeat, security, privacy, and retention separately.`
</details>

## What you learned

A good answer is a verifiable chain: **bounded source -> documented rule -> visible evidence -> honest treatment of gaps**.

Next: [Lab 1.1](../1-gemini-notebook/lab-1.1-evidence-notebook.md).
