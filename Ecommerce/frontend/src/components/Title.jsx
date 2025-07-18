import React from 'react'

function Title({text1, text2}) {
  return (
    <div className='flex flex-row items-center'>
      <h1 className='md:text-3xl font-light text-gray-400'>{text1}</h1>
      <h1 className=' md:text-3xl font-medium text-gray-900 ml-2'>{text2}</h1>
      <div className='h-0.5 md:w-18 bg-black ml-2'></div>
    </div>
  )
}

export default Title