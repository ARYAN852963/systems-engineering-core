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



// -----------------------------------------------------------------------------
// DRILL 5: Deep Object Mutation & Balance Reconciler (10 Mins)
// -----------------------------------------------------------------------------



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

