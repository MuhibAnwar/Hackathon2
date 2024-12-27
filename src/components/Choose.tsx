import React from "react";
import Image from "next/image";

const Choose: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6">
        {/* Title Section */}
        <div className="text-center">
          <p id="choose" className="text-yellow-500 font-semibold text-lg">Food Category</p>
          <h2 className="text-4xl font-bold mt-2">Choose Food Items</h2>
        </div>

        {/* Food Images Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          {["choose.png", "choose2.png", "choose3.png", "choose4.png"].map((img, index) => (
            <div
              key={index}
              className="relative group rounded-lg shadow-lg overflow-hidden"
            >
              <Image
                src={`/images/${img}`}
                alt={`Food ${index + 1}`}
                className="w-full h-48 object-cover"
              />
            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
