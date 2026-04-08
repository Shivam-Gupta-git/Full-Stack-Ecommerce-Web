import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiTruck, FiShield } from "react-icons/fi";

function Cart() {
  const {
    products,
    cartItems,
    currency,
    handleCartRemoveItem,
    handelCartAmount,
    dileveryFee,
  } = useContext(ShopContext);

  const [productItemData, setProductItemData] = useState([]);

  useEffect(() => {
    const itemData = [];

    for (let items in cartItems) {
      for (let item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          itemData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }

    setProductItemData(itemData);
  }, [cartItems]);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#faf7f2] via-[#f8f5ff] to-[#eef6ff] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
      {/* Background Blur */}
      <div className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-violet-200/30 blur-3xl" />
      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-8 flex flex-col gap-3">
          <Title
            text1="Your"
            text2="Shopping Cart"
            className="justify-start"
          />

          <p className="max-w-2xl text-sm leading-7 text-gray-500 sm:text-base">
            Review your selected products, update quantities and continue to
            checkout with a premium shopping experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[1.7fr_0.9fr]">
          {/* Cart Items */}
          <div className="rounded-[2rem] border border-white/40 bg-white/75 p-4 shadow-[0_25px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 text-white shadow-lg">
                <FiShoppingBag className="text-xl" />
              </div>

              <div>
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Cart Items
                </h2>
                <p className="text-sm text-gray-500">
                  {productItemData.length} item
                  {productItemData.length !== 1 ? "s" : ""} in your cart
                </p>
              </div>
            </div>

            {productItemData.length === 0 ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-gray-300 bg-gray-50/70 px-6 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                  <FiShoppingBag className="text-3xl" />
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  Your cart is empty
                </h3>

                <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
                  Looks like you haven’t added anything yet. Explore products
                  and come back here.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                {productItemData.map((item, index) => {
                  const product = products.find((p) => p._id === item._id);

                  if (!product) return null;

                  return (
                    <div
                      key={index}
                      className="group relative flex flex-col gap-5 rounded-3xl border border-gray-200/70 bg-white p-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_20px_50px_rgba(99,102,241,0.12)] sm:flex-row sm:items-center sm:p-5"
                    >
                      {/* Remove Button */}
                      <button
                        onClick={() =>
                          handleCartRemoveItem(item._id, item.size, 0)
                        }
                        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-red-50 text-red-500 transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white"
                      >
                        <MdDelete className="text-xl" />
                      </button>

                      {/* Image */}
                      <Link
                        to={`/product/${product._id}`}
                        className="mx-auto sm:mx-0"
                      >
                        <div className="relative h-28 w-28 overflow-hidden rounded-3xl bg-gray-100 sm:h-32 sm:w-32">
                          <img
                            src={product.image[0]}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                      </Link>

                      {/* Product Info */}
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex flex-col gap-3 sm:flex-col sm:items-start sm:justify-between">
                          <div className="pr-8">
                            <Link to={`/product/${product._id}`}>
                              <h3 className="line-clamp-1 text-lg font-bold text-gray-900 transition-colors duration-300 hover:text-violet-600 sm:text-xl">
                                {product.name}
                              </h3>
                            </Link>

                            <p className="mt-2 line-clamp-2 max-w-2xl text-sm leading-6 text-gray-500">
                              {product.description}
                            </p>
                          </div>

                          <div className="flex flex-row items-center gap-3 sm:flex-col sm:items-end">
                            <span className="rounded-full bg-violet-100 px-4 py-1.5 text-sm font-semibold text-violet-700">
                              Size: {item.size}
                            </span>

                            <span className="text-xl font-black text-gray-900">
                              {currency}
                              {product.price}
                            </span>
                          </div>
                        </div>

                        {/* Bottom */}
                        <div className="mt-5 flex flex-col gap-4 border-t border-gray-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-gray-500">
                              Quantity
                            </span>

                            <div className="flex h-11 w-24 items-center justify-center rounded-2xl border border-gray-200 bg-gray-50">
                              <input
                                type="number"
                                min={1}
                                defaultValue={item.quantity}
                                className="w-full bg-transparent text-center text-sm font-semibold text-gray-800 outline-none"
                              />
                            </div>
                          </div>

                          <div className="flex items-center gap-2 rounded-2xl bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                            <FiTruck />
                            Free Delivery Available
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="h-fit rounded-[2rem] border border-white/40 bg-white/80 p-6 shadow-[0_25px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-7 lg:sticky lg:top-8">
            <div className="mb-6">
              <h2 className="text-2xl font-black text-gray-900">
                Order Summary
              </h2>
              <p className="mt-1 text-sm text-gray-500">
                Secure checkout and premium support
              </p>
            </div>

            {/* Summary Rows */}
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-4">
                <span className="text-sm font-medium text-gray-600">
                  Subtotal
                </span>
                <span className="text-base font-bold text-gray-900">
                  {currency} {handelCartAmount()}.00
                </span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-gray-50 px-4 py-4">
                <span className="text-sm font-medium text-gray-600">
                  Shipping
                </span>
                <span className="text-base font-bold text-gray-900">
                  {currency}
                  {dileveryFee}.00
                </span>
              </div>

              <div className="rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-600 p-[1px] shadow-lg">
                <div className="flex items-center justify-between rounded-3xl bg-white px-5 py-5">
                  <span className="text-base font-bold text-gray-800">
                    Total
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

            {/* Benefits */}
            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3 rounded-2xl bg-cyan-50 px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                  <FiShield />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Secure Checkout
                  </p>
                  <p className="text-xs text-gray-500">
                    100% safe and encrypted payment
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-amber-50 px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                  <FiTruck />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    Fast Delivery
                  </p>
                  <p className="text-xs text-gray-500">
                    Delivered within 3-5 business days
                  </p>
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <Link to="/PlaceOrders">
              <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-3xl bg-gradient-to-r from-gray-900 via-black to-gray-800 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Continue To Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cart;