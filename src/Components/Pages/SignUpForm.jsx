import React from 'react'

const SignUpForm = () => {
  return (
    <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form action='' className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
            <h1 className='font-semibold text-xl'>Sign Up</h1>
            <div className='my-2'>
            Full Name

            <div>

              <input type='text' className='border border-gray-200 rounded-md ml-2 w-[400px] p-1 focus:border  focus:border-red-400 duration-150 text-gray-500'/> 

            </div>     
            Email

<div>

  <input type='text' className='border border-gray-200 rounded-md ml-2 w-[400px] p-1 focus:border  focus:border-red-400 duration-150 text-gray-500' placeholder='Enter email'/> 
  
</div>  
Phone number

<div>

  <input type='text' className='border border-gray-200 rounded-md ml-2 w-[400px] p-1 focus:border  focus:border-red-400 duration-150 text-gray-500' placeholder='Enter phone number'/> 
  
</div>  
Enter password

<div>

  <input type='text' className='border border-gray-200 rounded-md ml-2 w-[400px] p-1 focus:border  focus:border-red-400 duration-150 text-gray-500' placeholder='Enter password'/> 
  
</div>   
Re-enter password

<div>

  <input type='text' className='border border-gray-200 rounded-md ml-2 w-[400px] p-1 focus:border  focus:border-red-400 duration-150 text-gray-500' placeholder='Enter password'/> 
  
</div>   

            </div>
            Applicant
            <input type='radio' />
        </form>
    </div>
  )
}

export default SignUpForm