'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Donate = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Make an authenticated request to the server
        const token = localStorage.getItem('jwt');
        console.log(token);
        const response = await axios.get('http://localhost:4000/donate', {
          withCredentials: true, // Send cookies with the request
          headers: {
            Authorization: `${token}`, // Include the token in the headers
          },
        });

        console.log(response)

        setMessage(response.data.mssg);
      } catch (error) {
        // Handle errors, e.g., if the user is not authenticated
        console.error('Error fetching data:', error.response.data);
        setMessage('Error fetching data. Please try again.');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-700 flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md max-w-xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-black">Donate Page</h2>
        <p className='text-black'>{message}</p>
      </div>
    </div>
  );
};

export default Donate;
