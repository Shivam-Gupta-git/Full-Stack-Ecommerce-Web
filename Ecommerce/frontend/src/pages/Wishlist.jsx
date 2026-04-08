import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { MdDelete, MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

function Wishlist() {
  const {
    products,
    wishlistItems,
    currency,
    handleWishlistRemoveItem,
  } = useContext(ShopContext);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f8f5f2] via-[#f4ede7] to-[#efe3d8] px-4 py-8 sm:px-6 md:px-10 lg:px-14">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-8 sm:mb-10">
          <Title
            text1="My"
            text2="Wishlist"
            className="mb-2"
          />
          <p className="mt-3 max-w-xl text-sm sm:text-base font-light tracking-wide text-gray-500">
            Save your favorite products and revisit them anytime.
          </p>
        </div>

        {/* Empty State */}
        {wishlistItems.length === 0 ? (
          <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-white/60 bg-white/60 px-6 text-center shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] backdrop-blur-xl">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#d6b89c] to-[#b08968] text-2xl text-white shadow-lg">
              ♡
            </div>

            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-gray-800">
              Your wishlist is empty
            </h2>

            <p className="mt-2 max-w-md text-sm sm:text-base text-gray-500">
              Looks like you haven’t added anything yet. Explore products and
              save the ones you love.
            </p>

            <Link to="/collection">
              <button className="mt-6 rounded-full bg-gradient-to-r from-[#2d2d2d] to-[#4a4a4a] px-6 py-3 text-sm font-medium tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                Explore Products
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 sm:gap-6">
            {wishlistItems.map((id, index) => {
              const product = products.find((p) => p._id === id);
              if (!product) return null;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-4 sm:p-5 shadow-[0_15px_50px_-20px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_25px_70px_-20px_rgba(0,0,0,0.22)]"
                >
                  {/* Decorative Glow */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#d6b89c]/20 blur-3xl transition-all duration-500 group-hover:scale-125" />

                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                    {/* Product Image */}
                    <Link
                      to={`/product/${product._id}`}
                      className="mx-auto sm:mx-0"
                    >
                      <div className="relative h-28 w-28 overflow-hidden rounded-2xl bg-[#f4ede7] sm:h-32 sm:w-32">
                        <img
                          src={product.image[0]}
                          alt={product.name}
                          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                      </div>
                    </Link>

                    {/* Product Details */}
                    <div className="flex flex-1 flex-col text-center sm:text-left">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h2 className="max-w-[90%] text-lg sm:text-xl font-semibold tracking-tight text-gray-900 transition duration-300 group-hover:text-[#8b5e3c]">
                            {product.name}
                          </h2>

                          <p className="mt-2 text-lg sm:text-xl font-bold text-[#8b5e3c]">
                            {currency}
                            {product.price}
                          </p>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() =>
                            handleWishlistRemoveItem(product._id)
                          }
                          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-red-100 bg-red-50 text-red-500 transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:text-white sm:static sm:ml-4"
                        >
                          <MdDelete size={20} />
                        </button>
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 line-clamp-2 sm:text-[15px]">
                        {product.description}
                      </p>

                      {/* CTA */}
                      <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                        <Link to={`/product/${product._id}`}>
                          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2d2d2d] to-[#4a4a4a] px-5 py-2.5 text-sm font-medium tracking-wide text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                            View Product
                            <MdArrowOutward size={18} />
                          </button>
                        </Link>

                        <span className="rounded-full border border-[#d6b89c]/40 bg-[#f7f1eb] px-4 py-2 text-xs sm:text-sm font-medium tracking-wide text-[#8b5e3c]">
                          Saved Item
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;