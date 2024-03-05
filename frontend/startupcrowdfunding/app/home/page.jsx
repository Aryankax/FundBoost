// Home.js

'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Home = () => {
  const [msg, setMsg] = useState('');
  const router = useRouter();

  const redirectStartupRegistration = () => {
    router.push('/startup-registration');
  };

  const redirectFoundersDashboard = () => {
    router.push('/dashboard');
  };

  const redirectInvestPage = () => {
    // You can replace 'invest' with the actual route for the investor page
    router.push('/invest');
  };

  const redirectToPortfolio = () => {
    // You can replace 'portfolio' with the actual route for the investor's portfolio page
    router.push('/portfolio');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('jwt');
        const response = await axios.get('http://localhost:4000/home', {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        });

        if (!response) {
          setMsg('Error fetching data. Please try again.');
        }

        setMsg(response.data.mssg);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-xl w-full animate__animated animate__fadeIn">
        {msg === 'Here is the home page for founder' && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-black">Welcome Founder</h2>
            <p className="text-lg mb-4 text-black">
              Congratulations on being part of FundBoost! We are excited to have you on board. FundBoost is your platform to connect with passionate investors and accelerate the growth of your startup.
            </p>
            <p className="text-lg mb-4 text-black">
              Explore the opportunities that FundBoost offers. List your startup, connect with investors, and join a community that shares your vision. The journey to success begins here!
            </p>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md" onClick={redirectStartupRegistration}>
                Register Your Startup
              </button>
              <button className="bg-green-500 text-white px-4 py-2 mt-4 ml-4 rounded-md" onClick={redirectFoundersDashboard}>
                Founder's Dashboard
              </button>
            </div>
          </>
        )}

        {msg === 'Here is the home page for investor' && (
          <>
            <h2 className="text-3xl font-bold mb-4 text-black">Welcome Investor</h2>
            <p className="text-lg mb-4 text-black">
              Explore investment opportunities on FundBoost! Connect with innovative startups and be part of their success story. Your journey in the world of investments begins here!
            </p>
            <div>
              <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md" onClick={redirectInvestPage}>
                Invest
              </button>
              <button className="bg-green-500 text-white px-4 py-2 mt-4 ml-4 rounded-md" onClick={redirectToPortfolio}>
                My Portfolio
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
