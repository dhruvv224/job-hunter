import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";

const Herosection = () => {
    const [searchQuery,setSearchQuery]=useState('')
    const handleSearchquery=(event)=>{
        const value=event.target.value
        setSearchQuery(value)

    }
    
  return (
    <div className='text-center'>
        <h2 className='font-semibold px-4 py-2 rounded-full  bg-gray-100 text-[#f83002]'>No 1 ! job site</h2>
        <h1 className='text-5xl py-2 font-bold'>Search,Apply & <br/> <span className=''>Get your dream <span className='text-[#3e1775]'>Job</span></span></h1>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio quia, sunt architecto natus dolor, veritatis cupiditate quasi ipsam blanditiis facilis s</p>
        <div className="md:flex w-[40%] shadow-lg border border-gray-200 rounded-full items-center mx-auto">
  <input 
    type="text" 
    placeholder="Find your dream job" 
    className="border-none outline-none w-full rounded-l-full p-4 h-full"
    value={searchQuery}
    onChange={handleSearchquery}
  />
  <button className="bg-[#6A38C2] p-4 rounded-r-full h-full flex items-center justify-center">
    <GoSearch className="h-5 w-5 text-white" />
  </button>
</div>


    </div>
  )
}

export default Herosection;