let cartPage = JSON.parse(localStorage.getItem('cart')) || [];
const cartItems = document.getElementById('cart-items');
const checkoutForm = document.getElementById('checkout-form');
const orderItemsInput = document.getElementById('order_items');
const totalPriceInput = document.getElementById('total_price');
const orderMsg = document.getElementById('order-msg');

function renderCart() {
  if(cartPage.length === 0) {
    cartItems.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  let html = '<ul>';
  cartPage.forEach((item,index) => {
    html += `<li>${item.title} (${item.size}) - $${item.price} <button onclick="removeItem(${index})">Remove</button></li>`;
  });
  html += '</ul>';
  let total = cartPage.reduce((sum,item)=>sum+item.price,0);
  html += `<p>Total: $${total.toFixed(2)}</p>`;
  cartItems.innerHTML = html;
}

function removeItem(index){
  cartPage.splice(index,1);
  localStorage.setItem('cart', JSON.stringify(cartPage));
  renderCart();
}

checkoutForm.addEventListener('submit',(e)=>{
  if(cartPage.length === 0){
    e.preventDefault();
    alert('Cart is empty.');
    return;
  }

  // Fill hidden fields before submission
  let orderSummary = cartPage.map(i => `${i.title} (${i.size}) - $${i.price}`).join('\n');
  let total = cartPage.reduce((sum,i)=>sum+i.price,0);

  orderItemsInput.value = orderSummary;
  totalPriceInput.value = total.toFixed(2);

  // Optional: clear cart after submission
  setTimeout(() => {
    cartPage = [];
    localStorage.setItem('cart', JSON.stringify(cartPage));
    renderCart();
    orderMsg.textContent = 'Order submitted! Check your email for confirmation.';
  }, 500);
});

// Initialize cart
renderCart();
