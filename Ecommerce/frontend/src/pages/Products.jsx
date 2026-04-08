import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";
import {
  FiShoppingBag,
  FiTruck,
  FiRefreshCw,
  FiShield,
} from "react-icons/fi";
import RelatedProduct from "../components/RelatedProduct";

function Products() {
  const { ProductId } = useParams();

  const { products, currency, handelCartItems, addToWishlist } =
    useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");
  const [showDesc, setShowDesc] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const product = products.find((item) => item._id === ProductId);

    if (!product) return;

    setProductData(product);
    setImage(product.image?.[0]);
  }, [ProductId, products]);

  if (!productData) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#faf8f6]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-gray-900" />
          <p className="text-sm font-medium tracking-wide text-gray-500">
            Loading Product Details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf8f6] via-[#f7f4f1] to-[#f3ede8] px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
        {/* Background blur accents */}
        <div className="absolute -left-20 top-10 h-60 w-60 rounded-full bg-cyan-100/40 blur-3xl" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-100/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {/* LEFT SIDE */}
          <div className="animate-[fadeUp_0.7s_ease]">
            <div className="flex flex-col-reverse gap-4 md:flex-row">
              {/* Thumbnails */}
              <div className="flex flex-row gap-3 overflow-x-auto md:flex-col md:overflow-visible">
                {productData.image?.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setImage(img)}
                    className={`group relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 sm:h-20 sm:w-20 ${
                      image === img
                        ? "border-gray-900 shadow-md"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`thumb-${idx}`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image */}
              <div className="group relative flex-1 overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                <img
                  src={image}
                  alt={productData.name}
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 sm:h-[400px] lg:h-[500px]"
                />

                {/* Bestseller badge */}
                {productData.bestseller && (
                  <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white shadow-md">
                    Bestseller
                  </div>
                )}

                {/* Floating wishlist button */}
                <button
                  onClick={() => {
                    addToWishlist(productData._id);
                    setLiked(!liked);
                  }}
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/90 text-gray-700 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-gray-900 hover:text-white"
                >
                  {liked ? (
                    <FaHeart className="text-base text-red-500" />
                  ) : (
                    <FaRegHeart className="text-base" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="animate-[fadeUp_0.9s_ease] rounded-[2rem] border border-white/40 bg-white/80 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-6 lg:p-8">
            {/* Category */}
            <div className="mb-4 inline-flex rounded-full bg-gray-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
              {productData.category} / {productData.subCategory}
            </div>

            {/* Title */}
            <h1 className="max-w-xl text-2xl font-black leading-tight tracking-[-0.03em] text-gray-900 sm:text-3xl lg:text-4xl">
              {productData.name}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                <FaStar className="text-sm" />
                <FaStar className="text-sm" />
                <FaStar className="text-sm" />
                <FaStar className="text-sm" />
                <FaStarHalfAlt className="text-sm" />
              </div>

              <span className="text-xs font-medium text-gray-500 sm:text-sm">
                4.8 • 123 Reviews
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-black tracking-tight text-gray-900 sm:text-4xl">
                {currency}
                {productData.price}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-green-700">
                In Stock
              </span>
            </div>

            {/* Description */}
            <div className="mt-7 border-t border-gray-200 pt-5">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-gray-900">
                Description
              </h3>

              <p
                className={`text-sm leading-7 text-gray-600 transition-all duration-300 ${
                  showDesc ? "line-clamp-none" : "line-clamp-4"
                }`}
              >
                {productData.description}
              </p>

              {productData.description?.length > 140 && (
                <button
                  onClick={() => setShowDesc(!showDesc)}
                  className="mt-3 text-sm font-semibold text-cyan-600 transition hover:text-cyan-800"
                >
                  {showDesc ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            {/* Size */}
            <div className="mt-7">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-gray-900">
                Select Size
              </h3>

              <div className="flex flex-wrap gap-2.5">
                {productData.sizes?.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`min-w-[52px] rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      size === item
                        ? "border-gray-900 bg-gray-900 text-white shadow-md"
                        : "border-gray-200 bg-white text-gray-700 hover:-translate-y-1 hover:border-gray-400 hover:shadow-sm"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => handelCartItems(productData._id, size)}
                className="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-gray-900 to-black px-5 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <FiShoppingBag className="text-base transition-transform duration-300 group-hover:scale-110" />
                Add To Cart
              </button>

              <button
                onClick={() => {
                  addToWishlist(productData._id);
                  setLiked(!liked);
                }}
                className="flex items-center justify-center gap-2 rounded-2xl border border-gray-300 bg-white px-5 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-900 hover:text-white"
              >
                {liked ? <FaHeart className="text-sm" /> : <FaRegHeart className="text-sm" />}
                Wishlist
              </button>
            </div>

            {/* Feature Cards */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <FiShield className="mb-2 text-xl text-cyan-600" />
                <p className="text-sm font-semibold text-gray-900">
                  100% Original
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Premium quality guaranteed
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <FiTruck className="mb-2 text-xl text-violet-600" />
                <p className="text-sm font-semibold text-gray-900">
                  Cash on Delivery
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Available across India
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 transition duration-300 hover:-translate-y-1 hover:shadow-md">
                <FiRefreshCw className="mb-2 text-xl text-emerald-600" />
                <p className="text-sm font-semibold text-gray-900">
                  Easy Returns
                </p>
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Exchange within 7 days
                </p>
              </div>
            </div>
          </div>
        </div>

        <style>
          {`
            @keyframes fadeUp {
              from {
                opacity: 0;
                transform: translateY(24px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}
        </style>
      </section>

      <RelatedProduct
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </>
  );
}

export default Products;