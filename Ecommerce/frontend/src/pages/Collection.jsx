import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import ProductItems from '../components/ProductItems'
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";


function Collection() {

  const {products, searchValue} = useContext(ShopContext)

  const [showFilterItems, setShowFilterItems] = useState(false)
  const [collectionItem, setCollectionItem] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [shortType, setShortType] = useState('relavent')

  const handelFilterItems = (()=>{
    setShowFilterItems(val => !val)
  }) 

  useEffect(()=>{
    setCollectionItem(products)
  }, [products])

  const handelCategoryItem = (event)=>{
  if(category.includes(event.target.value)){
    setCategory(item => item.filter(items => items !== event.target.value))
  }else{
    setCategory(item => [...item, event.target.value])
  }
  }

  const handelSubCategoryItems = (event)=>{
    if(subCategory.includes(event.target.value)){
      setSubCategory(item => item.filter(items => items !== event.target.value))
    }else{
      setSubCategory(item => [...item, event.target.value])
    }
  }

  const applyFilterItems = ()=>{
    let productCopy = products.slice()
    if(category.length > 0 ){
      productCopy = productCopy.filter(items => category.includes(items.category))
    }
    if(subCategory.length > 0){
      productCopy = productCopy.filter(items => subCategory.includes(items.subCategory))
    }
    if(searchValue){
      productCopy = productCopy.filter(items => items.name.toLowerCase().includes(searchValue.toLowerCase()))
    }
     setCollectionItem(productCopy)
  } 
  
  useEffect(()=>{
    applyFilterItems()
  },[category, subCategory, searchValue, products])

  const shortProduct = ()=>{
    let shortProductItems = collectionItem.slice()
    if(shortType === 'high-low'){
      setCollectionItem(shortProductItems.sort((a, b)=> (b.price - a.price)))
    } else if(shortType === 'low-high'){
      setCollectionItem(shortProductItems.sort((a, b)=> (a.price - b.price)))
    }else{
      applyFilterItems()
    }
  }
 
  useEffect(()=>{
  shortProduct()
  },[shortType])

  const filterItems = (
    <>  
    <div className='py-3 px-2 mt-5'>
    <p className=' font-medium '>CATEGORIES</p>
    <p className='flex flex-row gap-1 mt-1 text-gray-400'>
      <input type="checkbox" value={'Men'} onChange={handelCategoryItem}/>Men
    </p>
    <p className='flex flex-row gap-1 mt-1 text-gray-400'>
      <input type="checkbox" value={'Women'} onChange={handelCategoryItem}/>Women
    </p>
    <p className='flex flex-row gap-1 mt-1 text-gray-400'>
      <input type="checkbox" value={'Kids'} onChange={handelCategoryItem}/>Kids
    </p>
  </div>
    <div className='py-3 px-2 mt-3'>
    <p className=' font-medium'>TYPE</p>
    <p className='flex flex-row gap-1 mt-1 text-gray-400'>
      <input type="checkbox" value={'Topwear'} onChange={handelSubCategoryItems}/>Topwear
    </p>
    <p className='flex flex-row gap-1 mt-1 text-gray-400'>
      <input type="checkbox" value={'Bottomwear'} onChange={handelSubCategoryItems}/>Bottomwear
    </p>
    <p className='flex flex-row gap-1 mt-1 text-gray-400'>
      <input type="checkbox" value={'Winterwear'} onChange={handelSubCategoryItems}/>Winterwear
    </p>
  </div>
    </>
  )

  return (
    <>

    <div className=' w-full flex flex-row justify-between  mt-3  min-h-100'>
      <div className='w-[15%] md:[0%] md:ml-[4.5%] h-10 '>
      
   <div>
    <div className='flex h-[20px] flex-row items-center gap-2 mt-2'>
   <h1 className='font-bold text-xl md:flex hidden ml-[4%]'>FILTER</h1>
   <p className='md:hidden flex cursor-pointer' onClick={handelFilterItems}>
    {/* {
      showFilterItems ? <IoIosArrowDropleft className='text-2xl'/> : <IoIosArrowDropright className='text-2xl'/>
    } */}
   </p>
    </div>
   <div className='hidden md:flex flex-col'>
   {filterItems}
   </div>

   {/* Filter Section For Mobile View */}
   <div 
   className={` fixed top-29 left-0  bg-white z-40 transform transition-transform duration-700  ${
    showFilterItems ? "translate-x-0 " : "-translate-x-full"
  }`}
   >
    <div className='flex flex-col md:hidden py-3 px-2  shadow-sm shadow-gray-400 sm:w-60 sm:min-h-80 w-40'>
    {filterItems}
    </div>
   </div>
  </div>
      
      </div>

      <div className=' md:w-[80%] flex flex-col'>
      <div className=' flex flex-col  items-center   sm:w-full '>
      <div className='w-[90%] flex flex-row justify-between items-center'>
        <div className='flex flex-row items-center gap-1'>
      <p className='md:hidden flex cursor-pointer' onClick={handelFilterItems}>
      {
      showFilterItems ? <IoIosArrowDropleft className='sm:text-2xl text-[20px]'/> : <IoIosArrowDropright className='sm:text-xl text-[20px]'/>
      }
     </p>
        <Title text1={'ALL'} text2={'COLLECTION'}></Title>
     </div>
     
      <div className='md:h-8 h-7  flex rounded items-center md:text-sm text-[10px] border  border-gray-300'>
        <select onChange={(event)=>setShortType(event.target.value)}>
          <option value="relavent">Sort by: Relavent</option>
          <option value="high-low">Sort by: High to Low</option>
          <option value="low-high">Sort by: Low to High</option>
        </select>
      </div>
        </div>
        </div>

      <div className='w-[100%] flex flex-row flex-wrap md:mt-5 items-center justify-center '>
       {collectionItem.map((items, index)=>(
        <div key={index} className='mt-5'>
          <ProductItems items={items}></ProductItems>
        </div>
       ))}
      </div>

      </div>
    </div>
    </>
    
  )
}

export default Collection