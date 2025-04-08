document.addEventListener("DOMContentLoaded", () => {
    let cartCounter = document.getElementById("cart-counter");
    let addCartButtons = document.querySelectorAll(".addCart");
    let cartCount = 0;
    addCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartCounter.textContent = cartCount;
        });
    });
});
document.querySelector('.reset').addEventListener('click', function () {
    document.getElementById('cart-counter').textContent = "0"; 
}) 