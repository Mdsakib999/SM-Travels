import FooterImage from "/assets/FooterImg.png";
import AmericanexpressImg from "/assets/AmericanExpress.png";
import MastercardImg from "/assets/MasterCard.png";
import VisaImg from "/assets/Visa.png";
import PaypalImg from "/assets/Paypal.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPinterestP,
  FaLongArrowAltRight,
} from "react-icons/fa";
import { CiLocationOn, CiPhone, CiClock2 } from "react-icons/ci";
import { FooterSection } from "./FooterCoulmn";

export const Footer = () => {
  const socialLinks = [
    { Icon: FaFacebookF, color: "hover:bg-blue-500" },
    { Icon: FaTwitter, color: "hover:bg-blue-800" },
    { Icon: FaInstagram, color: "hover:bg-pink-600" },
    { Icon: FaYoutube, color: "hover:bg-red-600" },
    { Icon: FaLinkedin, color: "hover:bg-blue-700" },
    { Icon: FaPinterestP, color: "hover:bg-red-600" },
  ];

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Contact Us", to: "/contact" },
    { label: "Tour Guide", to: "/tour-guide" },
  ];

  const serviceLinks = [
    { label: "Flights", to: "/flights" },
    { label: "Hotels", to: "/hotels" },
    { label: "Holiday Packages", to: "/holiday-packages" },
    { label: "Cars", to: "/cars" },
    { label: "Popular Destination", to: "/popular-destination" },
  ];

  const supportLinks = [
    { label: "Help Center", to: "/help-center" },
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms-and-conditions" },
    { label: "FAQ", to: "/faq" },
  ];

  const contactInfo = [
    {
      icon: <CiLocationOn className="text-xl mt-0.5" />,
      text: "South Khulsi, Nasirabad, Chittagong",
    },
    {
      icon: <CiPhone className="text-xl" />,
      text: "+123 456 789",
    },
    {
      icon: <CiClock2 className="text-xl mt-0.5" />,
      text: (
        <>
          Mon–Sat: 8AM – 5PM
          <br />
          Sunday: Closed
        </>
      ),
    },
  ];
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      <img
        src={FooterImage}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover opacity-100 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Branding and Email Signup */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1">
          <img
            src="/assets/logo.png"
            alt="SM Travels Logo"
            className="mb-4 w-32"
          />
          <p className="text-sm leading-relaxed mb-6">
            Pharetra maecenas felisey vestibulum convallis mollis nullam congue
            sittle rivers of Finland Quebec.
          </p>
          {/* Email Signup */}

          <div className="flex items-center bg-white rounded-full overflow-hidden h-10 w-full max-w-sm relative">
            <input
              type="text"
              placeholder="Enter your mail"
              className="flex-grow px-5 text-sm text-gray-700 placeholder-gray-500 outline-none bg-transparent"
            />
            <button className="bg-orange-500 hover:bg-orange-600 text-white w-14 h-8 rounded-full flex items-center justify-center absolute right-1 px-2 transition">
              <FaLongArrowAltRight className="text-lg" />
            </button>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3 mt-6 text-gray-400 text-lg">
            {socialLinks.map(({ Icon, color }, i) => (
              <div
                key={i}
                className={`lg:h-8 lg:w-8 md:h-12 md:w-12 rounded-full border border-zinc-600 flex items-center justify-center hover:border-white ${color} transition-all duration-300 cursor-pointer group p-2`}
              >
                <Icon size={16} className="group-hover:text-white" />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <FooterSection title="Quick Links" links={quickLinks} />

        {/* Services */}
        <FooterSection title="Services" links={serviceLinks} />

        {/* Support */}
        <FooterSection title="Support" links={supportLinks} />

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-4 text-sm">
            {contactInfo.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                {item.icon}
                <span>{item.text}</span>
              </li>
            ))}
            <li className="flex gap-2 mt-2 overflow-hidden">
              <img src={VisaImg} alt="Visa" className="w-10" />
              <img src={MastercardImg} alt="MasterCard" className="w-10" />
              <img src={AmericanexpressImg} alt="Amex" className="w-10" />
              <img src={PaypalImg} alt="Discover" className="w-10" />
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        Copyright @SM Travels | All Right Reserved | 2025
      </div>
    </footer>
  );
};
