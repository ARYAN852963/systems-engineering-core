/**
 * ============================================================================
 * Repository: 100x-systems-foundations
 * Module    : 02-async-js-runtime
 * Topic     : JavaScript Foundations, Primitives, Objects, Functions & Callbacks
 * Aligned to: Harkirat 100xDevs Lecture 1
 * Author    : Aryan
 * Drills    : 1 to 10 (Refer to Daily_10_JS_Callbacks_Sheet.md)
 * ============================================================================
 */

// -----------------------------------------------------------------------------
// DRILL 1: Dynamic Types & Conditional Greeting Router (4 Mins)
// -----------------------------------------------------------------------------

function greetUser(Firstname, Lastname, Gender){
    function Male(Firstname, Lastname,)
{
    return `Welcome Mr. ${Firstname} ${Lastname}`;
}
function Female(Firstname, Lastname)
{
    return `Welcome Mrs. ${Firstname} ${Lastname}`;
}
if(Gender == "Male"){
    return Male(Firstname, Lastname)
} else if(Gender == "Female"){
    return Female(Firstname, Lastname)
} else{
    return `Welcome ${Firstname} ${Lastname}`
}
}
name = greetUser("Aryan", "Sharma", "Male")

// -----------------------------------------------------------------------------
// DRILL 2: Range Aggregator & Parity Split (5 Mins)
// -----------------------------------------------------------------------------
function sumEvenOdd(limit){
    let EvenSum = 0
    let OddSum = 0
    for(let i = 0; i < limit; i++){
        if (i % 2 == 0){
            EvenSum += i    
        } else if(i % 2 != 0){
            OddSum += i
        }
    }
    return { EvenSum, OddSum };
}
const values = sumEvenOdd(96)
console.log(`evenSum: ${values.EvenSum} oddSum: ${values.OddSum}`)
// -----------------------------------------------------------------------------
// DRILL 3: Array Peak & In-Place Inversion - Zero Built-ins (6 Mins)
// -----------------------------------------------------------------------------
const array = [14, 82, 9, 45, 99, 23];
array_length = array.length
let max = array[0]
let min = array[0]
for(let i = 0; i < array_length; i++){
    if(array[i] > max ){
        max = array[i]
    } 
    else if( array[i] < min){
        min = array[i]
    }
}
console.log("Maximum number:", max); // Output: 45
console.log("Minimum number:", min); // Output: 2


// -----------------------------------------------------------------------------
// DRILL 4: Complex Primitives - Database Records Query (8 Mins)
// -----------------------------------------------------------------------------
const users = [
  { firstName: "Alice", lastName: "Smith", age: 25, gender: "Female", isEnrolled: true },
  { firstName: "Bob", lastName: "Jones", age: 17, gender: "Male", isEnrolled: true },
  { firstName: "Charlie", lastName: "Brown", age: 30, gender: "Male", isEnrolled: false },
  { firstName: "Diana", lastName: "Prince", age: 22, gender: "Female", isEnrolled: true },
  { firstName: "Evan", lastName: "Wright", age: 40, gender: "Male", isEnrolled: true }
];

function filterActiveAdults(users, targetGender) {
    for(let i = 0; i < users.length; i++){
        const value = users[i];
        if(value.isEnrolled === true && value.age >= 18 && value.gender === targetGender){
            // FIXED: changed Firstname/Lastname to firstName/lastName
            console.log(`${value.firstName} ${value.lastName}`);
        }
    }
}

filterActiveAdults(users, "Female");
// -----------------------------------------------------------------------------
// DRILL 5: Deep Object Mutation & Balance Reconciler (10 Mins)
// -----------------------------------------------------------------------------
const account = {
    id: "101", 
    owner: 'Aryan', 
    balance: 5000,
    ledger: []
}
function processTransaction(account, amount, type){
    if(type == "deposiyt")
        add ht=SVGGElementhdfd 
    sfgsdkg
    hgeiugfdkshgd
    
}

console.log("--- Initial State ---");
console.log(account);

// Test a Deposit
processTransaction(account, 1500, "DEPOSIT");
console.log("\n--- After Deposit of 1500 ---");
console.log(account);

// Test an Insufficient Withdrawal (Trying to withdraw 8000 when balance is 6500)
processTransaction(account, 8000, "WITHDRAWAL");
console.log("\n--- After Failed Withdrawal of 8000 ---");
console.log(account);

// Test a Successful Withdrawal
processTransaction(account, 20000, "WITHDRAWAL");
console.log("\n--- After Successful Withdrawal of 2000 ---");
console.log(account);
// -----------------------------------------------------------------------------
// DRILL 6: The Classic Dual-Display Callback Pair (12 Mins)
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// DRILL 7: Higher-Order Arithmetic Callback Dispatcher (14 Mins)
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// DRILL 8: Callback-Driven Collection Hunter (16 Mins)
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// DRILL 9: Single-Threaded Runtime Delay & Drift Profiler (20 Mins)
// -----------------------------------------------------------------------------



// -----------------------------------------------------------------------------
// BOSS LEVEL 10: Real-Time Terminal Clock with Callback Heartbeat (30 Mins)
// -----------------------------------------------------------------------------

