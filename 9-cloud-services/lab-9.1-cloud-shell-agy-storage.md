# 🟢 Lab 9.1 — Cloud Shell, agy & Storage

> **Your mission:** Open **Cloud Shell**, start the **Antigravity CLI (`agy`)** terminal companion to generate **5 text reports**, create a **Cloud Storage bucket** via the CLI, and upload the files to your bucket using `gcloud storage`. 📦📁

| 🏆 Level | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Foundations | ~15–20 min | **Cloud Shell** + **agy CLI** + **gcloud storage** | Your dedicated billed workshop project with Project Owner/admin access |

> 🚪 **Project preflight:** Run `gcloud config get-value project` and confirm it is your assigned project, then run `gcloud storage buckets list`. If the project is wrong, stop and ask your facilitator.

---

## 🎬 The story

As an agent builder, you will frequently need to feed source documents (like PDFs, reports, or text specs) to your custom search models or RAG corpora. Doing this manually through a drag-and-drop web UI is fine for one file, but real engineering requires automation.

In this lab, you will combine the **Antigravity CLI (`agy`)** with standard **Google Cloud Storage (GCS)** CLI tools. You will prompt `agy` to programmatically generate 5 business report text files in your Cloud Shell container, provision a globally accessible GCS bucket via the CLI, and copy all 5 documents into it with a single command. 📂🚀

---

## 🛠️ Build it (step by step)

### Step 1 — Open Cloud Shell

