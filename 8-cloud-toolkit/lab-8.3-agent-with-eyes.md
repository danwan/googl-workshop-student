# 🔴 Lab 8.3 — The Agent With Eyes

> **Your mission:** Give an agent a brand-new sense. Use the **Cloud Vision API** to "look at" a picture — first with **zero code**, then as a real **tool** your ADK agent can call. 👁️🤖

| 🏆 Level | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Advanced · Developer | ~20–30 min | **Cloud Vision API** (+ optional ADK) | Your dedicated billed Owner/admin workshop project; for Stage B, the ADK setup from **[Lab 7.2](../7-code-adk/lab-7.2-formula-assistant.md)** (or **[Lab 7.4](../7-code-adk/lab-7.4-adventure-agent.md)**) |

> **Starting here or skipped earlier labs?** Stage A is fully standalone. For Stage B, use the mini-setup in Step 4; it creates a fresh environment and uses Vertex AI with keyless Application Default Credentials, so no Module 7 project, `.env`, or API key is required.

> 💸 **It's free for this.** Vision gives you **1,000 requests/month at no charge**. A workshop won't get close.

---

## 🎬 The story

Text agents are smart, but blind. They can read a spec sheet — but they can't look at a photo of a damaged shipment, a label, or a product on a shelf. 📦

The **Cloud Vision API** is a pre-trained model that *sees*: hand it an image and it tells you what's in it (labels), reads text in it (OCR), finds logos, and more. You don't train anything — you just call it. In this lab you'll prove it no-code, then bolt it onto an agent so the agent can describe what it sees. 🪄

---

## 🛠️ Build it (step by step)

### 👁️ Stage A — See it work (no code)

**Step 1 — Enable the Vision API.** **APIs & Services → Library** → search **`Cloud Vision API`** → **Enable**. *(Same move as Lab 8.1 Quest 2.)*

**Step 2 — Call it in the APIs Explorer.** Open the **Vision `images:annotate` "Try this method"** panel (search *"Cloud Vision images annotate REST"*). Paste this request body — it points at a public sample image, so you don't need your own:
```json
{
  "requests": [
    {
      "features": [ { "type": "LABEL_DETECTION" } ],
      "image": {
        "source": { "imageUri": "gs://cloud-samples-data/vision/label/wakeupcat.jpg" }
      }
    }
  ]
}
```

**Step 3 — Execute.** Tick the **Google OAuth 2.0** credential box, click **Execute**, approve the prompt. You'll get back a list of **labels** with confidence scores — `Cat`, `Whiskers`, `Mammal`… The model *saw* the picture. 🐱

> 🔁 **Use your own image:** upload a photo to your bucket from Lab 8.1, make it readable, and swap the `imageUri` for `gs://YOUR_BUCKET/your-image.jpg`. Try a photo of a product or a label.

### 🛠️ Stage B — Make it an agent tool (code)

Now the fun part: a tool is just a Python function (you learned this in Lab 7.2). Let's give an agent **eyes**.

**Step 4 — Prepare a standalone environment.**
In Cloud Shell, reuse your Lab 7.0 environment if it exists; otherwise create it. Then install both required packages and authenticate keylessly:

```bash
# Use your dedicated workshop project
export GOOGLE_CLOUD_PROJECT="your-project-id"
export GOOGLE_CLOUD_LOCATION="europe-west4"
export GOOGLE_GENAI_USE_VERTEXAI=TRUE
gcloud config set project "$GOOGLE_CLOUD_PROJECT"

# Create once; if venv already exists this leaves it intact
test -d venv || python3 -m venv venv
source venv/bin/activate
pip install google-adk google-cloud-vision

# Authenticate both the ADK model call and Vision client without an API key
gcloud auth application-default login
```

**Step 5 — Write the tool.** Create a fresh ADK module; the shell variables and ADC from Step 4 provide credentials, so do not copy an `.env` or API key:

```bash
mkdir -p inspector
printf 'from . import agent\n' > inspector/__init__.py
```

Now open `inspector/agent.py` (or your reused `agent.py`) and add the tool:
```python
from google.cloud import vision

def describe_image(image_uri: str) -> dict:
    """Look at an image and return what Cloud Vision sees in it.

    Args:
        image_uri: A public image URL, or a gs:// Cloud Storage URI.
    """
    client = vision.ImageAnnotatorClient()
    image = vision.Image()
    image.source.image_uri = image_uri
    response = client.label_detection(image=image)
    return {"labels": [label.description for label in response.label_annotations]}
```

**Step 6 — Give the tool to an agent.**
```python
from google.adk import Agent

root_agent = Agent(
    name="inspector_agent",
    model="gemini-3.5-flash",
    instruction=(
        "You are a visual inspector. When the user gives you an image URL, "
        "call describe_image to see it, then describe what's in the picture "
        "in one friendly sentence."
    ),
    tools=[describe_image],
)
```

