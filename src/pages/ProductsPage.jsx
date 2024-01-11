import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext"; // Adjust path as necessary
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const THEMES = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
];

const ProductsPage = () => {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    var val = e.target.getAttribute("data-set-theme");
    setTheme(val);
  };

  const { addToCart, cartItems, totalCost } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Mock data for products
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "https://picsum.photos/id/235/400/400",
      description: "Description for Product 1",
    },
    {
      id: 2,
      name: "Product 2",
      price: 150,
      image: "https://picsum.photos/id/230/400/400",
      description: "Description for Product 2",
    },
    {
      id: 3,
      name: "Product 3",
      price: 200,
      image: "https://picsum.photos/id/167/400/400",
      description: "Description for Product 3",
    },
    {
      id: 4,
      name: "Product 4",
      price: 175,
      image: "https://picsum.photos/id/43/400/400",
      description: "Description for Product 4",
    },
    {
      id: 5,
      name: "Product 5",
      price: 265,
      image: "https://picsum.photos/id/64/400/400",
      description: "Description for Product 5",
    },
    {
      id: 6,
      name: "Product 6",
      price: 135,
      image: "https://picsum.photos/id/67/400/400",
      description: "Description for Product 6",
    },
    {
      id: 7,
      name: "Product 7",
      price: 176,
      image: "https://picsum.photos/id/132/400/400",
      description: "Description for Product 7",
    },
    {
      id: 8,
      name: "Product 8",
      price: 214,
      image: "https://picsum.photos/id/111/400/400",
      description: "Description for Product 8",
    },

    // ... more products
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Your Store</a>
        </div>
        <div className="navbar-end">
          <Link to="/cart" className="btn">
            Cart ({totalItems} items - ${totalCost().toFixed(2)})
          </Link>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn">
            {THEMES.length} Themes
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-1 z-[1] p-2 shadow bg-base-200 rounded-box w-52 max-h-96 overflow-y-auto"
          >
            {THEMES.map((theme, i) => (
              <li key={theme + i}>
                <button data-set-theme={theme} onClick={handleThemeChange}>
                  {i + 1 + ". " + theme}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Our Store</h1>
            <p className="mb-5">
              Explore our wide range of products and find what you need at the
              best prices.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="card hover:shadow-lg transition-shadow duration-300"
            >
              <img
                className="w-full h-64 object-cover"
                src={product.image}
                alt={product.name}
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-600">${product.price}</p>
                <button
                  className="btn btn-primary mt-4"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
