import { ArrowRight } from "lucide-react";

const NewsLetter = () => {
  return (
    <div className="relative w-full max-w-3xl lg:max-w-5xl mx-auto rounded-lg shadow-2xl shadow-gray-500 my-20">
      <img
        className="brightness-50 h-64 md:h-80 lg:h-96 w-full max-w-6xl mx-auto mb-10 object-cover rounded-lg"
        src="/assets/news.jpg"
        alt="Newsletter Banner"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold w-full max-w-md leading-tight">
          Subscribe to Our Newsletter
        </h1>
        <div className="relative w-full max-w-sm mt-6 px-3 md:px-0">
          <input
            className="w-full bg-white text-black rounded-full px-6 py-3 placeholder:text-gray-500 outline-none"
            type="email"
            name="Email"
            id="Email"
            placeholder="Enter Your Email"
          />
          <button
            type="submit"
            className="absolute right-6 sm:right-5 md:right-2 top-1/2 -translate-y-1/2 bg-orange-600 text-white p-1 sm:p-2 rounded-full hover:bg-orange-500 duration-300"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
