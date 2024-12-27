import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        {/* Support Section */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#FF9F0D]">St</span>ill Need Our Support?
            </h2>
            <p className="text-gray-300 mb-4">
              Dont wait, make a smart & logical quote here. Its pretty easy.
            </p>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 text-right">
            <div className="flex flex-col md:flex-row md:items-baseline">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:w-auto p-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 mb-4 md:mb-0"
              />
              <button className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition md:ml-4">
                SEND
              </button>
            </div>
          </div>
        </div>

        <hr className="border-yellow-500 my-8" />

        {/* About Us and Links Section */}
        <div className="mt-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* About Us Text */}
            <div>
              <h3 className="text-lg font-bold mb-4">About Us</h3>
              <p className="text-gray-300">
                Corporate clients and leisure travelers have been relying on us
                for dependable, safe, and professional chauffeured car service
                in major cities across the world.
              </p>
            </div>

            {/* Useful Links */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold mb-2">Useful Links</h3>
              <ul className="text-gray-300 space-y-2">
                <li>About</li>
                <li>News</li>
                <li>Partners</li>
                <li>Team</li>
                <li>Menu</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Help Links */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold mb-2">Help</h3>
              <ul className="text-gray-300 space-y-2">
                <li>FAQ</li>
                <li>Terms and Conditions</li>
                <li>Reporting</li>
                <li>Documentation</li>
                <li>Support Policy</li>
                <li>Privacy</li>
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold mb-2">Recent Posts</h3>
              <ul className="text-gray-300 space-y-2">
                <li>123 Main Street, New York</li>
                <li>+1 123-456-7890</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
