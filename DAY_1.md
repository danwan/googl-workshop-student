# Day 1: NotebookLM, Agent Designer, and Vibe Coding

Today you build with NotebookLM and Gemini Enterprise for most of the day. The final 80-minute block gives everyone a guided Antigravity experience in Cloud Shell.

## Preflight

Complete this check before 09:00:

- [ ] Sign in to the workshop Google account.
- [ ] Complete [Lab 0.1](./0-setup/lab-0.1-environment-setup.md) in your own dedicated workshop project.
- [ ] Complete [Lab 0.2](./0-setup/lab-0.2-enable-cloud-assist.md) and confirm that **Gemini Cloud Assist** opens in the Google Cloud Console. This console assistant is separate from **Agent Designer**.
- [ ] Open [NotebookLM](https://notebooklm.google.com) and the Gemini Enterprise web app URL you created in Lab 0.1. The app's **Agents → Made by Google → NotebookLM** entry is an alternative route.
- [ ] Confirm **Agent Gallery**, **+ Create agent**, the Chat pane, **Proceed to builder**, **Flow**, and **Preview** are visible.
- [ ] Confirm the model selector, session sharing, Canvas, and image generation are visible.
- [ ] Confirm **Idea Generation** appears under **Agents → Made by Google**. If it is missing, stop and tell the facilitator; Lab 5.2 has a fallback.
- [ ] Confirm that your dedicated billed Google Cloud project opens in the [Cloud Console](https://console.cloud.google.com) and that your workshop account has Project Owner/admin access.
- [ ] Open **Cloud Shell** with the `>_` icon and run `python3 --version`.
- [ ] Keep the [Cheat Sheet](./CHEAT_SHEET.md) open.

Stop and ask the facilitator if any check fails. Do not use another participant's project.

## Agenda, 09:00 to 17:00

| Time | Min | Block | What happens |
|---|---:|---|---|
| 09:00 | 25 | **Welcome and story** | Introduce TechBond, fix logins, show levels, and open the cheat sheet. |
| 09:25 | 35 | **NotebookLM kickoff** | Start Lab 1.1, generate the Audio Overview, and explore Studio while it renders. |
| 10:00 | 30 | **Gemini Enterprise introduction** | Explain agents, tour Agent Designer, and demo Lab 2.1. |
| 10:30 | 15 | ☕ **Break** | |
| 10:45 | 50 | **Chat-build an agent** | Everyone builds Lab 2.1, then chooses 2.2 or 2.3. |
| 11:35 | 25 | **Your use case** | Sketch one real work task, its data, and its steps. Share it with a neighbor. |
| 12:00 | 60 | 🍽️ **Lunch** | |
| 13:00 | 10 | **Start Deep Research** | Launch Lab 5.1 and let it run in the background. |
| 13:10 | 15 | **Flow builder demo** | Show Lab 3.1, Cloud Storage grounding, and citations. |
| 13:25 | 65 | **Flow builder and agent crews** | Build from Modules 3 and 4 using difficulty doors. |
| 14:30 | 15 | ☕ **Break** | |
| 14:45 | 20 | **Power agents** | Review Deep Research and try Idea Generation. |
| 15:05 | 80 | **Fixed Antigravity and vibe-coding taster** | Everyone uses Cloud Shell and `agy` to build and test the standalone batch checker. Pairing is the default. |
| 16:25 | 35 | **Share-out and Day 2 preview** | Share one safe session or synthetic-data agent with a partner, demo results, and preview the cloud path. |

**Program total: 390 minutes. Breaks: 90 minutes. Day 1 total: 480 minutes.**

The first 310 program minutes use no-code or low-code tools. Everyone joins the fixed 80-minute Antigravity block.

## Core path

Complete these labs or guided sections with the group:

1. [Lab 1.1: Boardroom Podcast](./1-warmup-research/lab-1.1-boardroom-podcast.md)
2. [Lab 2.1: Doc Whisperer](./2-chat-agent/lab-2.1-doc-whisperer.md)
3. [Lab 5.1: Deep Research](./5-explore/lab-5.1-deep-research.md)
4. [Lab 3.1: Knowledge Base](./3-workflow-agent/lab-3.1-knowledge-base.md)
5. [Lab 7.4: Vibe Coding Taster](./7-code-adk/lab-7.4-vibe-coding-taster.md)

## Choice path

Choose work that fits your pace inside each block:

- Chat pane: [Lab 2.2](./2-chat-agent/lab-2.2-inbox-zero.md) or [Lab 2.3](./2-chat-agent/lab-2.3-week-planner.md)
- Flow builder: [Lab 3.2](./3-workflow-agent/lab-3.2-meeting-prep-machine.md), [Lab 3.3](./3-workflow-agent/lab-3.3-launch-tracker.md), [Lab 4.1](./4-workflow-pro/lab-4.1-success-orchestrator.md), or [Lab 4.2](./4-workflow-pro/lab-4.2-complaint-commander.md)
- Power agents: [Lab 5.2](./5-explore/lab-5.2-idea-generator.md)

## Bonus path

- Continue with your own use-case sketch and approved data.
- Try [Lab 1.2](./1-warmup-research/lab-1.2-instant-explainer.md), [Lab 1.3](./1-warmup-research/lab-1.3-research-detective.md), or [Lab 5.3](./5-explore/lab-5.3-data-insights.md).
- Use [Module 6](./6-workspace-optional/) only when the facilitator confirms that Workspace connectors are enabled.

## End-of-day cleanup

- Exit `agy` with `/exit`.
- Keep `~/techbond-vibe-taster` for Day 2, or remove it with `rm -rf ~/techbond-vibe-taster` after checking the path.
- Confirm that you created no billable resources outside your assigned project.
- Save the URL of any Agent Designer agent you want to show tomorrow.
- Share only sessions or agents that use synthetic TechBond data. A shared agent also exposes its attached files and data sources to its recipients.

Continue with [Day 2](./DAY_2.md).
