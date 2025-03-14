document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
let form = document.getElementById("create-task-form");
let text = document.getElementById("new-task-description");
let but = document.getElementById("submit-button");
let ul = document.getElementById("tasks");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let li = document.createElement("li");
  li.innerText = text.value;
  ul.appendChild(li);
  text.value = "";

  const deleteButton = document.createElement("button");

  deleteButton.innerText = "X";
  li.appendChild(deleteButton);

  deleteButton.addEventListener("click", function (event) {
    li.remove();
  });
});
