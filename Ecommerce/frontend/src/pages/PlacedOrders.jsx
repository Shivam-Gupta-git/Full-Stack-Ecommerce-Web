import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

function PlacedOrders() {
  const{products, currency, handelCartAmount, dileveryFee,} = useContext(ShopContext)
  return (
    <div className="w-full flex flex-col lg:flex-row gap-6 px-4 md:px-10 py-8 bg-gray-50 min-h-screen">
      {/* Left Section - Shipping Address */}
      <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">
          <Title text1={'DELIVERY'} text2={'INFORMATION'}></Title>
        </h2>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" className="border p-3 rounded w-full" required />
          <input type="email" placeholder="Email" className="border p-3 rounded w-full" required />
          <input type="text" placeholder="Phone Number" className="border p-3 rounded w-full" required />
          <input type="text" placeholder="City" className="border p-3 rounded w-full" required />
          <input type="text" placeholder="State" className="border p-3 rounded w-full" required />
          <input type="text" placeholder="Pincode" className="border p-3 rounded w-full" required />
          <textarea
            placeholder="Full Address"
            className="col-span-1 md:col-span-2 border p-3 rounded w-full resize-none"
            rows="4"
            required
          ></textarea>
        </form>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2 text-gray-600">
          <span>Subtotal:</span>
          <span>{currency}{handelCartAmount()}.00</span>
        </div>
        <div className="flex justify-between mb-2 text-gray-600">
          <span>Delivery Fee:</span>
          <span>{currency}{dileveryFee}.00</span>
        </div>
        <div className="border-t border-gray-300 my-3"></div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>{currency}{handelCartAmount() === 0 ? 0 : handelCartAmount() + dileveryFee}.00</span>
        </div>

        {/* Payment Method */}
        <div className="mt-6">
          <h3 className="font-medium mb-2">Payment Method</h3>
          <select className="w-full border p-3 rounded">
            <option value="cod">Cash on Delivery</option>
            <option value="card" disabled>Credit / Debit Card (Coming Soon)</option>
          </select>
        </div>

        <button
         
          className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
        >
          Place Order
        </button>
      </div>
    </div>
  )
}

export default PlacedOrders