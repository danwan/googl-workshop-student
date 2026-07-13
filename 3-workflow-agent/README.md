# Module 3 · Level 2 — Agent Designer: Flow builder

> **Workshop role:** Day 1 core with Lab 3.1 and choice with Labs 3.2 to 3.3. Day 2 bonus for participants who stay in Agent Designer.

> **The big idea:** Start with a prompt or directly in Flow, then use the visual canvas to refine the same agent and connect a whole **document library**. 📚⚡

In Module 2 you built agents by talking to a chat pane. Brilliant for one or two uploaded files. But the chat pane has a hard limit: **it can't connect to Cloud sources** (Cloud Storage, BigQuery, Cloud SQL). So when you want an agent that's grounded in *dozens* of company documents, you level up to the **Flow builder** — Agent Designer's visual canvas (the **Flow** tab).

## 🧭 Chat pane vs. flow builder — why we're switching

| | Chat pane (Module 2) | **Flow builder (this module)** |
|---|---|---|
| How you build | Type a prompt in a chat pane | A visual **Flow** canvas with an agent node |
| Knowledge | Upload a file or two | **Cloud Storage** — a whole bucket / doc library 📦 |
| Cloud sources? | ❌ Not possible in the chat pane | ✅ This is where you add them |

> ⚠️ **Why can't the chat pane do Cloud Storage?** The chat pane only knows about files you hand it directly. Connecting a Cloud source lives on the **Flow** tab. Prompt-first and direct-Flow are two entry paths into the same Agent Designer; Lab 3.1 combines them.

## 🪄 How the flow builder works

1. **+ Create agent** → describe the agent first, or click **Proceed to builder** immediately.
2. You land on the **Flow** tab — a canvas with one **agent node**.
3. Configure the node: **Name, Description, Instructions, Model**.
4. Click **Add data sources & tools** → choose **Cloud Storage** → pick the TechBond bucket. *(This is the move the chat pane can't do.)*
5. Test in the **Preview** tab → **Create** to launch.

Every answer comes back **grounded with citations** — you can see exactly which document each fact came from. 🔍

## 🧪 The labs

| Lab | Mission | Time |
|---|---|---|
| 🟡 [3.1 — Knowledge Base](./lab-3.1-knowledge-base.md) | Build a company "ask-me-anything" agent grounded in the whole document library — with citations. | ~20 min |
| 🟡 [3.2 — Meeting Prep Machine](./lab-3.2-meeting-prep-machine.md) | One-click meeting prep: cross-reference several docs into a one-page brief for the AutoParts call. | ~25 min |
| 🟡 [3.3 — Launch Tracker](./lab-3.3-launch-tracker.md) | Track the SecureSeal EV launch across four docs → a status report with risks. | ~25 min |

## 📦 What you'll need

- Access to the **Gemini Enterprise** web app with **Agent Designer**.
- The **TechBond document library** loaded into the Cloud Storage bucket and `techbond-docs` data store you created in Lab 0.1. The 20 PDFs are in `Files/Document-Library/`.
- No other connectors, no code.

> **Starting here or skipped earlier labs?** Complete **[Lab 0.1](../0-setup/lab-0.1-environment-setup.md)** in your dedicated workshop project. Open the app URL you created, then verify your TechBond bucket and `techbond-docs` data store are visible before starting.

Start with **[Lab 3.1 — Knowledge Base](./lab-3.1-knowledge-base.md)** and work down. By the end you'll have an agent that knows the whole company. 🧠➡️🚀
