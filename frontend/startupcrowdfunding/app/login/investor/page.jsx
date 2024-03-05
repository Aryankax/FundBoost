'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [showResponse, setResponse] = useState('');

  const redirectSignup = (e) => {
    router.push('/signup/investor');
  }

  const redirectHome = (e) => {
    router.push('/');
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/investor-login', {
        email,
        password,
      });

      // Redirect after successful login
      if (response.status === 200) {
        const token = response.data.token;

        // Save the token to local storage
        localStorage.setItem('jwt', token);
  
        // Redirect to another page or perform other actions
        router.push('/home');
        console.log('Token saved to local storage:', token);
      } else if (response.status === 401) {
        setResponse('Invalid Credentials');
      } else {
        // Handle other status codes if needed
      }
    } catch (error) {
      console.error('Error during login: ', error.response.data);
      // Handle login failure (show error messages, etc.)
      setResponse('Error during login. Please try again.'); // You can customize this error message
    }
  };

  return (
    <div className='min-h-screen bg-slate-700 flex items-center justify-center'>
    <div className='absolute top-0 left-0 p-3'>
    <button className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-2xl' onClick={redirectHome}>
    Home
    </button>
    </div>
      <form
        className='bg-white p-8 rounded-md shadow-md max-w-md w-full'
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-500 hover:text-blue-700 transition duration-300">
          Investor Login
        </h1>

        <label htmlFor='email' className='block text-gray-700 font-semibold'>
          Email:
        </label>
        <input
          type='email'
          id='email'
          className='w-full mt-2 p-2 border rounded-md text-black'
          onChange={handleEmailChange}
          value={email}
          required
        />

        <label htmlFor='password' className='block mt-4 text-gray-700 font-semibold'>
          Password:
        </label>
        <input
          type='password'
          id='password'
          className='w-full mt-2 p-2 border rounded-md text-black'
          onChange={handlePasswordChange}
          value={password}
          required
        />

        <p className='text-red-500 mt-2'>{showResponse}</p>

        <button onClick={redirectSignup} className='text-blue-600'>Create a new user</button>

        <button
          type='submit'
          className='w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
