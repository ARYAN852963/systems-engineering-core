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
function greetuser(firstname, lastname, gender){
    if(gender === "Male"){
        console.log(`Welcome Mr. ${firstname} ${lastname}`)
    } else if(gender === "Female"){
        console.log(`Welcome Mrs. ${firstname} ${lastname}`)
    } else{
        console.log(`Welcome ${firstname} ${lastname}`)
    }
}
greetuser("Aryan", "Sharma", "Male")
greetuser("Ayan", "Sharma", "Female")
greetuser("Ayan", "Sharma", "Other")

// -----------------------------------------------------------------------------
// DRILL 2: Range Aggregator & Parity Split (5 Mins)
// -----------------------------------------------------------------------------
const temps = [0, 20, 37, 100, -40]
let temp_F = {}
function convertTemperatures(temps){
    for(let i = 0; i < temps.length; i++){
        temp_F = (i * 9/5) + 32;
    }
}
convertTemperatures(temps)
convertTemperatures(temps)
convertTemperatures(temps)
convertTemperatures(temps)
convertTemperatures(temps)
console.log(temps)


// -----------------------------------------------------------------------------
// DRILL 3: Array Peak & In-Place Inversion - Zero Built-ins (6 Mins)
// -----------------------------------------------------------------------------
function triplecheck(n){
    for(let i = 0; i < n; i++){
        if(i % 3 == 0){
            console.log("SystemCritical")
        } 
        else if(i % 5 === 0){
            console.log("Memory")
        } else if(i % 3 === 0 && i % 5 === 0){
            console.log("SystemCritical")
        } else{
            console.log(i)
        }
    }
}
triplecheck(20);
// -----------------------------------------------------------------------------
// DRILL 4: Complex Primitives - Database Records Query (8 Mins)
// -----------------------------------------------------------------------------

let cart = [
    { id: 1, name: "Mouse", price: 500, qty: 2 },
    { id: 2, name: "Keyboard", price: 1200, qty: 1 },
    { id: 3, name: "Headphones", price: 2000, qty: 2 },
    { id: 4, name: "Monitor", price: 8000, qty: 1 }
];
let total_bill = 0;

function getTotalCost(cart){
    for(let i = 0; i < cart.length; i++)
    total_bill = cart[i].price * cart[i].qty;
}
function getExpensiveItems(cart, threshold){
    for(let i = 0; i < cart.length; i++){
        if(cart[i].price > threshold){
            console.log(cart[i].name)
        }
    }
}
getTotalCost(cart)
getExpensiveItems(cart, 1000)
console.log(total_bill);

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

