import React from "react";

function Title({ text1, text2, className = "" }) {
  return (
    <div
      className={`group inline-flex flex-wrap items-center gap-2 sm:gap-3 ${className}`}
    >
      {/* First Text */}
      <span className="relative overflow-hidden text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-[-0.03em] text-gray-400 transition-all duration-500 group-hover:text-gray-500">
        <span className="relative z-10">{text1}</span>

        {/* subtle animated underline */}
        <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 group-hover:w-full" />
      </span>

      {/* Second Text */}
      <span className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.04em] text-gray-900 transition-all duration-500 group-hover:-translate-y-0.5">
        <span className="relative z-10 bg-gradient-to-r from-gray-900 via-gray-800 to-black bg-clip-text text-transparent">
          {text2}
        </span>

        {/* glowing accent */}
        <span className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-cyan-200/40 blur-lg opacity-0 transition-all duration-500 group-hover:opacity-100" />
      </span>

      <style>
        {`
          .group {
            animation: titleFadeUp 0.8s ease both;
          }

          @keyframes titleFadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Title;