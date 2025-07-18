import React, { useState } from 'react'

function Subscribe() {
  const[subscribedInput, setSubscribedInput] = useState('')
  
  const handelSubscriberInput = (event)=>{
   setSubscribedInput(event.target.value)
  }
  const handelSubscribedEmail = (event)=>{
    event.preventDefault()
    
  }
  return (
    <div className='w-full  flex flex-col items-center justify-center md:mt-10 gap-2  mb-3'>
      <p className='md:text-2xl'>Subscribe now & get 10% off</p>
      <p className='sm:text-sm text-xs text-gray-400 w-[90%] text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis minus nemo iure quisquam nisi quis tenetur nostrum obcaecati illum libero.</p>
      <form onSubmit={handelSubscribedEmail}> 
        <input type="text" name='subscribeInput' placeholder='Enter Your Email' required onChange={handelSubscriberInput} className='border border-gray-300 
        py-1 md:w-100 sm:80 w-50  px-2 ' />
        <button type='submit' className='border-gray bg-blue-300 py-1 px-3 text-white cursor-pointer shadow-sm shadow-gray-200'>Subscribe</button>
      </form>
    </div>
  )
}

export default Subscribe