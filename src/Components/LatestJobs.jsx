import React from 'react'
import LatestJobscard from './LatestJobscard'

const LatestJobs = () => {
  return (
    <div>
        <div className='max-w-7xl  mx-auto my-10'>
            <h1 className='text-4xl font-bold'>
                <span className='text-[#5624ac]'> Latest & Top   </span>
                Job Openings
            </h1>
            <LatestJobscard/>
        </div>
    </div>
  )
}

export default LatestJobs