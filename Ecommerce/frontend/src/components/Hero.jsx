import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCircleChevronLeft,
  FaCircleChevronRight,
} from "react-icons/fa6";

const images = [
  {
    src: "https://img.freepik.com/free-psd/horizontal-banner-online-fashion-sale_23-2148585404.jpg?semt=ais_hybrid&w=740",
    title: "New Season",
    subtitle: "Discover the latest trends",
    tag: "2026 Collection",
  },
  {
    src: "https://blog.flyerwiz.app/wp-content/uploads/2023/08/Clothing-Flyer-Templates.jpg",
    title: "Style Your Life",
    subtitle: "Curated collections for you",
    tag: "Trending Now",
  },
  {
    src: "https://img.freepik.com/free-psd/luxury-men-s-fashion-facebook-cover-template_23-2150871409.jpg",
    title: "Luxury Edit",
    subtitle: "Premium quality, timeless design",
    tag: "Premium Fashion",
  },
  {
    src: "https://market-resized.envatousercontent.com/previews/files/316723209/01_barly_preview.png?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=b569b80fdac78f570a246a1a388491ce04285f69c4619b2b1a98088ad1fc4f96",
    title: "Shop the Look",
    subtitle: "Everything you need in one place",
    tag: "Editor's Pick",
  },
  {
    src: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-%283%29-design-template-6196d74d35eb96b55098e32888fefc76_screen.jpg?ts=1663660096",
    title: "Limited Time",
    subtitle: "Exclusive offers await",
    tag: "Flash Sale",
  },
];

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden rounded-b-[2.5rem] sm:rounded-b-[3rem]">
      {/* Background Slides */}
      <div className="relative h-[420px] sm:h-[520px] md:h-[620px] lg:h-[720px] w-full">
        {images.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              currentIndex === index
                ? "opacity-100 scale-100 z-20"
                : "opacity-0 scale-110 z-10"
            }`}
          >
            {/* Image */}
            <img
              src={slide.src}
              alt={slide.title}
              className="h-full w-full object-cover"
            />

            {/* Premium Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Decorative Blur Circles */}
            <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-pink-500/20 blur-3xl" />
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl" />

            {/* Content */}
            <div className="absolute inset-0 z-30 flex items-center">
              <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
                <div
                  className={`max-w-2xl transition-all duration-1000 delay-200 ${
                    currentIndex === index
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  {/* Small Tag */}
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl">
                    <span className="h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <p className="mb-3 text-sm sm:text-base md:text-lg font-medium uppercase tracking-[0.4em] text-cyan-200">
                    {slide.subtitle}
                  </p>

                  {/* Main Heading */}
                  <h2 className="max-w-xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white">
                    <span className="block animate-[fadeUp_0.8s_ease]">
                      {slide.title}
                    </span>
                  </h2>

                  {/* Extra Description */}
                  <p className="mt-5 max-w-lg text-sm sm:text-base md:text-lg leading-7 text-white/75">
                    Elevate your style with premium collections, modern designs,
                    and exclusive fashion trends tailored just for you.
                  </p>

                  {/* Buttons */}
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/Collection"
                      className="group inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm sm:text-base font-semibold text-gray-900 shadow-[0_15px_35px_rgba(255,255,255,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
                    >
                      Shop Now
                      <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </Link>

                    <Link
                      to="/Collection"
                      className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
                    >
                      Explore Collection
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Left Arrow */}
        <button
          type="button"
          onClick={handlePrevious}
          className="group absolute left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black sm:left-6 sm:h-14 sm:w-14"
          aria-label="Previous Slide"
        >
          <FaCircleChevronLeft className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:-translate-x-1" />
        </button>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={handleNext}
          className="group absolute right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black sm:right-6 sm:h-14 sm:w-14"
          aria-label="Next Slide"
        >
          <FaCircleChevronRight className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:translate-x-1" />
        </button>

        {/* Dots + Progress */}
        <div className="absolute bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-3 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-xl">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`relative overflow-hidden rounded-full transition-all duration-500 ${
                currentIndex === index
                  ? "h-2.5 w-10 bg-white"
                  : "h-2.5 w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {currentIndex === index && (
                <span className="absolute left-0 top-0 h-full w-full animate-[progress_5s_linear] rounded-full bg-cyan-300" />
              )}
            </button>
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-6 right-5 z-40 hidden rounded-full border border-white/20 bg-black/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl sm:block">
          {String(currentIndex + 1).padStart(2, "0")} /{" "}
          {String(images.length).padStart(2, "0")}
        </div>
      </div>

      <style>
        {`
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes progress {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }
        `}
      </style>
    </section>
  );
}

export default Hero;