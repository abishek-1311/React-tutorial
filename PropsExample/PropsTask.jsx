// Task Description:
// Create a React application with the following requirements:

// Create a parent component called App.
// Create a child component called ProductCard.
// Pass the following props from App to ProductCard:
// productName: A string representing the name of the product.
// price: A number representing the price of the product.
// onBuy: A function that displays an alert saying "You bought [productName] for $[price]!"
// Expected Output:
// When you render the ProductCard component, it should display the product name and price, along with a "Buy Now" button. Clicking the button should trigger the onBuy function.

// Solution Outline:
-------------------------------------------------------------------------------------------------------------------------------------------------------

function ProductCard(props) {
    return (
        <div>
            <h2>{props.productName}</h2>
            <p>Price: ${props.price}</p>
            <button onClick={() => props.onBuy(props.productName, props.price)}>Buy Now</button>
        </div>
    );
}

function App() {
    const handleBuy = (productName, price) => {
        alert(`You bought ${productName} for $${price}!`);
    };

    return (
        <ProductCard 
            productName="Laptop" 
            price={999} 
            onBuy={handleBuy} 
        />
    );
}

-------------------------------------------------------------------------------------------------------------------------------------------------------
// export default App;
// Task for You to Do:
  --------------------
//1. Extend the above solution by adding more ProductCard components for different products (e.g., Phone, Tablet).
//2. Pass different props for each product (name, price, and onBuy function).
//3. Style the ProductCard component using CSS to make it visually appealing.
