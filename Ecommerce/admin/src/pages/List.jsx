import React, { use, useEffect, useState } from 'react'
import { backentUrl } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'
import { currency } from '../App'
import { MdOutlineCancel } from "react-icons/md";

function List({token}) {
  const [productList, setProductList] = useState([])

  const fetchProductApi = async ()=>{
   try {
    const response = await axios.get(backentUrl + '/api/product/list')
    if(response.data.success){
      setProductList(response.data.products)
    }else{
      toast.error(response.data.message)
    }
   } catch (error) {
    console.log(error)
    toast.error(error.message)
   }
  }
  useEffect(()=>{
   fetchProductApi()
  },[])

  const removeProductItem = async (id)=> {
   try {
    const response = await axios.post(backentUrl + '/api/product/remove', {id}, {headers:{token}})
    if(response.data.success){
      toast.success(response.data.message)
      fetchProductApi()
    }else{
      toast.error(response.data.message)
    }
   } catch (error) {
    console.log(error)
    toast.error(error.message)
   }
  }
  return (
    <div className="w-full h-full px-2 sm:px-4 py-4">
    {productList.map((item) => (
      <div
        key={item._id}
        className="w-full bg-white rounded-lg shadow-sm shadow-gray-400 flex flex-row items-start gap-3 p-3 mb-4 relative"
      >
        {/* Product Image */}
        <div className="w-24 h-24 shrink-0 rounded overflow-hidden border border-gray-200 shadow-sm">
          <img
            src={item.image[0]}
            alt={item.name}
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Product Info */}
        <div className="flex-1 flex flex-col justify-between">
          {/* Remove Icon (top right on small screen) */}
          <button
            onClick={() => removeProductItem(item._id)}
            className="text-black absolute right-5 top-1 cursor-pointer hover:bg-blue-300 hover:text-white transition-all duration-300 text-3xl font-light  rounded-2xl mt-2"
          >
            <MdOutlineCancel />
          </button>
  
          <p className="text-sm sm:text-base font-medium text-gray-800 leading-tight">
            {item.name}
          </p>
          <p className="text-xs text-gray-500 mt-1">{item.category}</p>
  
          {/* Sizes */}
          <div className="flex flex-wrap gap-2 mt-1">
            {item.sizes.map((sizeItem, index) => (
              <span
                key={index}
                className="bg-gray-100 text-xs text-gray-700 px-2 py-[2px] rounded-full"
              >
                {sizeItem}
              </span>
            ))}
          </div>
  
          {/* Price */}
          <p className="text-sm text-green-600 font-semibold mt-2">
            {currency}
            {item.price}
          </p>
        </div>
      </div>
    ))}
  </div>
  )
}

export default List