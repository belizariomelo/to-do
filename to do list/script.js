const form = document.querySelector("form");
const itemInput = document.querySelector("#itemInput");
const itemList = document.querySelector("#itemList");

// Carrega os itens salvos no local storage ao carregar a página
loadItems();

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

  // Salva os itens da lista no local storage
  saveItems();
}

function removeItem(e) {
  const item = e.target.parentNode;
  itemList.removeChild(item);

  // Salva os itens da lista no local storage
  saveItems();
}

function saveItems() {
  // Cria um array com o texto de cada item da lista
  const items = Array.from(itemList.children).map(
    (item) => item.querySelector("span").textContent
  );

  // Armazena o array no local storage
  localStorage.setItem("items", JSON.stringify(items));
}

function loadItems() {
  // Verifica se há algum item salvo no local storage
  const items = JSON.parse(localStorage.getItem("items"));

  if (items) {
    // Adiciona cada item na lista
    items.forEach((itemText) => {
      const newItem = document.createElement("li");
      const itemSpan = document.createElement("span");
      const itemDelete = document.createElement("button");

      itemSpan.textContent = itemText;
      itemDelete.textContent = "X";

      newItem.appendChild(itemSpan);
      newItem.appendChild(itemDelete);
      itemList.appendChild(newItem);

      itemDelete.addEventListener("click", removeItem);
    });
  }
}
