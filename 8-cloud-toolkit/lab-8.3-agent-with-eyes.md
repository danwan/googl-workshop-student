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

<details>
<summary><strong>🔁 Optional — use your own image</strong></summary>

Use a dedicated Vision-lab bucket rather than the bucket deleted in Lab 8.1. In Cloud Shell, replace all four placeholders, then run:

```bash
EXPECTED_PROJECT_ID="your-assigned-workshop-project-id"
VISION_LOCATION="europe-west4"
PARTICIPANT_SUFFIX="your-initials"
IMAGE_FILE="path/to/your-image.jpg"

PROJECT_ID="$(gcloud config get-value project 2>/dev/null)"
PROJECT_NUMBER="$(gcloud projects describe "$PROJECT_ID" --format='value(projectNumber)' 2>/dev/null)"
VISION_BUCKET="techbond-vision-${PROJECT_ID}-${PARTICIPANT_SUFFIX}"
VISION_BUCKET_CREATED=false
vision_bucket_ready=false

if [ -z "$PROJECT_ID" ] || [ "$PROJECT_ID" = "(unset)" ] \
  || [ "$PROJECT_ID" != "$EXPECTED_PROJECT_ID" ]; then
  printf 'STOP: active project does not match your workshop assignment.\n' >&2
elif [ "$VISION_LOCATION" != "europe-west4" ]; then
  printf 'STOP: use the workshop location europe-west4.\n' >&2
elif [ -z "$PROJECT_NUMBER" ]; then
  printf 'STOP: could not determine the active project number.\n' >&2
elif ! test -s "$IMAGE_FILE"; then
  printf 'STOP: image file is missing or empty: %s\n' "$IMAGE_FILE" >&2
else
  bucket_metadata="$(gcloud storage buckets describe "gs://${VISION_BUCKET}" \
    --format='value(projectNumber,location)' 2>/dev/null)"
  if [ -n "$bucket_metadata" ]; then
    IFS=$'\t' read -r bucket_project_number bucket_location <<< "$bucket_metadata"
    if [ -z "$bucket_project_number" ] || [ -z "$bucket_location" ]; then
      printf 'STOP: existing bucket metadata is incomplete.\n' >&2
    elif [ "$bucket_project_number" != "$PROJECT_NUMBER" ]; then
      printf 'STOP: existing bucket belongs to a different project.\n' >&2
    elif [ "${bucket_location,,}" = "${VISION_LOCATION,,}" ]; then
      vision_bucket_ready=true
    else
      printf 'STOP: existing bucket is in %s, not %s.\n' "$bucket_location" "$VISION_LOCATION" >&2
    fi
  elif gcloud storage buckets create "gs://${VISION_BUCKET}" \
    --project="$PROJECT_ID" --location="$VISION_LOCATION"; then
    VISION_BUCKET_CREATED=true
    vision_bucket_ready=true
  else
    printf 'STOP: could not create the dedicated Vision bucket.\n' >&2
  fi

  if "$vision_bucket_ready"; then
    VISION_OBJECT_URI="gs://${VISION_BUCKET}/vision-own-image-${PARTICIPANT_SUFFIX}-$(date +%s).jpg"
    if gcloud storage cp "$IMAGE_FILE" "$VISION_OBJECT_URI"; then
      export VISION_OBJECT_URI VISION_BUCKET VISION_BUCKET_CREATED
      printf 'Use this imageUri: %s\n' "$VISION_OBJECT_URI"
    else
      printf 'STOP: image upload failed.\n' >&2
      if [ "$VISION_BUCKET_CREATED" = true ]; then
        gcloud storage rm --recursive "gs://${VISION_BUCKET}/**" >/dev/null 2>&1 || true
        gcloud storage buckets delete "gs://${VISION_BUCKET}" >/dev/null 2>&1 || true
        VISION_BUCKET_CREATED=false
      fi
    fi
  fi
fi
```

Swap the request body's public `imageUri` for the printed `VISION_OBJECT_URI`, then click **Execute**. When you finish testing, remove the object and delete the bucket only if this route created it:

```bash
if [ -z "${VISION_OBJECT_URI:-}" ]; then
  printf 'STOP: no optional Vision object was uploaded in this shell.\n' >&2
elif gcloud storage rm "$VISION_OBJECT_URI"; then
  if [ "${VISION_BUCKET_CREATED:-false}" = true ]; then
    gcloud storage buckets delete "gs://${VISION_BUCKET}"
  else
    printf 'Kept the reused bucket; only the workshop image was deleted.\n'
  fi
else
  printf 'STOP: optional image cleanup failed.\n' >&2
fi
```

</details>

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
