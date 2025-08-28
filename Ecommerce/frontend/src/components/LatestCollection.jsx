import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import ProductItems from "./ProductItems";
function LatestCollection() {

  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([])
  useEffect(()=>{
    setLatestProduct(products.slice(0, 12))
  }, [products])

  return(
    <>
    <div className="md:w-[100%] md:h-[60px]  flex flex-col items-center justify-center mt-6">
      <Title text1={'LATEST'} text2={'COLLECTION'}/>
      <p className=" text-[8px] w-[80%] mt-2 sm:text-sm text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus fugiat ea dolorem fuga impedit tempore ab alias debitis repudiandae ullam.</p>
    </div>
    {/* Product Items */}
    <div className=" w-[100%] flex items-center justify-center">
      <div className=" w-[95%] flex flex-row flex-wrap items-center justify-center md:mt-10 md:gap-5">
      {
        latestProduct && latestProduct.length ? latestProduct.map((items, index) => (
          <ProductItems key={index} items={items}></ProductItems>
        )) : null
      }
      </div>
    </div>
    </>

  )
}

export default LatestCollection;
