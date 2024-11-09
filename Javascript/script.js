document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', function() {
        const quantityInput = this.parentElement.querySelector('input[type="number"]');
        const quantity = parseInt(quantityInput.value);

        if (!quantity || quantity <= 0) {
            alert('Please select a quantity.');
            return;
        }
		

        const productName = this.getAttribute('data-name');
        const productImage = this.getAttribute('data-image');

        // Create a cart item object
        const cartItem = {
            image: productImage,
            name: productName,
            quantity: quantity
        };

        // Retrieve the current cart from local storage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Check if the item already exists in the cart
        const existingItemIndex = cart.findIndex(item => item.name === productName);

        if (existingItemIndex > -1) {
            // Update the quantity of the existing item
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Add the new product to the cart
            cart.push(cartItem);
        }

        // Save the updated cart back to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Added to Cart!');
    });
});

// View Cart button functionality
document.getElementById('viewCart').addEventListener('click', function() {
    window.location.href = 'cart.html'; // Redirect to cart page
});

