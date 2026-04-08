import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
} from "react-icons/fa6";
import { FiPhoneCall, FiMail, FiArrowUpRight } from "react-icons/fi";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gray-200 bg-[#f8f7f5]">
      {/* Background Accent */}
      <div className="absolute -top-20 left-0 h-60 w-60 rounded-full bg-cyan-100/60 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-100/60 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-16 pb-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-5 animate-[fadeUp_0.7s_ease]">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-violet-500 text-white font-bold shadow-lg">
                L
              </div>

              <div>
                <h2 className="text-xl font-black tracking-tight text-gray-900">
                  LOGO
                </h2>
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  Premium Store
                </p>
              </div>
            </div>

            <p className="max-w-sm text-sm leading-7 text-gray-600">
              Discover premium products crafted with quality and care. We bring
              you the best styles to elevate your everyday life.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {[
                FaInstagram,
                FaFacebookF,
                FaXTwitter,
                FaPinterestP,
              ].map((Icon, index) => (
                <button
                  key={index}
                  className="group flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-500 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:text-cyan-600 hover:shadow-lg"
                >
                  <Icon className="text-sm transition-transform duration-300 group-hover:scale-110" />
                </button>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="animate-[fadeUp_0.9s_ease]">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-gray-900">
              Company
            </h3>

            <ul className="space-y-4">
              {["Home", "About", "Feedback", "Contact"].map((item, index) => (
                <li key={index}>
                  <button className="group flex items-center gap-2 text-sm font-medium text-gray-600 transition-all duration-300 hover:text-gray-900">
                    <span className="relative">
                      {item}
                      <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-violet-500 transition-all duration-300 group-hover:w-full" />
                    </span>

                    <FiArrowUpRight className="text-xs opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-[fadeUp_1.1s_ease]">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-gray-900">
              Get In Touch
            </h3>

            <div className="space-y-4">
              <div className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-gray-200 hover:bg-white hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">
                  <FiPhoneCall className="text-lg" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Phone
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-700">
                    +91 22393 45678
                  </p>
                </div>
              </div>

              <div className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition-all duration-300 hover:border-gray-200 hover:bg-white hover:shadow-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                  <FiMail className="text-lg" />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
                    Email
                  </p>
                  <p className="mt-1 text-sm font-medium text-gray-700">
                    support@yourstore.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter / Extra */}
          <div className="animate-[fadeUp_1.3s_ease]">
            <h3 className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-gray-900">
              Stay Updated
            </h3>

            <p className="mb-5 text-sm leading-7 text-gray-600">
              Get the latest updates, offers and trends directly in your inbox.
            </p>

            <div className="flex items-center gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent px-3 py-2 text-sm text-gray-700 placeholder:text-gray-400 outline-none"
              />

              <button className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-900 text-white transition-all duration-300 hover:scale-105 hover:bg-black">
                <FiArrowUpRight className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-center sm:flex-row">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()} Your Store. All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs sm:text-sm text-gray-500">
            <button className="transition hover:text-gray-900">
              Privacy Policy
            </button>
            <button className="transition hover:text-gray-900">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
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
        `}
      </style>
    </footer>
  );
}

export default Footer;