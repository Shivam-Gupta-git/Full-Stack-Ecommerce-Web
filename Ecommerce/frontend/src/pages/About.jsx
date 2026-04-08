import React from "react";
import Title from "../components/Title";
import {
  FiAward,
  FiShield,
  FiTrendingUp,
  FiHeadphones,
} from "react-icons/fi";

function About() {
  const highlights = [
    {
      title: "Quality",
      desc: "Premium materials and carefully crafted products made to last.",
      icon: <FiAward />,
      gradient: "from-[#8b5e3c] to-[#c49a6c]",
    },
    {
      title: "Trust",
      desc: "Safe payments, transparent policies and a shopping experience you can rely on.",
      icon: <FiShield />,
      gradient: "from-[#9c7b5d] to-[#d2b49c]",
    },
    {
      title: "Style",
      desc: "Modern and timeless collections designed to fit every lifestyle.",
      icon: <FiTrendingUp />,
      gradient: "from-[#b08968] to-[#e0c3a3]",
    },
    {
      title: "Support",
      desc: "Friendly assistance and fast help whenever you need it.",
      icon: <FiHeadphones />,
      gradient: "from-[#7b5b44] to-[#b08968]",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-[#f8f5f1] px-4 py-14 sm:px-6 lg:px-10">
      {/* Background Blurs */}
      <div className="absolute left-[-120px] top-[-100px] h-80 w-80 rounded-full bg-[#d6b89c]/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-[#b08968]/10 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-14">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <Title text1="ABOUT" text2="US" />
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-[#6d6258] sm:text-base md:text-lg">
            We are more than just a store — we are a brand built on quality,
            trust and modern style, created to make your shopping experience
            effortless and memorable.
          </p>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#b08968]">
                Our Story
              </p>

              <h2 className="max-w-2xl text-3xl font-bold leading-tight text-[#2d241d] sm:text-4xl lg:text-5xl">
                Designed for people who love modern fashion with timeless value.
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-8 text-[#655a51] sm:text-base">
              <p className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                Our journey started with a simple goal — to bring high-quality,
                stylish and affordable fashion to everyone. Every product is
                carefully selected to ensure comfort, durability and a premium
                look that fits your everyday life.
              </p>

              <p className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                From wardrobe essentials to the latest collections, we believe
                fashion should feel effortless and accessible. Our platform is
                built to provide smooth browsing, secure checkout and a shopping
                experience that feels premium on every device.
              </p>

              <p className="rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]">
                Customer satisfaction is at the center of everything we do.
                That’s why we provide easy returns, secure payments and a
                dedicated support team that is always ready to help.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-2 sm:grid-cols-4">
              <div className="rounded-3xl border border-white/60 bg-white/75 p-5 text-center shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-2xl font-bold text-[#8b5e3c] sm:text-3xl">
                  10K+
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#7a6a5d]">
                  Customers
                </p>
              </div>

              <div className="rounded-3xl border border-white/60 bg-white/75 p-5 text-center shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-2xl font-bold text-[#8b5e3c] sm:text-3xl">
                  500+
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#7a6a5d]">
                  Products
                </p>
              </div>

              <div className="rounded-3xl border border-white/60 bg-white/75 p-5 text-center shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-2xl font-bold text-[#8b5e3c] sm:text-3xl">
                  24/7
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#7a6a5d]">
                  Support
                </p>
              </div>

              <div className="rounded-3xl border border-white/60 bg-white/75 p-5 text-center shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-2xl font-bold text-[#8b5e3c] sm:text-3xl">
                  99%
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#7a6a5d]">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_15px_45px_rgba(0,0,0,0.06)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_55px_rgba(0,0,0,0.12)]"
              >
                {/* Decorative Glow */}
                <div
                  className={`absolute right-[-40px] top-[-40px] h-28 w-28 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 blur-2xl transition-all duration-500 group-hover:scale-125`}
                />

                <div
                  className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
                >
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold text-[#2d241d]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6e6257] sm:text-base">
                  {item.desc}
                </p>

                <div className="mt-6 h-[2px] w-12 rounded-full bg-gradient-to-r from-[#b08968] to-[#e0c3a3] transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-r from-[#8b5e3c] via-[#b08968] to-[#d7b18f] px-6 py-10 text-center shadow-[0_20px_60px_rgba(176,137,104,0.25)] sm:px-10">
          <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_40%)]" />

          <div className="relative">
            <p className="text-lg italic leading-8 text-white sm:text-2xl md:text-3xl">
              “Fashion fades, but style is eternal.”
            </p>

            <div className="mx-auto mt-5 h-[2px] w-16 rounded-full bg-white/60" />

            <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/80">
              Our Promise To You
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;