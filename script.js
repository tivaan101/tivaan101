// Add any JavaScript code related to the homepage functionality here

// Example: Fetch latest products and dynamically populate the product-list section
const productContainer = document.querySelector('.product-list');

// Simulating fetching latest products from the server
const latestProducts = [
    { name: 'Product 1', price: 19.99 },
    { name: 'Product 2', price: 24.99 },
    { name: 'Product 3', price: 12.99 },
];

latestProducts.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
    `;
    productContainer.appendChild(productCard);
});