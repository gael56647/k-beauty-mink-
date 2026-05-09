let cart = [];
let total = 0;
function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  updateCart();
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;
  cartCount.style.display = "inline";
}
function updateCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

function clearCart() {
  cart = [];
  total = 0;
  updateCart();

  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = "0";
  cartCount.style.display = "none";
}

function toggleCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.classList.toggle("open");
}