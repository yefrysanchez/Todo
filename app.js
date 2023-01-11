//Selectors
const inputText = document.querySelector(".input_text");
const add = document.querySelector(".add");
const list = document.querySelector(".container__todo__list");
const required = document.querySelector("#required");
const filter = document.querySelector("#filter");

//Listeners
add.addEventListener("click", (e) => {
  e.preventDefault();
  if (inputText.value != "") {
    required.classList.add("noEmpty_input");
    const listItems = document.createElement("div");
    listItems.classList.add("list");
    const item = document.createElement("li");
    item.innerText = inputText.value;
    list.appendChild(listItems);
    listItems.appendChild(item);

    //Cheack and Delete Btn
    const btnCheck = document.createElement("button");
    const btnDelete = document.createElement("button");
    btnCheck.innerHTML = `<i class="fa-solid fa-check"></i>`;
    btnDelete.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnCheck.classList.add("add");
    btnDelete.classList.add("add");
    listItems.appendChild(btnCheck);
    listItems.appendChild(btnDelete);

    //Delete and Check event
    btnDelete.addEventListener("click", () => {
      const todo = btnDelete.parentElement;
      todo.classList.add("deleted");
      todo.addEventListener("transitionend", () => {
        todo.remove();
      });
    });
    btnCheck.addEventListener("click", () => {
      listItems.classList.toggle("check");
    });

    //Reset Input
    inputText.value = "";
    inputText.focus();
  } else {
    required.classList.remove("noEmpty_input");
    required.classList.add("empty_input");
  }
});

filter.addEventListener("click", (e) => {
  const filterTodo = list.childNodes;
  filterTodo.forEach((todo) => {
    switch (e.target.value) {
      case "All":
        todo.style.display = "flex";
        break;
      case "Completed":
        if (todo.classList.contains("check")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "Uncompleted":
        if (!todo.classList.contains("check")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
});
