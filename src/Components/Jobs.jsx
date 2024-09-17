import React from 'react';
import Avatar from './Assets/3d87e6f9321772e8f866a93bc251f941.png';
import { FaRegBookmark } from "react-icons/fa";
import FilterCard from './FilterCard';
import Job from './Pages/Job';
const Jobs = () => {
  const jobs=[1,2,3,4,5,6,7,8]
  return (
   <div>
    <div className='max-w-7xl mx-auto mt-5'>
      <div className='flex gap-5'>
        <div className='w-20%'>
        <FilterCard/>

        </div>
{
  jobs.map((item,index)=>(
    <Job/>
  ))
}

      </div>

    </div>
   </div>
  );
}

export default Jobs;
