'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import { useEffect} from 'react';
import { useRouter } from 'next/navigation';

// StartupRegistration component
const StartupRegistration = () => {
  const router = useRouter();
  // State variables to store form input values
  const [startupName, setStartupName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [fundingGoal, setFundingGoal] = useState('');
  const [description, setDescription] = useState('');
  const [currentFunding, setCurrentFunding] = useState('');
  const [userId, setUserId] = useState('');
  const [apiResponse, setApiRes] = useState('');


  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('jwt');
        console.log(token);
        const response = await axios.get('http://localhost:4000/decodeToken', {
          withCredentials: true,
          headers: {
            Authorization: `${token}`,
          },
        });
        console.log(response);

        setUserId(response.data.msg);

        // console.log(userId)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const formData = {
      userId,
      StartupName: startupName,
      startDate: startDate,
      endDate: endDate,
      CompanyName: companyName,
      FundingGoal: fundingGoal,
      Description: description,
      CurrentFunding: currentFunding,
    };

    try {
      // Send a POST request to localhost:4000/startup-registration
      const response = await axios.post('http://localhost:4000/startup-registration', formData);

      console.log(response);

      // Handle the response
      if (response.status === 201) {
        console.log('Startup registered successfully!');
        router.push('/dashboard');
        // Redirect or perform any other action upon successful registration
      } else {
        console.error('Error registering startup:', response.data.error);
        // Handle error, display message, etc.
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen text-white overflow-hidden">
      <Head>
        <title>Fundboost - Startup Registration</title>
      </Head>
      <div className="container mx-auto mt-16 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Register your startup on{' '}
          <span className="animate-pulse inline-block">
            FundBoost
          </span>{' '}
          🚀
        </h1>
        <p className="text-lg leading-6">
          Connect with passionate investors and get support for your startup journey.
        </p>
      </div>

      <div className="container mx-auto mt-16 flex flex-col items-center">
        <form className="bg-white p-8 rounded-md shadow-md max-w-md w-full" onSubmit={handleSubmit}>
          {/* Startup Name */}
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="startupName">
              Startup Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startupName"
              type="text"
              placeholder="Enter your startup name"
              value={startupName}
              onChange={(e) => setStartupName(e.target.value)}
            />
          </div>

          {/* Start Date */}
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="startDate">
              Start Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startDate"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          {/* End Date */}
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="endDate">
              End Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="endDate"
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>

          {/* Company Name */}
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="companyName">
              Company Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="companyName"
              type="text"
              placeholder="Enter your company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>

          {/* Funding Goal */}
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="fundingGoal">
              Funding Goal
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fundingGoal"
              type="text"
              placeholder="Enter your funding goal"
              value={fundingGoal}
              onChange={(e) => setFundingGoal(e.target.value)}
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              rows="4"
              placeholder="Enter a brief description of your startup"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Current Funding */}
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="currentFunding">
              Current Funding
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="currentFunding"
              type="text"
              placeholder="Enter your current funding"
              value={currentFunding}
              onChange={(e) => setCurrentFunding(e.target.value)}
            />
          </div>

          {/* Additional Inputs can be added as needed */}

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartupRegistration;
