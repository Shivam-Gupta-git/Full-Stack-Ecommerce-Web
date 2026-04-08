import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "./ProductItems";
import Title from "./Title";
import { FiArrowRight } from "react-icons/fi";

function RelatedProduct({ category, subCategory }) {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      let relatedProduct = products.slice();

      relatedProduct = relatedProduct.filter(
        (items) => category === items.category
      );

      relatedProduct = relatedProduct.filter(
        (items) => subCategory === items.subCategory
      );

      setRelated(relatedProduct.slice(0, 4));
    }
  }, [products, category, subCategory]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#faf8f6] via-[#f7f4f1] to-[#f3ede8] py-16 sm:py-20">
      {/* Background Blurs */}
      <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-100/40 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-amber-100/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <div className="animate-[fadeUp_0.6s_ease] text-center sm:text-left">
            <Title text1={"You May Also"} text2={"Like"} />

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
              Handpicked products with a similar style and category, selected
              just for you.
            </p>
          </div>

          <button className="group hidden items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-900 hover:bg-gray-900 hover:text-white sm:flex">
            View More
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 xl:gap-8">
          {related.map((items, index) => (
            <div
              key={items._id}
              className="animate-[fadeUp_0.8s_ease] opacity-0 [animation-fill-mode:forwards]"
              style={{
                animationDelay: `${index * 0.12}s`,
              }}
            >
              <ProductItems items={items} />
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-10 flex justify-center sm:hidden">
          <button className="group flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105">
            View More
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(35px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </section>
  );
}

export default RelatedProduct;