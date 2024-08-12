import React, { useState } from 'react'
import { IoIosEye,IoIosEyeOff } from 'react-icons/io'
import { Link } from 'react-router-dom'
export  const Login = () => {
    const [password,setPassword]=useState(false)
    const togglePassword=()=>{
        setPassword(!password)
    }
    const [LoginData,setLoginData]=useState({
        email:"",
        password:""
    })
    const[email,setEmail]=useState('')
    

  return (
    <>
    <div className='flex items-center justify-center max-w-7xl mx-auto'>
            <form className='w-1/2 border border-gray-200 rounded-md p-6 my-10'>
<h1 className='text-xl font-semibold mb-2'>Login</h1>
<div className='my-2'>
                <label className='block mb-2 font-medium'>Email</label>
                <input type='text' placeholder='Enter Email' className='p-2 rounded-md border border-gray-200 w-full focus:outline-none focus:border-red-300 duration-150 text-gray-700' value={email} onChange={handleChangeEmail}/>

            </div>
            <div className='my-2 relative'>
                <label className='block mb-2 font-medium'>Password</label>
                <input type={password?'text':'password'} placeholder='Enter Email' className='p-2 rounded-md border border-gray-200 w-full focus:outline-none focus:border-red-300 duration-150 text-gray-700' value={password} onChange={handlechangePass}/>
                <button type='button' className='absolute top-1/2 right-2 bottom-2' onClick={togglePassword}>
                    {
                        password?
                        <IoIosEyeOff size={20}/>
                        :
                        <IoIosEye size={20}/>
                    }
                </button>
            </div>
            <div className='my-2'>
            <label className='block font-medium mb-2'>Role</label>
          <div className='flex items-center'>
            <input type='radio' id='applicant' name='role' className='mr-2' />
            <label htmlFor='applicant' className='mr-6'>Applicant</label>

            <input type='radio' id='recruiter' name='role' className='mr-2' />
            <label htmlFor='recruiter'>Recruiter</label>
          </div>

            </div>
            
<button type='button'           className='bg-[#5120a7] text-white p-3 rounded-lg w-full hover:bg-[#3e1785] transition-colors duration-150'>Login</button>
<div className='my-2'>
            <p className='text-l font-medium'>Dont have an account <Link to={'/signup'} className='text-[#3e1785]'>Signup</Link></p>
        </div>
            </form>
    
        </div>
        
    </>
 )
}

