'use client'
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/nav';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const FounderDashboard = () => {
  const [startups, setStartups] = useState([]);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://localhost:4000/fetchStartupsbyId', {
          headers: {
            Authorization: `${token}`,
          },
        });

        if (response.data.startups) {
          setStartups(response.data.startups);
        }
      } catch (error) {
        console.error('Error fetching startups:', error);
      }
    };

    fetchData();
  }, []);

  const handleRegisterMoreStartups = () => {
    router.push('/startup-registration');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen text-white overflow-hidden">
      {/* Founder's Dashboard */}
      <div className="container mx-auto mt-16 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Welcome Founder! 🚀
        </h1>
        <p className="text-lg mb-8">
          Explore and manage your startups. Register more startups to expand your entrepreneurial journey.
        </p>
      </div>

      {/* Home and Register More Startups Buttons */}
      <div className="container mx-auto mt-4 text-center">
        {/* Use the useRouter hook to handle redirection */}
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4"
          onClick={handleGoHome}
        >
          Home
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={handleRegisterMoreStartups}
        >
          Register More Startups
        </button>
      </div>

      {/* Startup Cards */}
      <div className="container mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
        {startups.map((startup) => (
          <div
            key={startup._id}
            className="bg-white p-6 rounded-md shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 text-black"
          >
            <span className="text-2xl mb-4">{startup.emoji}</span>
            <h2 className="text-xl font-semibold mb-2">{startup.StartupName}</h2>
            <p>{`Founded: ${new Date(startup.startDate).toLocaleDateString()}`}</p>
            <p>{`Funding Goal: ${startup.FundingGoal}`}</p>
            {/* Add more details or actions related to each startup as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default FounderDashboard;
