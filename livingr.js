let iconCart = document.querySelector('.cart-icon');
let closeButton = document.querySelector('.close');
let body = document.querySelector('body');
let addToCartButtons = document.querySelectorAll('.addCart');
let cartCounter = document.getElementById('cart-counter');
let cartItemsContainer = document.querySelector('.itemsList');
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function updateCartCounter() {
    cartCounter.innerText = cart.length;
}
function updateCartUI() {
    cartItemsContainer.innerHTML = ""; 

    cart.forEach((item, index) => {
        let itemElement = document.createElement("div");
        itemElement.classList.add("cart-item");
        itemElement.innerHTML = `
            <img src="${item.image}" width="50" height="50">
            <p>${item.name} - <strong>$${item.price}</strong></p>
            <button class="remove-item" data-index="${index}">Remove</button>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
    updateCartCounter();
}
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let product = e.target.parentElement;
        let name = product.querySelector("p").innerText;
        let price = product.querySelector(".price").innerText.replace("$", "");
        let image = product.querySelector("img").src;
        let productObj = { name, price, image };
        cart.push(productObj);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCounter();
        updateCartUI();
    });
});
cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        let index = e.target.getAttribute('data-index');
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart)); 
        updateCartUI(); 
    }
});
iconCart.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
});
closeButton.addEventListener('click', () => {
    body.classList.toggle('activeTabCart');
});
updateCartUI();
