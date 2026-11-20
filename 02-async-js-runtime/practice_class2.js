/**
 * ============================================================================
 * SYSTEMS ENGINEERING CORE: ASYNC JAVASCRIPT RUNTIME
 * Practice Sheet: Class 2 — JS 101, Functional Args & Event Loop Mechanics
 * ============================================================================
 * Run all drills: node practice_class2.js
 * 
 * RULES OF ENGAGEMENT:
 * 1. Strict time limits per drill.
 * 2. No AI assistance during the active timer.
 * 3. Raw engineering implementation: Build from scratch.
 * ============================================================================
 */

const { use } = require("react");

// ============================================================================
// 🟢 PHASE 1: WARMUPS (Drills 1–3)
// ============================================================================

/**
 * DRILL 1: CPU-Bound Execution & Wall-Clock Benchmark
 * Time Limit: 3 Minutes
 */
function benchmarkCpuTask(limit) {
const start = performance.now()

let count = 0;
for(let i = 0; i <= limit; i++){
    count += i;
}
const end = performance.now()
return{
    count,
    duration: end - start,
};
}
const result = benchmarkCpuTask(100_000_000);
console.log(result)

// 2.
function executeOperation(a, b, operationCallback) {
    if(typeof operationCallback !== "function"){
        throw new TypeError("Hellow bhai error came!!!")
    }
    return operationCallback(a,b);
}
function add(x,y){
    return x + y;
}
function subtract(x, y){
    return x + y;
}
console.log(executeOperation(10, 15, add))
console.log(executeOperation(10, 15, subtract))


/**
 * DRILL 3: Event Loop Queue Interleaving Trace
 * Time Limit: 4 Minutes
 */
function runEventLoopTrace() {
    console.log("sync 1")
    console.log("sync 2")
    console.log("sync 3")
    setTimeout(() => {
        console.log("sync 4");
    }, 10)
     setTimeout(() => {
        console.log("sync 5")
    }, 100)
    return runEventLoopTrace;
}
console.log(runEventLoopTrace)

// ============================================================================
// 🟡 PHASE 2: PROGRESSIVE OVERLOAD (Drills 4–9)
// ============================================================================

/**
 * DRILL 4: Custom Callback Data Pipeline (+1%)
 * Time Limit: 5 Minutes
 */
function transformPipeline(inputArray, filterCallback, transformCallback) {
    // TODO: Implement custom filter + map pipeline without Array.prototype methods.
}

/**
 * DRILL 5: Simulated Asynchronous I/O with Error-First Protocol (+2%)
 * Time Limit: 6 Minutes
 */
function fakeFetchFile(fileName, callback) {
    // TODO: Implement error-first async I/O simulation with 1000ms delay.
}

/**
 * DRILL 6: CPU Starvation & Event Loop Lag Detector (+3%)
 * Time Limit: 7 Minutes
 */
function detectEventLoopLag() {
    // TODO: Schedule 100ms timer, block thread with CPU loop for 1500ms, measure lag.
}

/**
 * DRILL 7: Asynchronous Retrier with Fallback Callback (+4%)
 * Time Limit: 8 Minutes
 */
function retryOperation(asyncTaskFn, maxRetries, onSuccess, onFailure) {
    // TODO: Flaky async caller with recursive/timer retries (500ms delay between retries).
}

/**
 * DRILL 8: The Asynchronous Waterfall (Sequential Callback Chain) (+5%)
 * Time Limit: 10 Minutes
 */
function fetchUser(userId, callback) {
    // TODO: 300ms simulated I/O -> { userId, username: "Aryan" }
}

function fetchUserCart(user, callback) {
    // TODO: 300ms simulated I/O -> ["Book", "Laptop Stand"]
}

function checkout(cart, callback) {
    // TODO: 300ms simulated I/O -> { status: "PAID", itemsCount: cart.length }
}

function runWaterfall() {
    // TODO: Chain fetchUser -> fetchUserCart -> checkout sequentially using callbacks.
}

/**
 * DRILL 9: The Parallel I/O Aggregator (Barrier Synchronization) (+6%)
 * Time Limit: 12 Minutes
 */
function parallelAll(tasksArray, finalCallback) {
    // TODO: Launch all tasks in tasksArray concurrently, collect results preserving index.
}

// ============================================================================
// 🔴 PHASE 3: THE BOSS LEVEL (Drill 10)
// ============================================================================

/**
 * DRILL 10: The Non-Blocking Priority Task Scheduler
 * Time Limit: 15 Minutes
 */
class PriorityEngine {
    constructor() {
        // TODO: State setup
    }

    addTask(name, type, taskFn) {
        // TODO: Enqueue task (type: 'CPU' | 'IO')
    }

    execute() {
        // TODO: Dispatch IO tasks immediately.
        // Sequentially run CPU tasks while yielding to the Event Loop between each.
    }
}

// ============================================================================
// TEST HARNESS / VERIFICATION
// ============================================================================
console.log("=== Node.js Runtime Ready. Select and test your drills below ===");

// --- Drill 1 Test ---
// const res1 = benchmarkCpuTask(100000000);
// console.log("Drill 1:", res1);

// --- Drill 2 Test ---
// console.log("Drill 2 (Power):", executeOperation(5, 3, power));
// console.log("Drill 2 (Multiply):", executeOperation(5, 3, multiply));

// --- Drill 3 Test ---
// runEventLoopTrace();

// --- Drill 4 Test ---
// const res4 = transformPipeline([1, 2, 3, 4, 5, 6], (n) => n % 2 === 0, (n) => n * n);
// console.log("Drill 4:", res4);
