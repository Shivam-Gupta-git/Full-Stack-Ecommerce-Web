import React, { useState } from "react";
import { RiExchangeFundsFill } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const policies = [
  {
    icon: RiExchangeFundsFill,
    title: "Easy Exchange Policy",
    desc: "Exchange any product within 7 days, no questions asked.",
  },
  {
    icon: MdOutlineVerified,
    title: "7 Days Return Policy",
    desc: "Return products easily within 7 days.",
  },
  {
    icon: BiSupport,
    title: "Best Customer Support",
    desc: "24/7 support for all your needs.",
  },
];

function Policy() {
  const [hovered, setHovered] = useState(-1);
  
  return (
    <div className="w-full flex flex-row flex-wrap md:gap-5 items-center justify-evenly md:mt-12">
      {policies.map((policy, idx) => {
        const Icon = policy.icon;
        return (
          <div
            key={idx}
            className="relative w-40 md:w-70 h-30 md:h-50 flex flex-col items-center justify-center bg-white rounded-md hover:shadow-lg transition duration-300 group cursor-pointer"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(-1)}
          >
            <div
              className={`text-[20px] lg:text-5xl md:text-4xl mb-2 transition-transform duration-300 ${
                hovered === idx ? "animate-bounce" : ""
              }`}
            >
              <Icon />
            </div>
            <p className="text-[9px] md:text-xs lg:text-sm font-bold">
              {policy.title}
            </p>
            <p className="text-[7px] md:text-xs lg:text-sm text-gray-400 text-center">
              {policy.desc}
            </p>

          </div>
        );
      })}
    </div>
  );
}

export default Policy;
