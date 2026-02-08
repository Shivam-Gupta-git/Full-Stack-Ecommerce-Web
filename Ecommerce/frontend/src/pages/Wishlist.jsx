import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

function Wishlist() {
  const {
    products,
    wishlistItems,          // array of product IDs
    currency,
    handleWishlistRemoveItem
  } = useContext(ShopContext);

  return (
    <div className="w-full flex flex-col items-center py-10 px-4 md:px-10 bg-[#f5ebe0]">
      
      <div className="w-full md:w-[90%]">
        <Title text1="My" text2="Wishlist" />
      </div>

      <div className="w-full md:w-[90%] mt-6">
        <div className="w-full rounded-lg shadow-md bg-[#d6ccc2]">

          {wishlistItems.length === 0 ? (
            <div className="p-6 text-center text-black">
              Your wishlist is empty.
            </div>
          ) : (
            wishlistItems.map((id, index) => {
              const product = products.find((p) => p._id === id);
              if (!product) return null;

              return (
                <div
                  key={index}
                  className="flex flex-row items-start border-b last:border-b-0 p-4 gap-4 relative"
                >
                  {/* Remove */}
                  <button
                    onClick={() => handleWishlistRemoveItem(product._id)}
                    className="absolute top-2 right-2 text-red-500 hover:text-red-700 transition"
                  >
                    <MdDelete size={22} />
                  </button>

                  {/* Image */}
                  <Link to={`/product/${product._id}`}>
                    <div className="w-24 h-24 flex-shrink-0 hover:scale-110 transition-all duration-500">
                      <img
                        src={product.image[0]}
                        alt={product.name}
                        className="w-full h-full object-cover rounded"
                      />
                    </div>
                  </Link>

                  {/* Details */}
                  <div className="flex flex-col flex-grow">
                    <h2 className="text-lg font-semibold">
                      {product.name}
                    </h2>

                    <p className="text-sm text-gray-600 mt-1">
                      {currency}{product.price}
                    </p>

                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {product.description}
                    </p>

                    {/* CTA */}
                    <Link to={`/product/${product._id}`}>
                      <button className="mt-3 w-fit px-4 py-1.5 bg-black text-white text-sm rounded hover:bg-gray-800 transition">
                        View Product
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;