'use client';
import React from "react";
import Navbar from "../components/nav";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen text-white overflow-hidden">
      {/* Navbar component */}
      <Navbar />

      {/* Hero section */}
      <div className="container mx-auto mt-16 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome to{' '}
          <span className="animate-pulse inline-block">
            FundBoost
          </span>{' '}
          by{' '}
          <span className="animate-pulse inline-block">
            Fund Frontiers
          </span>{' '}
          🚀
        </h1>
        <p className="text-lg leading-6">
          Empowering startups and connecting them with passionate investors.
        </p>
      </div>

      {/* Feature section */}
      <div className="container mx-auto mt-16 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">
          How Fund Boost Works
        </h2>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {/* Feature Card 1 */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-black">For Founders 🚀</h3>
            <p className="text-gray-700">
              List your startup on{' '}
              <span className="text-blue-500 font-bold">FundBoost</span> and
              receive support from a community of passionate investors without
              giving up equity.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-black">For Investors 💰</h3>
            <p className="text-gray-700">
              Discover exciting startups and contribute to their success by
              making donations. Be part of the journey without financial commitments.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-black">Building Together 🌐</h3>
            <p className="text-gray-700">
              <span className="text-blue-500 font-bold">FundBoost</span> is more
              than funding; it's a community where founders and investors
              collaborate to build innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
