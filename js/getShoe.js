const url = 'https://kobv.net/blog/wp-json/wc/store/products';
const resCon = document.querySelector('.product');

async function getShoes(url) {
  const response = await fetch(url);
  const products = await response.json();

  products.forEach(function (shoe) {
    resCon.innerHTML += 
      `<div class="prod">
        <a href="/shoe.html?id=${shoe.id}">
          <img src="${shoe.images[0].src}" alt="${shoe.images[0].alt}" /> 
          <h3>${shoe.name}</h3>
          <p class="price">$${shoe.prices.price/100}</p>
        </a>
      </div>`;
  });
}
getShoes(url);
