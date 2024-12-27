import React from "react";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", title: "Chef", imgSrc: "ch1.png" },
  { name: "Jorina Begum", title: "Chef", imgSrc: "ch2.png" },
  { name: "M. Mohammad", title: "Chef", imgSrc: "ch3.png" },
  { name: "Munna Kathy", title: "Chef", imgSrc: "ch4.png" },
  { name: "Tahmina Rumi", title: "Chef", imgSrc: "ch5.png" },
  { name: "Bisnu devgon", title: "Chef", imgSrc: "ch6.png" },
  { name: "Motin Molladsf", title: "Chef", imgSrc: "ch7.png" },
  { name: "William Rumi", title: "Chef", imgSrc: "ch8.png" },
  { name: "Kets william roy", title: "Chef", imgSrc: "ch9.png" },
  { name: "Mahmud kholil", title: "Chef", imgSrc: "ch10.png" },
  { name: "Ataur Rahman", title: "Chef", imgSrc: "ch11.png" },
  { name: "Monalisa holly", title: "Chef", imgSrc: "ch12.png" },
];

const ChefGallery = () => {
  return (
    <div className="bg-gray-100 py-8">
      
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4"id="chef">
        {chefs.map((chef, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={chef.imgSrc}
              alt={chef.name}
              className="w-full h-48 object-cover"id="chefimg"
            />
            <div className="p-4 text-center"id="chefl">
              <h2 className="text-lg font-bold">{chef.name}</h2>
              <p className="text-gray-500">{chef.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGallery;
