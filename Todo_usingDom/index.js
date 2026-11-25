function whenclicked(){
    const element = document.getElementById("todo");
    const todo = element.value;
    console.log(todo);

    const newdiv = document.createElement("div");
    newdiv.innerHTML = todo;

    const container = document.getElementById("todo-list")
}