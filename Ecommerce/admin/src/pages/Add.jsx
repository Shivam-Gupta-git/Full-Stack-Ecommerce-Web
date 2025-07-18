import axios from 'axios';
import React, { useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { backentUrl } from '../App';

function Add({token}) {

  const [image1, setImage1] = useState(false)
  const [image2, setImage2] = useState(false)
  const [image3, setImage3] = useState(false)
  const [image4, setImage4] = useState(false)

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('Men')
  const [subCategory, setSubCategory] = useState('Topwear')
  const [price, setPrice] = useState('')
  const [sizes, setSizes] = useState([])
  const [bestseller, setBestseller] = useState(false)

  const handelFormData =  async (event)=>{
    event.preventDefault()
    try {
     const formData = new FormData()

     image1 && formData.append('image1', image1)
     image2 && formData.append('image2', image2)
     image3 && formData.append('image3', image3)
     image4 && formData.append('image4', image4)

     formData.append('name', name)
     formData.append('description', description)
     formData.append('category', category)
     formData.append('price', price)
     formData.append('subCategory', subCategory)
     formData.append('sizes', JSON.stringify(sizes))
     formData.append('bestseller', bestseller)
     
     const response = await axios.post(backentUrl + '/api/product/add', formData, { headers:{token}})
     
     console.log(response.data)
    } catch (error) {
      console.log('data can not be uploaded', error)
    }
  }
  
  return (
    <form  onSubmit={handelFormData}>
   <div className='w-full flex items-center justify-center'>
    <div className='w-[90%] h-full p-4 flex flex-col gap-3 rounded shadow shadow-gray-500'>

      <div>
      <p className='text-[17px] text-gray-600'>Upload Images</p>
      <div className='flex flex-row gap-5 mt-2'>
      <label htmlFor="image1">
        {!image1 ? <IoCloudUploadOutline  className='text-6xl  p-1 shadow-sm shadow-gray-500 rounded hover:scale-110 duration-500'/> : <img className='h-15 w-15 shadow-sm shadow-gray-500 rounded hover:scale-110 duration-500' src={URL.createObjectURL(image1)} alt="" />}
      <input onChange={(event)=> setImage1(event.target.files[0])} type="file" id='image1' hidden />
      </label>
      <label htmlFor="image2">
      {!image2 ? <IoCloudUploadOutline  className='text-6xl  p-1 shadow-sm shadow-gray-500 rounded hover:scale-110 duration-500'/> : <img className='h-15 w-15 shadow-sm shadow-gray-500 rounded hover:scale-110 duration-500' src={URL.createObjectURL(image2)} alt="" />}
      <input onChange={(event)=> setImage2(event.target.files[0])} type="file" id='image2' hidden />
      </label>
      <label htmlFor="image3">
      {!image3 ? <IoCloudUploadOutline  className='text-6xl  p-1 shadow-sm shadow-gray-500 rounded hover:scale-110 duration-500'/> : <img className='h-15 w-15 shadow-sm shadow-gray-500 rounded hover:scale-110 duration-500' src={URL.createObjectURL(image3)} alt="" />}
      <input onChange={(event)=> setImage3(event.target.files[0])} type="file" id='image3' hidden />
      </label>
      <label htmlFor="image4">
      {!image4 ? <IoCloudUploadOutline  className='text-6xl  p-1 shadow-sm shadow-gray-500 rounded hover:scale-110 duration-500'/> : <img className='h-15 w-15 shadow-sm shadow-gray-500 rounded hover:scale-110 duration-500' src={URL.createObjectURL(image4)} alt="" />}
      <input onChange={(event)=> setImage4(event.target.files[0])} type="file" id='image4' hidden />
      </label>
      </div>
      </div>

      <div className=''>
      <p className='text-[17px] text-gray-600'>Product Name</p>
      <input onChange={(event)=> setName(event.target.value)} value={name} type="text" placeholder='Type here' required className='border border-gray-300 outline-0 p-1.5 w-[60%] rounded shadow-sm mt-1'/>
      </div>

      <div className=''> 
      <p className='text-[17px] text-gray-600'>Product Description</p>
      <textarea onChange={(event) => setDescription(event.target.value)} value={description} type='text' rows="5" placeholder='Enter Product Discription ' required className='border border-gray-300 outline-0 p-1.5 w-[60%] rounded shadow-sm mt-1 '></textarea>
      </div>

      <div className='flex flex-row gap-10'>
        <div>
      <p className='text-[17px] text-gray-600'>Product Category</p>
      <select onChange={(event) => setCategory(event.target.value)} className=' py-2 px-8 mt-2 border border-gray-300 rounded shadow-sm'>
        <option className='text-sm ' value="Men">Men</option>
        <option className='text-sm ' value="Women">Women</option>
        <option className='text-sm ' value="Kids">Kids</option>
      </select>
        </div>

       <div>
      <p className='text-[17px] text-gray-600'>Product Sub Category</p>
      <select onChange={(event)=> setSubCategory(event.target.value)} className=' py-2 px-8 mt-2 border border-gray-300 rounded shadow-sm'>
        <option className='text-sm ' value="Topwear">Topwear</option>
        <option className='text-sm ' value="Bottomwear">Bottomwear</option>
        <option className='text-sm ' value="Winterwear">Winterwear</option>
      </select>
       </div>
      </div>

      <div>
      <p className='text-[17px] text-gray-600'>Product Price</p>
      <input onChange={(event) => setPrice(event.target.value)} value={price} type="Number" placeholder='Enter Product Price' className='border border-gray-300 outline-0 p-1.5 w-[30%] rounded shadow-sm mt-1'/>
      </div>

      <div>
      <p className='text-[17px] text-gray-600'>Product Sizes</p>
      <div className='flex flex-row gap-5 mt-2'>
      <div onClick={()=> setSizes(pre => pre.includes('XS') ? pre.filter(item => item !== 'XS') : [...pre, 'XS'])}>
        <p className={`${sizes.includes('XS') ? 'bg-gray-800 text-white': 'bg-gray-300'} py-1 w-10 flex items-center justify-center rounded shadow-sm shadow-gray-400 cursor-pointer hover:scale-110 duration-300`}>XS</p>
      </div>
      <div onClick={()=> setSizes(pre => pre.includes('S') ? pre.filter(item => item !== 'S') : [...pre, 'S'])}>
      <p className={`${sizes.includes('S') ? 'bg-gray-800 text-white': 'bg-gray-300'} py-1 w-10 flex items-center justify-center rounded shadow-sm shadow-gray-400 cursor-pointer hover:scale-110 duration-300`}>S</p>
      </div>
      <div onClick={()=> setSizes(pre => pre.includes('M') ? pre.filter(item => item !== 'M') : [...pre, 'M'])}>
      <p className={`${sizes.includes('M') ? 'bg-gray-800 text-white': 'bg-gray-300'} py-1 w-10 flex items-center justify-center rounded shadow-sm shadow-gray-400 cursor-pointer hover:scale-110 duration-300`}>M</p>
      </div>
      <div onClick={()=> setSizes(pre => pre.includes('L') ? pre.filter(item => item !== 'L') : [...pre, 'L'])}>
      <p className={`${sizes.includes('L') ? 'bg-gray-800 text-white': 'bg-gray-300'} py-1 w-10 flex items-center justify-center rounded shadow-sm shadow-gray-400 cursor-pointer hover:scale-110 duration-300`}>L</p>
      </div>
      <div onClick={()=> setSizes(pre => pre.includes('XL') ? pre.filter(item => item !== 'XL') : [...pre, 'XL'])}>
      <p className={`${sizes.includes('XL') ? 'bg-gray-800 text-white': 'bg-gray-300'} py-1 w-10 flex items-center justify-center rounded shadow-sm shadow-gray-400 cursor-pointer hover:scale-110 duration-300`}>XL</p>
      </div>
      </div>
      </div>

      <div className='flex flex-row gap-2'>
        <input onChange={()=> setBestseller(item => !item)} checked={bestseller} type="checkbox" id='bestseller'/>
        <label htmlFor="bestseller" className='text-gray-500'>Add to bestseller</label>
      </div>

      <button type='submit' className=' w-[20%] py-2 bg-gray-700 text-white flex items-center justify-center rounded shadow-sm shadow-gray-400 cursor-pointer hover:scale-105 hover:bg-gray-900 duration-300 mt-5'>Add Product</button>
    </div>
   </div>
    </form>
  )
}

export default Add