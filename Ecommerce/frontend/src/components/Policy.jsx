import React from "react";
import { RiExchangeFundsFill } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const policies = [
  {
    icon: RiExchangeFundsFill,
    title: "Easy Exchange",
    desc: "Exchange any product within 7 days.",
  },
  {
    icon: MdOutlineVerified,
    title: "7 Days Return",
    desc: "Hassle-free returns within 7 days.",
  },
  {
    icon: BiSupport,
    title: "24/7 Support",
    desc: "We're here to help anytime.",
  },
];

function Policy() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
        {policies.map((policy, idx) => {
          const Icon = policy.icon;
          return (
            <div
              key={idx}
              className="group flex flex-col items-center text-center p-8 rounded-2xl bg-[#d6ccc2]/80 hover:bg-[#d6ccc2] border border-[#d6ccc2] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/80 group-hover:bg-gray-900 transition-colors duration-300 mb-5">
                <Icon className="text-2xl text-gray-700 group-hover:text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-800">
                {policy.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">{policy.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Policy;