**Step 7 — Run it and show it a picture.** From the parent directory of `inspector/`, run:
```bash
adk web .
```
Pick `inspector` in the agent dropdown, then type: *"What's in this image? gs://cloud-samples-data/vision/label/wakeupcat.jpg"* — and watch the agent **call the Vision tool**, get the labels, and answer in plain language. Your agent can now *see*. 🎉

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — APIs Explorer returns an empty response or an error</strong></summary>

Confirm the **Cloud Vision API** is **enabled** (Stage A, Step 1) and that the **OAuth 2.0** credential box is ticked before **Execute**. The `imageUri` must be reachable — the `gs://cloud-samples-data/...` sample is public, so start with that before trying your own.
</details>

<details>
<summary><strong>Hint 2 — Code error: "Could not automatically determine credentials" or API key/model errors</strong></summary>

Your code needs Application Default Credentials for both Vision and Vertex AI. Re-run Step 4, confirm `gcloud config get-value project` shows your assigned project, and keep `GOOGLE_GENAI_USE_VERTEXAI=TRUE` set in the shell that launches `adk web`.
</details>

<details>
<summary><strong>Hint 3 — The agent answers but never calls the tool</strong></summary>

Same rule as Lab 7.2: the **docstring matters**. Keep the `describe_image` docstring describing what it does and its `image_uri` argument — that's what the model reads to decide when to use it. And confirm `tools=[describe_image]` is actually passed to the `Agent`.
</details>

<details>
<summary><strong>✅ Show me the full solution</strong></summary>

**Stage A:** Enable **Cloud Vision API** → **images:annotate "Try this method"** → body with `LABEL_DETECTION` on `gs://cloud-samples-data/vision/label/wakeupcat.jpg` → **Execute** → expect labels like `Cat`, `Whiskers`.

**Stage B:**
```bash
export GOOGLE_CLOUD_PROJECT="your-project-id"
export GOOGLE_CLOUD_LOCATION="europe-west4"
export GOOGLE_GENAI_USE_VERTEXAI=TRUE
gcloud config set project "$GOOGLE_CLOUD_PROJECT"
gcloud auth application-default login

test -d venv || python3 -m venv venv
source venv/bin/activate
pip install google-adk google-cloud-vision

mkdir -p inspector
printf 'from . import agent\n' > inspector/__init__.py
```
`inspector/agent.py`:
```python
from google.adk import Agent
from google.cloud import vision

def describe_image(image_uri: str) -> dict:
    """Look at an image and return what Cloud Vision sees in it.

    Args:
        image_uri: A public image URL, or a gs:// Cloud Storage URI.
    """
    client = vision.ImageAnnotatorClient()
    image = vision.Image()
    image.source.image_uri = image_uri
    response = client.label_detection(image=image)
    return {"labels": [label.description for label in response.label_annotations]}

root_agent = Agent(
    name="inspector_agent",
    model="gemini-3.5-flash",
    instruction=(
        "You are a visual inspector. When the user gives you an image URL, call "
        "describe_image to see it, then describe what's in the picture in one sentence."
    ),
    tools=[describe_image],
)
```
From the parent directory of `inspector/`, keep the same shell active and run `adk web .` → select `inspector` → ask about `gs://cloud-samples-data/vision/label/wakeupcat.jpg` → the agent calls the tool and describes it.

**Done — an agent that can see.** 👁️
</details>

---

## ✅ You did it when…

- [ ] The APIs Explorer returned **labels** for the sample image (Stage A).
- [ ] *(Stage B)* Your agent **calls `describe_image`** when given an image URL.
- [ ] The agent answers with a description based on the **real labels** Vision returned.

---

## ✨ Level-up challenge — read the text in a picture

`LABEL_DETECTION` says *what* is in an image. Swap it for **`TEXT_DETECTION`** (in the request body, or `client.text_detection(...)` in code) and point it at a photo of a **label, sign, or document**. Now your agent can **read** text out of images — instant OCR. Imagine pointing it at a TechBond product label. 🏷️

---

## 🧠 What you just learned

You used a **pre-trained Google ML API** — no training, no data, just a call — and turned it into an **agent tool**. This is how agents gain new senses: each capable API (vision, translation, speech) becomes a function the agent can choose to call. You've now connected the dots from **Lab 8.1's no-code API call** to a **real agent using that API on its own**. 🔌

➡️ **Next up:** [Lab 8.4 — The Document Detective](./lab-8.4-document-detective.md) — pull structured data out of messy PDFs with Document AI.

⬅️ Back to the **[module overview](./README.md)**.
