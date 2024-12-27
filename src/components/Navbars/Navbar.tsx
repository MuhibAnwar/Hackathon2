import React from "react";

export const Navbar = () => {
  return (
    <header id="navbar" className="bg-black py-4">
      {/* Navbar Container */}
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div id="logo" className="text-2xl font-bold text-white">
          Food <span className="text-[#FF9F0D]">tuck</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 text-white">
          <a href="#home" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#Ourchefs" className="hover:text-yellow-500">
            Menu
          </a>
          <a href="#Blog" className="hover:text-yellow-500">
            Blog
          </a>
          <a href="#shop" className="hover:text-yellow-500">
            Pages
          </a>
          <a href="#About" className="hover:text-yellow-500">
            About
          </a>
          <a href="#Shop" className="hover:text-yellow-500">
            Shop
          </a>
          <a href="#signup" className="hover:text-yellow-500">
            Contact
          </a>
        </nav>

        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="px-4 py-2 rounded-full bg-black border border-yellow-500 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <span className="absolute top-2.5 right-3 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 17a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
              />
            </svg>
          </span>
        </div>
      </div>
    </header>
  );
};
