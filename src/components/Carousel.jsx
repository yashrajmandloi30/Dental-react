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
      className="relative overflow-hidden h-[60vh] sm:h-[70vh] md:h-[80vh] group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      <div className="relative w-full h-full">
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
              className="w-full h-full object-cover object-center"
            />

            {/* Optional Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8 md:px-12 bg-black/30">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">{slide.heading}</h2>
              <p className="text-sm sm:text-base md:text-lg mt-2">{slide.subheading}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 sm:p-3 rounded-full text-white hover:bg-[#f5ba98] opacity-0 group-hover:opacity-100 transition"
        aria-label="Previous"
      >
        <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 sm:p-3 rounded-full text-white hover:bg-[#f5ba98] opacity-0 group-hover:opacity-100 transition"
        aria-label="Next"
      >
        <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 relative ${
              index === active ? "w-12 bg-[#f5ba98]" : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
