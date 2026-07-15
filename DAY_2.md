# Day 2: Cloud, ADK, Antigravity, and Tools

Everyone starts together with 90 minutes of NotebookLM and Gemini Enterprise. New arrivals get a complete starting route before the room moves into Cloud, ADK, Antigravity, and tool labs.

After the shared start, Day 2 flows in three phases: **Foundations** (Lab 8.1: console, buckets, APIs), **Build** (Module 7: an ADK agent in code), and **Ship or extend** (Modules 8 and 9: deploy the agent or extend it with cloud tools). Lab numbers jump between modules because the module catalog is shared with Day 1; the day itself moves foundations → build → ship.

## Preflight

Complete this check before 09:00:

- [ ] Sign in to the workshop Google account.
- [ ] Complete required [Lab 0.1](./0-setup/lab-0.1-environment-setup.md) if you have not already created your Gemini Enterprise app and data store.
- [ ] Open [NotebookLM](https://notebooklm.google.com) and the Gemini Enterprise web app URL you created in Lab 0.1.
- [ ] Confirm that you are using the correct workshop account and dedicated billed project, with Project Owner/admin access.
- [ ] Confirm that you can open **APIs & Services** and **Cloud Shell** in the [Cloud Console](https://console.cloud.google.com).
- [ ] In Cloud Shell, run `gcloud config get-value project` and compare the result with the assigned project ID.
- [ ] Keep the [Cheat Sheet](./CHEAT_SHEET.md) open.

Stop and ask the facilitator if the account or project ID is wrong. Do not switch to another project.

> **Cloud catch-up:** [Lab 0.2](./0-setup/lab-0.2-enable-cloud-assist.md) is helpful before hands-on Cloud work because it enables Gemini Cloud Assist in the console. It is not a prerequisite for ADK.

## Agenda, 09:00 to 17:00

| Time | Min | Block | What happens |
|---|---:|---|---|
| 09:00 | 15 | **Welcome and paths** | Introduce TechBond, resources, safety, buddies, and difficulty doors. |
| 09:15 | 30 | **NotebookLM for everyone** | Newcomers build 1.1. Returning participants choose 1.2 or 1.3 with a new question. |
| 09:45 | 45 | **Gemini Enterprise for everyone** | Newcomers build 2.1. Returning participants build a harder Chat-pane or Flow-builder use case. |
| 10:30 | 15 | ☕ **Break** | |
| 10:45 | 40 | **Foundations · Google Cloud fundamentals** | Deliver the beginner-safe speaker session with a live project, bucket, API, and Cloud Shell tour. |
| 11:25 | 35 | **Foundations · cloud hands-on** | Everyone starts Lab 8.1 in their dedicated project. Advanced participants choose a Module 9 door. |
| 12:00 | 60 | 🍽️ **Lunch** | |
| 13:00 | 20 | **Build · ADK and Antigravity demo** | Show an ADK agent, `adk web`, `agy`, and the adventure game. Explain driver and navigator roles. |
| 13:20 | 70 | **Build · agents in code** | Standard: Labs 7.0 → 7.2. Catch-up: Lab 7.1. |
| 14:30 | 15 | ☕ **Break** | |
| 14:45 | 60 | **Build · understand, change, and check** | Standard: Labs 7.2.1 → 7.3. Catch-up: Lab 8.3 Stage A; Stage B only if time, using Lab 8.3's standalone setup. |
| 15:45 | 50 | **Ship or extend · cloud tools** | Choose deployment, Vision, Document AI, Model Armor, or a Module 9 infrastructure lab. |
| 16:35 | 25 | **Share-out, cleanup, and next step** | Demo, delete or stop billable resources, and name one real next use case. |

**Program total: 390 minutes. Breaks: 90 minutes. Day 2 total: 480 minutes.**

## Newcomer route, 09:00 to 10:30

You do not need Day 1 experience.

1. Pair with a returning participant.
2. Complete [Lab 1.1: Boardroom Podcast](./1-warmup-research/lab-1.1-boardroom-podcast.md) during the NotebookLM block.
3. Complete [Lab 2.1: Doc Whisperer](./2-chat-agent/lab-2.1-doc-whisperer.md) during the Gemini Enterprise block.
4. Ask your buddy to show one difference between the Chat pane and the Flow builder.
5. Join the full group at the 10:30 break.

Returning participants use [Lab 1.2](./1-warmup-research/lab-1.2-instant-explainer.md), [Lab 1.3](./1-warmup-research/lab-1.3-research-detective.md), [Lab 2.3](./2-chat-agent/lab-2.3-week-planner.md), or approved use-case data during the same blocks.

## Core path

1. Complete the shared NotebookLM and Agent Designer start above.
2. **Foundations:** build [Lab 8.1: Cloud Foundations](./8-cloud-toolkit/lab-8.1-cloud-foundations.md) in your assigned project.
3. **Standard route at 13:20:** complete [Lab 7.0: Developer Setup](./7-code-adk/lab-7.0-developer-setup.md), then [Lab 7.2: Formula Assistant](./7-code-adk/lab-7.2-formula-assistant.md), in a pair.
4. **Standard route at 14:45:** complete [Lab 7.2.1: ADK Under the Hood](./7-code-adk/lab-7.2.1-adk-under-the-hood.md), then use [Lab 7.3: Coding with agy](./7-code-adk/lab-7.3-agy-coding-companion.md) to change, inspect, run, and judge the agent.
5. **Ship or extend:** pick one lab from the choice path below.

> **Catch-up route:** At **13:20**, complete [Lab 7.1: Vibe Coding Taster](./7-code-adk/lab-7.1-vibe-coding-taster.md). At **14:45**, complete [Lab 8.3](./8-cloud-toolkit/lab-8.3-agent-with-eyes.md) **Stage A**. Continue to Stage B only if time, using Lab 8.3's standalone setup. Do not move from the catch-up route into Lab 7.2.1 or Lab 7.3.
>
> **Agents CLI Preview fallback on the standard route:** Stay in the 14:45 Lab 7.3 block, but skip `/skills` and the `agy`-assisted edit. Use Lab 7.3's full-route manual temperature-tool code, then run its deterministic checks.

## Choice path

**Ship or extend (after the Build phase):**

- Build and evaluate the advanced capstone: [Lab 7.4](./7-code-adk/lab-7.4-adventure-agent.md)
- Ship or extend: [Lab 8.2](./8-cloud-toolkit/lab-8.2-ship-your-agent.md), [Lab 8.3](./8-cloud-toolkit/lab-8.3-agent-with-eyes.md), [Lab 8.4](./8-cloud-toolkit/lab-8.4-document-detective.md), or [Lab 8.5](./8-cloud-toolkit/lab-8.5-model-armor-prompt-security.md)

**Infrastructure track (Module 9, parallel door for advanced participants):**

- Cloud foundations for every Module 9 participant: start with [Lab 9.1](./9-cloud-services/lab-9.1-cloud-shell-agy-storage.md)
- Managed Linux, after Lab 9.1 and after confirming billing and service setup: choose [Lab 9.2](./9-cloud-services/lab-9.2-gce-ssh.md) or [Lab 9.3](./9-cloud-services/lab-9.3-cloud-workstations.md)

## Bonus path

- Continue an approved real use case with your own test data.
- Build another Agent Designer flow from [Module 4](./4-workflow-pro/) if you do not want to continue coding.
- Use [Module 6](./6-workspace-optional/) only when the facilitator confirms that Workspace connectors are enabled.
- Continue directly from the running Lab 9.2 VM or Lab 9.3 workstation into [Lab 9.4](./9-cloud-services/lab-9.4-agy-managed-linux.md) only when the owner/admin and cleanup gates are confirmed.

## Cleanup before 17:00

- Delete test buckets that no later lab needs.
- Delete deployed Agent Runtime or Cloud Run resources unless the workshop owner approved retention.
- Stop or delete Compute Engine VMs.
- Delete Cloud Workstations in order: **Workstation → Configuration → Cluster**. Stopping is insufficient because the cluster control plane and storage can keep billing.
- Run `gcloud config get-value project` once more and confirm that all work stayed in the assigned project.
- Remember that budget alerts notify you but do not cap spending.

Use the [Reference Guide](./Reference_Guide.md) when you continue after the workshop.
