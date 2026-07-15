# 🟢 Lab 0.2 — Enable Gemini Cloud Assist

> **Your mission:** Activate Gemini Cloud Assist in your project so you have a persistent, helpful AI assistant built directly into the Google Cloud Console to explain resources, troubleshoot errors, and write gcloud commands for you. 🧠✨

| 🏆 Level | ⏱️ Time | 🧰 Builder | 📦 Data you need |
|---|---|---|---|
| 1 · Easy | ~10 min | **Google Cloud Console** | Your dedicated billed workshop project with Project Owner/admin access and Gemini Cloud Assist enabled for your workshop account |

---

## 🎬 The story

As Lead AI Architect at **TechBond Industries**, you are setting up the cloud sandbox for our engineering teams. Cloud development can be complex—you have to write configurations, find the right metrics, and debug permission errors. 

Rather than constantly switching tabs to search the web or consult docs, you want to enable a companion that is fully aware of your current context. Google Cloud's **Gemini Cloud Assist** provides an inline chatbot directly on the right side of your browser console, ready to help you operate and optimize your cloud infrastructure.

Let's switch it on! 🚀

---

## 🛠️ Build it (step by step)

### Step 1 — Enable the Gemini for Google Cloud API
To turn on Gemini inside the console, we need to enable the core API that services Google Cloud's AI-driven companions.

1. Navigate to the **[Google Cloud Console](https://console.cloud.google.com)** and verify your workshop project is selected in the top bar.
2. In the top-left navigation menu (☰), go to **APIs & Services** > **Library**.
3. In the search bar, search for **Gemini for Google Cloud API** (service identifier: `cloudaicompanion.googleapis.com`).
4. Click on the API and click **Enable**.
5. Wait about 30 seconds for the service usage to propagate.

> [!TIP]
> Additionally, search for and ensure the **Gemini Cloud Assist API** (`geminicloudassist.googleapis.com`) is enabled. This ensures that all contextual chat capabilities in the console are fully authorized.

---

### Step 2 — Activate the Gemini Chatbot Pane
Now let's launch your AI companion!

1. Look at the top-right navigation bar of the Google Cloud Console (next to your notification bell and account profile).
2. Click the **Gemini "Sparkle" icon** (✨).
3. A drawer panel will open on the right side of your screen: **Gemini in Google Cloud**.
4. Click **Start Chatting**.
5. Type a test question like: *"How do I view my Cloud Storage buckets?"* or *"What is this project's ID?"* and press Enter.
6. Verify that Gemini replies with real-time instructions grounded in your project!

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — The Gemini icon doesn't appear in the top bar</strong></summary>

If the Sparkle icon is missing, refresh your browser tab. Sometimes the Cloud Console needs to reload its top navigation menu after the `cloudaicompanion.googleapis.com` API has been enabled. Also, verify that billing is active on your project, as free-tier projects without billing verified cannot access Gemini Cloud Assist.
</details>

<details>
<summary><strong>Hint 2 — I get an access error inside the chat drawer</strong></summary>

Confirm that you selected your dedicated workshop project and signed in with the workshop account. If both are correct, stop and ask the facilitator to verify that Gemini Cloud Assist is enabled for the account.
</details>

<details>
<summary><strong>✅ Show me a full solution</strong></summary>

1. Open Cloud Console → Select project.
2. Go to **APIs & Services > Library** → search and enable `cloudaicompanion.googleapis.com` and `geminicloudassist.googleapis.com`.
3. Refresh browser → Click the ✨ Sparkle icon in the top right → Start Chatting!
</details>

---

## ✅ You did it when…

- [ ] You have enabled both the `cloudaicompanion.googleapis.com` and `geminicloudassist.googleapis.com` APIs.
- [ ] The Gemini Chat drawer is open on the right side of your Cloud Console and successfully responds to a prompt.

---

## 🧠 What you just learned

You've successfully deployed your in-console AI assistant! You learned that:
1. **Gemini Cloud Assist** relies on the underlying `cloudaicompanion.googleapis.com` (Gemini for Google Cloud) service.
2. Once the APIs are active, the workshop account can open the context-aware assistant directly in the Cloud Console.

➡️ **Next up:** open the [Day 1 guide](../DAY_1.md).