If you are already in Cloud Shell, you can skip this step. Otherwise:
1. Open the [Google Cloud Console](https://console.cloud.google.com).
2. Click the **Activate Cloud Shell** button ( >_ ) in the top-right toolbar.
3. Wait for the terminal prompt to open and authenticate.

Confirm Cloud Shell is using your assigned workshop project. Replace the placeholder first:

```bash
(
EXPECTED_PROJECT_ID="your-assigned-workshop-project-id"
PROJECT_ID="$(gcloud config get-value project 2>/dev/null)"
if [ -z "$PROJECT_ID" ] || [ "$PROJECT_ID" = "(unset)" ] \
  || [ "$PROJECT_ID" != "$EXPECTED_PROJECT_ID" ]; then
  printf 'STOP: active project does not match your workshop assignment.\n' >&2
  exit 1
fi
printf 'Project check passed: %s\n' "$PROJECT_ID"
)
```

If you see `STOP`, do not continue. Select the assigned project or ask your facilitator; the check leaves Cloud Shell open so you can correct it.

---

### Step 2 — Start the Antigravity CLI (`agy`) 🛰️

The Antigravity CLI (`agy`) is your on-demand AI pair programmer. Check its version first:

```bash
agy --version
```

1. If that check succeeds, skip the installer. Only if it fails, download and inspect the official installer:

```bash
curl --max-time 10 -fsSL https://antigravity.google/cli/install.sh -o install-agy.sh
less install-agy.sh
```

Read the installer and press `q` after you reach the end. If you cannot assess what it will do, stop and ask the facilitator to review it with you. Then run the reviewed local file:

```bash
bash install-agy.sh
rm install-agy.sh
source "$HOME/.local/bin/env"
agy --version
```

1. Launch `agy` in your terminal:

```bash
agy
```

- If it's your first time, you will see the `agy` interface initialize.

---

### Step 3 — Instruct `agy` to generate 5 text reports 🤖

Now, we'll ask `agy` to use its agent tools to create five business report text files with custom contents.

1. At the `agy` prompt, type the following request:

```
Please create 5 different text files in the current folder named report1.txt, report2.txt, report3.txt, report4.txt, and report5.txt. You can write unique professional text inside each of them.
```

1. Press **Enter** and watch `agy` plan, generate the content, compile or write the files directly into your Cloud Shell storage environment!
2. Exit `agy` when it is done by pressing `Ctrl+D` twice or typing `/exit`.

---

### Step 4 — Verify the Generated Files

Confirm that the files were created successfully in your current workspace:

```bash
(
for file in report{1..5}.txt; do
  test -s "$file" || { printf 'STOP: missing or empty: %s\n' "$file" >&2; exit 1; }
done
printf 'All five reports exist and are non-empty.\n'
)
```

If you see `STOP`, ask `agy` to create the missing reports before continuing. The subshell fails, but your Cloud Shell stays open.

---

### Step 5 — Create a Cloud Storage Bucket via the CLI 🪣

We will use the modern Google Cloud Storage CLI (`gcloud storage`) to create a globally unique bucket. GCS bucket names must be globally unique, so we'll append your project ID to ensure uniqueness.

1. Set your bucket name variable:

```bash
export PARTICIPANT_SUFFIX="your-initials"  # replace with your initials
export BUCKET_NAME="techbond-reports-$(gcloud config get-value project)-${PARTICIPANT_SUFFIX}"
echo "Your bucket name will be: $BUCKET_NAME"
```

1. Create the storage bucket in the `europe-west4` region:

```bash
gcloud storage buckets create gs://$BUCKET_NAME --location=europe-west4
```

---

### Step 6 — Upload the text reports with `gcloud storage` 🚀

Now we'll bulk-upload our five newly compiled text reports into the newly created bucket.

1. Copy the TXT files to the bucket:

```bash
gcloud storage cp report{1..5}.txt gs://$BUCKET_NAME/
```

1. Verify that all 5 files were uploaded successfully:

```bash
gcloud storage objects list gs://$BUCKET_NAME/
```

- GCS will print the list of the five uploaded reports with their file sizes!

> ⚠️ **If the upload or the listing fails**, delete the bucket before retrying so failed attempts don't accumulate billable resources. If the delete command itself reports an error, re-run it until it succeeds or ask the facilitator — do not leave the bucket behind:
>
> ```bash
> gcloud storage rm --recursive "gs://$BUCKET_NAME/**" 2>/dev/null; gcloud storage buckets delete "gs://$BUCKET_NAME"
> ```

### Step 7 — Delete the bucket

After verification, open **Cloud Storage → Buckets**, select your participant-suffixed bucket, click **Delete**, and confirm. This deletes the five workshop reports and the bucket.

---

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint 1 — "agy: command not found"</strong></summary>

Confirm the executable/version check fails before installing:

```bash
agy --version
```

Only if that check fails, download and inspect the official installer:

```bash
curl --max-time 10 -fsSL https://antigravity.google/cli/install.sh -o install-agy.sh
less install-agy.sh
```

Read the installer and press `q` after you reach the end. If you cannot assess what it will do, stop and ask the facilitator to review it with you. Then run the reviewed local file:

```bash
bash install-agy.sh
rm install-agy.sh
source "$HOME/.local/bin/env"
agy --version
```

If it is already installed but still not found, ensure that `$HOME/.local/bin` is in your `PATH` by running:

```bash
export PATH="$HOME/.local/bin:$PATH"
```

</details>

<details>
<summary><strong>Hint 2 — Bucket creation fails with "AlreadyExists"</strong></summary>

Cloud Storage bucket names are globally unique across all Google Cloud customers. If someone else in the workshop already used your exact bucket name, append a random string:

```bash
export BUCKET_NAME="techbond-reports-$(gcloud config get-value project)-$(date +%s)"
```

Then re-run the `gcloud storage buckets create` command.
</details>

<details>
<summary><strong>✅ Show me the full command sequence</strong></summary>

The validation and storage commands run in a subshell. A failed check stops this route but returns you to your open Cloud Shell prompt.

```bash
# Start agy
agy

# Inside agy prompt:
# "Please create 5 different text files named report1.txt to report5.txt with unique text."
# /exit

(
# Verify the active project
EXPECTED_PROJECT_ID="your-assigned-workshop-project-id"
PROJECT_ID="$(gcloud config get-value project 2>/dev/null)"
if [ -z "$PROJECT_ID" ] || [ "$PROJECT_ID" = "(unset)" ] \
  || [ "$PROJECT_ID" != "$EXPECTED_PROJECT_ID" ]; then
  printf 'STOP: active project does not match your workshop assignment.\n' >&2
  exit 1
fi

# Verify exactly report1.txt through report5.txt are non-empty
for file in report{1..5}.txt; do
  test -s "$file" || { printf 'STOP: missing or empty: %s\n' "$file" >&2; exit 1; }
done

# Create bucket
export PARTICIPANT_SUFFIX="your-initials"  # replace with your initials
export BUCKET_NAME="techbond-reports-$(gcloud config get-value project)-${PARTICIPANT_SUFFIX}"
gcloud storage buckets create "gs://${BUCKET_NAME}" --location=europe-west4 \
  || { printf 'STOP: bucket creation failed; no reports were uploaded.\n' >&2; exit 1; }

# Delete the bucket again if a later step fails, so retries start clean.
# Cleanup failures are reported, not hidden, so no billable bucket lingers.
cleanup_bucket() {
  gcloud storage rm --recursive "gs://${BUCKET_NAME}/**" >/dev/null 2>&1 || true
  if ! gcloud storage buckets delete "gs://${BUCKET_NAME}"; then
    printf 'STOP: bucket cleanup failed; delete it manually with:\n' >&2
    printf '  gcloud storage buckets delete "gs://%s"\n' "$BUCKET_NAME" >&2
  fi
}

# Copy only the five validated reports
gcloud storage cp report{1..5}.txt "gs://${BUCKET_NAME}/" \
  || { printf 'STOP: report upload failed.\n' >&2; cleanup_bucket; exit 1; }

# Verify that every expected report is actually in the bucket
for file in report{1..5}.txt; do
  gcloud storage objects describe "gs://${BUCKET_NAME}/${file}" >/dev/null \
    || { printf 'STOP: %s missing from bucket.\n' "$file" >&2; cleanup_bucket; exit 1; }
done
)
```

</details>

---

## ✅ You did it when…

- [ ] `agy` has generated `report1.txt` through `report5.txt` in your local directory.
- [ ] You have successfully created a Cloud Storage bucket using `gcloud storage buckets create`.
- [ ] `gcloud storage objects list gs://YOUR_BUCKET_NAME/` returns all five TXT files.
- [ ] After verification, you deleted your workshop bucket.

---

## 🧠 What you just learned

You've bridged the gap between intelligent AI generation and enterprise cloud storage! You learned how to use **Antigravity CLI (`agy`)** as an autonomous agent in your terminal to compile text reports, how to provision custom, scalable **Cloud Storage buckets** using the CLI, and how to upload and verify objects with `gcloud storage`. You can now build fully automated data ingestion pipelines for your agents! 🪣⛓️

➡️ **Choose your Linux environment:** [Lab 9.2 — Compute Engine with Ubuntu](./lab-9.2-gce-ssh.md) or [Lab 9.3 — Cloud Workstations](./lab-9.3-cloud-workstations.md).

⬅️ Back to the **[module overview](./README.md)**.
