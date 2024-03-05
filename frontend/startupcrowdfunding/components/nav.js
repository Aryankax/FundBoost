'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('home');
  const router = useRouter();

  useEffect(() => {
    // Set active item based on the current route
    const currentRoute = router.pathname;
    switch (currentRoute) {
      case '/':
        setActiveItem('home');
        break;
      case '/about':
        setActiveItem('about');
        break;
      case '/contact':
        setActiveItem('contact');
        break;
      case '/login':
        setActiveItem('login');
        break;
      default:
        setActiveItem('home');
    }
  }, [router.pathname]);

  const handleItemClick = (item, path) => {
    setActiveItem(item);
    router.push(path);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4">
      <ul className="flex justify-between items-center">
        <li className={`mr-6 ${activeItem === 'home' ? 'border-b-2 border-white' : ''} hover:scale-110 transform transition duration-300`}>
          <button onClick={() => handleItemClick('home', '/')} className="text-white font-bold">
            Home
          </button>
        </li>
        <li className={`mr-6 ${activeItem === 'about' ? 'border-b-2 border-white' : ''} hover:scale-110 transform transition duration-300`}>
          <button onClick={() => handleItemClick('about', '/about')} className="text-white font-bold">
            About
          </button>
        </li>
        <li className={`mr-auto ${activeItem === 'contact' ? 'border-b-2 border-white' : ''} hover:scale-110 transform transition duration-300`}>
          <button onClick={() => handleItemClick('contact', '/contact')} className="text-white font-bold">
            Contact
          </button>
        </li>
        <li className={`ml-auto ${activeItem === 'login' ? 'border-b-2 border-white' : ''} hover:scale-110 transform transition duration-300`}>
          <button onClick={() => handleItemClick('login', '/login')} className="text-white bg-indigo-600 py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-300">
            Join Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
