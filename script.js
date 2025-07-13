// Dummy in-memory user store
const users = [];

function signup(event) {
  event.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const password = document.getElementById("signupPassword").value;
  users.push({ name, email, password });
  alert("Signup successful!");
  window.location.href = "index.html";
}

function login(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
}

function addToCart() {
  const status = "Ready";
  if (status === "Ready") {
    localStorage.setItem("cart", "1");
    alert("Item added to cart!");
  }
}

// Update cart display
if (window.location.pathname.includes("cart.html")) {
  const cartCount = localStorage.getItem("cart") || 0;
  document.getElementById("cartContent").innerText = `Items in cart: ${cartCount}`;
}

// Payment condition
if (window.location.pathname.includes("payment.html")) {
  const cartCount = localStorage.getItem("cart");
  if (cartCount && parseInt(cartCount) > 0) {
    document.getElementById("paymentStatus").innerText = "Proceed with your payment here...";
  }
}
