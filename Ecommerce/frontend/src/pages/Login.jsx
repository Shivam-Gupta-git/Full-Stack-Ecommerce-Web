import React, { useState } from 'react'
import Title from '../components/Title'

function Login() {
  const[currentLoginState, setCurrentLoginState] = useState('Login')
  const handelLoginButton = (event)=>{
   event.preventDefault()
   console.log('hello')
  }
  return (

<div className='w-[100%] flex flex-col items-center '>
<div className='flex items-start w-full p-5'>

</div>
    <div className="bg-white p-8 rounded-2xl shadow-md md:w-[50%] w-[90%]  mt-10">
      {
        currentLoginState === 'Login' ?  <h2 className="text-2xl font-bold text-center mb-6"> <Title text1={'Login'} text2={'HERE'}></Title></h2> : <h2 className="text-2xl font-bold text-center mb-6"> <Title text1={'Sign Up'} text2={'HERE'}></Title></h2>
      }
     
     
  
      <form onSubmit={handelLoginButton} className="space-y-4">
        {currentLoginState === 'Login' ? '' : 
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="text" id="name" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Shivam Gupta" required />
        </div>
        }

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" required />
        </div>
  
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input type="password" id="password" className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="••••••••" required />
        </div>
  
        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
        </div>
  
        <button type="submit" className="w-full bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-950 transition duration-300">
          {currentLoginState === 'Login' ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
  
      <p className="text-sm text-center text-gray-600 mt-6">
        Don't have an account?
        {
          currentLoginState === 'Login' ?    <a onClick={()=> setCurrentLoginState('sign Up')} className="text-blue-500 hover:underline">Create Account</a> :   <a onClick={()=> setCurrentLoginState('Login')} className="text-blue-500 hover:underline">Login</a>
        }
            
        
      </p>
    </div>
</div>
  
  )
}

export default Login