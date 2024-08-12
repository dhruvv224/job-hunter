import React from 'react'

const SignUpForm = () => {
  return (
    <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form action='' className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
            <h1 className='font-semibold text-xl'>Sign Up</h1>
            <div className='my-2'>
                Full Name
            <div>
              <input type='text' className='border border-gray-200 rounded-md'/> 
            </div>                
            </div>
        </form>
    </div>
  )
}

export default SignUpForm