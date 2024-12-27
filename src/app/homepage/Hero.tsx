import React from "react";
import Image from "next/image";

import Choose from "@/components/Choose";
import Chooseus from "@/components/Chooseus";


const Hero: React.FC = () => {
  return (
    <><section
      className="relative bg-cover bg-center h-[90vh]"
      style={{ backgroundImage: `url('/imagebg.png')` }} id="hero"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6">
        {/* Text Section */}
        <div className='text-white w-full md:w-[50%]'>
          <h1 id="quote" className='md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap font-italic'>
            Its Quick & Amusing!
          </h1>

          <div className="text-white max-w-lg">
            <h1 className="text-4xl md:text-6xl font-bold">
              The Art of Speed Food Quality
            </h1>
            <p className="mt-4 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
              pharetra dictum neque massa congue.
            </p>
            <button className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full">
              See Menu
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="relative mt-6 md:mt-0 flex items-center justify-center">
          {/* Dish Image */}
          <Image
            src="/dish.png"
            alt="Dish"
            className="relative z-10 w-64 md:w-72 lg:w-80 rounded-full border-4 border-white-200 shadow-lg" style={{ width: "500px", height: "500px" }} />
          {/* Leaves (Behind the Dish) */}
          <Image
            src="/leaves.png"
            alt="Leaves"
            className="absolute w-48 md:w-64 lg:w-72 -top-10 -right-12 z-0" />
        </div>
      </div>
    </section>
  
<Choose/>
<Chooseus/>

    </>
  );
};

export default Hero;
