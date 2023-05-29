const form = document.querySelector("#todo-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);

  const item = data.get("item");
  if (item) addItem(item);

  input.value = "";
});

function addItem(item) {
  const listItem = document.createElement("li");

  listItem.innerText = item;

  list.appendChild(listItem);
  listItem.addEventListener("click", (e) => removeItem(e.target));
}

function removeItem(element) {
  list.removeChild(element);
}
