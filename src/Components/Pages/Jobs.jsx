import React from 'react'
import Avatar from '../Assets/3d87e6f9321772e8f866a93bc251f941.png';
import { FaRegBookmark } from "react-icons/fa";

const Jobs = () => {
  return (
    <div>
      <p>2 Days ago</p>
      {/* <img src={Avatar} alt="" /> */}
      <button className='rounded-full'>
        <FaRegBookmark/>

      </button>
      <div className='avatar flex items-center gap-2 my-2'>
      <button className='p-3'>

    
     
        <img src={Avatar} className=''/>

  
      </button>
      </div>
      
    </div>
  )
}

export default Jobs