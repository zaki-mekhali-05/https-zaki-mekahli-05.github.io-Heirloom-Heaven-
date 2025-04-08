document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.querySelector(".quantity-input");
    const priceCounter = document.querySelector(".price-counter"); 
    const basePrice = 40;

    function updatePrice() {
        const quantity = parseInt(quantityInput.value) || 0;
        const totalPrice = (quantity * basePrice);
        priceCounter.textContent = `Total Price: $${totalPrice}`;
    }

    quantityInput.addEventListener("input", updatePrice);
    updatePrice();
});