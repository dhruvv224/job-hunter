import React, { useState } from 'react';
import { IoIosEye,IoIosEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';
const SignUpForm = () => {
  const [password,setPassword]=useState(false)
  const togglePassword=()=>{
    setPassword(!password)
  }
  const [confirmPass,setConfirmpass]=useState(false)
  const togglePassword2=()=>{
    setConfirmpass(!confirmPass)
  }
  const [signupData,setSignupdata]=useState({
    
  })
  return (
    <div className='flex items-center justify-center max-w-7xl mx-auto'>
      <form action='' className='w-1/2 border border-gray-200 rounded-md p-6 my-10'>
        <h1 className='font-semibold text-2xl mb-4'>Sign Up</h1>
        
        <div className='my-4'>
          <label className='block mb-2 font-medium'>Full Name</label>
          <input 
            type='text' 
            className='border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-red-400 duration-150 text-gray-700' 
            placeholder='Enter full name'
          />
        </div>
        
        <div className='my-4'>
          <label className='block mb-2 font-medium'>Email</label>
          <input 
            type='email' 
            className='border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-red-400 duration-150 text-gray-700' 
            placeholder='Enter email'
          />
        </div>
        
        <div className='my-4'>
          <label className='block mb-2 font-medium'>Phone Number</label>
          <input 
            type='tel' 
            className='border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-red-400 duration-150 text-gray-700' 
            placeholder='Enter phone number'
          />
        </div>
        
        <div className='my-4 relative'>
          <label className='block mb-2 font-medium'>Enter Password</label>
          <input 
            type={password ?'text':'password'} 
            className='border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-red-400 duration-150 text-gray-700' 
            placeholder='Enter password'
          />
           <button onClick={togglePassword}      type='button'       className='absolute right-2 top-1/2 transform  bottom-2 text-gray-700 cursor-pointer'
          >         {
            password ? <IoIosEyeOff size={20}/>
            :<IoIosEye size={20}/>
          }
          </button>
        </div>
        
        <div className='my-4 relative'>
          <label className='block mb-2 font-medium'>Re-enter Password</label>
          <input 
            type={confirmPass ?'text':'password'}  
            className='border border-gray-300 rounded-md w-full p-2 focus:outline-none focus:border-red-400 duration-150 text-gray-700' 
            placeholder='Re-enter password'
          />
          <button      onClick={togglePassword2}       className='absolute right-2 top-1/2 transform  bottom-2 text-gray-700 cursor-pointer' type='button'
          >           {
            confirmPass ? <IoIosEyeOff size={20}/>
            :<IoIosEye size={20}/>
          }
          </button>

        </div>
        
        <div className='my-4'>
          <label className='block font-medium mb-2'>Role</label>
          <div className='flex items-center'>
            <input type='radio' id='applicant' name='role' className='mr-2' />
            <label htmlFor='applicant' className='mr-6'>Applicant</label>

            <input type='radio' id='recruiter' name='role' className='mr-2' />
            <label htmlFor='recruiter'>Recruiter</label>
          </div>
        </div>
        
        <button 
          type='button' 
          className='bg-[#5120a7] text-white p-3 rounded-lg w-full hover:bg-[#3e1785] transition-colors duration-150'
        >
          Sign Up
        </button>
        <div className='my-2'>
            <p className='text-l font-medium'>Already have an account <Link to={'/login'} className='text-[#3e1785]'>Login</Link></p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
