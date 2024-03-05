'use client'
import React, { useState } from "react";
import Navbar from "@/components/nav";
import axios from 'axios';

const ContactUs = () => {
  // State variables for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a post request to the backend with form data
      const response = await axios.post('http://localhost:4000/contact', {
        Name: name,
        Email: email,
        Message: message,
      });

      console.log(response.data);
      // Add any additional logic based on the response if needed

      // Clear the form after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-500 min-h-screen text-white overflow-hidden">
      {/* Navbar component */}
      <Navbar />

      {/* Contact Us section */}
      <div className="container mx-auto mt-16 text-center">
        <h1 className="text-4xl font-extrabold mb-4">
          Contact{' '}
          <span className="animate-pulse inline-block">
            FundBoost
          </span>
        </h1>
        <p className="text-lg leading-6">
          Have questions or feedback? Reach out to us! We're here to assist you.
        </p>
      </div>

      {/* Contact Form section */}
      <div className="container mx-auto mt-16 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-8">
          Get in Touch
        </h2>

        {/* Contact Form */}
        <form className="bg-white p-8 rounded-md shadow-md max-w-md w-full" onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="name">
              Your Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="email">
              Your Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          {/* Message */}
          <div className="mb-4">
            <label className="block text-blue-500 text-sm font-bold mb-2" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="4"
              placeholder="Type your message here"
              value={message}
              onChange={handleMessageChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
