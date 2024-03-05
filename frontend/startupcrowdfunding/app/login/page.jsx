'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const LoginOptions = () => {
  const router = useRouter();

  const redirectHome = () => {
    router.push('/');
  };

  return (
    <div className="bg-gradient-to-r from-green-500 to-blue-700 min-h-screen text-white relative">
      {/* Home Button */}
      <div className="absolute top-4 left-4">
        <button
          className="bg-slate-300 hover:bg-blue-300 text-black py-2 px-4 rounded-full shadow-2xl transition duration-300"
          onClick={redirectHome}
        >
          Home
        </button>
      </div>

      <div className="container mx-auto min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-6 text-white">
            Login Options
          </h1>
          <div className="flex justify-center">
            <div className="mr-4">
              <Link href="/login/investor">
                <div className="text-blue-300 hover:text-blue-200 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                  Investor's Login
                </div>
              </Link>
            </div>
            <div>
              <Link href="/login/founder">
                <div className="text-green-600 hover:text-green-400 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                  Founder's Login
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginOptions;
