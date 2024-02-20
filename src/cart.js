const cart = document.querySelector('#cart');

let goodsCount = 0;
let sum = 0;

export const cartFunction = (price) => {
  goodsCount++;
  sum += price;
  cart.classList.add('cart');
  cart.innerHTML = `товаров: ${goodsCount}, сумма ${sum}`;
};
