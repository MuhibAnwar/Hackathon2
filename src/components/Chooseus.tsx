import React from "react";
import Image from "next/image";

const Choose: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Image Section */}
        <div className="grid grid-cols-2 gap-4 lg:w-1/2">
          {["w.png", "w1.png", "w2.png", "w3.png", "w4.png", "w5.png", "w6.png"].map(
            (img, index) => (
              <div key={index}>
                
                <Image
                  key={index}
                  src={`/images/${img}`}
                  alt={`Food ${index + 1}`}
                  className="rounded-lg shadow-lg"
                />
              </div>
            )
          )}
        </div>

        {/* Right Text Section */}
        <div className="lg:w-1/2">
          <p id="why" className="text-yellow-500 font-semibold text-lg">Why Choose Us</p>
          <h2 className="text-4xl font-bold mt-2">
            <span className="text-yellow-500">Ex</span>ta Ordinary Taste <br />{" "}
            And Experienced
          </h2>
          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Ultrices mattis sed vitae risus.
          </p>

          {/* Icons Grid */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            {[
              { icon: "🍔", label: "Fast Food" },
              { icon: "🍲", label: "Lunch" },
              { icon: "🍽️", label: "Dinner" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-gray-800 p-4 rounded-lg"
              >
                <div className="text-4xl">{item.icon}</div>
                <p className="mt-2 text-yellow-500 font-semibold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="flex items-center mt-8">
            <p className="text-4xl font-bold text-yellow-500">30+</p>
            <p className="ml-4 text-gray-300">
              Years of <br /> Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
