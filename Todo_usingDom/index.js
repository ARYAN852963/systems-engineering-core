function whenclicked() {
    const element = document.getElementById("todo");
    const todo = element.value;

    if (todo.trim() === "") return;

    const newdiv = document.createElement("div");
    newdiv.innerText = todo + " ";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        newdiv.remove();
    };

    newdiv.appendChild(deleteBtn);

    const container = document.getElementById("todo-list");
    container.appendChild(newdiv);

    element.value = "";
}