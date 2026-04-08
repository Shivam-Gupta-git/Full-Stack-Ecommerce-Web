import React from "react";
import { RiExchangeFundsFill } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";

const policies = [
  {
    icon: RiExchangeFundsFill,
    title: "Easy Exchange",
    desc: "Exchange any product within 7 days with a smooth and hassle-free process.",
    gradient: "from-sky-500 via-cyan-500 to-blue-600",
    glow: "bg-sky-500/20",
  },
  {
    icon: MdOutlineVerified,
    title: "7 Days Return",
    desc: "Enjoy worry-free returns and quick refunds within 7 days of purchase.",
    gradient: "from-emerald-500 via-teal-500 to-green-600",
    glow: "bg-emerald-500/20",
  },
  {
    icon: BiSupport,
    title: "24/7 Support",
    desc: "Our dedicated support team is always available whenever you need help.",
    gradient: "from-violet-500 via-fuchsia-500 to-purple-600",
    glow: "bg-violet-500/20",
  },
];

function Policy() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute right-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 shadow-sm backdrop-blur-xl">
            Why Choose Us
          </span>

          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Shopping Made{" "}
            <span className="bg-gradient-to-r from-sky-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Effortless
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            We deliver a seamless shopping experience with easy returns,
            trusted quality, and always-on support — designed to make every
            order stress-free.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {policies.map((policy, idx) => {
            const Icon = policy.icon;

            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/70 p-[1px] shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(15,23,42,0.14)] animate-[cardFade_0.8s_ease]"
                style={{
                  animationDelay: `${idx * 150}ms`,
                  animationFillMode: "both",
                }}
              >
                {/* Gradient Border Glow */}
                <div
                  className={`absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${policy.glow}`}
                />

                <div className="relative flex h-full flex-col rounded-[2rem] bg-white/80 p-7 sm:p-8 backdrop-blur-xl">
                  {/* Top Accent Line */}
                  <div
                    className={`mb-7 h-1.5 w-16 rounded-full bg-gradient-to-r ${policy.gradient}`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${policy.gradient} shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <Icon className="relative z-10 text-3xl text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-slate-950">
                    {policy.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[15px]">
                    {policy.desc}
                  </p>

                  {/* Bottom CTA */}
                  <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-slate-500 transition-all duration-300 group-hover:text-slate-900">
                    Learn More
                    <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1.5" />
                  </div>

                  {/* Hover Background */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r transition-all duration-500 group-hover:w-full ${policy.gradient}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`
          @keyframes cardFade {
            0% {
              opacity: 0;
              transform: translateY(40px) scale(0.96);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}
      </style>
    </section>
  );
}

export default Policy;