import React from 'react'
import { RiExchangeFundsFill } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

function Policy() {
  return (
    <div className='w-full flex flex-row  flex-wrap md:gap-5 items-center justify-evenly md:mt-12 '>
      <div className='w-40 md:w-70 h-30 md:h-50 flex flex-col items-center justify-center bg-white rounded-md hover:shadow-md transition duration-300 '>
       <div><RiExchangeFundsFill className='text-[20px] lg:text-5xl md:text-4xl'/></div>
       <p className='text-[9px] md:text-xs lg:text-sm font-bold'>Easy Exchange Policy</p>
       <p className='text-[7px] md:text-xs lg:text-sm text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className='w-40 md:w-70 h-30 md:h-50 flex flex-col items-center justify-center bg-white rounded-md hover:shadow-md transition duration-300 '>
       <div><MdOutlineVerified  className='text-[20px] lg:text-5xl md:text-4xl'/></div>
       <p className='text-[9px] md:text-xs lg:text-sm font-bold'>7 Days Return Policy</p>
       <p className='text-[7px] md:text-xs lg:text-sm text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className='w-40 md:w-70 h-30 md:h-50 flex flex-col items-center justify-center bg-white rounded-md  hover:shadow-md transition duration-300 '>
       <div><BiSupport  className=' text-[20px] lg:text-5xl md:text-4xl'/></div>
       <p className='text-[9px] md:text-xs lg:text-sm font-bold'>Best Customer Support</p>
       <p className='text-[7px] md:text-xs lg:text-sm text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
    </div>
  )
}

export default Policy