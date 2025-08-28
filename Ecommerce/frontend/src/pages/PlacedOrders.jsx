import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";

function PlacedOrders() {
  const {
    products,
    currency,
    handelCartAmount,
    dileveryFee,
    cartItems,
    backendUrl,
    navigate,
    setCartItems,
    token,
  } = useContext(ShopContext);

  const [method, setMethod] = useState("COD");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    city: "",
    state: "",
    pinCode: "",
    fullAddress: "",
  });
  const onChangeFormData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handelFormData = async (event) => {
    event.preventDefault();
    try {
      let orderItemData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            let itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];
              orderItemData.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        items: orderItemData,
        address: formData,
        payment: handelCartAmount() + dileveryFee,
        paymentMethod: method
      };
      
      switch (method) {
        case "COD":
          const response = await axios.post(
            backendUrl + "/api/order/placeOrder",
            orderData,
            { headers: { token } }
          );
          console.log(response.data.success);
          if (response.data.success) {
            setCartItems({});
            navigate("/Orders");
          } else {
            toast.error(response.data.message);
          }
          break
          default:
            break
      }
    } catch (error) {
      console.log("error while in adding orders details", error);
    }
  };
  return (
    <form
      onSubmit={handelFormData}
      className="w-full flex flex-col lg:flex-row gap-6 px-4 md:px-10 py-8 bg-gray-50 min-h-screen"
    >
      {/* Left Section - Shipping Address */}
      <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">
          <Title text1={"DELIVERY"} text2={"INFORMATION"}></Title>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            onChange={onChangeFormData}
            name="fullName"
            value={formData.fullName}
            type="text"
            placeholder="Full Name"
            className="border p-3 rounded w-full"
            required
          />
          <input
            onChange={onChangeFormData}
            name="email"
            value={formData.email}
            type="email"
            placeholder="Email"
            className="border p-3 rounded w-full"
            required
          />
          <input
            onChange={onChangeFormData}
            name="contact"
            value={formData.contact}
            type="text"
            placeholder="Phone Number"
            className="border p-3 rounded w-full"
            required
          />
          <input
            onChange={onChangeFormData}
            name="city"
            value={formData.city}
            type="text"
            placeholder="City"
            className="border p-3 rounded w-full"
            required
          />
          <input
            onChange={onChangeFormData}
            name="state"
            value={formData.state}
            type="text"
            placeholder="State"
            className="border p-3 rounded w-full"
            required
          />
          <input
            onChange={onChangeFormData}
            name="pinCode"
            value={formData.pinCode}
            type="text"
            placeholder="Pincode"
            className="border p-3 rounded w-full"
            required
          />
          <textarea
            placeholder="Full Address"
            onChange={onChangeFormData}
            name="fullAddress"
            value={formData.fullAddress}
            className="col-span-1 md:col-span-2 border p-3 rounded w-full resize-none"
            rows="4"
            required
          ></textarea>
        </div>
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2 text-gray-600">
          <span>Subtotal:</span>
          <span>
            {currency}
            {handelCartAmount()}.00
          </span>
        </div>
        <div className="flex justify-between mb-2 text-gray-600">
          <span>Delivery Fee:</span>
          <span>
            {currency}
            {dileveryFee}.00
          </span>
        </div>
        <div className="border-t border-gray-300 my-3"></div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total:</span>
          <span>
            {currency}
            {handelCartAmount() === 0 ? 0 : handelCartAmount() + dileveryFee}.00
          </span>
        </div>

        {/* Payment Method */}
        <div className="mt-6">
          <h3 className="font-medium mb-2">Payment Method</h3>
          <select
            className="w-full border p-3 rounded"
            onChange={(event) => setMethod(event.target.value)}
            value={method}
          >
            <option value="COD">Cash on Delivery</option>
            <option value="card">UPI (Pay via any App)</option>
            <option value="card">Pay Latter</option>
            <option value="card">Wallets</option>
            <option value="card">Net Banking</option>
          </select>
        </div>

        <button
          className="mt-6 w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
          type="submit"
        >
          Place Order
        </button>
      </div>
    </form>
  );
}

export default PlacedOrders;
