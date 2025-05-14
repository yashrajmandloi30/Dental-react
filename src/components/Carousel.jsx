import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "/assets/images/denatal-banner/1.png",
      heading: "Keep Your Teeth Healthy",
      subheading: "Take The Best Quality Dental Treatment",
    },
    {
      id: 2,
      image: "/assets/images/denatal-banner/2.png",
      heading: "Keep Your Teeth Healthy",
      subheading: "Take The Best Quality Dental Treatment",
    },
    {
      id: 3,
      image: "/assets/images/denatal-banner/3.png",
      heading: "Keep Your Teeth Healthy",
      subheading: "Take The Best Quality Dental Treatment",
    },
    {
      id: 4,
      image: "/assets/images/denatal-banner/4.png",
      heading: "Keep Your Teeth Healthy",
      subheading: "Take The Best Quality Dental Treatment",
    },
    {
      id: 5,
      image: "/assets/images/denatal-banner/5.png",
      heading: "Keep Your Teeth Healthy",
      subheading: "Take The Best Quality Dental Treatment",
    },
    {
      id: 6,
      image: "/assets/images/denatal-banner/7.png",
      heading: "Keep Your Teeth Healthy",
      subheading: "Take The Best Quality Dental Treatment",
    },
  ];

  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setActive(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <div
      className="relative overflow-hidden min-h-[80vh] group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-[80vh]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === active ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full text-white hover:bg-[#07a1d9] opacity-0 group-hover:opacity-100 transition"
        aria-label="Previous"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-3 rounded-full text-white hover:bg-[#07a1d9] opacity-0 group-hover:opacity-100 transition"
        aria-label="Next"
      >
        <ChevronRight />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 relative ${
              index === active ? "w-12 bg-[#07a1d9]" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
