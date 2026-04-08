import React from "react";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import Subscribe from "../components/Subscribe";

function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f5f1] text-[#2d241d]">
      {/* Background Decorative Blurs */}
      <div className="pointer-events-none absolute left-[-120px] top-[-80px] h-80 w-80 rounded-full bg-[#d6b89c]/20 blur-3xl" />
      <div className="pointer-events-none absolute right-[-140px] top-[20%] h-96 w-96 rounded-full bg-[#b08968]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-120px] left-[10%] h-80 w-80 rounded-full bg-[#c49a6c]/10 blur-3xl" />

      {/* Hero Section */}
      <section className="relative z-10 animate-[fadeIn_0.8s_ease]">
        <Hero />
      </section>

      {/* Latest Collection */}
      <section className="relative z-10 mt-10 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/60 bg-white/70 px-4 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] backdrop-blur-2xl sm:px-6 lg:px-10 transition-all duration-500 hover:shadow-[0_25px_80px_rgba(176,137,104,0.12)]">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b08968]">
                New Arrivals
              </p>
              <h2 className="text-2xl font-bold text-[#2d241d] sm:text-3xl lg:text-4xl">
                Latest Collection
              </h2>
            </div>

            <div className="hidden h-[2px] w-24 rounded-full bg-gradient-to-r from-[#b08968] to-transparent sm:block" />
          </div>

          <LatestCollection />
        </div>
      </section>

      {/* Best Seller */}
      <section className="relative z-10 mt-10 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/60 bg-gradient-to-br from-[#fffaf6] via-[#f8f1ea] to-[#f3e7dc] px-4 py-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:px-6 lg:px-10">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#8b5e3c]">
                Most Loved
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e6257] sm:text-base">
                Explore the products our customers love the most — carefully
                selected for quality, comfort and timeless style.
              </p>
            </div>

            <div className="hidden rounded-full border border-[#d9c1a8] bg-white/70 px-5 py-2 text-sm font-medium text-[#8b5e3c] shadow-sm sm:block">
              Trending Now
            </div>
          </div>

          <BestSeller />
        </div>
      </section>

      {/* Policy Section */}
      <section className="relative z-10 mt-10 px-4 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/60 bg-white/75 px-4 py-10 shadow-[0_15px_45px_rgba(0,0,0,0.05)] backdrop-blur-xl sm:px-6 lg:px-10">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#b08968]">
              Why Choose Us
            </p>

            <h2 className="text-2xl font-bold text-[#2d241d] sm:text-3xl">
              Premium Experience, Every Time
            </h2>
          </div>

          <Policy />
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="relative z-10 mt-10 px-4 pb-14 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.8rem] bg-gradient-to-r from-[#8b5e3c] via-[#b08968] to-[#d7b18f] px-6 py-10 shadow-[0_25px_70px_rgba(176,137,104,0.3)] sm:px-10 lg:px-14 lg:py-14">
          <div className="absolute inset-0 opacity-20" />

          <div className="relative">
            <div className="mb-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                Stay Updated
              </p>

              <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Join Our Community
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
                Be the first to know about new arrivals, exclusive offers and
                special collections curated just for you.
              </p>
            </div>

            <Subscribe />
          </div>
        </div>
      </section>

      {/* Tailwind Animation Utility */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}

export default Home;