import React, { useState } from 'react';
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Herosection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchQuery = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/jobs?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="text-center px-4 py-8">
      {/* Title Section */}
      <h2 className="font-semibold px-4 py-2 rounded-full bg-gray-100 text-[#f83002] inline-block">
        No 1! Job Site
      </h2>
      <h1 className="md:text-5xl text-4xl py-4 font-bold leading-tight">
        Search, Apply & <br /> 
        <span>Get your dream <span className="text-[#3e1775]">Job</span></span>
      </h1>
      <p className="text-gray-600 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio quia, sunt architecto natus dolor, veritatis cupiditate quasi ipsam blanditiis facilis s.
      </p>

      {/* Search Bar Section */}
      <div className="flex w-full md:w-[40%] shadow-lg border border-gray-200 rounded-full items-center mx-auto my-6">
        <input 
          type="text" 
          placeholder="Find your dream job" 
          className="border-none outline-none w-full rounded-l-full p-4 h-full"
          value={searchQuery}
          onChange={handleSearchQuery}
        />
        <button 
          className="bg-[#6A38C2] md:p-4 p-3 rounded-r-full h-full flex items-center justify-center" 
          onClick={handleSearch}
        >
          <GoSearch className="h-5 md:w-5 w-4 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Herosection;
