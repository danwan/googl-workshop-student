# 🟢 Lab 0.1 — Environment Setup

> **Your mission:** Set up Gemini Enterprise with the workshop feature profile, create a Google Cloud Storage bucket, upload the TechBond document library, and connect it as a secure data source. ⚙️☁️

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 1 · Easy | ~30–45 min | **Google Cloud Console** & **Agent Designer** | Your dedicated billed workshop project with Project Owner/admin access, and the TechBond document library PDFs from `3-workflow-agent/Files/Document-Library/` |

---

## 🎬 The story

Welcome to **TechBond Industries**! 🧪 As a newly appointed Lead AI Architect, your first assignment is to lay down the digital foundation. Before you can build intelligent agents to read spec sheets, answer customer emails, and draft briefs, you need to spin up the actual infrastructure.

Since you've been granted full admin permissions over your own Google Cloud project, you are going to:
1. Turn on the **Gemini Enterprise Agent Platform / Agent Designer** suite.
2. Create a high-performance **Google Cloud Storage (GCS)** bucket.
3. Seed the bucket with our 20 proprietary TechBond data documents.
4. Connect this bucket as a secure data source inside Agent Designer so later agents can read it.

Let's build the foundation! 🚀

---

## 🛠️ Build it (step by step)

### Step 1 — Open the Google Cloud Console
1. Navigate to the **[Google Cloud Console](https://console.cloud.google.com)**.
2. Sign in with the Google Account provided for your workshop.
3. In the top project selector drop-down, select your dedicated workshop project. Do not use another participant's project or a shared project.

---

### Step 2 — Enable Gemini Enterprise Agent Platform APIs
To run Google's Agent Designer and build enterprise-grade agents, we must ensure all the necessary Gemini Enterprise APIs and services are enabled in our project.

Depending on your project's state, some APIs may already be active, but let's make sure we enable all the critical ones:
1. **Agent Platform API** (`aiplatform.googleapis.com`) — provides model access, reasoning engines, and agent orchestration.
2. **Discovery Engine API** (`discoveryengine.googleapis.com`) — provides grounding, unstructured search, and conversational RAG.
3. **Cloud Storage API** (`storage.googleapis.com`) — provides secure storage for document libraries and files.

**How to enable them:**
* **Method A (Easiest — Console Search):**
  1. In the Cloud Console search bar, search for **Gemini Enterprise** (or **Agent Platform**).
  2. Click on **Gemini Enterprise** (or **Agent Platform**).
  3. If prompted with an enablement screen, click **Enable** (or **Enable API**). This will automatically activate the core APIs in the background.

* **Method B (Direct — APIs & Services Library):**
  1. In the top-left navigation menu (☰), go to **APIs & Services** > **Library**.
  2. Search for **Agent Platform API** and click **Enable**.
  3. Search for **Discovery Engine API** and click **Enable**.
  4. Search for **Cloud Storage API** and click **Enable** (this is usually on by default but is required for our bucket!).

---

### Step 3 — Create your GCS Bucket
Our document library of 20 business reports, sales guides, and spec sheets needs a secure home in the cloud.

1. In the Cloud Console search bar, search for **Cloud Storage** and click on **Buckets**.
2. Click **+ Create** at the top of the buckets dashboard.
3. Configure your bucket settings:
   * **Name**: Choose a globally unique name like `techbond-documents-<your-name-or-initials>`. (Remember this name!)
   * **Location type**: Choose **Region** and select the workshop region `europe-west4`.
   * **Storage class**: Keep **Standard**.
   * **Access control**: Keep **Uniform** (default).
4. Click **Create** (and click **Confirm** if asked about public access prevention).

---

### Step 4 — Upload the TechBond Document Library
Let's populate your GCS bucket with TechBond's proprietary corporate files.

Where you find these files depends on how you are accessing this workshop:
*   📁 **If you are using the shared Google Drive folder:** Navigate to **`3-workflow-agent`** → **`Files`** → **`Document-Library`** in your shared Drive, and download those 20 PDF files to your computer.
*   💻 **If you are using a cloned Git repository:** All 20 files are in **`3-workflow-agent/Files/Document-Library/`**.

Once you have the 20 files ready on your local computer:
1. In your Google Cloud Storage bucket browser, click **Upload Files** (or drag-and-drop your downloaded PDFs).
2. Select and upload all **20 PDF files** (spec sheets, launch plans, guides).
3. Wait for the uploads to complete. You should see a clean list of 20 PDFs inside your bucket!

---

### Step 5 — Create your Gemini Enterprise App
Before you can open the **Agent Designer**, you must first create a Gemini Enterprise "App" inside the Google Cloud Console. This app provides your hosted web application — the user interface for building and testing agents.

1. In the Google Cloud Console search bar, search for **Gemini Enterprise** and open it (direct link: [console.cloud.google.com/gemini-enterprise/start](https://console.cloud.google.com/gemini-enterprise/start)).
2. On the **Apps** page, click **Create app**.
3. In the **App name** field, enter `techbond-agent-academy`.
4. In the **Choose a location** section, keep the default **global (Global)** multi-region. *(Note: It is crucial that your app and your data store use the same location to be compatible!)*
5. Optional: Expand **Advanced options** and enter **Company name**: `TechBond`.
6. Click **Create**.

---

### Step 5A — Configure the workshop features

The app is created with several participant features turned off. Open your app, then go to **Configurations → Feature Management**.

Turn on this **Creative workshop** profile:

- **Enable Agent Gallery**
- **Enable Agent Designer**
- **Enable model selector**
- **Enable NotebookLM**
- **Enable session sharing**
- **Enable agent sharing**
- **Enable Canvas**
- **Enable image generation**

For **Model availability**, keep the stable GA choices available in your region. Do not make a Limited Availability model a workshop requirement. For image generation, keep the available default model; the labs do not require a Global-only image model.

Because this workshop uses dedicated projects and synthetic TechBond files, turn on **Enable agent sharing without admin approval** only when your facilitator confirms that sharing is limited to the workshop cohort. Otherwise leave approval required. Enable group sharing only when the facilitator prepared a workshop Google Group.

Leave these features off: **memory and customization**, **video generation**, **OneDrive upload**, **Google Drive upload**, **talk to content**, **include cross-domain documents**, and **welcome emails**. They are not needed for the labs. Cross-domain documents also introduce additional external-content and prompt-injection risk.

> ⚠️ Sharing an agent also shares query access to its attached files and data sources. Share only agents that use the synthetic TechBond materials.

---

### Step 6 — Create your Data Store and connect it to your App
Now let's ingest the TechBond document library from your GCS bucket into a data store, and hook it up to your new app.

1. In the **Gemini Enterprise** navigation menu, click **Data Stores**, then click **Create Data Store**.
2. On the **Select a data source** page, select **Cloud Storage**.
3. In the **Select a folder or file you want to import** section, keep **Folder** selected (the default).
4. Click **Browse** and choose your bucket `gs://techbond-documents-<your-name-or-initials>` (or enter the path directly in the **gs://** field).
5. Select **Unstructured documents** (such as PDF, HTML, TXT) as the kind of data you are importing, then click **Continue**.
6. Choose **global** as the region for your data store (must match your app's location!), name it `techbond-docs`, and click **Create**.
7. Connect the data store to your app: in the navigation menu, click **Apps** → select `techbond-agent-academy` → click **Connected data sources** → **Add existing data stores** → select `techbond-docs` → click **Connect**.

> 💡 Gemini Enterprise is now indexing your GCS bucket! To check progress, go to **Data Stores** → click `techbond-docs` → **Activity** tab: the status changes from **In progress** to **Import completed** after a few minutes.

---

### Step 7 — Retrieve your Web App URL
Every Gemini Enterprise app comes with a Google-hosted web application where you (and your users) chat with agents and open the Agent Designer.

1. In the **Gemini Enterprise** navigation menu, click **Apps** and select `techbond-agent-academy`.
2. On the app's **Dashboard**, find the **Gemini Enterprise web app URL**.
3. Copy the URL, open it in a new browser tab, and bookmark it!

> 💡 This unique URL is your workspace portal containing the **Agent Gallery** and **Agent Designer** (click **+ Create agent** inside the web app). You will visit this URL in Modules 2, 3, 4, 5, and 6 to build and test your agents!

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — I get a permission error (403) trying to enable APIs</strong></summary>

Make sure you have selected the correct Google Cloud Project in the top navigation bar. If you are signed in with multiple accounts, verify that Cloud Console is active under your workshop account, which has owner/admin privileges.
</details>

<details>
<summary><strong>Hint 2 — My bucket name isn't accepted</strong></summary>

GCS bucket names are globally unique across all Google Cloud users. If `techbond-documents` is taken, append random numbers or your name, such as `techbond-documents-dan-8725`.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. Open Cloud Console → Select project.
2. Search **Gemini Enterprise** → Click **Enable** (or enable **Agent Platform API** and **Discovery Engine API** under **APIs & Services > Library**).
3. Search **Cloud Storage** → Click **Create** → Name: `techbond-documents-<your-name>` → Click **Create**.
4. Inside bucket → Drag-and-drop the 20 PDFs from `3-workflow-agent/Files/Document-Library/`.
5. Open **Gemini Enterprise** in Google Cloud Console → **Apps** → **Create app** → Name: `techbond-agent-academy` → Location: **global** → Click **Create**.
6. **Configurations** → **Feature Management** → enable the Creative workshop profile from Step 5A and leave the excluded features off.
7. **Data Stores** → **Create Data Store** → **Cloud Storage** → **Folder** → enter `gs://techbond-documents-<your-name>` → select **Unstructured documents** → **Continue** → region **global** → Name: `techbond-docs` → **Create**. Then **Apps** → your app → **Connected data sources** → **Add existing data stores** → select `techbond-docs` → **Connect**.
8. **Apps** → your app → **Dashboard** → copy the **web app URL**. Bookmark this URL to access your **Agent Designer** workspace in subsequent labs!
9. Open the web app and complete the feature check below.
10. After your final workshop lab, complete the cleanup below unless the facilitator approved retention.

**Done — your enterprise workspace is fully ready!** ⚙️☁️
</details>

---

## ✅ You did it when…

- [ ] You have enabled Gemini Enterprise Agent Platform / Agent Designer APIs.
- [ ] Your GCS bucket `gs://techbond-documents-<your-name>` has all 20 PDF files uploaded.
- [ ] You have created a Gemini Enterprise app and connected your GCS bucket as an unstructured data store.
- [ ] You have retrieved your unique Gemini Enterprise web app URL from the app's Dashboard.
- [ ] **Agents** shows the Agent Gallery, NotebookLM, and **+ Create agent**.
- [ ] Agent Designer accepts a prompt and **Proceed to builder** opens **Flow** and **Preview**.
- [ ] The model selector, session sharing, Canvas, and image generation are visible.
- [ ] **Idea Generation** appears under **Agents → Made by Google**, or you stopped and told the facilitator. It is a Preview agent, Global-only, and unavailable in Frontline.

---

## 🧹 Final cleanup

Unless the facilitator explicitly approved retention, after your final workshop lab delete these resources in dependency order: **app `techbond-agent-academy` → data store `techbond-docs` → the exact bucket name you recorded in Step 3**. Do not use a wildcard or pattern such as `techbond-documents-*`. Confirm each deletion before continuing to the next resource.

---

## 🧠 What you just learned

You've successfully set up your **Enterprise AI environment**! You learned that:
1. Enterprise agents rely on cloud backends like the **Gemini Enterprise Agent Platform** to interface with data securely.
2. **Cloud Storage (GCS)** is the industry standard for storing corporate documents.
3. Creating a **Gemini Enterprise app** automatically provisions a secure, Google-hosted **web application** (with the **Agent Gallery** and **Agent Designer**) where you can build, configure, and test agents.
4. Connecting GCS directly to your app provides visual agents with a private, secure knowledge base for RAG (Retrieval-Augmented Generation) without coding!

➡️ **Next up:** [Lab 0.2 — Enable Gemini Cloud Assist](./lab-0.2-enable-cloud-assist.md).
