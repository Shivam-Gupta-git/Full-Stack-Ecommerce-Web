import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFireFlameCurved, FaStar } from "react-icons/fa6";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import ProductItems from "./ProductItems";

function BestSeller() {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const best = (products || []).filter((item) => item.bestseller);
    setBestSeller(best.slice(0, 8));
  }, [products]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-rose-50 to-orange-100/70 py-16 sm:py-20 lg:py-24">
      {/* Background Effects */}
      <div className="absolute -top-20 -left-16 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />
      <div className="absolute top-1/2 right-0 h-80 w-80 -translate-y-1/2 rounded-full bg-rose-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-amber-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl animate-[fadeDown_0.8s_ease]">
            <FaFireFlameCurved className="text-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-orange-700 sm:text-sm">
              Most Loved Picks
            </span>
          </div>

          <div className="animate-[fadeUp_0.9s_ease]">
            <Title text1="BEST" text2="SELLER" className="justify-center" />
          </div>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base md:text-lg md:leading-8 animate-[fadeUp_1s_ease]">
            Explore our top-selling products loved by thousands. These trending
            styles combine premium quality, comfort, and fashion-forward design.
          </p>

          {/* Stats Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 animate-[fadeUp_1.1s_ease]">
            <div className="rounded-2xl border border-white/60 bg-white/80 px-5 py-3 shadow-md backdrop-blur-xl">
              <p className="text-xl font-bold text-gray-900">8+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Trending Items
              </p>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/80 px-5 py-3 shadow-md backdrop-blur-xl">
              <div className="flex items-center justify-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
              </div>
              <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                Customer Favorite
              </p>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
          {bestSeller?.length ? (
            bestSeller.map((item, index) => (
              <div
                key={item._id || index}
                className="group relative animate-[fadeCard_0.8s_ease] transition-all duration-500 hover:-translate-y-3"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                {/* Card Wrapper */}
                <div className="overflow-hidden rounded-[1.8rem] border border-white/60 bg-white/85 p-2 shadow-[0_18px_45px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_28px_65px_rgba(0,0,0,0.15)]">
                  <div className="transition-transform duration-700 group-hover:scale-[1.02]">
                    <ProductItems items={item} />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-orange-200 bg-white/70 px-6 py-20 text-center shadow-sm backdrop-blur-xl">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl text-orange-500">
                <FaFireFlameCurved />
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                No Best Sellers Available
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                We’re preparing the most loved and popular products for you.
                Check back again soon for exciting best sellers.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {bestSeller?.length > 0 && (
          <div className="mt-14 flex justify-center animate-[fadeUp_1.3s_ease]">
            <Link
              to="/Collection"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 via-rose-500 to-pink-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(249,115,22,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(244,63,94,0.4)]"
            >
              Explore All Best Sellers
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                <FaArrowRight className="text-xs" />
              </span>
            </Link>
          </div>
        )}
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes fadeDown {
            from {
              opacity: 0;
              transform: translateY(-24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(28px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeCard {
            from {
              opacity: 0;
              transform: translateY(45px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </section>
  );
}

export default BestSeller;