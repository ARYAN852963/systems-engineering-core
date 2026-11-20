# Daily 10 JS Drill Sheet: Class 2 — JS 101 & Async Architecture

**Repository:** `systems-engineering-core/02-async-js-runtime`  
**Topics Covered:** Synchronous Execution, CPU-Bound vs I/O-Bound Tasks, Functional Arguments, Callbacks, V8 Architecture (Call Stack, Web/Node APIs, Callback Queue, Event Loop).  
**Rule Standard:** Anti-Cheat Enforced | Progressive Overload (+1% per drill) | Raw Engineering Specs Only

---

## The Rules of Engagement

1. **Strict Time Limits:** Each drill has an unyielding timer. Do NOT touch the AI while your timer is running. Write the logic entirely on your own.
2. **Zero Handholding:** You are provided raw functional contracts and system constraints. Architect the callbacks and control flow yourself.
3. **Execution Environment:** Run all drills using Node.js:
   ```bash
   node practice_class2.js
   ```
4. **Execution Protocol:** Code your solutions inside [`practice_class2.js`](file:///c:/Users/DELL/OneDrive/Desktop/Coding/systems-engineering-core/02-async-js-runtime/practice_class2.js).

---

## 🟢 PHASE 1: Conceptual & Syntax Warmups (Drills 1–3)

### Drill 1: CPU-Bound Execution & Wall-Clock Benchmark
* **Time Limit:** 3 Minutes
* **Classification:** Warmup 1 (CPU-Bound Mechanics)
* **Requirement:**
  Implement a function `benchmarkCpuTask(limit)` that calculates the sum of all integers from `1` to `limit` synchronously.
  - Measure the exact execution duration in milliseconds using high-resolution timing (`console.time`/`console.timeEnd` or `performance.now()`).
  - Return an object containing both the `computedSum` and `durationMs`.
* **Sample Input:** `limit = 100000000` (100 Million)
* **Expected Output:**
  ```text
  CPU Task Complete: Sum = 5000000050000000 | Time Elapsed: ~65ms
  ```

---

### Drill 2: Functional Arguments (The Higher-Order Math Dispatcher)
* **Time Limit:** 4 Minutes
* **Classification:** Warmup 2 (First-Class Functions)
* **Requirement:**
  Implement a master evaluation function `executeOperation(a, b, operationCallback)` that delegates mathematical computation entirely to a passed functional argument.
  - Implement two distinct callback functions: `multiply(x, y)` and `power(base, exp)`.
  - Ensure `executeOperation` validates that `operationCallback` is a valid function before invoking it; if not, throw a descriptive error.
* **Sample Input:** `executeOperation(5, 3, power)`
* **Expected Output:** `125`

---

### Drill 3: Event Loop Queue Interleaving Trace
* **Time Limit:** 4 Minutes
* **Classification:** Warmup 3 (Call Stack vs Callback Queue)
* **Requirement:**
  Construct a script that executes 3 synchronous log statements (`"Stack 1"`, `"Stack 2"`, `"Stack 3"`) and two asynchronous timers with `0ms` delay (`"Queue 1"`, `"Queue 2"`).
  - Arrange them such that the logs demonstrate the fundamental law of the JavaScript Event Loop: **Synchronous code on the Call Stack always exhausts completely before the Callback Queue is polled.**
  - Add a 1-line comment above the code explaining why a `0ms` timer never executes synchronously.

---

## 🟡 PHASE 2: Progressive Overload Drills (Drills 4–9)

### Drill 4: Custom Callback Data Pipeline (+1%)
* **Time Limit:** 5 Minutes
* **Classification:** Progressive Logic 1
* **Requirement:**
  Create a data processing function `transformPipeline(inputArray, filterCallback, transformCallback)`.
  - The function must iterate through `inputArray`.
  - Only elements that return `true` when evaluated by `filterCallback` should be passed into `transformCallback`.
  - Return a new array of transformed results without mutating the original input array.
  - Do NOT use built-in `.filter()` or `.map()`. Implement the iteration manually.
* **Sample Input:** `[1, 2, 3, 4, 5, 6]`, filter for evens, transform by squaring ($x^2$).
* **Expected Output:** `[4, 16, 36]`

---

### Drill 5: Simulated Asynchronous I/O with Error-First Protocol (+2%)
* **Time Limit:** 6 Minutes
* **Classification:** Progressive Logic 2 (I/O Latency Simulation)
* **Requirement:**
  Implement an asynchronous function `fakeFetchFile(fileName, callback)`.
  - The callback must strictly follow Node.js **Error-First Callback convention:** `callback(err, data)`.
  - If `fileName` is invalid or empty, immediately invoke the callback with an `Error("Invalid file path")` and `null`.
  - If valid, simulate a 1000ms disk read I/O delay using an async timer, then invoke the callback with `null` for error, and `"File Content of " + fileName` for data.
* **Verification:** Test both success and failure cases cleanly.

---

### Drill 6: CPU Starvation & Event Loop Lag Detector (+3%)
* **Time Limit:** 7 Minutes
* **Classification:** Progressive Logic 3 (Runtime Architecture)
* **Requirement:**
  Demonstrate how heavy CPU-bound tasks block the JavaScript single thread from processing queued asynchronous I/O callbacks.
  - Schedule a `setTimeout` configured with a `100ms` delay. In its callback, measure how much *actual* time elapsed compared to the scheduled 100ms.
  - Immediately following the timer declaration, run a synchronous blocking while/for loop that burns the CPU for at least `1500ms`.
  - Log the drift/lag. Output must clearly show the timer was delayed far beyond its intended 100ms.

---

### Drill 7: Asynchronous Retrier with Fallback Callback (+4%)
* **Time Limit:** 8 Minutes
* **Classification:** Progressive Logic 4 (Asynchronous Control Flow)
* **Requirement:**
  Implement `retryOperation(asyncTaskFn, maxRetries, onSuccess, onFailure)`.
  - `asyncTaskFn` is a function that accepts an error-first callback `(err, result)` and simulates a flaky network I/O call (e.g. succeeds 30% of the time, fails 70% of the time).
  - If it fails, `retryOperation` must wait 500ms and re-invoke `asyncTaskFn`, repeating up to `maxRetries`.
  - If all retries exhaust, invoke `onFailure(err)`. If any attempt succeeds, invoke `onSuccess(result)` immediately and halt further retries.

---

### Drill 8: The Asynchronous Waterfall (Sequential Callback Chain) (+5%)
* **Time Limit:** 10 Minutes
* **Classification:** Progressive Logic 5 (Managing Dependency Chains)
* **Requirement:**
  Simulate 3 dependent I/O operations without using Promises or async/await:
  1. `fetchUser(userId, callback)` $\to$ returns `{ userId: 101, username: "Aryan" }` after 300ms.
  2. `fetchUserCart(user, callback)` $\to$ returns `["Book", "Laptop Stand"]` after 300ms.
  3. `checkout(cart, callback)` $\to$ returns `{ status: "PAID", itemsCount: 2 }` after 300ms.
  - Coordinate these 3 functions using callbacks so they execute strictly in order, printing the final invoice receipt to the console.

---

### Drill 9: The Parallel I/O Aggregator (Barrier Synchronization) (+6%)
* **Time Limit:** 12 Minutes
* **Classification:** Progressive Logic 6 (Concurrent I/O Coordination)
* **Requirement:**
  Implement a function `parallelAll(tasksArray, finalCallback)`.
  - `tasksArray` contains an array of independent asynchronous I/O tasks. Each task takes a callback `(result)` and finishes after a random delay (e.g. 200ms to 800ms).
  - All tasks in `tasksArray` must be launched **concurrently** (in parallel).
  - `finalCallback(allResults)` must fire **ONLY AFTER** all tasks have resolved.
  - The results array passed to `finalCallback` must preserve the exact original indexing of `tasksArray`, regardless of which task finished first.
  - Do NOT use `Promise.all`. Implement this purely with counter logic and callbacks.

---

## 🔴 PHASE 3: THE BOSS LEVEL (Drill 10)

### Drill 10: The Non-Blocking Priority Task Scheduler
* **Time Limit:** 15 Minutes
* **Classification:** Boss Level (+10% Complexity Surge)
* **Requirement:**
  Architect an in-memory task scheduler class `PriorityEngine`.
  - The engine allows registration of tasks: `engine.addTask(name, type, taskFn)`, where `type` is either `'CPU'` or `'IO'`.
  - When `engine.execute()` is called:
    1. All `'IO'` tasks must be dispatched immediately to the non-blocking background runtime.
    2. All `'CPU'` tasks must be executed sequentially, but **must yield control back to the Event Loop** between each task (using `setImmediate` or `setTimeout(..., 0)`) so that completed I/O callbacks are never permanently starved.
    3. The engine must emit an execution timeline log proving that I/O callbacks were successfully interleaved between CPU tasks rather than blocked until the end.
* **Architectural Constraint:** Zero external libraries. Pure Node.js event loop scheduling primitives.

---

## Execution Tracker

| Drill # | Topic Focus | Difficulty | Time Limit | Status |
| :---: | :--- | :---: | :---: | :---: |
| 1 | CPU Benchmark & High-Res Timer | Warmup | 3 Min | ⏳ PENDING |
| 2 | Higher-Order Functional Argument | Warmup | 4 Min | ⏳ PENDING |
| 3 | Event Loop Execution Order Trace | Warmup | 4 Min | ⏳ PENDING |
| 4 | Custom Callback Data Pipeline | +1% | 5 Min | ⏳ PENDING |
| 5 | Simulated Async I/O (Error-First) | +2% | 6 Min | ⏳ PENDING |
| 6 | CPU Starvation & Event Loop Lag | +3% | 7 Min | ⏳ PENDING |
| 7 | Flaky I/O Async Retrier | +4% | 8 Min | ⏳ PENDING |
| 8 | Asynchronous Waterfall Chain | +5% | 10 Min | ⏳ PENDING |
| 9 | Parallel I/O Aggregator (Barrier) | +6% | 12 Min | ⏳ PENDING |
| 10 | Non-Blocking Priority Engine | **BOSS** | 15 Min | ⏳ PENDING |
