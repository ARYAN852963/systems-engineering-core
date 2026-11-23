const task1 = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1");
          resolve();
        }, 1000);
    });
};
const task2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2");
        }, 1000);
         resolve();
    });
}
const task3 = () => {
    return new Promise((resolve) =>  {
        setTimeout(() => {
            console.log("Task 3") 
        }, 1000);
         resolve();
    });
}
const task4 = () => {
    return new Promise((resolve) =>  {
        setTimeout(() => {
            console.log("Task 4") 
        }, 1000);
         resolve();
    });
}
task1()
.then(() => task2())
.then(() => task3())
.then(() => task4())

// 2.
const work1 = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 1");
            resolve();
        }, 1000);
    });
};
const work2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Task 2");
        }, 1000);
        resolve();
    });
}
const work3 = () => {
    return new Promise((resolve) =>  {
        setTimeout(() => {
            console.log("Task 3") 
        }, 1000);
        resolve();
    });
}
const work4 = () => {
    return new Promise((resolve) =>  {
        setTimeout(() => {
            console.log("Task 4") 
        }, 1000);
        resolve();
    });
}
async function runTasks() {
    await task1();
    await task2();
    await task3();
    await task4();
}

runTasks();
// 3.
async function calculate() {
    return 200;
}
calculate().then((value) => {
    console.log(value);
})
// 4.
async function calculate() {
    return 200;
}

async function call(){
    const values = await calculate();
    console.log(values);
}
call()
// 5.
function task(callback) {
    console.log("A");

    setTimeout(() => {
        callback(null, 50);
    }, 0);

    console.log("B");
}

task((error, data) => {
    if (error) {
        console.log("C");
        return;
    }

    console.log(data);
});

console.log("D");