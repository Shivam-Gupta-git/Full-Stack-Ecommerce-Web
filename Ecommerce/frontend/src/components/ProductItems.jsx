import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function ProductItems({ items }) {
  const { currency } = useContext(ShopContext);

  return (
    <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2">
      <div
        className={`relative w-40 sm:w-55 md:w-60 lg:w-62 h-auto bg-white rounded-xl shadow-sm transition duration-300 transform hover:scale-105 hover:shadow-sm  group overflow-hidden`}>
        <Link to={`/product/${items._id}`} className="block">
          {/* Image Section */}
          <div className="w-full h-40 sm:h-56 md:h-56 lg:h-60 overflow-hidden rounded-t-xl">
            <img
              src={items.image[0]}
              alt={items.name}
              className="w-full h-full object-cover  transition-transform duration-300 ease-in-out"
            />
          </div>
        </Link>
        {/* Text Content */}
        <div className="w-full px-3 py-2">
          <h1 className="text-sm sm:text-base md:text-lg font-medium text-gray-800 truncate">
            {items.name}
          </h1>
          <div className="mt-1 flex items-center text-base sm:text-lg font-semibold text-gray-900">
            <span className="mr-1">{currency}</span>
            <span>{items.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;
