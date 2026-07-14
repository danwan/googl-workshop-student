# 🟣 Lab 7.1: Vibe Coding Taster

> **Your mission:** Use Antigravity in Cloud Shell to build and test a small TechBond batch checker. You decide the rules; `agy` writes the first draft. Then you inspect, run, and judge the result.

| 🏆 Role | ⏱️ Time | 🧰 Tool | 📦 What you need |
|---|---|---|---|
| Day 1 core | 60 to 80 min | Cloud Shell and `agy` | A dedicated workshop project, browser access, and no earlier lab |

This lab stands alone. It does not use ADK, an existing project, a deployment, or a game URL. The program uses only the Python standard library and creates no billable cloud resource.

## The task

TechBond receives batch readings as command-line values. Build `batch_check.py` with these approved rules:

- Temperature from 18 to 25 °C passes.
- Humidity from 30 to 60 percent passes.
- A value outside either range produces a warning.
- Missing, non-numeric, or extra values produce a clear usage message and a non-zero exit code.

Expected runs:

```text
python3 batch_check.py 22 45    -> PASS
python3 batch_check.py 28 45    -> WARN
python3 batch_check.py hot 45   -> usage or input error, exit code is not 0
```

## 1. Open Cloud Shell and verify the account, 10 minutes

1. Open [Google Cloud Console](https://console.cloud.google.com).
2. Select the dedicated workshop project shown by your facilitator.
3. Open **Cloud Shell** with the `>_` icon.
4. Verify the active account and project:

```bash
gcloud auth list --filter=status:ACTIVE --format='value(account)'
gcloud config get-value project
python3 --version
```

If the account or project is wrong, stop and ask the facilitator. This lab does not need application-default credentials or an API key.

## 2. Install and authorize `agy`, 10 to 15 minutes

Check whether the command exists:

```bash
agy --version
```

If Cloud Shell reports `command not found`, install it:

```bash
curl --max-time 10 -fsSL https://antigravity.google/cli/install.sh -o install-agy.sh
less install-agy.sh
```

Read the installer before running it. Press `q` after you reach the end. If you cannot assess what the installer will do, stop and ask the facilitator to review it with you.

Then run the reviewed local file:

```bash
bash install-agy.sh
rm install-agy.sh
source "$HOME/.local/bin/env"
agy --version
```

Launch the terminal interface:

```bash
agy
```

Follow the on-screen authorization flow on the first launch. Approve only the workshop account. Type `/exit` after the interface opens, then create a clean folder:

```bash
mkdir -p ~/techbond-vibe-taster
cd ~/techbond-vibe-taster
```

## 3. Ask `agy` for the first draft, 10 minutes

Start `agy` in the new folder and give it this request:

```text
Create batch_check.py using only the Python standard library. It must accept exactly two command-line values: temperature in Celsius and humidity in percent. Print PASS when temperature is 18 through 25 inclusive and humidity is 30 through 60 inclusive. Otherwise print WARN and name every value outside its range. For missing, extra, or non-numeric values, print a clear error to stderr and exit with a non-zero status. Add a main function and no files beyond batch_check.py.
```

Let `agy` write the file. Do not accept the result from the chat alone. Exit with `/exit`.

## 4. Inspect the file, 10 minutes

Run:

```bash
sed -n '1,220p' batch_check.py
```

Check these points with your partner:

- Does the code use only modules from the Python standard library?
- Are 18, 25, 30, and 60 included in the passing ranges?
- Does invalid input go to stderr and return a non-zero exit code?
- Does the file avoid network calls, credentials, and cloud resource creation?

Ask `agy` to correct the file if any answer is no. Inspect it again after every edit.

## 5. Run and judge, 15 minutes

Run the acceptance checks:

```bash
python3 batch_check.py 22 45
python3 batch_check.py 18 30
python3 batch_check.py 25 60
python3 batch_check.py 28 45
python3 batch_check.py 22 75
python3 batch_check.py hot 45; test $? -ne 0
python3 batch_check.py 22; test $? -ne 0
python3 batch_check.py 22 45 extra; test $? -ne 0
```

Expected judgment:

- The first three runs print `PASS`.
- The next two runs print `WARN` and identify the failed reading.
- The final three commands finish successfully because the program returned a non-zero status for bad input.

If a result differs, show `agy` the command, actual output, and expected output. Ask for the smallest correction. Inspect and rerun the full list.

## 6. Make one judgment call, 5 to 15 minutes

Choose one change:

- Change the humidity range to a value supplied by your facilitator.
- Add a `REVIEW` result when a reading sits within one unit of a limit.
- Improve the warning text so a production operator knows what to check.

State the new rule in one sentence before asking `agy` to edit. Run one passing case, one warning case, and one boundary case afterward.

## 💡 Stuck? Open a hint

<details>
<summary><strong>Hint — Make your judgment call testable</strong></summary>

Before asking `agy` to edit, complete this sentence: “When the readings are ___, the program should print ___ because ___.” Choose inputs for one passing case, one warning case, and one boundary case. Then ask for the smallest edit that follows your sentence.
</details>

<details>
<summary><strong>✅ Show me a complete solution route</strong></summary>

1. Give `agy` the request from Step 3 and inspect the saved file against every point in Step 4.
2. Run all eight acceptance checks from Step 5. If one differs, ask for the smallest correction, inspect it, and rerun the full list.
3. Choose one Step 6 change yourself and state its exact rule in one sentence. There is intentionally no single correct choice here.
4. Ask `agy` to make only that change, inspect the edit, and run your passing, warning, and boundary cases.
5. Explain why each result matches the rule you chose. If you cannot, revise the rule or the code and test again.

If `agy` cannot create the first draft, use the manual fallback below and resume this route at step 1.
</details>

## Manual fallback

If `agy` cannot write the file, run `cloudshell edit batch_check.py`, paste this code, save it, and continue with the inspect/run/judge loop:

```python
import sys


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: python3 batch_check.py TEMPERATURE HUMIDITY", file=sys.stderr)
        return 2
    try:
        temperature, humidity = map(float, sys.argv[1:])
    except ValueError:
        print("Temperature and humidity must be numbers.", file=sys.stderr)
        return 2

    warnings = []
    if not 18 <= temperature <= 25:
        warnings.append(f"temperature {temperature:g} C is outside 18 to 25 C")
    if not 30 <= humidity <= 60:
        warnings.append(f"humidity {humidity:g}% is outside 30 to 60%")

    if warnings:
        print("WARN: " + "; ".join(warnings))
    else:
        print("PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
```

## Success checklist

- [ ] `agy` launched under the workshop account.
- [ ] `batch_check.py` uses only the Python standard library.
- [ ] You inspected every generated edit before running it.
- [ ] All eight acceptance commands produced the expected result.
- [ ] You made and tested one human judgment call.
- [ ] You can describe the loop: **ask, inspect, run, judge**.

## Cleanup

This lab creates no remote resources. Keep the folder for Day 2, or leave it and run:

```bash
cd ~
rm -rf ~/techbond-vibe-taster
```

Check the path before pressing Enter.

## What you learned

You used a coding agent without handing over the decision. Clear rules guided the draft, inspection caught unsafe assumptions, execution supplied evidence, and your judgment decided whether the result met the need.
