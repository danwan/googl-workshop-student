# 🔴 Lab 8.4 — The Document Detective

> **Your mission:** Take a messy TechBond **PDF** and turn it into clean, structured data with **Document AI** — the difference between "a file" and "data an agent can use." 📄🔍

| 🏆 Level | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Advanced | ~20–25 min | **Document AI** | Your dedicated billed Owner/admin workshop project and a TechBond **PDF** from this module's `Files/` folder |

> 🧰 **This one has the most setup** of the module — you create a *processor* (a little document-reading machine) before you can use it. Worth it: it's a whole different corner of Google Cloud.

---

## 🎬 The story

TechBond's knowledge is trapped in **PDFs** — spec sheets, invoices, quality reports. An agent can *read* the words, but it can't easily pull out *"the shear strength field"* or *"the table of test results"* as clean data. 😵‍💫

**Document AI** fixes that. It runs documents through specialized **processors** that extract text, layout, tables, and key-value pairs — handing you **structured data** instead of a wall of text. That structured output is exactly what you'd feed into a database, a spreadsheet, or an agent. Let's turn a PDF into data. 🕵️

---

## 🛠️ Build it (step by step)

**Step 1 — Enable the Document AI API.** **APIs & Services → Library** → search **`Cloud Document AI API`** → **Enable**. *(The Lab 8.1 move again.)*

**Step 2 — Create a processor.** A processor is the document-reading machine.
1. **Navigation menu** → **Document AI** → **Processors** (or **Processor Gallery**).
2. Click **Create processor**.
3. Pick **Document OCR** (a.k.a. *Enterprise Document OCR*) — the general-purpose "read everything" processor.
4. Give it a name (e.g. `techbond-ocr`), choose a **region** (`us` or `eu`), and click **Create**.

**Step 3 — Feed it a PDF.** On your new processor's page, find the **upload / test** area (often a tab like **Evaluate & test** or a **Test** drop zone).
1. **Upload** a TechBond PDF — e.g. `BondMax-500-Technical-Data-Sheet.pdf` from this module's `Files/` folder.
2. Click **Process** / **Run**.

**Step 4 — Read the result.** Document AI returns a **Document object**. Explore it:
- The **extracted text** of the whole PDF, in order.
- **Layout** info — pages, blocks, paragraphs.
- Toggle the **JSON / raw output** to see the machine-readable structure.

Notice the win: the same content, now as **structured data** with positions and confidence — not just a flat copy-paste. 🎯

**Step 5 — Connect the dots.** That JSON is exactly what you'd hand to an agent or a database. The PDF *Company Brain* read in Module 3 became searchable because tools like this turned documents into structured, indexable data. You just did that step by hand. 🧠

**Step 6 — Clean up the processor.** Return to **Document AI → Processors**. Open the actions menu beside the processor you created, choose **Delete processor**, and confirm. If you completed the optional Form Parser challenge, delete that processor too.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — I don't see Document AI in the menu</strong></summary>

Use the **search bar** at the top of the Console and type "Document AI". If the page asks you to enable the API, do it (Step 1) and reload. Document AI also needs **billing** enabled on the project.
</details>

<details>
<summary><strong>Hint 2 — "Create processor" lists a lot of options</strong></summary>

For this lab pick the general **Document OCR** (Enterprise Document OCR). The others are specialized (Form Parser for key-value pairs, Layout Parser for chunks, custom extractors you train). You can always create a second processor later to compare.
</details>

<details>
<summary><strong>Hint 3 — Upload/process fails or the file is too big</strong></summary>

Online (synchronous) testing is for **small** documents — try a short PDF or the first few pages. Big files use **batch processing** (asynchronous, output written to a Cloud Storage bucket). For the workshop, a small spec sheet is perfect.
</details>

<details>
<summary><strong>✅ Show me the full solution</strong></summary>

1. **APIs & Services → Library** → **Cloud Document AI API** → **Enable**.
2. **Document AI → Processors → Create processor → Document OCR** → name it, pick region `eu`/`us` → **Create**.
3. On the processor page → **upload** `BondMax-500-Technical-Data-Sheet.pdf` → **Process**.
4. Inspect the **extracted text** and toggle the **JSON** output to see the structured Document object.

**Done — one messy PDF, now structured data you could feed straight into an agent.** 📄→🧱
</details>

---

## ✅ You did it when…

- [ ] The **Cloud Document AI API** is enabled.
- [ ] You created a **Document OCR processor**.
- [ ] You processed a TechBond **PDF** and can see the **extracted text** and its **structured/JSON** output.
- [ ] After verification, you deleted the workshop processor.

---

## ✨ Level-up challenge — extract fields, not just text

Create a second processor of type **Form Parser** and run the same document through it. Instead of plain text, you'll get **key–value pairs** (field name → value) and **tables** pulled out automatically. That's the leap from *"the text of the document"* to *"the data in the document"* — exactly what you'd load into a spreadsheet or database for an agent to query. 📊

---

## 🧠 What you just learned

You met **Document AI**, the Google Cloud service that turns unstructured documents into **structured data**. You created a **processor**, ran a real PDF through it, and saw raw pages become organized, machine-readable output. This is the quiet plumbing behind every "ask my documents" agent — and a completely different corner of Google Cloud from storage, compute, and vision. 🛠️

🎓 **That's the Google Cloud Toolkit.** You can now store files, enable and call APIs, work from the cloud terminal, **deploy** an agent, give it **sight**, and turn **documents into data**. Real cloud handwork — in your belt. 🧰

⬅️ Back to the **[module overview](./README.md)** · **[START HERE](../START_HERE.md)**.
