import React from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const products = [
  { name: "Fresh Lime", price: "$38.00", imgSrc: "/s1.png" },
  { name: "Chocolate Muffin", price: "$28.00", imgSrc: "/s2.png" },
  { name: "Burger", price: "$21.00", imgSrc: "/s3.png" },
  { name: "Country Burger", price: "$45.00", imgSrc: "/s4.png" },
  { name: "Drink", price: "$25.00", imgSrc: "/s5.png" },
  { name: "Pizza", price: "$43.00", imgSrc: "/s6.png" },
  { name: "Cheese Butter", price: "$10.00", imgSrc: "/s7.png" },
  { name: "Sandwiches", price: "$25.00", imgSrc: "/s8.png" },
  { name: "Chicken Chup", price: "$12.00", imgSrc: "/s9.png" },
  { name: "Country Burger", price: "$45.00", imgSrc: "/s4.png" },
  { name: "Drink", price: "$23.00", imgSrc: "/s5.png" },
  { name: "Pizza", price: "$43.00", imgSrc: "/s6.png" },
    { name: "Cheese Butter", price: "$10.00", imgSrc: "/s7.png" },

      { name: "Sandwiches", price: "$25.00", imgSrc: "/s8.png" },

        { name: "Chicken Chup", price: "$12.00", imgSrc: "/s9.png" },];

const validateImgSrc = (src: string) => (src.startsWith("/") ? src : `/${src}`);

const Product = () => {
  return (
    <div className="bg-white min-h-screen mt-20">
      <div className="container mx-auto p-4 flex flex-col md:flex-row gap-4">
        {/* Products Grid */}
        <main className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-lg hover:shadow-xl transition"
            >
              <Image
                src={validateImgSrc(product.imgSrc)}
                alt={product.name}
                className="w-full h-48 object-cover mb-4"
                width={500}
                height={48}
              />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-orange-500 font-semibold">{product.price}</p>
              <button className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          ))}
        </main>

        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white p-4 shadow-lg rounded-lg">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search Products"
              className="w-full mb-4 bg-gray-200 p-3"
            />
            <button
              className="p-4 text-white mb-3"
              style={{ backgroundColor: "rgb(255, 159, 13)" }}
            >
              <CiSearch className="text-white" />
            </button>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>
                <input type="checkbox" id="sandwiches" className="mr-2" />
                <label htmlFor="sandwiches">Sandwiches</label>
              </li>
              <li>
                <input type="checkbox" id="burgers" className="mr-2" />
                <label htmlFor="burgers">Burgers</label>
              </li>
              <li>
                <input type="checkbox" id="chicken-chup" className="mr-2" />
                <label htmlFor="chicken-chup">Chicken Chup</label>
              </li>
              <li>
                <input type="checkbox" id="drinks" className="mr-2" />
                <label htmlFor="drinks">Drinks</label>
              </li>
              <li>
                <input type="checkbox" id="pizza" className="mr-2" />
                <label htmlFor="pizza">Pizza</label>
              </li>
            </ul>
          </div>

          <div className="relative">
            <Image
              src="/bar.png"
              alt="Classic Restaurant"
              className="rounded-lg"
              width={256}
              height={256}
            />
            <div className="absolute top-0 left-0 p-4 text-white">
              <p className="text-sm font-semibold">Perfect Taste</p>
              <h2 className="text-xl font-bold">Classic Restaurant</h2>
              <p className="text-yellow-400 text-lg font-semibold mt-1">
                $45.00
              </p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-bold text-black mb-2 mt-8">
              Filter By Price
            </h3>
            <input type="range" min="10" max="50" className="w-full" />
          </div>
          <h2  className="text-2xl font-bold text-black mb-2 mt-8">Latest Products</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Image 
              src="/b.png"
              alt="Product 1"
              className="mr-10"
              width={55}
              height={40}
              />
              <p className="text-sm  "style={{marginRight:'1000PX'}}>Pizza</p>

            </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
              <Image 
              src="/b.png"
              alt="Product 1"
              className="mr-10"
              width={55}
              height={40}
              />
              <p className="text-sm  "style={{marginRight:'1000PX'}}>Pizza</p>

            </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
              <Image 
              src="/b.png"
              alt="Product 1"
              className="mr-10"
              width={55}
              height={40}
              />
              <p className="text-sm  "style={{marginRight:'1000PX'}}>Pizza</p>

            </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
              <Image 
              src="/b.png"
              alt="Product 1"
              className="mr-10"
              width={55}
              height={40}
              />
              <p className="text-sm  "style={{marginRight:'1000PX'}}>Pizza</p>

            </div>
             <div className="mb-6 ">
              <h2  className="text-2xl font-bold text-black mb-2 mt-8">Latest Products</h2>
            <br/>
            <div className="flex justify-between">
            <p className="text-medium gap-5 hover:text-[#FF9F0D]">Services</p>
            <p  className="text-medium gap-5 hover:text-[#FF9F0D] ">Cupcake   </p>
            <p  className="text-medium gap-5 hover:text-[#FF9F0D]">Our Shop  </p></div>
          
          <br/>
                      <div className="flex justify-between">

               <p className="text-medium gap-5 hover:text-[#FF9F0D]">Cupcake</p>
                <p className="text-medium gap-5 hover:text-[#FF9F0D]">Burger</p>
                 <p className="text-medium gap-5 hover:text-[#FF9F0D]">Cookies</p></div>
                <br/>
            <div className="flex justify-between">
            <p className="text-medium gap-5 hover:text-[#FF9F0D]">Our Shop</p>
            <p  className="text-medium gap-5 hover:text-[#FF9F0D] ">Tandoori  </p>
            <p  className="text-medium gap-5 hover:text-[#FF9F0D]">Chicken  </p></div>
          
          

            </div>
        </aside>
      </div>

      {/* Pagination */}
      <div className="flex justify-center py-4 mb-20 mt-10">
        <button className="px-4 py-2 mx-2 text-[#FF9F0D] rounded-lg">1</button>
        <button className="px-4 py-2 mx-2 text-[#FF9F0D] rounded-lg">2</button>
        <button className="px-4 py-2 mx-2 hover:bg-[#FF9F0D] hover:text-white transition text-[#FF9F0D] rounded-lg">
          3
        </button>
      </div>
    </div>
  );
};

export default Product;
