import React from 'react'

function Navbar({setToken}) {
  return (
   <nav className='w-full h-17 bg-blue-300 shadow-md sticky top-0 z-50'>
    <div className='max-w-7xl mx-auto flex items-center justify-between px-4 py-3'>
      <div className='flex items-center gap-2'>
        <div className='bg-white text-blue-500 font-bold text-xl px-4 py-2 rounded-full'>LOGO</div>
      </div>
      <div className='flex items-center gap-2'>
        <button onClick={()=> setToken('')} className=' text-white font-medium bg-gray-400 text-[18px] px-2 py-0.5 rounded shadow-sm shadow-gray-500  '>Logout</button>
      </div>
    </div>
   </nav>
  )
}

export default Navbar