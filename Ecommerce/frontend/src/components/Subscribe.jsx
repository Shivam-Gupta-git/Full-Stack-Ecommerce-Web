import React, { useState } from "react";

function Subscribe() {
  const [subscribedInput, setSubscribedInput] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [focused, setFocused] = useState(false);

  const handelSubscriberInput = (event) => {
    setSubscribedInput(event.target.value);
  };
  const handelSubscribedEmail = (event) => {
    event.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setSubscribedInput("");
    }, 2500);
  };
  return (
    <div className="w-full flex flex-col items-center justify-center md:mt-10 gap-2 mb-3">
      <p className="md:text-2xl">Subscribe now & get 10% off</p>
      <p className="sm:text-sm text-xs text-gray-400 w-[90%] text-center">
        Get exclusive offers, updates, and more. Join our newsletter!
      </p>
      <form
        onSubmit={handelSubscribedEmail}
        className={`relative flex items-center mt-2 transition-all duration-300 ${
          focused ? "scale-105" : ""
        }`}
      >
        <div className="relative">
          <input
            type="text"
            name="subscribeInput"
            value={subscribedInput}
            onChange={handelSubscriberInput}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            required
            className="border border-gray-300 py-2 md:w-80 sm:w-60 w-40 px-3 rounded focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none peer transition-all duration-300"
          />
          <label
            className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-200 bg-white px-1 ${
              focused || subscribedInput ? "-top-3 text-xs text-blue-500" : ""
            }`}
          >
            Enter Your Email
          </label>
        </div>
        <button
          type="submit"
          className="ml-2 border-gray bg-blue-400 py-2 px-4 text-white cursor-pointer shadow-sm shadow-gray-200 rounded hover:bg-blue-500 transition-all duration-300"
        >
          Subscribe
        </button>
        {subscribed && (
          <span className="absolute -right-12 text-2xl animate-bounce">✅</span>
        )}
        {subscribed && (
          <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-2xl animate-fade-in">
            🎉
          </span>
        )}
      </form>
    </div>
  );
}

export default Subscribe;
