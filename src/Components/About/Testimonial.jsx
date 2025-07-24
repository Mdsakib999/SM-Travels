import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "David Beckham",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000",
    text: "The service was outstanding from start to finish. I truly enjoyed every moment and highly recommend this experience.",
  },
  {
    name: "Emma Watson",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000",
    text: "A seamless and well-organized journey. The team was friendly, and every detail was taken care of beautifully.",
  },
  {
    name: "John Smith",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fm=jpg&q=60&w=3000",
    text: "Absolutely loved it! Everything was smooth, professional, and beyond expectations. Will definitely come back again.",
  },
];

const MAX_TEXT_LENGTH = 120; // Customize limit

const truncate = (text) =>
  text.length > MAX_TEXT_LENGTH ? text.slice(0, MAX_TEXT_LENGTH) + "..." : text;

const Testimonial = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 my-20">
      {/* Background Image */}
      <img
        src="./assets/about/aboutBG.png"
        alt="Background"
        className="w-full h-[600px] object-cover rounded-xl"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <p className="text-orange-600 font-semibold mb-2 mt-5 text-sm sm:text-base">
          Testimonial
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 max-w-lg leading-snug drop-shadow-md">
          See What Our Clients Say About Us
        </h1>

        {/* Testimonial Card */}
        <div className="relative bg-white bg-opacity-90 backdrop-blur-md px-6 py-10 rounded-xl max-w-md mx-auto shadow-lg transition-all duration-700 ease-in-out mt-10">
          {/* Arrows */}
          <button
            onClick={handlePrev}
            className="cursor-pointer absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="cursor-pointer absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 bg-black/50 text-white p-3 rounded-full"
          >
            <FaChevronRight />
          </button>

          {/* Avatar */}
          <img
            src={testimonials[current].image}
            alt="user"
            className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-white absolute -top-12 left-1/2 -translate-x-1/2"
          />
          <div className="mt-10 space-y-4">
            <p className="text-zinc-700 px-4">
              {truncate(testimonials[current].text.slice(0, 105))}...
            </p>
            <h2 className="font-semibold text-lg text-orange-600">
              {testimonials[current].name}
            </h2>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Left Image */}
      <img
        src="./assets/about/travel.png"
        alt="Decoration"
        className="absolute bottom-0 left-0 w-32 md:w-48"
      />
    </div>
  );
};

export default Testimonial;
