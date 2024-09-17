import React from 'react';
import Avatar from './Assets/3d87e6f9321772e8f866a93bc251f941.png';
import { FaRegBookmark } from "react-icons/fa";
import FilterCard from './FilterCard';
import Job from './Pages/Job';

const Jobs = () => {
  const jobs = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className='max-w-7xl mx-auto mt-5'>
      <div className='flex gap-5'>
        {/* Filter section */}
        <div className='w-1/5'>
          <FilterCard />
        </div>

        {/* Jobs section */}
        <div className='flex-1 h-[88vh] w-full  pb-5'>
          {jobs.length <= 0 ? (
            <span>Jobs Not Found</span>
          ) : (
            <div className='grid grid-cols-3 gap-4'>
              {jobs.map((item, index) => (
                <div key={index}>
                  <Job />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
