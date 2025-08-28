import React, { useContext, useEffect, useRef, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItems from './ProductItems'
import Title from './Title'

function RelatedProduct({category, subCategory,}) {
  const{products} = useContext(ShopContext)
  const[related, setRelated] = useState([])

  useEffect(()=>{
    if(products.length > 0){
    let relatedProduct = products.slice()

    relatedProduct = relatedProduct.filter((items)=> category === items.category)
    relatedProduct = relatedProduct.filter((items)=> subCategory === items.subCategory)
    setRelated(relatedProduct.slice(0, 4))
   }
  },[products])



  return (
    <div className='w-full flex items-center justify-center'>
    <div className=" md:w-[100%] px-4">
      <h2 className=" ml-[2%] md:ml-[13%]   mb-4">
        <Title text1={'Related'} text2={'Product'}></Title>
      </h2>
      <div className='w-full flex  items-center justify-center'>
      <div className=" flex flex-row flex-wrap  items-center justify-center   md:w-[90%]">
        {related.map((items) => (
            <ProductItems key={items._id} items={items}></ProductItems>
        ))}
      </div>
      </div>
    </div>
    </div>
  );
}


export default RelatedProduct