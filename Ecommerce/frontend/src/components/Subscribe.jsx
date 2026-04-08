import React, { useState } from "react";
import { FaArrowRightLong, FaEnvelopeOpenText } from "react-icons/fa6";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribed(true);

    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 2500);
  };

  return (
<section className="w-full py-14 sm:py-16 lg:py-20 px-4">
  <div className="max-w-5xl mx-auto">
    <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-200/80 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      {/* soft accent glow */}
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-cyan-100 blur-3xl opacity-70" />
      <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-violet-100 blur-3xl opacity-70" />

      <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 mb-5">
            <span className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-cyan-700">
              Newsletter
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Subscribe & Get{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              10% Off
            </span>
          </h2>

          <p className="mt-5 text-sm sm:text-base leading-7 text-gray-600 max-w-2xl mx-auto">
            Join our newsletter for exclusive offers, new arrivals and early
            access to upcoming sales.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto"
          >
            <div className="relative flex-1 group">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full h-14 rounded-2xl border border-gray-200 bg-gray-50 px-5 pr-12 text-gray-900 placeholder:text-gray-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              />

              <svg
                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-cyan-500 transition"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l-4-4-4 4m8 4l-4-4-4 4"
                />
              </svg>
            </div>

            <button
              type="submit"
              className="group h-14 px-8 rounded-2xl bg-gray-900 text-white font-semibold tracking-wide transition-all duration-300 hover:bg-black hover:-translate-y-1 hover:shadow-xl active:scale-[0.98]"
            >
              <span className="flex items-center justify-center gap-2">
                Subscribe
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </span>
            </button>
          </form>

          {subscribed && (
            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-2 text-sm font-medium text-green-700 animate-[fadeIn_0.4s_ease]">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              You're subscribed! Check your inbox for your discount.
            </div>
          )}
        </div>
      </div>
    </div>
  </div>

  <style>
    {`
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: translateY(8px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `}
  </style>
</section>
  );
}

export default Subscribe;