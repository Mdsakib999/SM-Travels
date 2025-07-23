import { BiSwim } from "react-icons/bi";
import { FaTaxi, FaRegMap, FaPaperPlane, FaRegHeart } from "react-icons/fa";
import { FaVectorSquare } from "react-icons/fa6";
import { ImLeaf } from "react-icons/im";
import { PiCityLight } from "react-icons/pi";
import AeroplaneImg from "/assets/Aeroplane.png";
import HawaiiImg from "/assets/Hawaii.jpg";
import backgroundElement from "/assets/BackgroundElement.png";
import RomeImg from "/assets/Rome.jpg";
import { PreHeading } from "../Shared/PreHeading";

export const ResortBooking = () => {
  const menuItems = [
    {
      id: 1,
      title: "Choose Destination",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, tortor tempus.",
      icon: <FaVectorSquare className="text-white w-5 h-5" />,
      bgColor: "bg-yellow-400",
    },
    {
      id: 2,
      title: "Check Availability",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, tortor tempus.",
      icon: <BiSwim className="text-white w-5 h-5" />,
      bgColor: "bg-red-400",
    },
    {
      id: 3,
      title: "Let's Go",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, tortor tempus.",
      icon: <FaTaxi className="text-white w-5 h-5" />,
      bgColor: "bg-teal-400",
    },
  ];

  const iconList = [
    { Icon: ImLeaf, hoverBg: "hover:bg-green-500" },
    { Icon: FaRegMap, hoverBg: "hover:bg-blue-500" },
    { Icon: FaPaperPlane, hoverBg: "hover:bg-purple-500" },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="w-full space-y-6">
          <PreHeading>Fast & Easy</PreHeading>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 leading-snug">
            Get Your Favorite <br className="hidden sm:block" />
            Resort Bookings
          </h2>

          <div className="space-y-5">
            {menuItems.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <div
                  className={`min-w-[44px] h-12 flex items-center justify-center rounded-md ${item.bgColor}`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-semibold">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full flex justify-center items-center">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-xs sm:max-w-sm p-4 relative z-10">
            <img
              src={HawaiiImg}
              alt="Trip to Hawaii"
              className="rounded-xl w-full h-40 object-cover"
            />
            <div className="mt-3 space-y-1">
              <h4 className="text-lg font-semibold text-gray-800">
                Trip to Hawaii
              </h4>
              <p className="text-sm text-gray-500">14-29 June | by JR Martin</p>

              <div className="flex items-center gap-3 mt-2 text-gray-500">
                {iconList.map(({ Icon, hoverBg }, i) => (
                  <div
                    key={i}
                    className={`h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 cursor-pointer group p-2 ${hoverBg}`}
                  >
                    <Icon size={14} className="group-hover:text-white" />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                  <PiCityLight size={18} className="text-gray-500" />
                  <p className="text-sm text-gray-400 whitespace-nowrap">
                    60 people are interested
                  </p>
                </div>
                <FaRegHeart
                  size={18}
                  className="text-gray-500 hover:text-red-500"
                />
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-[-45px] right-[-10px] sm:right-[-40px] bg-white rounded-xl shadow-md px-3 py-2 w-40 sm:w-48 text-sm z-20">
              <div className="flex gap-2">
                <img
                  src={RomeImg}
                  alt="Rome"
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500 mb-1">Ongoing</p>
                  <h4 className="font-semibold text-sm text-gray-800 whitespace-nowrap">
                    Trip to Rome
                  </h4>
                  <p className="text-xs mt-1 font-semibold whitespace-nowrap">
                    <span className="text-orange-500">40%</span> completed
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                    <div
                      className="bg-orange-500 h-1 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Airplane Image */}
          <div className="absolute top-0 right-2 sm:right-4 md:right-8 lg:right-10 w-20 sm:w-28 md:w-36 lg:w-44 -z-10">
            <img
              src={AeroplaneImg}
              alt="Aeroplane"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Background Element */}
          <div className="absolute bottom-[-60px] left-0 w-32 sm:w-48 md:w-56 -z-10">
            <img
              src={backgroundElement}
              alt="Background"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Optional Glow Circle if defined */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-20">
            <div className="glow-circle"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
