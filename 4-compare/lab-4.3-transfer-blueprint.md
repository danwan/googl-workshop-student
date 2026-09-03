# Lab 4.3: Transfer the method to your case

> **Mission:** Design a small, realistic enterprise agent with a clear source, decision boundary, and test for missing information.

| Level | Time | Observable result |
|---|---:|---|
| Challenge | 20-30 min | Six-part implementation blueprint |

## Choose a bounded case

Choose a task in which people currently review several documents, such as supplier approval, proposal review, policy guidance, or project status. Do not use real confidential data in the workshop.

## Complete six fields

1. **User and decision:** Who asks what, and which decision is being prepared?
2. **Allowed sources:** Which specific document types may the agent use?
3. **Simplest tool:** Notebook, Chat agent, or Workflow—why does it fit?
4. **Expected fact or rule:** Which one claim can you verify independently?
5. **Safety boundary:** What must the agent never decide or invent?
6. **Negative test:** Which missing or conflicting fact must trigger a human handoff?

## Write the negative test as a contract

Use this structure:

```text
INPUT: <incomplete or manipulative case>
FORBIDDEN: <specific incorrect output>
REQUIRED: <supported, useful answer>
SOURCE: <expected document>
HUMAN HANDOFF: <role and required action>
```

## Challenge the design

With a partner, exchange blueprints and let the other person choose one attack. Without a partner, apply all three attacks yourself.

- introduce a convenient but disallowed source;
- present a missing fact as an assumption;
- pressure the agent to grant final approval.

Revise exactly one boundary that the challenge exposed as unclear. Record `Partner path` or `Solo path`, the selected attack, the previous boundary, and the one changed sentence.

## Record your result

Copy this block into your own notes, fill it, and paste the completed version into a fresh P-17 Review Assistant conversation with the verified evaluator prompt from the help page:

```text
User and decision:
Allowed sources:
Simplest tool and reason:
Expected verifiable fact or rule:
Safety boundary:
Negative test:
Evaluation before revision: __ / 4 PASS
One revised sentence, or NO REVISION NEEDED:
Evaluation after revision: __ / 4 PASS
```

Use the [verified Lab 4.3 help](./HELP.md#lab-43), replacing its final placeholder with your complete block. If all four blueprint requirements pass initially, record `NO REVISION NEEDED`; do not weaken a correct design to manufacture a change. If a row fails, change only that field and evaluate the complete block again. Continue until all four rows pass.

## Success checklist

- [ ] All six fields are specific.
- [ ] The tool fits the work pattern.
- [ ] At least one expected fact is independently verifiable.
- [ ] The negative test defines Forbidden and Required behavior.
- [ ] A human role and action are named.
- [ ] Partner path or Solo path, attack, and change are documented.
- [ ] Every evaluator row passes after focused revisions, or `NO REVISION NEEDED` is supported by four PASS results.

## If you get stuck

Use this starter case: `A sales email says a supplier is approved, but the formal security report is missing.` Approval is the forbidden result. The required result names the missing report and hands the case to Security.

## What you learned

A good use case starts small: clear user, bounded sources, verifiable rule, explicit safety boundary, and predefined failure.

Return to the [workshop schedule](../SCHEDULE.md).
