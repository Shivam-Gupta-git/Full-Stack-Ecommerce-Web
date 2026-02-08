import React from "react";

function Title({ text1, text2, className = "" }) {
  return (
    <div className={`flex flex-wrap items-baseline gap-2 ${className}`}>
      <span className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-gray-400">
        {text1}
      </span>
      <span className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">
        {text2}
      </span>
    </div>
  );
}

export default Title;
