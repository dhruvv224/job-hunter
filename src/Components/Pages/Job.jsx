import React from 'react';
import Avatar from '../Assets/3d87e6f9321772e8f866a93bc251f941.png';
import { FaRegBookmark } from "react-icons/fa";

const Job = () => {

  return (
    <div className="p-4 border rounded-md shadow-md max-w-md mx-auto border-gray-100 bg-white">
      {/* Job post 
      timing */}

      <div className='flex justify-between items-center'>
      <p className="text-gray-500">2 Days ago</p>
          {/* Bookmark button */}
          <button className="rounded-full p-2 border border-gray-300 hover:bg-gray-200">
        <FaRegBookmark className="text-xl" />
      </button>
      </div>
      {/* Avatar 
      section */}
      <div className="avatar flex items-center gap-3 my-4">
        <button className="p-1 rounded-xl border">
          <img src={Avatar} alt="Company Logo" className="w-12 h-12 rounded-md" />
        </button>
        <div>
        <h1 className="text-xl font-semibold">
          Company Name
        </h1>
        <p className="text-gray-700">India</p>
      </div>
      </div>
      {/* Company details */}

      <div>
        <h1 className='font-bold text-lg my-1'>Title</h1>
        <span className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolore maiores odit maxime vel quidem obcaecati, illum odio expedita, voluptas assumenda.</span>
      </div>
      <div className='flex items-center gap-2 mt-4'>
      <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
        12 Positions
      </span> 
      <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
        Full Time
      </span>
      <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
        12 LPA
      </span>   
      </div>
      <div className=' flex items-center gap-4 mt-3'>
        <button  className='p-3 border border-gray-200 text-black rounded-lg hover:bg-gray-100 duration-150 shadow-md'>Details</button>
        <button className='p-3 bg-purple-700 text-white hover:bg-purple-800 duration-150 rounded-lg shadow-md'>Save For Later</button>
      </div>
    </div>
  );
}

export default Job;
