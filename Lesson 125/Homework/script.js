document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("registerForm")) {
        document.getElementById("registerForm").addEventListener("submit", registerUser);
    } else if (document.getElementById("products")) {
        displayProducts();
        displayCart();
    }
});

function registerUser(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    
    if (name && email && password) {
        localStorage.setItem("currentUser", JSON.stringify({ name, email }));
        localStorage.setItem("cart", JSON.stringify([]));
        window.location.href = "store.html";
    }
}

function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "register.html";
}

const products = [
    { id: 1, name: "Laptop", price: 2200, image: "img/laptop.jpg" },
    { id: 2, name: "Headphones", price: 180, image: "img/headphones.jpg" },
    { id: 3, name: "Phone", price: 1500, image: "img/smartphone.jpg" }
];

function displayProducts() {
    let productContainer = document.getElementById("products");
    products.forEach(product => {
        let div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}" width="100">
            <p>${product.name}</p>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(div);
    });
}

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItems.appendChild(li);
    });
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
}

function checkout() {
    if (confirm("Proceed to checkout?")) {
        localStorage.setItem("cart", JSON.stringify([]));
        displayCart();
        alert("Thank you for your purchase!");
    }
}

function clearCart() {
    localStorage.setItem("cart", JSON.stringify([]));
    displayCart();
}
