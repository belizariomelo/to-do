const form = document.querySelector("form");
const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");

form.addEventListener("submit", addItem);

function addItem(e) {
  e.preventDefault();

  const newItem = document.createElement("li");
  const itemText = document.createElement("span");
  const itemDelete = document.createElement("button");

  itemText.textContent = itemInput.value;
  itemDelete.textContent = "X";

  newItem.appendChild(itemText);
  newItem.appendChild(itemDelete);
  itemList.appendChild(newItem);

  itemDelete.addEventListener("click", removeItem);

  itemInput.value = "";
}

function removeItem(e) {
  const item = e.target.parentNode;
  itemList.removeChild(item);
}
