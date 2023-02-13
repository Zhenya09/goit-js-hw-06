const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients")
const listItemArray = []
ingredients.forEach((ingredient) => {
  const listItem = document.createElement("li")
  listItem.textContent = ingredient
  listItem.classList.add("item")
  listItemArray.push(listItem)
})
list.append(...listItemArray)