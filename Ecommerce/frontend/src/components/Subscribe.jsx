import React, { useState } from "react";

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
    <section className="w-full py-14 md:py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="rounded-3xl bg-[#d6ccc2] p-8 sm:p-10 text-center shadow-lg border border-[#d6ccc2]/80">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
            Subscribe & Get 10% Off
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Join our newsletter for exclusive offers, new arrivals, and early
            access to sales.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-5 py-3.5 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent transition"
            />
            <button
              type="submit"
              className="px-8 py-3.5 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 active:scale-[0.98] transition"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="mt-5 text-green-700 text-sm font-medium animate-pulse">
              You're subscribed! Check your inbox for the discount.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
