import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiUser,
  FiCreditCard,
  FiTruck,
  FiShield,
} from "react-icons/fi";

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
        paymentMethod: method,
      };

      switch (method) {
        case "COD":
          const response = await axios.post(
            backendUrl + "/api/order/placeOrder",
            orderData,
            { headers: { token } }
          );

          if (response.data.success) {
            setCartItems({});
            navigate("/Orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        default:
          toast.info("This payment method will be available soon");
          break;
      }
    } catch (error) {
      console.log("error while in adding orders details", error);
      toast.error("Something went wrong while placing your order");
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#f8f5ff] via-[#f9f6f2] to-[#eef5ff] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      {/* Background Blur Effects */}
      <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <form
        onSubmit={handelFormData}
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 xl:grid-cols-[1.6fr_0.8fr]"
      >
        {/* LEFT SIDE */}
        <div className="animate-[fadeUp_0.7s_ease] rounded-[2rem] border border-white/50 bg-white/75 p-5 shadow-[0_25px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-7 lg:p-8">
          {/* Heading */}
          <div className="mb-8">
            <Title text1={"Delivery"} text2={"Information"} />

            <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
              Please provide your delivery details carefully so we can deliver
              your order quickly and securely.
            </p>
          </div>

          {/* Form */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* Full Name */}
            <div className="group">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FiUser className="text-violet-600" />
                Full Name
              </label>

              <input
                onChange={onChangeFormData}
                name="fullName"
                value={formData.fullName}
                type="text"
                placeholder="Enter your full name"
                className="w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                required
              />
            </div>

            {/* Email */}
            <div className="group">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FiMail className="text-cyan-600" />
                Email Address
              </label>

              <input
                onChange={onChangeFormData}
                name="email"
                value={formData.email}
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                required
              />
            </div>

            {/* Phone */}
            <div className="group">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FiPhone className="text-emerald-600" />
                Phone Number
              </label>

              <input
                onChange={onChangeFormData}
                name="contact"
                value={formData.contact}
                type="text"
                placeholder="Enter phone number"
                className="w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
                required
              />
            </div>

            {/* City */}
            <div className="group">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FiMapPin className="text-orange-500" />
                City
              </label>

              <input
                onChange={onChangeFormData}
                name="city"
                value={formData.city}
                type="text"
                placeholder="Enter your city"
                className="w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
                required
              />
            </div>

            {/* State */}
            <div className="group">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FiMapPin className="text-pink-500" />
                State
              </label>

              <input
                onChange={onChangeFormData}
                name="state"
                value={formData.state}
                type="text"
                placeholder="Enter your state"
                className="w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
                required
              />
            </div>

            {/* Pincode */}
            <div className="group">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FiMapPin className="text-indigo-500" />
                Pincode
              </label>

              <input
                onChange={onChangeFormData}
                name="pinCode"
                value={formData.pinCode}
                type="text"
                placeholder="Enter pincode"
                className="w-full rounded-2xl border border-gray-200 bg-white/80 px-4 py-3 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100"
                required
              />
            </div>

            {/* Address */}
            <div className="md:col-span-2">
              <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                <FiTruck className="text-violet-600" />
                Full Address
              </label>

              <textarea
                onChange={onChangeFormData}
                name="fullAddress"
                value={formData.fullAddress}
                rows="5"
                placeholder="Enter your complete address..."
                className="w-full resize-none rounded-3xl border border-gray-200 bg-white/80 px-4 py-4 text-sm text-gray-800 outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
                required
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="animate-[fadeUp_0.9s_ease] h-fit rounded-[2rem] border border-white/50 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:sticky lg:top-8">
          {/* Heading */}
          <div className="mb-6">
            <h2 className="text-2xl font-black text-gray-900">
              Order Summary
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Review your order details before placing it
            </p>
          </div>

          {/* Price Summary */}
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-4">
              <span className="text-sm font-medium text-gray-600">
                Subtotal
              </span>

              <span className="text-base font-bold text-gray-900">
                {currency}
                {handelCartAmount()}.00
              </span>
            </div>

            <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-4">
              <span className="text-sm font-medium text-gray-600">
                Delivery Fee
              </span>

              <span className="text-base font-bold text-gray-900">
                {currency}
                {dileveryFee}.00
              </span>
            </div>

            <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-[1px] shadow-lg">
              <div className="flex items-center justify-between rounded-3xl bg-white px-5 py-5">
                <span className="text-base font-bold text-gray-800">
                  Total Amount
                </span>

                <span className="text-2xl font-black text-gray-900">
                  {currency}
                  {handelCartAmount() === 0
                    ? 0
                    : handelCartAmount() + dileveryFee}
                  .00
                </span>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-8">
            <label className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-gray-700">
              <FiCreditCard className="text-violet-600" />
              Payment Method
            </label>

            <div className="relative">
              <select
                value={method}
                onChange={(event) => setMethod(event.target.value)}
                className="w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 py-4 pr-12 text-sm font-medium text-gray-800 outline-none transition-all duration-300 focus:border-violet-400 focus:ring-4 focus:ring-violet-100"
              >
                <option value="COD">Cash on Delivery</option>
                <option value="UPI">UPI (Pay via any App)</option>
                <option value="PayLater">Pay Later</option>
                <option value="Wallets">Wallets</option>
                <option value="NetBanking">Net Banking</option>
              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                ▼
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="mt-6 rounded-3xl border border-cyan-100 bg-cyan-50 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <FiShield className="text-lg" />
              </div>

              <div>
                <h4 className="text-sm font-bold text-gray-900">
                  Secure Checkout
                </h4>
                <p className="mt-1 text-xs leading-6 text-gray-500">
                  Your personal and payment information is protected with secure
                  encryption.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-gray-900 via-black to-gray-800 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            Place Order
          </button>
        </div>
      </form>

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default PlacedOrders;