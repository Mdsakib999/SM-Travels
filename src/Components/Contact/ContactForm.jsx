import { LuSend } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="relative w-full">
      {/* Banner Image */}
      <img
        className="brightness-75 w-full h-[300px] sm:h-[400px] md:h-[600px] object-cover object-center"
        src="/assets/contactBanner.png"
        alt="Banner"
      />

      {/* Banner Text Overlay */}
      <div className="absolute top-[20%] md:top-[30%] left-1/2 transform -translate-x-1/2 w-full max-w-7xl px-4">
        <header className="space-y-2 mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Contact Us
          </h1>
          <p className="text-sm sm:text-lg md:text-xl text-gray-200">
            All the ways you can get in touch with us.
          </p>
        </header>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 mt-16 mb-24">
        {/* Floating Email Icon */}
        <div className="w-20 h-20 rounded-full bg-orange-600 flex items-center justify-center text-white shadow-lg">
          <MdEmail className="text-3xl" />
        </div>

        <p className="text-center mt-4 text-orange-600 text-xl font-semibold">
          Let's Connect
        </p>

        {/* Form */}
        <form className="w-full max-w-3xl mt-10 space-y-6">
          <input
            className="p-4 rounded-md placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 w-full"
            placeholder="Your Name"
            type="text"
          />
          <input
            className="p-4 rounded-md placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 w-full"
            placeholder="Your Email"
            type="email"
          />
          <input
            className="p-4 rounded-md placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 w-full"
            placeholder="Subject"
            type="text"
          />
          <textarea
            className="p-4 rounded-md placeholder:text-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 w-full h-40 resize-none"
            placeholder="Your Message"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="p-4 rounded-md bg-orange-600 text-white w-full flex items-center justify-center gap-2 text-lg hover:bg-orange-500 transition-all"
          >
            <LuSend className="text-xl" /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
