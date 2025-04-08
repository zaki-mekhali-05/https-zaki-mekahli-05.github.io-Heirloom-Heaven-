document.addEventListener("DOMContentLoaded", function () {
    const increaseBtns = document.querySelectorAll(".increase");
    const decreaseBtns = document.querySelectorAll(".decrease");
    const removeBtns = document.querySelectorAll(".remove-item");
    const totalPriceEl = document.getElementById("total-price");
    const couponInput = document.getElementById("coupon-code");
    const applyCouponBtn = document.getElementById("apply-coupon");
    const couponMessage = document.getElementById("coupon-message");
    const shippingSelect = document.getElementById("shipping-method");

    let discount = 0;

    function updateTotal() {
        let total = 0;
        document.querySelectorAll(".cart-item").forEach(item => {
            let price = parseInt(item.querySelector(".item-price").dataset.price);
            let quantity = parseInt(item.querySelector(".quantity").value);
            total += price * quantity;
        });

        total -= discount;  // Apply discount if any
        total += parseInt(shippingSelect.value); // Add shipping cost
        totalPriceEl.innerText = `₹${total}`;
    }

    increaseBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            let input = btn.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateTotal();
        });
    });

    decreaseBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            let input = btn.nextElementSibling;
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateTotal();
            }
        });
    });

    removeBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            btn.parentElement.remove();
            updateTotal();
        });
    });

    applyCouponBtn.addEventListener("click", function () {
        const couponCode = couponInput.value.trim();
        if (couponCode === "SAVE10") {
            discount = 1000;
            couponMessage.innerText = "Coupon applied! ₹1000 discount";
        } else {
            discount = 0;
            couponMessage.innerText = "Invalid coupon code";
        }
        updateTotal();
    });

    shippingSelect.addEventListener("change", updateTotal);
});
