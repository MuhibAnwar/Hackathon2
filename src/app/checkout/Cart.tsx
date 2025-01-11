"use client";
import React, { useState } from "react";
import Image from "next/image";


const Cart = () => {
  const [isSameAsShipping, setShipping] = useState(false);

  const handleCheckboxChange = () => {
    setShipping(!isSameAsShipping);
  };

  const products = [
    { name: "Chicken Tikka Kabab", price: "50$", weight: "150gm" },
    { name: "Chicken Tikka Kabab", price: "50$", weight: "150gm" },
    { name: "Chicken Tikka Kabab", price: "50$", weight: "150gm" },
  ];

  return (
    <div className="flex flex-col lg:flex-row p-6 lg:p-20 gap-10" style={{ fontFamily: "sans-serif" }}>
      {/* Shipping Address Section */}
      <div className="flex flex-col flex-1">
        <h2 className="text-xl lg:text-2xl font-semibold mb-6">Shipping Address</h2>
        <form className="mb-6">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
          </div>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-2 text-[16px] mb-4 border border-[#ddd]"
          />
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <select className="flex-1 p-2 text-[16px] border border-[#ddd]">
              <option>Select Country</option>
              <option>United States</option>
              <option>United Kingdom</option>
            </select>
            <select className="flex-1 p-2 text-[16px] border border-[#ddd]">
              <option>Select City</option>
              <option>California</option>
              <option>London</option>
            </select>
          </div>
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <input
              type="text"
              placeholder="Zip Code"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
            <input
              type="text"
              placeholder="Address 1"
              className="flex-1 p-2 text-[16px] border border-[#ddd]"
            />
          </div>
          <input
            type="text"
            placeholder="Address 2"
            className="w-full p-2 text-[16px] mb-4 border border-[#ddd]"
          />
          <br/>
          <h2 className="text-2xl text-black text-bold">Billing address</h2>
          <br/>
          <div className="flex items-center mb-6">
            <input
              type="checkbox"
              checked={isSameAsShipping}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            <label>Same as shipping</label>
          </div>
        </form>
        <div className="flex justify-between">
          <button className="px-4 py-2 bg-[#ddd] border cursor-pointer">
            Back to Cart
          </button>
          <button className="px-4 py-2 bg-[#ffa500] text-white border cursor-pointer">
            Proceed to Shipping
          </button>
        </div>
      </div>

      {/* Order Summary Section */}
      <div className="flex flex-col flex-1 p-6 bg-[#f9f9f9] border rounded shadow-md">
        <div className="mb-6">
          {products.map((item, index) => (
            <div key={index} className="flex items-center mb-4">
              <Image
                src="/o.png"
                alt={item.name}
                className="w-[60px] h-[70px] mr-4 border"
              />
              <div>
                <p className="font-bold mb-2">{item.name}</p>
                <p className="mb-1">{item.weight}</p>
                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <p className="flex justify-between mb-2">
            <span>Sub-total</span>
            <span>130$</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>Free</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Discount</span>
            <span>25%</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Tax</span>
            <span>54.76$</span>
          </p>
          <h3 className="flex justify-between font-semibold mt-4">
            <span>Total</span>
            <span className="font-bold">432.65$</span>
          </h3>
        </div>
        <button className="w-full px-4 py-2 bg-[#ffa500] text-white rounded cursor-pointer">
          Place an Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
