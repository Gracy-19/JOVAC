window.onload = () => {
  const ul = document.getElementById("shopping-list");

  const items = ["Item A", "Item B", "Item C"];

  items.forEach(itemText => {
    const li = document.createElement("li");
    li.textContent = itemText;
    ul.appendChild(li);
  });
};