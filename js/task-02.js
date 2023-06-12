// В HTML есть пустой список ul#ingredients.
// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.
// const ingredients = [
// "Potatoes",
// "Mushrooms",
// "Garlic",
// "Tomatos",
// "Herbs",
// "Condiments",
// ];
// Напиши скрипт, который для каждого элемента массива ingredients:
// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const insert = document.querySelector('#ingredients');

const elements = ingredients.map((option) => {
  const createEl = document.createElement('li');
  createEl.classList.add('item');
  createEl.textContent = option;
  console.log(createEl);
  return createEl;
});

insert.append(...elements);

// for (let ingredient of ingredients) {
// const createEl = document.createElement('li');
// createEl.classList.add('item');
// createEl.textContent = ingredient;
// console.log(createEl);

// elements.push(createEl);
// }

// ;
