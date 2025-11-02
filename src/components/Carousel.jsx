import React, { useRef } from "react";
import {  ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const Carousel = ({ children, className = "" }) => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth * 0.8; // scroll 80% of width

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className={`relative w-full ${className}`}>
      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow hover:bg-white z-10"
      >
        <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
      </button>

      <div
        ref={carouselRef}
        className="flex overflow-x-auto scroll-smooth gap-6 px-6 py-4 scrollbar-hide"
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="flex-shrink-0">{child}</div>
        ))}
      </div>

      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow hover:bg-white z-10"
      >
        <ChevronRightIcon className="w-5 h-5 text-gray-700" />
      </button>
    </div>
  );
};

export default Carousel;
