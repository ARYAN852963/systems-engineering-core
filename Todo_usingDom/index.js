function whenclicked(){
    const element = document.getElementById("todo");
    const todo = element.value;
    console.log(todo);

    const newdiv = document.createElement("div");
    newdiv.innerText = todo; //This makes <div>.

    const container = document.getElementById("todo-list")
    container.appendChild(newdiv); //This append the value in <div>.

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

}