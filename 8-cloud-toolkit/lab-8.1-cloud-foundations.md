# 🟢 Lab 8.1 — Cloud Foundations

> **Your mission:** Learn the four Google Cloud moves every agent-builder needs — **store a file**, **turn on a service**, **use it without writing code**, and **run a command from your browser**. Four quick quests, four new superpowers. ☁️🛠️

| 🏆 Level | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Foundations | ~25–30 min | **Google Cloud Console** | Your dedicated billed workshop project with Project Owner/admin access |

> 🧭 **No installs.** Everything happens at **[console.cloud.google.com](https://console.cloud.google.com)**. Sign in with the account your facilitator gave you, and check the **project name** in the top bar matches the workshop project.
>
> 🚪 **Permission preflight:** Open **APIs & Services** and **Cloud Storage** in your assigned project. If **Enable** or **Create bucket** is unavailable, stop and ask your facilitator before creating anything.

---

## 🎬 The story

Your TechBond agents are great — but where do their documents live? Where does the agent itself run? The answer to almost every "where" is **Google Cloud**. 🏭

Before you can run anything serious, you need four basics. Think of them as the **starter tools in your belt**: a place to put files (**Cloud Storage**), a switch to turn services on (**APIs**), a way to try those services instantly (**APIs Explorer**), and a terminal that's always one click away (**Cloud Shell**). Let's earn all four. 🎮

---

## 🛠️ Build it — four quests

### 🪣 Quest 1 — Make a Cloud Storage bucket (and drop a file in it)

A **bucket** is a folder in the cloud. It's exactly what Module 3's *Company Brain* reads from — now you'll make your own.

1. **Navigation menu** (☰, top-left) → **Cloud Storage** → **Buckets**.
2. Click **Create**.
3. **Name your bucket** — it must be **globally unique** across all of Google Cloud. 💡 Tip: add your initials + a number, e.g. `techbond-jd-42`.
4. **Location type:** *Region* → select the workshop region `europe-west4`. Leave everything else at its default.
5. Click **Create**. (If a "public access prevention" pop-up appears, keep it **on** — Confirm.)
6. Open your new bucket → **Upload** → **Upload files** → pick any TechBond PDF (or any file from your computer). Watch it appear in the bucket. ✅

> 🎉 You just created cloud storage and uploaded a file. That's the same kind of bucket an agent connects to as a knowledge source.

### 🔌 Quest 2 — Turn on an API

Most optional Google Cloud service APIs start **disabled**; foundational APIs may already be active. When a lab needs an optional service, enable its API in the **API Library**.

1. **Navigation menu** → **APIs & Services** → **Library**.
2. In the search box, type **`Cloud Translation API`**.
3. Click it → click **Enable**. Wait a few seconds for it to turn on. ✅

> 💡 That's the whole concept: *no enabled API → no service.* You'll do this exact move before using Vision (Lab 8.3) and Document AI (Lab 8.4).

### 🧪 Quest 3 — Call that API with **zero code**

You don't need a program to try an API. The **APIs Explorer** lets you fill in a form and hit **Execute**.

1. Open the **Cloud Translation "translateText" reference**: [docs.cloud.google.com/translate/docs/reference/rest/v3/projects/translateText](https://docs.cloud.google.com/translate/docs/reference/rest/v3/projects/translateText) — the **Try this API** panel is on the right.
2. In the **Try this API** panel on the right, fill in:
   - **parent:** `projects/YOUR_PROJECT_ID` (your project ID is in the Console's top bar)
   - **Request body:**
     ```json
     {
       "contents": ["Hello, TechBond!"],
       "sourceLanguageCode": "en",
       "targetLanguageCode": "de"
     }
     ```
3. Make sure the **Google OAuth 2.0** credential box is ticked, then click **Execute**. Approve the access prompt if asked.
4. Read the response — you should see:
   ```json
   { "translations": [ { "translatedText": "Hallo, TechBond!" } ] }
   ```

> 🤖 You just called a real Google AI service from a browser form — **no code, no keys to manage**. This is exactly the kind of API an *agent* calls as a tool. (You'll wire one into an agent for real in Lab 8.3.)

### 💻 Quest 4 — Run a command in Cloud Shell

**Cloud Shell** is a free Linux terminal *inside the Console* — `gcloud` is already installed and already logged in as you. Nothing to set up.

1. Click the **Activate Cloud Shell** icon (the `>_` terminal symbol, top-right). Click **Continue** if prompted. Wait a few seconds for it to start.
2. Run these one at a time:
   ```bash
   gcloud config list          # shows your active account + project
   gcloud storage ls           # lists your buckets — you'll see the one from Quest 1!
   gcloud storage ls gs://YOUR_BUCKET_NAME   # lists the files inside it
   ```

> 🧙 The CLI you "installed" took zero installs. Cloud Shell is the fastest way to run any Google Cloud command without touching your own machine.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — "Bucket name already taken"</strong></summary>

Bucket names are **globally unique** — someone, somewhere, already used the simple one you tried. Add more randomness: `techbond-<yourname>-<a-few-digits>`. Names must be lowercase, with no spaces.
</details>

<details>
<summary><strong>Hint 2 — APIs Explorer says "PERMISSION_DENIED" or "project not found"</strong></summary>

Two checks: (1) the **parent** must be `projects/` + your real **project ID** (not the project *name* — find the ID in the top-bar project picker). (2) The **Cloud Translation API** must be **enabled** (Quest 2). Enable it, wait 30 seconds, try again.
</details>

<details>
<summary><strong>Hint 3 — Cloud Shell shows no buckets</strong></summary>

`gcloud storage ls` lists buckets **in your active project**. Run `gcloud config list` and confirm the `project` line matches the project where you made the bucket. If not: `gcloud config set project YOUR_PROJECT_ID`, then list again.
</details>

<details>
<summary><strong>✅ Show me the whole thing, start to finish</strong></summary>

1. **Cloud Storage → Buckets → Create** → unique name → region `europe-west4` → **Create** → open bucket → **Upload files** → pick a file.
2. **APIs & Services → Library** → search **Cloud Translation API** → **Enable**.
3. **Try this API** for `translateText` → parent `projects/YOUR_PROJECT_ID`, body `{"contents":["Hello, TechBond!"],"sourceLanguageCode":"en","targetLanguageCode":"de"}` → **Execute** → expect `"Hallo, TechBond!"`.
4. **Activate Cloud Shell** → `gcloud config list` → `gcloud storage ls` → see your bucket.
5. Complete the optional CLI upload below if you want to, then delete the workshop bucket.

**Done — you can store, enable, call, and operate. That's the foundation everything else stands on.** 🏗️
</details>

## ✨ Level-up challenge (optional)

From **Cloud Shell**, do Quest 1's upload again — but with the CLI instead of clicks:
```bash
echo "Hello from the command line" > note.txt
gcloud storage cp note.txt gs://YOUR_BUCKET_NAME/
gcloud storage ls gs://YOUR_BUCKET_NAME/
```
Now you've used the Console **and** the CLI to do the same job — and you've felt *why* engineers reach for the terminal: it's scriptable and repeatable. 🔁

## 🧹 Final cleanup — Delete the bucket

After the optional challenge (or immediately if you skipped it), return to **Cloud Storage → Buckets**, select the bucket you created, click **Delete**, enter its name to confirm, and delete it. This removes the uploaded workshop copies and prevents later storage charges.

---

## ✅ You did it when…

- [ ] Your bucket contained at least one file and was visible from Cloud Shell.
- [ ] The **Cloud Translation API** was enabled and APIs Explorer returned **`"Hallo, TechBond!"`**.
- [ ] After all standard and optional exercises, you deleted the workshop bucket.

---

## 🧠 What you just learned

You picked up the four most-used Google Cloud basics: **buckets** (where files live), the **API Library** (how services switch on), the **APIs Explorer** (try any API with no code), and **Cloud Shell** (a pre-authenticated terminal in your browser). Every advanced lab — and every real cloud project — leans on these four. 🧰

➡️ **Next up:** [Lab 8.2 — Ship Your Agent](./lab-8.2-ship-your-agent.md) — deploy the included Formula starter to Agent Runtime.

⬅️ Back to the **[module overview](./README.md)**.
