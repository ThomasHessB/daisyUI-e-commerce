import React from "react";
import { useCart } from "../context/CartContext"; // Update the path as per your project structure
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, totalCost } = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Your Cart</h1>
          <Link to="/" className="btn btn-primary">
            Back to Products
          </Link>
        </div>
      </header>
      <div className="flex-grow container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="w-16 p-1 border rounded"
                    min="1"
                  />
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="btn btn-error"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Summary</h3>
          <p>
            Total Items:{" "}
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </p>
          <p>Total Cost: ${totalCost().toFixed(2)}</p>
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
