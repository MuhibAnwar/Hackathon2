import React from "react";
import Image from "next/image";

const products = [
  { name: "Fresh Lime", price: "$12.99", imgSrc: "/images/lime.jpg" },
  { name: "Cheese Burger", price: "$14.99", imgSrc: "/images/burger.jpg" },
  { name: "Pizza", price: "$18.99", imgSrc: "/images/pizza.jpg" },
  { name: "Country Burger", price: "$16.99", imgSrc: "/images/burger2.jpg" },
  { name: "Choco Burger", price: "$19.99", imgSrc: "/images/choco-burger.jpg" },
  { name: "Chicken Pizza", price: "$17.99", imgSrc: "/images/chicken-pizza.jpg" },
];

const Product= () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
    
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="hidden md:block bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Filter By</h2>
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-2">Categories</h3>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" id="burger" className="mr-2" />
                <label htmlFor="burger">Burgers</label>
              </li>
              <li>
                <input type="checkbox" id="pizza" className="mr-2" />
                <label htmlFor="pizza">Pizzas</label>
              </li>
              <li>
                <input type="checkbox" id="drinks" className="mr-2" />
                <label htmlFor="drinks">Drinks</label>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-2">Price Range</h3>
            <input
              type="range"
              min="10"
              max="50"
              className="w-full"
            />
          </div>
        </aside>

        {/* Products Grid */}
        <main className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <Image
                src={product.imgSrc}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-orange-500 font-semibold">{product.price}</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          ))}
        </main>
      </div>

      {/* Pagination */}
      <div className="flex justify-center py-4">
        <button className="px-4 py-2 mx-2 bg-gray-300 rounded-lg">1</button>
        <button className="px-4 py-2 mx-2 bg-gray-300 rounded-lg">2</button>
        <button className="px-4 py-2 mx-2 bg-gray-300 rounded-lg">3</button>
      </div>
    </div>
  );
};

export default Product;
