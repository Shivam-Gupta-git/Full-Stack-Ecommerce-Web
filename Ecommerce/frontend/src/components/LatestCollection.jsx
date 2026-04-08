import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Title from "./Title";
import ProductItems from "./ProductItems";
import { FaArrowRight } from "react-icons/fa6";

function LatestCollection() {
  const { products } = useContext(ShopContext);
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    setLatestProduct(products.slice(0, 12));
  }, [products]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-sky-50/70 py-16 sm:py-20 lg:py-24">
      {/* Decorative Background */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-pink-200/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-200/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-xl animate-[fadeDown_0.8s_ease]">

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700 sm:text-sm">
              Fresh Arrivals
            </span>
          </div>

          <div className="animate-[fadeUp_0.8s_ease]">
            <Title
              text1="LATEST"
              text2="COLLECTION"
              className="justify-center"
            />
          </div>

          <p className="mt-5 text-sm leading-7 text-gray-600 sm:text-base md:text-lg md:leading-8 animate-[fadeUp_1s_ease]">
            Discover our newest fashion pieces curated with modern trends,
            premium fabrics and timeless style to elevate your everyday look.
          </p>

          {/* Extra Button */}
          <div className="mt-8 animate-[fadeUp_1.2s_ease]">
            <Link
              to="/Collection"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(14,165,233,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(14,165,233,0.45)]"
            >
              View All Collection
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
          {latestProduct?.length ? (
            latestProduct.map((item, index) => (
              <div
                key={item._id || index}
                className="group animate-[fadeCard_0.8s_ease] transition-all duration-500 hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                {/* Wrapper to add premium card style without changing ProductItems */}
                <div className="overflow-hidden rounded-[1.8rem] border border-white/60 bg-white/80 p-2 shadow-[0_15px_40px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]">
                  <ProductItems items={item} />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center rounded-[2rem] border border-dashed border-cyan-200 bg-white/70 px-6 py-20 text-center shadow-sm backdrop-blur-xl animate-pulse">
              <div className="mb-5 h-14 w-14 rounded-full bg-cyan-100" />
              <h3 className="text-lg font-semibold text-gray-700">
                Loading Latest Collection...
              </h3>
              <p className="mt-2 max-w-md text-sm text-gray-500">
                Please wait while we bring you the newest and most stylish
                arrivals.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        {latestProduct?.length > 0 && (
          <div className="mt-14 flex justify-center animate-[fadeUp_1.3s_ease]">
            <Link
              to="/Collection"
              className="group inline-flex items-center gap-3 rounded-full border border-cyan-200 bg-white/80 px-6 py-3 text-sm font-semibold text-gray-800 shadow-md backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-cyan-50"
            >
              Explore More Products
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500 text-white transition-transform duration-300 group-hover:translate-x-1">
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
              transform: translateY(-25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fadeCard {
            from {
              opacity: 0;
              transform: translateY(40px) scale(0.96);
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

export default LatestCollection;