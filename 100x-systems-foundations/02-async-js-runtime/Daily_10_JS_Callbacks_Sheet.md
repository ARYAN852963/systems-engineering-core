# ⚡ DAILY 10-DRILL SHEET V2: JS FOUNDATIONS & CALLBACKS
**Aligned to: Harkirat 100xDevs Lecture 1**
**Target File:** `practice_callbacks.js`

---

## ⏱️ ANTI-CHEAT PROTOCOL (NON-NEGOTIABLE)
1. Set a physical timer before writing code for each drill.
2. During the timer — NO AI. NO GOOGLING THE ANSWER. Your brain only.
3. Syntax lookups are allowed (e.g., "how to use console.log") but NOT logical solutions.
4. If stuck after timer expires → 1-sentence hint maximum. No full solutions, ever.
5. Test every drill by running: `node practice_callbacks.js`

---

## 🟢 PART 1: WARMUPS

### Drill 1: Dynamic Types & Conditional Greeting Router
* **Time Limit:** 4 Minutes
* Write a function `greetUser(firstName, lastName, gender)` that:
  - Logs `"Welcome Mr. [firstName] [lastName]"` if gender is `"male"`.
  - Logs `"Welcome Ms. [firstName] [lastName]"` if gender is `"female"`.
  - Logs `"Welcome [firstName] [lastName]"` for any other value.
  - Defensively handles missing arguments using default fallback strings.

---

### Drill 2: Celsius to Fahrenheit Batch Converter
* **Time Limit:** 5 Minutes
* You are given an array of Celsius temperatures: `[0, 20, 37, 100, -40]`.
* Write a function `convertTemperatures(temps)` that:
* Run 3 separate timed tasks with delays: 500ms, 1200ms, and 2000ms.
* Observe and understand the order in which the callbacks fire vs the order you called them.

---

### Drill 7: The Pure Functional Pipeline (No Mutation)
* **Time Limit:** 15 Minutes
* You are given an array of raw user strings (messy data):
  `[" aryan sharma ", "PRIYA SINGH", "ravi   gupta", " AISHA khan"]`
* Write 3 separate pure functions:
  1. `sanitize(str)`: trims whitespace from both ends of the string.
  2. `normalize(str)`: converts the entire string to lowercase.
  3. `formatName(str)`: capitalizes only the first letter of each word.
* Write a fourth function `processUsers(names)` that manually chains these 3 functions by calling them one after another on each name in the array.
* The original array must remain completely unmodified after the function runs.

---

### Drill 8: The Access Control Gatekeeper with Dual Callbacks
* **Time Limit:** 17 Minutes
* Write a function `checkAccess(user, onGranted, onDenied)`.
* A user gains access if: `user.role === "ADMIN"` OR (`user.credits >= 100` AND `user.isVerified === true`).
* If access is granted → call `onGranted(user.name)` which logs: `"🟢 ACCESS GRANTED: Welcome, [name]"`.
* If access is denied → call `onDenied(user.name, reason)` which logs: `"🔴 ACCESS DENIED: [name] | Reason: [reason]"`.
* Test with 4 different user objects covering all access branches.

---

### Drill 9: Event Frequency Analyzer (Zero built-in methods)
* **Time Limit:** 22 Minutes
* You are given an array of server events:
  `["LOGIN", "ERROR", "LOGIN", "TIMEOUT", "ERROR", "LOGIN", "ERROR", "TIMEOUT", "CRASH", "LOGIN"]`
* Write a function `analyzeEvents(events)` that:
  - Iterates through the array using a raw loop.
  - Builds and returns a plain object where each key is a unique event name and each value is how many times it appeared.
  - Logs the most frequent event and its count.
  - Invariant: You may NOT use `filter()`, `reduce()`, `map()`, or `Set()`.

---

## 🔴 BOSS LEVEL 10: PRODUCTION TELEMETRY DASHBOARD

### Drill 10: In-Memory Event Bus with Typed Channels
* **Time Limit:** 35 Minutes
* Build a lightweight in-memory event system called `EventBus`.
* It must support exactly these 4 operations:
  1. `EventBus.on(channel, listenerFn)` — Register a callback for a channel (e.g., `"CRITICAL"`, `"AUDIT"`, `"METRIC"`). Multiple listeners can exist per channel.
  2. `EventBus.emit(channel, payload)` — Fire all registered callbacks for that channel, passing `payload` as the argument. If no listeners exist, do nothing (zero errors).
  3. `EventBus.once(channel, listenerFn)` — Register a callback that runs exactly ONCE. After it fires, it must automatically detach itself.
  4. `EventBus.off(channel, listenerFn)` — Remove a specific callback from a channel.
* Test your implementation with this exact scenario:
  - Register 2 persistent listeners on `"CRITICAL"`.
  - Register 1 one-time listener on `"AUDIT"`.
  - Emit `"CRITICAL"` twice — both persistent listeners must fire both times.
  - Emit `"AUDIT"` twice — the one-time listener must fire only once and then disappear.
  - Emit `"METRIC"` with no registered listeners — must not crash.
