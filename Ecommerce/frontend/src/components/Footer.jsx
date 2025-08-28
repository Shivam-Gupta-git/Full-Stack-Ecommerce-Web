import React from 'react'

function Footer() {
  return (
    <div className='w-full flex flex-row justify-center mt-15 bg-gray-200 '>
      <div className='w-[92%] flex flex-row justify-between'>
      <div className='w-60 md:w-70 h-50 md:h-50 flex flex-col gap-5 p-2'>
      <p className=" text-blue-500 font-bold text-[9px] md:text-xs lg:text-sm rounded-full">LOGO</p>
      <p className='text-[7px] md:text-xs lg:text-sm text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni delectus laboriosam vero iste exercitationem deserunt magnam autem consectetur molestias, alias accusantium laborum. Excepturi delectus suscipit ullam dolores quia a sequi.</p>
      </div>
      <div className='w-60 md:w-70 h-40 md:h-50 flex flex-col gap-5 p-2 ml-10'>
        <p className='text-[9px] md:text-xs lg:text-sm font-bold'>COMPANY</p>
        <ul className='text-[7px] md:text-xs lg:text-sm flex flex-col gap-2'>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>FEEDBACK</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className='w-60 md:w-70 h-40 md:h-50 flex flex-col p-2'>
      <p className='text-[9px] md:text-xs lg:text-sm font-bold'>GET IN TOUCH</p>
      <p className='text-[7px] md:text-xs lg:text-sm mt-5'>+9122393456</p>
      <p className='text-[7px] md:text-xs lg:text-sm' >getcoustomertouch.com</p>
      </div>
      </div>
    </div>
  )
}

export default Footer