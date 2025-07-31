import { LuSend } from "react-icons/lu";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const ContactForm = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col-reverse md:flex-row mx-auto h-screen">
        {/* Left: Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <img
            src="https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg"
            alt="Contact banner"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right: Form Section */}
        <div className="w-full md:w-1/2 bg-white p-8 sm:p-12 lg:p-10 flex flex-col " >
          {/* Tag */}
          <span className="w-[120px] bg-orange-100 text-orange-600 text-sm font-medium rounded-full px-3 py-1 mb-4 text-center border border-oange-500">
            Best value
          </span>

          {/* Header */}
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Get in Touch with us
          </h2>
          <p className="mt-2 text-gray-600">
            At Urban Luxe, we pride ourselves on offering a range of essential 
            features that set us apart. Explore what makes us your ideal interior design partner.
          </p>
{/* Socials */}
 <div className="flex space-x-4 mt-6 mb-6">
            <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
              <FaFacebookF className="text-lg" />
            </a>
            <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
              <FaTwitter className="text-lg" />
            </a>
            <a href="#" className="p-3 bg-gray-200 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
              <FaInstagram className="text-lg" />
            </a>
          </div>


          {/* Form */}
          <form className="w-full space-y-6 flex-1">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                type="text"
                placeholder="Name*"
                className="flex-1 p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
              <input
                type="text"
                placeholder="Surname*"
                className="flex-1 p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 mt-4 sm:mt-0"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Email*"
                className="w-full p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>

            <div>
              <textarea
                placeholder="Your message (Max 500 characters)"
                maxLength={500}
                className="w-full h-40 p-3 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-600 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-orange-500 text-white rounded-md flex items-center justify-center gap-2 text-lg hover:bg-orange-500 transition-all"
            >
              <LuSend className="text-xl" /> Send message
            </button>
          </form>
        </div>
      </div>
  <div className="h-[200px] w-full bg-black">

  </div>
    </div>
  );
};

export default ContactForm;
