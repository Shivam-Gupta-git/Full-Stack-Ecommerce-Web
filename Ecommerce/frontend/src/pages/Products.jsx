import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import RelatedProduct from "../components/RelatedProduct";

function Products() {
  const { ProductId } = useParams();
  const { products, currency, handelCartItems } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState('')

  useEffect(() => {
    const foundProduct = products.find((item) => item._id === ProductId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]);
    }
  }, [ProductId, products]);

  return productData ? (
    <>
    <div>

    <div className=" bg-white py-10 px-4 sm:px-10 flex justify-center">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10">
        
        {/* Left: Image Section */}
        <div className="relative md:w-full lg:w-1/2">
          {/* Main Image */}
          <div className=" rounded-xl overflow-hidden group relative ">
            <img
              src={image}
              alt="Main Product"
              className="w-full h-[350px] sm:h-[380px] md:h-[400px] lg:h-[450px] object-center transition-transform duration-300 group-hover:scale-105"
            />

            {/* Thumbnails Inside Image Box */}
            <div className="absolute bottom-4 left-4  px-2 py-1 rounded-lg flex gap-2 overflow-x-auto max-w-[90%] shadow-sm ">
              {productData.image.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  onClick={() => setImage(img)}
                  className={`w-14 h-14 object-cover rounded cursor-pointer border-2 transition hover:scale-105 ${
                    img === image ? "border-blue-600" : "border-gray-300"
                  }`}
                  alt={`thumb-${idx}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right: Product Info Section */}
        <div className="w-full lg:w-1/2 space-y-5">
          <h1 className="text-3xl font-semibold text-gray-800">{productData.name}</h1>
          <p className="text-gray-500 text-sm">Category: {productData.category}</p>

          <div className="flex flex-row gap-1 items-center text-orange-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalf />
          <p className="text-gray-400">(123)</p>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-green-600">{currency}{productData.price}</span>
          </div>

          <p className="text-gray-500 text-sm">Category: {productData.description}</p>

          <div className="flex flex-row gap-2">
          {
            productData.sizes.map((items, index)=>(
              <button key={index} onClick={()=> setSize(items)} className={` px-4 py-1 rounded ${size === items ? 'bg-gray-300' : 'bg-gray-100'}`}>{items}</button>
            ))
          }
          </div>

          <div className="flex gap-4 mt-6">
            <button onClick={()=> handelCartItems(productData._id, size)} className="px-6 py-2 bg-gray-800 hover:bg-gray-950 text-white font-medium cursor-pointer  transition">
              Add to Cart
            </button>
            <button className="px-6 py-2 border border-gray-400 text-gray-700 hover:bg-gray-100  cursor-pointer transition">
              Wishlist
            </button>
          </div>
          <hr className="bg-gray-400"/>
          <div className="text-gray-400 text-sm flex flex-col gap-1">
          <p>100% Original Product</p>
          <p>Cash on delivery is available on this Product</p>
          <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
    </div>
      <RelatedProduct category={productData.category} subCategory={productData.subCategory}></RelatedProduct>
    </div>
    </>

    // Related Products
    
  ) : (
    <div className="text-center py-20 text-gray-500">Loading product details...</div>
  );
}

export default Products;