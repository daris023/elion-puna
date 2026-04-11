let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartBtn = document.getElementById('cart-btn');

function updateCartCount() {
  cartBtn.innerText = `Cart (${cart.length})`;
}
updateCartCount();

// Add to cart from index page
document.querySelectorAll('.add-to-cart').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.product-card');
    const title = card.querySelector('h3').innerText;
    const price = parseFloat(card.querySelector('.price').innerText);
    const size = 'M';
    cart.push({ title, price, size });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} added to cart`);
    updateCartCount();
  });
});

// Product page functionality
const urlParams = new URLSearchParams(window.location.search);
const productParam = urlParams.get('product');

const productsData = {
  shirt1: { title: "Classic T-Shirt", price: 25, img: "images/shirt1.jpg", desc: "Premium cotton T-shirt" },
  shirt2: { title: "Hoodie Deluxe", price: 45, img: "images/shirt2.jpg", desc: "Soft cozy hoodie" },
  shirt3: { title: "Summer Crop Top", price: 30, img: "images/shirt3.jpg", desc: "Light summer crop top" },
};

if(productParam && productsData[productParam]) {
  const prod = productsData[productParam];
  document.getElementById('product-title').innerText = prod.title;
  document.getElementById('product-price').innerText = prod.price.toFixed(2);
  document.getElementById('product-img').src = prod.img;
  document.getElementById('product-desc').innerText = prod.desc;
}

const addToCartBtn = document.getElementById('add-to-cart-btn');
if(addToCartBtn) {
  addToCartBtn.addEventListener('click', () => {
    const title = document.getElementById('product-title').innerText;
    const price = parseFloat(document.getElementById('product-price').innerText);
    const size = document.getElementById('product-size').value;
    cart.push({ title, price, size });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${title} (${size}) added to cart`);
    updateCartCount();
  });
}

// Cart button click
if(cartBtn) cartBtn.addEventListener('click', () => window.location.href='cart.html');
