import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItems from './ProductItems'

function BestSeller() {

  const { products } = useContext(ShopContext)
  const [bestSeller, setBestSeller] = useState([])

  useEffect(()=>{
   const bestProduct = products.filter((item) => (item.bestseller))
   console.log(bestProduct)
   setBestSeller(bestProduct.slice(0, 8))
  }, [])
  console.log(bestSeller)
  return (
    <>
    <div className='md:w-[100%] md:h-[60px]  flex flex-col items-center justify-center mt-6'>
      <Title text1={'BEST'} text2={'SELLER'}></Title>
      <p className='text-[8px] w-[80%] mt-2 sm:text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quas cupiditate modi qui vel id quidem autem, optio veniam nobis molestiae voluptatum!</p>
    </div>

        {/* Product Items */}
        <div className=" w-full flex items-center justify-center">
        <div className=" w-[95%] flex flex-row flex-wrap items-center justify-center md:mt-10 md:gap-5">
        {
          bestSeller && bestSeller.length ? bestSeller.map((items, index) => (
            <ProductItems key={index} items={items}></ProductItems>
          )) : null
        }
        </div>
      </div>
    </>
  )
}

export default BestSeller