import React from "react";
import Title from "../components/Title";

function About() {
  return (
    <div className="w-full bg-[#f5ebe0] py-12 px-4 md:px-10 flex justify-center">
      <div className="w-full md:w-[85%] flex flex-col gap-12">

        {/* Page Title */}
        <div className="text-center">
          <Title text1="ABOUT" text2="US" />
          <p className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            We are more than just a store — we are a brand built on quality, trust,
            and modern style.
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Text Section */}
          <div className="flex flex-col gap-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              Our journey started with a simple goal — to provide high-quality,
              stylish, and affordable fashion for everyone. Every product is
              carefully selected to ensure comfort, durability, and modern design.
            </p>

            <p>
              From everyday essentials to trending collections, we believe fashion
              should be effortless and accessible. Our platform is designed to
              give you a smooth shopping experience with easy navigation, secure
              checkout, and fast support.
            </p>

            <p>
              Customer satisfaction is at the heart of everything we do. That’s why
              we offer easy returns, secure payments, and dedicated customer
              support whenever you need us.
            </p>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#d6ccc2] p-5 rounded-xl text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Quality</h3>
              <p className="text-xs text-gray-600 mt-2">
                Premium materials and careful craftsmanship.
              </p>
            </div>

            <div className="bg-[#d6ccc2] p-5 rounded-xl text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Trust</h3>
              <p className="text-xs text-gray-600 mt-2">
                Secure payments and transparent policies.
              </p>
            </div>

            <div className="bg-[#d6ccc2] p-5 rounded-xl text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Style</h3>
              <p className="text-xs text-gray-600 mt-2">
                Modern designs curated for you.
              </p>
            </div>

            <div className="bg-[#d6ccc2] p-5 rounded-xl text-center shadow-sm">
              <h3 className="text-xl font-bold text-gray-900">Support</h3>
              <p className="text-xs text-gray-600 mt-2">
                Friendly customer support, always.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="text-center pt-6 border-t border-gray-300">
          <p className="text-sm md:text-base font-medium text-gray-800">
            “Fashion fades, but style is eternal.”
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;