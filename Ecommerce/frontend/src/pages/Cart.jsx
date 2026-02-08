import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'

function Cart() {
  const { products, cartItems, currency,  handleCartRemoveItem,  handelCartAmount, dileveryFee, } = useContext(ShopContext)
  const [productItemData, setProductItemData] = useState([])


  useEffect(() => {
    const itemData = []
    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          itemData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setProductItemData(itemData)
  }, [cartItems])


  return (
    <div className='w-full flex flex-col items-center py-10 px-4 md:px-10 bg-[#f5ebe0]'>
      <div className='w-full md:w-[90%]'>
        <Title text1="Cart" text2="Items" />
      </div>

      <div className='w-full md:w-[90%] mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Cart Items */}
        <div className='w-full max-h-[70vh] overflow-y-auto rounded-lg shadow-md  bg-[#d6ccc2]'>
          {
            productItemData.length === 0 ? (
              <div className='p-6 text-center text-gray-500'>Your cart is empty.</div>
            ) : (
              productItemData.map((item, index) => {
                const product = products.find(p => p._id === item._id)
                if (!product) return null
                return (
                  <div key={index} className='flex flex-row items-start border-b last:border-b-0 p-4 gap-4 relative'>

                    {/* Remove Icon */}
                    <button
                      onClick={() => handleCartRemoveItem(item._id, item.size,0)}
                      className='absolute top-2 right-2 text-red-500 hover:text-red-700 transition'
                    >
                      <MdDelete size={22} />
                    </button>
                    

                    {/* Product Image */}
                    <Link to={`/product/${product._id}`}>
                    <div className='w-24 h-24 flex-shrink-0 hover:scale-110 transition-all ease-in-out duration-700'>
                      <img src={product.image[0]} alt={product.name} className='w-full h-full object-cover rounded' />
                    </div>
                    </Link>

                    {/* Product Details */}
                    <div className='flex flex-col flex-grow'>
                      <h2 className='text-lg font-semibold'>{product.name}</h2>

                      <div className='flex items-center gap-4 text-sm text-gray-600 mt-2'>
                        <span className='font-medium'>{currency}{product.price}</span>
                        <span className='bg-gray-200 px-2 py-1 rounded text-xs'>Size: {item.size}</span>
                      </div>

                      {/* Description */}
                      <p className='text-sm text-gray-500 mt-2 line-clamp-2'>
                        {product.description}
                      </p>

                      {/* Quantity Input */}
                      <div className='mt-2'>
                        <input
                          type="number"
                          min={1}
                          defaultValue={item.quantity}
                          className='border border-gray-300 w-16 px-2 py-1 rounded'
                        />
                      </div>
                    </div>
                  </div>
                )
              })
            )
          }
        </div>

        {/* Order Summary */}
        <div className='w-full h-fit p-6  rounded-lg shadow-md bg-[#d6ccc2]'>
          <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>

          <div className='flex justify-between mb-2'>
            <span>Subtotal</span>
            <span>{currency} {handelCartAmount()}.00</span>
          </div>
          <div className='flex justify-between mb-2'>
            <span>Shipping</span>
            <span>{currency}{dileveryFee}.00</span>
          </div>
          <div className='border-t mt-2 pt-2 flex justify-between font-bold'>
            <span>Total</span>
            <span>{currency} {handelCartAmount() === 0 ? 0 : handelCartAmount() + dileveryFee }.00</span>
          </div>

         <Link to={'/PlaceOrders'}>
          <button className='mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition'>
            Proceed to Checkout
          </button>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default Cart