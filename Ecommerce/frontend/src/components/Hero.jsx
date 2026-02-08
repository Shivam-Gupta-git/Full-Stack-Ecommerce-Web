import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const images = [
  {
    src: "https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?semt=ais_hybrid&w=740",
    title: "New Season",
    subtitle: "Discover the latest trends",
  },
  {
    src: "https://blog.flyerwiz.app/wp-content/uploads/2023/08/Clothing-Flyer-Templates.jpg",
    title: "Style Your Life",
    subtitle: "Curated collections for you",
  },
  {
    src: "https://img.freepik.com/free-psd/luxury-men-s-fashion-facebook-cover-template_23-2150871409.jpg",
    title: "Luxury Edit",
    subtitle: "Premium quality, timeless design",
  },
  {
    src: "https://market-resized.envatousercontent.com/previews/files/316723209/01_barly_preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=b569b80fdac78f570a246a1a388491ce04285f69c4619b2b1a98088ad1fc4f96",
    title: "Shop the Look",
    subtitle: "Everything you need in one place",
  },
  {
    src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-%283%29-design-template-6196d74d35eb96b55098e32888fefc76_screen.jpg?ts=1663660096",
    title: "Limited Time",
    subtitle: "Exclusive offers await",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const handleNext = () => {
    setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i === images.length - 1 ? 0 : i + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] lg:h-[480px] overflow-hidden rounded-none">
      {/* Slides */}
      {images.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.src}
            alt=""
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for readability */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent"
            aria-hidden
          />
          {/* Overlay content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="max-w-7xl w-full mx-auto px-6 sm:px-10">
              <div className="max-w-xl">
                <p className="text-white/90 text-sm sm:text-base font-medium tracking-widest uppercase mb-2">
                  {slide.subtitle}
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight drop-shadow-md">
                  {slide.title}
                </h2>
                <Link
                  to="/Collection"
                  className="inline-block mt-5 px-6 py-3 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Nav arrows */}
      <button
        type="button"
        onClick={handlePrevious}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg transition-all hover:scale-105"
        aria-label="Previous slide"
      >
        <FaCircleChevronLeft className="text-2xl sm:text-3xl" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-gray-800 shadow-lg transition-all hover:scale-105"
        aria-label="Next slide"
      >
        <FaCircleChevronRight className="text-2xl sm:text-3xl" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-8 bg-white"
                : "w-1.5 bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
