import React from "react";
import Title from "../components/Title";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

function Contacts() {
  return (
    <div className="w-full bg-[#f5ebe0] py-12 px-4 md:px-10 flex justify-center">
      <div className="w-full md:w-[85%] flex flex-col gap-12">

        {/* Page Title */}
        <div className="text-center">
          <Title text1="CONTACT" text2="US" />
          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-xl mx-auto">
            Have questions or need help? We’re here for you. Reach out anytime.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="flex flex-col gap-6">

            <div className="flex items-start gap-4 bg-[#d6ccc2] p-5 rounded-xl shadow-sm">
              <MdLocationOn className="text-2xl text-gray-800" />
              <div>
                <h3 className="font-semibold text-gray-900">Our Address</h3>
                <p className="text-sm text-gray-600 mt-1">
                  123 Fashion Street, Mumbai, India
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#d6ccc2] p-5 rounded-xl shadow-sm">
              <MdEmail className="text-2xl text-gray-800" />
              <div>
                <h3 className="font-semibold text-gray-900">Email Us</h3>
                <p className="text-sm text-gray-600 mt-1">
                  support@yourstore.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-[#d6ccc2] p-5 rounded-xl shadow-sm">
              <MdPhone className="text-2xl text-gray-800" />
              <div>
                <h3 className="font-semibold text-gray-900">Call Us</h3>
                <p className="text-sm text-gray-600 mt-1">
                  +91 91234 56789
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-[#d6ccc2] p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Send us a message
            </h3>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-gray-300"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-gray-300"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="px-4 py-2 rounded border border-gray-300 outline-none focus:ring-2 focus:ring-gray-300 resize-none"
              ></textarea>

              <button
                type="submit"
                className="mt-2 bg-black text-white py-2 rounded hover:bg-gray-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contacts;