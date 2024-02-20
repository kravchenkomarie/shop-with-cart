import { cartFunction } from './cart.js';

const cards = document.querySelector('#cards');

function render(data) {
  data.forEach((el) => {
    const item = document.createElement('div');
    const addToCartButton = document.createElement('button');

    addToCartButton.classList.add('button');
    item.classList.add('card');

    addToCartButton.innerHTML = 'Купить';
    item.innerHTML = `${el.name}: ${el.price}`;

    cards.appendChild(item);
    item.appendChild(addToCartButton);

    addToCartButton.addEventListener('click', () => {
      cartFunction(el.price);
    });
  });
}

export default render;
