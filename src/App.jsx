import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./context/CartContext"; // Adjust path as necessary
import ProductsPage from "./pages/ProductsPage"; // Adjust path as necessary
import CartPage from "./pages/CartPage"; // Adjust path as necessary

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
