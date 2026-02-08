import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function ProductItems({ items }) {
  const { currency } = useContext(ShopContext);
  if (!items) return null;

  return (
    <div className="group w-[160px] sm:w-[280px] md:w-[260px]">
      <div className="relative bg-[#edede9] rounded-xl overflow-hidden border border-gray-200 transition hover:shadow-md">

        {/* Image */}
        <Link to={`/Product/${items._id}`}>
          <div className="aspect-[4/5] bg-gray-100 overflow-hidden">
            <img
              src={items.image?.[0]}
              alt={items.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Badge */}
        {items.bestseller && (
          <span className="absolute top-2 left-2 text-[9px] px-2 py-0.5 bg-black text-white rounded">
            Best
          </span>
        )}

        {/* Info */}
        <div className="px-2 py-2">
          <p className="text-xs font-medium text-gray-800 truncate">
            {items.name}
          </p>
          <p className="text-sm font-semibold text-gray-900 mt-0.5">
            {currency}{items.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductItems;