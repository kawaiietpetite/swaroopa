let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    document.querySelector(".cart-button").textContent = `Cart (${cart.length})`;
    alert(`${product} added to cart!`);
}

function displayCart() {
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = cart.map(item => `<p>${item.product} - ₹${item.price}</p>`).join('');
}

function checkout() {
    alert("Checkout feature coming soon!");
}

window.onload = displayCart;

document.addEventListener("contextmenu", function(e) {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
    }
});
