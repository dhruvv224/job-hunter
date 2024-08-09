import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-white'>
      <div className='flex justify-between mx-auto max-w-7xl h-16'>
        <div>
          <h1 className='font-bold text-3xl'>Job<span className='text-red-600 font-sbold text-3xl'>Hunter</span></h1>
        </div>
      <div className=''>
        <ul className='flex font-medium items-center'>
          <li>Home</li>
          <li>Jobs</li>
          <li>Browse</li>
        </ul>

      </div>
      </div>
      
    </div>
  )
}

export default Navbar