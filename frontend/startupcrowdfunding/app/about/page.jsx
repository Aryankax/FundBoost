'use client'
// Import necessary modules and components
import React from "react";
import Navbar from "@/components/nav";

// AboutUs component
const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen text-white overflow-hidden">
      {/* Navbar component */}
      <Navbar />

      {/* About Us section */}
      <div className="container mx-auto mt-16 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          About{' '}
          <span className="animate-pulse inline-block">
            FundBoost
          </span>
        </h1>
        <p className="text-lg leading-6">
          FundBoost is a platform dedicated to empowering startup founders and connecting them with passionate investors. Our mission is to create a thriving community where innovative ideas are nurtured, and dreams are turned into reality. By fostering collaboration between founders and investors, we aim to build a future filled with groundbreaking solutions.
        </p>
      </div>

      {/* Team section */}
      <div className="container mx-auto mt-16 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">
          Meet Our Team
        </h2>

        {/* Team member cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-black">Aryan Kacker</h3>
            <p className="text-gray-700">
              Co-founder & CEO
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-black">Archisman Hes</h3>
            <p className="text-gray-700">
              Co-founder & CTO
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-black">Anjali Dubey</h3>
            <p className="text-gray-700">
              Head of Operations
            </p>
          </div>

          <div className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4 text-black">Kanev Seth</h3>
            <p className="text-gray-700">
              Head of Design and Development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
