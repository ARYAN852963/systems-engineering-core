# ⚡ DAILY 10-DRILL SHEET: JS FOUNDATIONS & CALLBACKS (LECTURE 1)
**Aligned Strictly to Harkirat's 100xDevs Lecture 1:**
*Primitives • Complex Objects • Arrays • Single-Threaded Runtime • Functions • Callbacks*  
**Target File:** [`practice_callbacks.js`](file:///c:/Users/DELL/OneDrive/Desktop/Coding/100x-systems-foundations/02-async-js-runtime/practice_callbacks.js)

---

## ⏱️ THE TIME-LIMIT ANTI-CHEAT RULE
1. **Mandatory:** Start the timer before writing code for each question.
2. During the active time limit, **you are FORBIDDEN from asking the AI for help or code**. Reason through variables, loops, objects, and function references entirely on your own.
3. Only AFTER the timer expires, if you are stuck, you may ask for a **1-sentence hint**.
4. Full solutions will never be provided.

---

### [WARMUPS: 1% BASELINE]

#### Drill 1: Dynamic Types & Conditional Greeting Router
* **Time Limit:** 4 Minutes
* **System Requirements:**
  - Write a function `greetUser(firstName, lastName, gender)` that outputs:
    - `"Welcome Mr. [firstName] [lastName]"` if gender is `"male"`.
    - `"Welcome Ms. [firstName] [lastName]"` if gender is `"female"`.
    - `"Welcome [firstName] [lastName]"` for any other input.
  - Defensively guard against missing arguments by supplying default fallback strings.

#### Drill 2: Range Aggregator & Parity Split
* **Time Limit:** 5 Minutes
* **System Requirements:**
  - Write a function `sumEvenOdd(limit)` that iterates from 1 to `limit`.
  - Calculate and return an object: `{ evenSum: X, oddSum: Y }`.
  - Do NOT use arrays; accumulate values using primitive loop variables.

#### Drill 3: Array Peak & In-Place Inversion (Zero Built-ins)
* **Time Limit:** 6 Minutes
* **System Requirements:**
  - Given an array of integers (e.g., `[14, 82, 9, 45, 99, 23]`):
    1. Find and print the largest number without using `Math.max()`.
    2. Reverse the array in-place without using `array.reverse()`.

---

### [PROGRESSIVE OVERLOAD: +1% HARDER EACH LEVEL]

#### Drill 4: Complex Primitives: Database Records Query
* **Time Limit:** 8 Minutes
* **System Requirements:**
  - Define an array of user objects where each user has: `{ firstName, lastName, age, gender, isEnrolled }`.
  - Write a function `filterActiveAdults(users, targetGender)` that loops through the array and logs the full name of every user who is `isEnrolled === true`, `age >= 18`, and matches `targetGender`.

#### Drill 5: Deep Object Mutation & Balance Reconciler
* **Time Limit:** 10 Minutes
* **System Requirements:**
  - Create a nested account object: `{ id: 101, owner: "Aryan", balance: 5000, ledger: [] }`.
  - Write a function `processTransaction(account, amount, type)`:
    - If `type === "DEPOSIT"`: increase balance and push `{ type, amount, status: "SUCCESS" }` into `ledger`.
    - If `type === "WITHDRAWAL"`: check if `balance >= amount`. If yes, deduct and push `{ type, amount, status: "SUCCESS" }`. If insufficient, do not deduct and push `{ type, amount, status: "FAILED" }`.
  - Return the updated account object.

#### Drill 6: The Classic Dual-Display Callback Pair
* **Time Limit:** 12 Minutes
* **System Requirements:**
  - Write a core function `calculateSum(a, b, displayCallback)`.
  - The function computes `a + b` and passes the result into `displayCallback(result)`.
  - Create two independent callback functions:
    1. `prettyDisplay(data)`: logs `"✨ The calculated sum is: [data]"`.
    2. `passiveDisplay(data)`: logs `"System Log [SUM_OP]: result=[data]"`.
  - Execute `calculateSum` twice, passing each callback function as an argument.

#### Drill 7: Higher-Order Arithmetic Callback Dispatcher
* **Time Limit:** 14 Minutes
* **System Requirements:**
  - Write a generic function `computeArithmetic(a, b, operationFn)`.
  - It must execute `operationFn(a, b)` and return the output.
  - Define 3 standalone operation functions: `add(x, y)`, `subtract(x, y)`, and `power(x, y)`.
  - Invariant: `computeArithmetic` must NEVER contain `if` or `switch` statements checking operation types; it must blindly trust and delegate to `operationFn`.

#### Drill 8: Callback-Driven Collection Hunter
* **Time Limit:** 16 Minutes
* **System Requirements:**
  - Write a function `searchUsers(userList, matchFn, onFound, onNotFound)`.
  - Loop through `userList` and test each user with `matchFn(user)`.
  - If a match is found: trigger `onFound(matchedUser)` and stop searching immediately.
  - If the loop finishes with no match: trigger `onNotFound("Record not located in database")`.

#### Drill 9: Single-Threaded Runtime Delay & Drift Profiler
* **Time Limit:** 20 Minutes
* **System Requirements:**
  - Demonstrate JavaScript's single-threaded event loop characteristics.
  - Record the exact timestamp using `Date.now()` right before calling `setTimeout(fn, 1000)`.
  - Inside the callback `fn`, record the timestamp again and calculate the drift (how many milliseconds *past* 1000ms the callback actually fired).
  - Simulate a synchronous blocking loop (e.g., counting to $10^7$) between the `setTimeout` call and thread yield, and observe how the callback is delayed.

---

### [🔥 BOSS LEVEL 10: REAL-TIME TERMINAL CLOCK WITH CALLBACK HEARTBEAT]

#### Drill 10: Live Terminal Clock & 10-Second Heartbeat Engine
* **Time Limit:** 30 Minutes
* **System Requirements:**
  - Build a live digital clock that renders directly into the terminal, updating every single second (`1000ms`).
  - **Output Format:** Clean HH:MM:SS (with leading zeros, e.g. `02:15:09 AM`).
  - Terminal formatting requirement: Clear the previous line or output on each tick so it displays as an active, in-place live digital clock rather than spamming hundreds of lines.
  - **The Callback Invariant:**
    - The clock engine must accept an alert callback function `onHeartbeat(tickCount)`.
    - Every 10 seconds (ticks), the clock must automatically invoke `onHeartbeat`, logging:  
      `"[HEARTBEAT ALERT]: System active for 10 seconds | Memory stable"`.
