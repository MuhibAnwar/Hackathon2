import React from "react";
import Hero from "./Hero";

export default function Signin() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Hero Section */}
      <Hero />

      {/* Sign-In Form Section */}
      <div
        id="signin2"
        className="flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-md"
      >
        <h2 id="signup2" className="text-2xl font-bold mb-6">
          Sign Up
        </h2>
        <form className="w-full max-w-sm">
        <div id="div22" className="mb-4">
            <label
              id="label1"
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
            
            </label>
            <input
              id="div3"
              type="email"
              placeholder="Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            </div>
          <div id="div22" className="mb-4">
            <label
              id="label1"
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              
            </label>
            <input
              id="div3"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div id="div22" className="mb-4">
            <label
              id="label1"
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              
            </label>
            <input
              id="div3"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div
            id="rememberMe2"
            className="flex items-center gap-2 mb-6"
          >
            <input
              type="checkbox"
              id="rememberMeCheckbox"
              className="h-4 w-4 text-yellow-500 border-gray-300 rounded"
            />
            <label
              htmlFor="rememberMeCheckbox"
              className="text-sm text-gray-700"
            >
              Remember me?
            </label>
          </div>
          <button
            id="submit1"
            type="submit"
            className="w-full py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
