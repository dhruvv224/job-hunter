import React from 'react'
import LatestJobscard from './LatestJobscard'

const LatestJobs = () => {
  const randomJobs=[1,2,3,4,5,6,7,8]

  return (
    <div>
        <div className='max-w-7xl  mx-auto my-10'>
            <h1 className='text-4xl font-bold'>
                <span className='text-[#5624ac]'> Latest & Top   </span>
                Job Openings
            </h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
{
  randomJobs.map((item,index)=>(
    <LatestJobscard/>

  ))
}

            </div>
        </div>
    </div>
  )
}

export default LatestJobs