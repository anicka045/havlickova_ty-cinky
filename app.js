let cart = [];

const products = [
  { name: 'Činka 2,5 kg', price: 250},
  { name: 'Činka 5 kg', price: 500},
  { name: 'Činka 10 kg', price: 700 },
  { name: 'Činka 15 kg', price: 1050 },
  { name: 'Činka 20 kg', price: 1400 },
  { name: 'Činka 25 kg', price: 1750 }
];

function loadProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach((p, index) => {
    const item = document.createElement('div');
    item.innerHTML = `
      <strong>${p.name}</strong><br>
      ${p.price} Kč
      <button onclick='addToCart(${index})'>Přidat do košíku</button>
      <hr>
    `;
    container.appendChild(item);
  });
}

function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';
  cart.forEach((p, i) => {
    const item = document.createElement('div');
    item.innerHTML = `
      ${p.name} - ${p.price} Kč
      <button onclick='removeFromCart(${i})'>Odebrat</button>
    `;
    cartDiv.appendChild(item);
  });

  // ➕ Tady ukládáme košík do localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
}

function checkout() {
  document.getElementById('addressForm').style.display = 'block';
}

function submitOrder() {
  const address = document.getElementById('address').value;
  if (!address) {
    alert('Zadejte prosím adresu.');
    return;
  }
  alert(`Objednávka odeslána na adresu: ${address}`);
  cart = [];
  updateCart();
  document.getElementById('addressForm').style.display = 'none';
}

window.onload = loadProducts;
