import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqData } from "../../FakeDb/popularHotel";

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 mb-10">
        Find answers to some of the most common travel questions with SM
        Travels.
      </p>

      {/* Accordion */}
      <div className="text-left space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden transition-all"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="cursor-pointer w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition font-medium"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`px-4 py-3 text-gray-700 transition-all duration-300 ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="mt-16 bg-black text-orange-500 p-10 md:p-20 rounded-lg text-center">
        <h3 className="text-lg sm:text-3xl font-semibold mb-4">
          Still have questions?
        </h3>
        <p className="mb-3 text-white">
          Our Support team is waiting to help you 24/7
        </p>
        <button className="cursor-pointer bg-orange-600 text-white px-8 py-3 mt-3 rounded-md hover:bg-orange-500 transition">
          Let’s Chat Now
        </button>
      </div>
    </div>
  );
};

export default FaqSection;
