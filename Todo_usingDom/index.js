function whenclicked(){
    const element = document.getElementById("todo");
    const todo = element.value;
    console.log(todo);

    const newdiv = document.createElement("disv");
    newdiv.innerHTML = todo;
}