import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='bg-white shadow-md'>
      <div className='flex justify-between items-center mx-auto max-w-7xl h-16 px-6'>
        <div>
          <h1 className='font-bold text-3xl'>
            Job
            <span className='text-red-600 font-semibold'>Hunter</span>
          </h1>
        </div>
        <div>
          <ul className='flex font-medium items-center gap-6'>
            <li className='hover:text-red-600 transition-colors duration-300 cursor-pointer'>Home</li>
            <li className='hover:text-red-600 transition-colors duration-300 cursor-pointer'>Jobs</li>
            <li className='hover:text-red-600 transition-colors duration-300 cursor-pointer'>Browse</li>
          </ul>
        </div>
        <div className='hidden md:flex items-center gap-4'>
          <button className='bg-white-600 text-black border-gray-200 border-[1px] font-semibold px-4 py-2 rounded-md transition-colors duration-300'>
            Login
            <Link to='/login'>
            </Link>
          </button>
          <button className=' bg-[#6A38C2]  text-white font-semibold px-4 py-2 rounded-md hover:bg-[#5f2db4] hover:text-white transition-colors duration-300'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
