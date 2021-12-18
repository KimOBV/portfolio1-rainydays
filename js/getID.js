const jacketQuery = document.location.search;
const params = new URLSearchParams(jacketQuery);
const shoeID = params.get('id');

console.log(shoeID);

const url = 'https://kobv.net/blog/wp-json/wc/store/products/' + shoeID;
const jacketContainer = document.querySelector('.jacketContainer');
const shoeInfo = document.querySelector('.shoeInfo');
const shoeImg = document.querySelector('.shoe');
const size = document.querySelector('#size');

const headTitle = document.querySelector('title');
const headMetaText = document.querySelector('head');

console.log(url);

async function getJacketDetail() {
  const response = await fetch(url);
  const jacket = await response.json();

  console.log(jacket);

  createShoeHtml(jacket);
}

getJacketDetail();

function createShoeHtml(shoe) {
  headTitle.innerText = `Rainydays | ${shoe.name}`;
  headMetaText.innerHTML += `<meta name="description" content="${shoe.name} - ${shoe.description}">`;

  shoeImg.innerHTML = `<div class="img">
                                <img src="${shoe.images[0].src}" alt="${shoe.images[0].alt}">
                            </div>
                            <h2>${shoe.name}</h2>
                                    ${shoe.description}
                                    <h3 class="price">$${shoe.prices.price / 100}</h3>`;

  shoeInfo.innerHTML = `<p>${shoe.short_description}</p>`;

  const siz = shoe.variations;

  for (i = 0; i < siz.length; i++) {
    const shoeSize = shoe.variations[i].attributes[0];
    size.innerHTML += `<option value="${shoeSize.value}">${shoeSize.value}</option>`;
  } 
}