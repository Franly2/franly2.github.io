const inputText = document.querySelector(".text-input");
const buttonSubmit = document.querySelector(".button-submit");
const taskListContainer = document.querySelector(".content-container");
// const taskListBoxContainer = document.querySelector(".box-container");
// const taskListBox = document.querySelector(".box");

buttonSubmit.addEventListener("click", function () {
  let input = inputText.value;
  if (!input) {
    alert("please fill out the task");
    return false;
  } else {
    document.createElement("div");
    const div = document.createElement("div");
    div.classList.add("task");

    let divBoxContainer = document.createElement("div");
    divBoxContainer.classList.add("box-container");
    let divBox = document.createElement("div");
    divBox.classList.add("box");
    divBox.classList.add("hilang");

    let stik1 = document.createElement("div");
    stik1.classList.add("stik1");
    let stik2 = document.createElement("div");
    stik2.classList.add("stik2");

    divBoxContainer.appendChild(divBox);
    divBox.appendChild(stik1);
    divBox.appendChild(stik2);

    const taskText = document.createElement("input");
    taskText.type = "text";
    taskText.setAttribute("readonly", "readonly");
    taskText.value = input;
    taskText.classList.add("task-text");

    const buttonEdit = document.createElement("button");
    buttonEdit.type = "submit";
    buttonEdit.innerText = "edit";

    const buttonDelete = document.createElement("button");
    buttonDelete.type = "submit";
    buttonDelete.innerText = "delete";
    div.appendChild(divBoxContainer);
    div.appendChild(taskText);
    div.appendChild(buttonEdit);
    div.appendChild(buttonDelete);

    taskListContainer.appendChild(div);

    buttonEdit.addEventListener("click", function () {
      if (buttonEdit.innerText.toLocaleLowerCase() == "edit") {
        console.log("is editing");
        buttonEdit.innerText = "save";
        taskText.removeAttribute("readonly");
      } else {
        console.log("is saving");
        buttonEdit.innerText = "edit";
        taskText.setAttribute("readonly", "readonly");
      }
    });
    buttonDelete.addEventListener("click", function () {
      taskListContainer.removeChild(div);
    });
    divBoxContainer.addEventListener("click", function () {
      taskText.classList.toggle("coret");
      divBoxContainer.classList.toggle("rubahWarna");
    });
  }
});
