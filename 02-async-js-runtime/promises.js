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
async function runTasks() {
    await task1();
    await task2();
    await task3();
    await task4();
}

runTasks();