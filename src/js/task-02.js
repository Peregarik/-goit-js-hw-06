const ingredientsEl = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const listEl = document.querySelector("#ingredients");
const liArrayEl = [];

ingredientsEl.forEach((ingredient) => {
  const item = document.createElement("li");
  item.className = "item";
  item.textContent = ingredient;
  liArrayEl.push(item);
});

listEl.append(...liArrayEl);
