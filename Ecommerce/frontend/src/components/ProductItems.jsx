import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FiHeart, FiEye } from "react-icons/fi";

function ProductItems({ items }) {
  const { currency } = useContext(ShopContext);

  if (!items) return null;

  return (
    <div className="group w-full">
      <div className="relative overflow-hidden rounded-[1.8rem] border border-gray-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.05)] transition-all duration-500 hover:-translate-y-2 hover:border-gray-300 hover:shadow-[0_22px_50px_rgba(15,23,42,0.12)]">
        {/* Image Section */}
        <Link to={`/Product/${items._id}`} className="block relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-[#f6f5f3]">
            {/* subtle gradient overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

            <img
              src={items.image?.[0]}
              alt={items.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Floating Actions */}
            <div className="absolute right-3 top-3 z-20 flex flex-col gap-2 opacity-0 translate-x-3 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
              <button className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/95 text-gray-700 shadow-lg backdrop-blur-md transition hover:bg-gray-900 hover:text-white">
                <FiHeart className="text-[17px]" />
              </button>

              <button className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/95 text-gray-700 shadow-lg backdrop-blur-md transition hover:bg-gray-900 hover:text-white">
                <FiEye className="text-[17px]" />
              </button>
            </div>

            {/* Bestseller Badge */}
            {items.bestseller && (
              <div className="absolute left-3 top-3 z-20">
                <span className="rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-md">
                  Bestseller
                </span>
              </div>
            )}

            {/* bottom hover bar */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
          </div>
        </Link>

        {/* Content */}
        <div className="px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
          <div className="space-y-2">
            <h3 className="line-clamp-1 text-sm sm:text-[15px] font-semibold tracking-[-0.02em] text-gray-900 transition duration-300 group-hover:text-black">
              {items.name}
            </h3>

            <div className="flex items-end justify-between">
              <div className="flex items-center gap-1">
                <span className="text-lg sm:text-xl font-black tracking-tight text-gray-900">
                  {currency}
                  {items.price}
                </span>
              </div>

              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500 transition duration-300 group-hover:bg-gray-900 group-hover:text-white">
                New
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;