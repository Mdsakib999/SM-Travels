import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    title: "We Provide You Best Europe Sightseeing Tours",
    description:
      "Discover the beauty of Europe with our expertly curated sightseeing tours. From iconic landmarks to hidden gems, we offer the best experiences at unbeatable prices — making every trip memorable and hassle-free.",
    image: "/assets/about/about1.webp",
  },
  {
    title: "Explore Hidden Wonders Across Europe",
    description:
      "Travel beyond the obvious! Dive into cultures, cuisines, and hidden wonders across Europe. Our guided tours are designed to offer immersive experiences at every stop.",
    image: "/assets/about/about2.webp",
  },
  {
    title: "Unforgettable European Adventures Await",
    description:
      "Whether it's the Alps, the Mediterranean coast, or medieval towns, we’ve got your journey covered with expert guides and personalized itineraries.",
    image: "/assets/about/about3.avif",
  },
];

const Promotion = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const currentSlide = slides[currentIndex];

  const handleChange = (direction) => {
    if (isAnimating) return; // Prevent rapid clicks
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        direction === "next"
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length
      );
      setIsAnimating(false);
    }, 500); // Match animation duration
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16 overflow-x-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* TEXT SIDE */}
        <div className="lg:w-1/2 w-full min-h-[280px] text-center lg:text-left">
          <div
            className={`transition-all duration-500 ease-in-out ${
              isAnimating
                ? "opacity-0 translate-x-[-20px]"
                : "opacity-100 translate-x-0"
            }`}
          >
            <p className="text-orange-600 font-semibold mb-2">PROMOTION</p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {currentSlide.title}
            </h2>
            <p className="text-zinc-700 mb-6">{currentSlide.description}</p>
            <button className="bg-orange-600 text-white hover:border hover:border-orange-600 hover:bg-white hover:text-orange-600 transition-colors px-6 py-2 rounded-full">
              View Packages
            </button>

            {/* NAVIGATION BUTTONS */}
            <div className="flex justify-center lg:justify-start gap-4 mt-6">
              <button
                onClick={() => handleChange("prev")}
                aria-label="Previous Slide"
                disabled={isAnimating}
                className="w-10 h-10 rounded-full border-2 border-orange-600 flex items-center justify-center text-white bg-orange-600 hover:bg-white hover:text-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaArrowLeft size={16} />
              </button>
              <button
                onClick={() => handleChange("next")}
                aria-label="Next Slide"
                disabled={isAnimating}
                className="w-10 h-10 rounded-full border-2 border-orange-600 flex items-center justify-center text-white bg-orange-600 hover:bg-white hover:text-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative w-full sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-square flex items-center justify-center">
          {/* Image fade & scale animation */}
          <div
            className={`transition-all duration-500 ease-in-out transform relative w-full h-full flex items-center justify-center ${
              isAnimating
                ? "opacity-0 scale-95 translate-y-4"
                : "opacity-100 scale-100 translate-y-0"
            }`}
          >
            {/* Background swirl */}
            <img
              src="/assets/about/aboutBgStyle.png"
              alt=""
              aria-hidden="true"
              className="absolute w-[90%] h-[90%] md:w-[100%] md:h-[100%] object-cover z-0 rotate-6"
            />

            {/* Circle frame */}
            <img
              src="/assets/about/circle.png"
              alt=""
              aria-hidden="true"
              className="absolute w-[95%] h-[95%] z-10"
            />

            {/* Main image */}
            <img
              src={currentSlide.image}
              alt="Tour Image"
              className="w-[80%] h-[80%] object-cover rounded-full z-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
