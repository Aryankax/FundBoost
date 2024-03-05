// Investor.js

'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Investor = () => {
  const [startups, setStartups] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make a query to MongoDB to fetch all registered startups
        const response = await axios.get('http://localhost:4000/fetchStartups');

        if (response.data.startups) {
          setStartups(response.data.startups);
        }
      } catch (error) {
        console.error('Error fetching startups:', error);
      }
    };

    fetchData();
  }, []);

  const handleDonateClick = (startupId) => {
    // Implement logic to handle donation for the specific startup
    console.log(`Donating to startup with ID: ${startupId}`);
  };

  const handleHomeClick = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white relative">
      {/* Navigation */}
      <div className="absolute top-4 left-3 z-50">
        <button
          className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
          onClick={handleHomeClick}
        >
          Home
        </button>
      </div>

      {/* Header Section */}
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-8">Welcome to Your Investor's Dashboard 💰</h1>
        <p className="text-lg mb-8">
          Discover and support innovative startups. Your investments make a difference!
        </p>
      </div>

      {/* Startup Cards */}
      <div className="container mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {startups.map((startup) => (
          <div
            key={startup._id}
            className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-black flex flex-col justify-between"
          >
            <div>
              <span className="text-2xl mb-4">{startup.emoji}</span>
              <h2 className="text-xl font-semibold mb-2">{startup.StartupName}</h2>
              <p>{`Founded: ${new Date(startup.startDate).toLocaleDateString()}`}</p>
              <p>{`Funding Goal: ${startup.FundingGoal}`}</p>
            </div>

            {/* Additional details or actions related to each startup */}
            <button
              className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-yellow-600 transition duration-300"
              onClick={() => handleDonateClick(startup._id)}
            >
              Invest Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investor;
