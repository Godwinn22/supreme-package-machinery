document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="class-p">Your cart is empty.</p>';
        return;
    }

    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
        <div class="all-items">
            <div class="img-item">
                <img src="${item.image}" alt="${item.name}" class="img-js">
            </div>
            <div class="right-item">
                <p class="item-name">${item.name}</p>
                <p class="p-quan">Quantity: ${item.quantity}</p>
                <button class="contact"><a href="https://wa.me/+2348035716074" target="_blank">Order Now</a></button>
                <button class="remove" data-index="${index}">Remove</button>
            </div>
        </div>
        `;
        cartItemsContainer.appendChild(itemDiv);
    });

    // Remove functionality
    document.querySelectorAll('.remove').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            cart.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cart));
            window.location.reload(); // Refresh the page to update the cart
        });
    });
});
