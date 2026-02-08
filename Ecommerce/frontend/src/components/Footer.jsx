import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-[#edede9]">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        
        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-black">LOGO</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Discover premium products crafted with quality and care. 
            We bring you the best styles to elevate your everyday life.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-900 tracking-wide">
            COMPANY
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-600">
            <li className="hover:text-black cursor-pointer transition">Home</li>
            <li className="hover:text-black cursor-pointer transition">About</li>
            <li className="hover:text-black cursor-pointer transition">Feedback</li>
            <li className="hover:text-black cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold text-gray-900 tracking-wide">
            GET IN TOUCH
          </h3>
          <p className="text-sm text-gray-600">📞 +91 22393 45678</p>
          <p className="text-sm text-gray-600">✉️ support@yourstore.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Your Store. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;