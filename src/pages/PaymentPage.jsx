import React, { useState } from "react";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [deliveryPrice, setDeliveryPrice] = useState(null);
  const [zipCode, setZipCode] = useState("");
  const navigate = useNavigate();

  const calculateDeliveryPrice = (zip) => {
    // Placeholder logic for delivery price calculation
    // You can replace this with your actual calculation logic
    if (zip.startsWith("1")) {
      setDeliveryPrice(10); // Example: $10 for zip codes starting with '1'
    } else {
      setDeliveryPrice(20); // Example: $20 for other zip codes
    }
  };

  const handleCalculateDelivery = (e) => {
    e.preventDefault();
    calculateDeliveryPrice(zipCode);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-semibold">Payment</h1>
          <div>
            <Link to="/cart" className="btn btn-secondary">
              Back to Cart
            </Link>
          </div>
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Payment Information Form */}
        <div className="card bg-base-100 shadow-xl p-4">
          <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
          <form>
            <div className="form-control mb-4">
              <label className="label" htmlFor="cardName">
                Cardholder Name
              </label>
              <input
                type="text"
                id="cardName"
                placeholder="Name on Card"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                placeholder="0000 0000 0000 0000"
                className="input input-bordered"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label" htmlFor="expiryDate">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiryDate"
                  placeholder="MM/YY"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="cvv">
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  placeholder="123"
                  className="input input-bordered"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-6">
              Submit Payment
            </button>
          </form>
        </div>

        {/* Delivery Address Form */}
        <div className="card bg-base-100 shadow-xl p-4">
          <h2 className="text-2xl font-semibold mb-4">Delivery Address</h2>
          <form>
            <div className="form-control mb-4">
              <label className="label" htmlFor="fullName">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Your Name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mb-4">
              <label className="label" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Street Address"
                className="input input-bordered"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label" htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="City"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label" htmlFor="zipCode">
                  Zip Code
                </label>
                <input
                  type="text"
                  id="zipCode"
                  placeholder="Zip Code"
                  className="input input-bordered"
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-6">
              Place Order
            </button>
          </form>
        </div>
        <div className="card bg-base-100 shadow-xl p-4 mt-6">
          <h2 className="text-2xl font-semibold mb-4">
            Calculate Delivery Price
          </h2>
          <form onSubmit={handleCalculateDelivery}>
            <div className="form-control mb-4">
              <label className="label" htmlFor="zipCodeCalc">
                Zip Code
              </label>
              <input
                type="text"
                id="zipCodeCalc"
                placeholder="Enter Zip Code"
                className="input input-bordered"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Calculate
            </button>
          </form>
          {deliveryPrice !== null && (
            <p className="mt-4">Estimated Delivery Price: ${deliveryPrice}</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
