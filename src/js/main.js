let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let out = document.querySelector(".out");
let delListAll = document.querySelector(".delListAll");

let count = 0;
let t = 0;

function toDoList() {
  document.querySelector(".counter").innerHTML = ++count;

  let list = document.createElement("li");
  list.innerText = inp.value;

  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");

  document.getElementById("inp").value = "";

  check.onchange = () => {
    if (check.checked) {
      t = 1;
      list.classList.add("done");
      list.classList.add("strike");
      if (count !== 0) document.querySelector(".counter").innerHTML = --count;
    } else {
      t = 0;
      list.classList.remove("done");
      list.classList.remove("strike");
      document.querySelector(".counter").innerHTML = ++count;
    }
  };

  let button = document.createElement("button");
  button.classList.add("fas", "fa-trash-alt");

  // При видаленні list робити каунтер -1
  button.onclick = () => {
    inp.value = "";
    if (!t) {
      document.querySelector(".counter").innerHTML = --count;
      container.remove();
      //container.parentNode.removeChild(container);
    } else container.remove();
  };

  let containerCheck = document.createElement("div");
  containerCheck.classList.add("containerCheck");
  containerCheck.append(check);

  let containerList = document.createElement("div");
  containerList.classList.add("containerList");
  containerList.append(list);

  let container = document.createElement("div");
  container.classList.add("container");
  container.append(containerCheck);
  container.append(containerList);
  container.append(button);
  out.append(container);

  delListAll.addEventListener("click", () => {
    out.innerHTML = "";
    document.querySelector(".counter").innerHTML = 0;
  });
}

inp.addEventListener("keypress", (keyPressed) => {
    const keyEnter = 13;
    if (keyPressed.which == keyEnter) {
        toDoList();
    }
});

let error = document.querySelector(".error");

btn.addEventListener("click", function () {
  if (inp.value !== "") {
    error.innerText = "";
    toDoList();
  } else {
    error.innerText = "The field is not filled!";
  }
});
