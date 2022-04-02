function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function deleteItemFromCart(event) {
  event.target.parentNode.removeChild(event.target);
}

function cartItemClickListener(event) {
  deleteItemFromCart(event);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

async function addToCart(e) {
  const cartContainer = document.querySelector('.cart__items');
  const id = getSkuFromProductItem(e.target.parentElement);
  const product = await fetchItem(id);
  const objReturn = { sku: id, name: product.title, salePrice: product.price };
  cartContainer.appendChild(createCartItemElement(objReturn));
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  const button = section.querySelector('button');
  button.addEventListener('click', addToCart);
  return section;
}

const renderItem = async (arg) => {
  const data = await fetchProducts(arg);
  data.results.forEach((element) => {
    const objSend = {
      sku: element.id, 
      name: element.title,
      image: element.thumbnail };
      const section = createProductItemElement(objSend);
      const itemsCointainer = document.querySelector('.items');
      itemsCointainer.appendChild(section);
  });
};

window.onload = () => { 
  renderItem('computador');
};
