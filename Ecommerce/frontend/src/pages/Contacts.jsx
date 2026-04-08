import React from "react";
import Title from "../components/Title";
import {
  MdLocationOn,
  MdEmail,
  MdPhone,
  MdArrowOutward,
} from "react-icons/md";

function Contacts() {
  return (
    <div className="relative overflow-hidden bg-[#f8f5f1] px-4 py-14 sm:px-6 lg:px-10">
      {/* Soft Background Shapes */}
      <div className="absolute left-[-120px] top-[-80px] h-72 w-72 rounded-full bg-[#d9b99b]/25 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-80px] h-80 w-80 rounded-full bg-[#b68a63]/15 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-12">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <Title text1="CONTACT" text2="US" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#7a6a5d] sm:text-base md:text-lg">
            We'd love to hear from you. Whether you have a question about your
            order, products or anything else, our team is always ready to help.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left Side */}
          <div className="flex flex-col gap-6">
            {/* Small heading */}
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#b08968]">
                Get In Touch
              </p>

              <h2 className="max-w-md text-3xl font-bold leading-tight text-[#2d241d] sm:text-4xl">
                Let’s start a conversation that matters.
              </h2>
            </div>

            {/* Cards */}
            <div className="space-y-5">
              <div className="group flex items-start gap-4 rounded-3xl border border-white/60 bg-white/75 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d7b18f] hover:shadow-[0_18px_45px_rgba(176,137,104,0.15)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#b08968] to-[#d7b18f] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <MdLocationOn className="text-2xl" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#2d241d]">
                    Visit Our Store
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#6e6257] sm:text-base">
                    123 Fashion Street, Mumbai, India
                  </p>

                  <button className="mt-4 flex items-center gap-1 text-sm font-medium text-[#b08968] transition-all hover:gap-2">
                    View Location
                    <MdArrowOutward className="text-base" />
                  </button>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-3xl border border-white/60 bg-white/75 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d7b18f] hover:shadow-[0_18px_45px_rgba(176,137,104,0.15)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#8b5e3c] to-[#b08968] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <MdEmail className="text-2xl" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#2d241d]">
                    Email Support
                  </h3>

                  <p className="mt-2 break-all text-sm leading-7 text-[#6e6257] sm:text-base">
                    support@yourstore.com
                  </p>

                  <button className="mt-4 flex items-center gap-1 text-sm font-medium text-[#8b5e3c] transition-all hover:gap-2">
                    Send Email
                    <MdArrowOutward className="text-base" />
                  </button>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-3xl border border-white/60 bg-white/75 p-5 shadow-[0_10px_35px_rgba(0,0,0,0.05)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#d7b18f] hover:shadow-[0_18px_45px_rgba(176,137,104,0.15)]">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#c49a6c] to-[#e2c4a8] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <MdPhone className="text-2xl" />
                </div>

                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#2d241d]">
                    Call Anytime
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-[#6e6257] sm:text-base">
                    +91 91234 56789
                  </p>

                  <button className="mt-4 flex items-center gap-1 text-sm font-medium text-[#c08655] transition-all hover:gap-2">
                    Contact Now
                    <MdArrowOutward className="text-base" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-2xl sm:p-8 lg:p-10">
            {/* Inner Glow */}
            <div className="absolute right-[-80px] top-[-80px] h-48 w-48 rounded-full bg-[#d7b18f]/20 blur-3xl" />

            <div className="relative">
              <div className="mb-8">
                <p className="mb-2 text-sm font-semibold uppercase tracking-[0.35em] text-[#b08968]">
                  Send Message
                </p>

                <h2 className="text-3xl font-bold text-[#2d241d] sm:text-4xl">
                  Tell us what you need
                </h2>

                <p className="mt-3 text-sm leading-7 text-[#6e6257] sm:text-base">
                  Fill in the form below and our team will get back to you as
                  soon as possible.
                </p>
              </div>

              <form className="flex flex-col gap-5">
                <div className="group">
                  <label className="mb-2 block text-sm font-medium text-[#4b3f35]">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-[#e7ddd3] bg-[#fcfaf8] px-5 py-4 text-sm text-[#2d241d] outline-none transition-all duration-300 placeholder:text-[#b0a399] focus:border-[#b08968] focus:bg-white focus:shadow-[0_0_0_4px_rgba(176,137,104,0.12)] sm:text-base"
                  />
                </div>

                <div className="group">
                  <label className="mb-2 block text-sm font-medium text-[#4b3f35]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-2xl border border-[#e7ddd3] bg-[#fcfaf8] px-5 py-4 text-sm text-[#2d241d] outline-none transition-all duration-300 placeholder:text-[#b0a399] focus:border-[#b08968] focus:bg-white focus:shadow-[0_0_0_4px_rgba(176,137,104,0.12)] sm:text-base"
                  />
                </div>

                <div className="group">
                  <label className="mb-2 block text-sm font-medium text-[#4b3f35]">
                    Your Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-2xl border border-[#e7ddd3] bg-[#fcfaf8] px-5 py-4 text-sm leading-7 text-[#2d241d] outline-none transition-all duration-300 placeholder:text-[#b0a399] focus:border-[#b08968] focus:bg-white focus:shadow-[0_0_0_4px_rgba(176,137,104,0.12)] sm:text-base"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#8b5e3c] to-[#b08968] px-6 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#b08968]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#b08968]/40 sm:w-fit sm:min-w-[200px]"
                >
                  Send Message
                  <MdArrowOutward className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;