'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [showResponse, setResponse] = useState('');

  const redirectLogin = (e) => {
    router.push('/login')
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/signup', {
        username,
        email,
        password,
      });

      // Redirect after successful login
      if (response.status === 201) {
        const token = response.data.token;

        // Save the token to local storage
        localStorage.setItem('jwt', token);
  
        // Redirect to another page or perform other actions
        router.push('/login');
        console.log('Token saved to local storage:', token);
      } else if (response.status === 400) {
        setResponse('User Already exists');
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
      <form
        className='bg-white p-8 rounded-md shadow-md max-w-md w-full'
        onSubmit={handleSubmit}
      >
        <label htmlFor='username' className='block text-gray-700 font-semibold'>
          Username:
        </label>
        <input
          type='text'
          id='username'
          className='w-full mt-2 p-2 border rounded-md text-black'
          onChange={handleSignUp}
          value={username}
          required
        />
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

        <button onClick={redirectLogin} className='text-blue-600'>User already exists?</button>

        <button
          type='submit'
          className='w-full mt-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600'
        >
          Sign-up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
