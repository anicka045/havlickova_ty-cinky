let cart = [];

const products = [
  { name: 'Činka 10 kg', price: 700 },
  { name: 'Činka 15 kg', price: 1050 },
  { name: 'Činka 20 kg', price: 1400 },
  { name: 'Činka 25 kg', price: 1750 }
];

function loadProducts() {
  const container = document.getElementById('products');
  container.innerHTML = '';
  products.forEach(p => {
    const item = document.createElement('div');
    item.innerHTML = `
      <strong>${p.name}</strong><br>
      ${p.price} Kč
      <button onclick='addToCart(${JSON.stringify(p)})'>Přidat do košíku</button>
      <hr>
    `;
    container.appendChild(item);
  });
}

function addToCart(product) {
  cart.push(product);
  updateCart();
}

function updateCart() {
  const cartDiv = document.getElementById('cart');
  cartDiv.innerHTML = '';
  cart.forEach(p => {
    const item = document.createElement('div');
    item.textContent = `${p.name} - ${p.price} Kč`;
    cartDiv.appendChild(item);
  });
}

function checkout() {
  document.getElementById('addressForm').style.display = 'block';
}

async function submitOrder() {
  const address = document.getElementById('address').value;
  alert(`Objednávka odeslána na adresu: ${address}`);
}

window.onload = loadProducts;
