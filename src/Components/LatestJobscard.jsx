import React from 'react'

const LatestJobscard = () => {
  return (
    <div className=''>
      <div>
        <h1>
          Company Name
        </h1>
        <p>India</p>
      </div>
      <div className='flex items-center gap-2 mt-2'>
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
    </div>
  )
}

export default LatestJobscard