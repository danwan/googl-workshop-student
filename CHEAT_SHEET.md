# 🧰 Cheat Sheet — Keep This Open

> Every word and button you'll need, on one page. When a lab uses a term you don't know, look here. 👇

---

## Day starts

- **Day 1:** open [DAY_1.md](./DAY_1.md), complete its preflight, and keep this page open.
- **Day 2:** open [DAY_2.md](./DAY_2.md). Newcomers follow its 09:00 to 10:30 route before joining the Cloud and code path.

---

## 🗣️ Talk like a pro — words explained simply

| Word | What it really means |
|---|---|
| **Agent** | A little AI helper you give a job to. It reads stuff and answers or does tasks for you. |
| **Agent Designer** | The Google tool (inside Gemini Enterprise) where you build agents. No code. It has two faces: the **Chat pane** and the **Flow builder**. |
| **Chat pane** | The *easy* face of Agent Designer: you just **chat** with it and **upload files**. |
| **Flow builder** | The *powerful* face (the **Flow** tab in Agent Designer): a **visual map** for agents with multiple steps and bigger data. |
| **Prompt** | The instructions you type to tell the agent what to do. Like a job description. |
| **Knowledge / "Add files"** | Files you **upload** so the agent can read them. No connectors needed. |
| **Data source / connector** | A live plug into a system or indexed source (Gmail, Calendar, Drive, Cloud Storage, Google Search if enabled). |
| **Cloud Storage** | A folder in the cloud holding a whole library of documents. |
| **Subagent** | A helper *inside* a bigger agent that does one small job. |
| **Action** | Something an agent *does* (not just reads): send an email, book a meeting. |
| **Citation** | A little reference showing *which document* an answer came from. Proof it's not made up. |
| **NotebookLM** | Google's grounded document tool. Use notebooklm.google.com, or open its integrated entry under **Agents → Made by Google** when enabled. |
| **Canvas** | A Preview editor beside chat for creating and refining documents or slides. |
| **Google Cloud Console** | The website ([console.cloud.google.com](https://console.cloud.google.com)) where you manage everything in Google Cloud. *(Module 8)* |
| **Project** | Your own workspace in Google Cloud. Everything you make lives inside one project. *(Module 8)* |
| **Bucket** | A folder in **Cloud Storage** that holds your files. *(Module 8)* |
| **API** | A switch for a Google service. Most optional service APIs start **disabled**; foundational APIs may already be active. *(Module 8)* |
| **Cloud Shell** | A free terminal *inside the Console* with common tools preinstalled and you already logged in. *(Module 8)* |
| **ADK** | Google's Agent Development Kit for building and evaluating agents in code. *(Module 7)* |
| **Antigravity / `agy`** | A coding companion that runs in your terminal. Inspect every generated edit before running it. *(Module 7)* |
| **Agent Runtime** | Google Cloud's fully managed runtime for hosting AI agents securely. *(Module 8)* |
| **Cloud Run** | A serverless container platform for hosting web UIs and custom runtimes. *(Module 8)* |

---

## 🟢 Start with a prompt (Agent Designer · Chat pane)

> Use this for Module 2. Great for one file and simple jobs. *(Can't use Cloud Storage.)*

1. Click **+ Create agent**.
2. Click **Add files** 📎 → upload your document(s).
3. Type your **prompt** (what the agent should do) → **Submit**.
4. Open the **Preview** tab → test it with real questions.
5. Don't like an answer? **Just tell it** in the chat to change. Re-test.
6. Click **Create** to save. 🎉

---

## 🟡 Configure it precisely (Agent Designer · Flow)

> Use this for Modules 3 & 4. Needed for **Cloud Storage** and **multi-step** agents.
>
> These are not separate products. You can describe an agent in the Chat pane, inspect the draft, then choose **Proceed to builder** and continue with the same agent in Flow.

1. Click **+ Create agent** → **Proceed to builder**.
2. You're on the **Flow** tab. Click the agent box and fill in **Name**, **Instructions**.
3. Click **Add data sources & tools** → choose **Cloud Storage** (the TechBond library).
4. *(Multi-step only)* Hover the agent box → **Add subagent** → give each one ONE job.
5. Open the **Preview** tab → test it.
6. Click **Create** to save. 🎉

---

## 📓 Use NotebookLM (Module 1)

1. Go to **[notebooklm.google.com](https://notebooklm.google.com)**.
   - Alternative when enabled: Gemini Enterprise → **Agents → Made by Google → NotebookLM**.
2. **+ New** notebook → **Add sources** → upload PDFs or paste a YouTube/website link.
3. Open the **Studio** panel → pick a tile:
   - 🎙️ **Audio Overview** — a podcast about your docs (try **Deep Dive**, then **Interactive mode** to talk to the hosts!).
   - 🎬 **Video Overview** — narrated slides that explain your docs.
   - 🧠 **Mind Map** — a clickable map of the ideas.
   - 📄 **Reports** — a briefing doc, study guide, FAQ, or timeline.
4. Or just **chat** with your sources in the middle — every answer shows **citations**.

---

## ☁️ Google Cloud basics (Module 8)

> The four moves everything else builds on. All at **[console.cloud.google.com](https://console.cloud.google.com)** — check the **project name** in the top bar first.

1. **Make a bucket:** ☰ menu → **Cloud Storage → Buckets → Create** → unique name → **Create** → open it → **Upload files**.
2. **Turn on a service:** ☰ menu → **APIs & Services → Library** → search the API → **Enable**.
3. **Call an API with no code:** open the API's **"Try this method"** panel → fill the form → tick **OAuth 2.0** → **Execute**.
4. **Open the terminal:** click the **`>_` Cloud Shell** icon (top-right) → type `gcloud` commands (already logged in).
5. **Ship an agent:** in Cloud Shell, `adk deploy cloud_run --project=… --region=… --with_ui ./your_agent -- --allow-unauthenticated` → set required env vars → open the printed URL.

---

## 🆘 Something's not working? Quick fixes

| Problem | Fix |
|---|---|
| **Agent makes things up** | Add to the prompt: *"Only use the uploaded files. Don't guess."* Check the file actually attached. |
| **Can't add Cloud Storage** | You're in the Chat pane. Click **Proceed to builder** to open the Flow builder. |
| **Agent ignores my file** | Re-upload it. Make sure you see its name listed before testing. |
| **It's just spinning** | Big files/multi-step agents take 20–30 sec. Be patient. |
| **No "Send email" or "Create event"** | Those need Gmail/Calendar connectors (Module 6). In Modules 1–5 the agent just *drafts* them. |
| **Idea Generation is missing** | It is Preview, Global-only, and unavailable in Frontline. Tell the facilitator and use Lab 5.2's regular-assistant fallback. |
| **Canvas or image tools are missing** | Return to Lab 0.1 and check the app's **Configurations → Feature Management** settings. |
| **"Bucket name already taken"** *(Module 8)* | Names are global — add your initials + digits, e.g. `techbond-jd-42`. Lowercase, no spaces. |
| **API call: "PERMISSION_DENIED"** *(Module 8)* | The API isn't enabled, or you used the project *name* instead of the project **ID**. Enable it, use the ID, retry. |
| **Agent Runtime deploy fails** *(Module 8)* | Check you're logged in (`gcloud auth list`), the project **ID** matches (`gcloud config list`), and the Step 2 APIs are enabled. |
| **Totally stuck** | Open the lab's **💡 hints**, then the **✅ full solution**. Then ask a helper. |

---

## ✍️ A prompt that almost always works

> *"You are a helpful TechBond assistant. Use ONLY the uploaded files / connected data to answer. Keep answers short and clear. Use bullet points. If the answer isn't in the data, say so honestly instead of guessing."*

Copy it, tweak the job, and you're off. 🚀

> 🔐 **Sharing reminder:** A shared agent also gives its recipients query access to attached files and data sources. Share only synthetic TechBond agents in this workshop.

---

## 🔐 Credentials and project checks

Run these commands in Cloud Shell before code or cloud work:

```bash
gcloud auth list --filter=status:ACTIVE
gcloud config get-value project
```

- Use the workshop account and your assigned dedicated project.
- Run `gcloud auth application-default login` only when an ADK lab requests application-default credentials.
- Let `agy` use its on-screen authorization flow. Do not paste tokens or API keys into prompts, source files, or screenshots.
- Stop and ask the facilitator when the account or project differs from the workshop assignment.

## 🧹 Cleanup

Before leaving Day 2:

- Delete test buckets that no later lab needs.
- Delete deployed Agent Runtime or Cloud Run resources unless retention was approved.
- Delete workshop Compute Engine VMs and any retained disks or static IPs; stop a VM only if the facilitator explicitly approves temporary retention (stopped VMs still bill for disks and addresses).
- Delete Cloud Workstations in order: **Workstation → Configuration → Cluster**. Stopping is insufficient because the cluster control plane and storage can keep billing.
- Confirm the project again with `gcloud config get-value project`.
- Treat budget alerts as notifications, not spending caps.
