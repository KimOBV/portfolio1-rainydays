const btn = document.querySelector('#addToCart'),
  cartCounter = document.querySelector('#cartItems'),
  added = document.querySelector('.added');
let numItems = 0;

btn.addEventListener('click', function () {
  numItems += 1;
  cartCounter.innerHTML = `<p class="items">${numItems}</p>`;
  added.innerHTML = `<p>${numItems} item(s) has been added to your cart</p>`;
});
