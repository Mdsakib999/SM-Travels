/* eslint-disable no-unused-vars */
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
      icon: <FaVectorSquare className="text-white w-6 h-6" />,
      bgColor: "bg-yellow-400",
    },
    {
      id: 2,
      title: "Check Availability",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, tortor tempus.",
      icon: <BiSwim className="text-white w-6 h-6" />,
      bgColor: "bg-red-400",
    },
    {
      id: 3,
      title: "Let's Go",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, tortor tempus.",
      icon: <FaTaxi className="text-white w-6 h-6" />,
      bgColor: "bg-teal-400",
    },
  ];

  const iconList = [
    { Icon: ImLeaf, hoverBg: "hover:bg-green-500" },
    { Icon: FaRegMap, hoverBg: "hover:bg-blue-500" },
    { Icon: FaPaperPlane, hoverBg: "hover:bg-purple-500" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-16 my-20 overflow-x-hidden md:overflow-visible relative">
      <div className="flex flex-col lg:flex-row justify-around gap-10">
        <div className="relative w-full h-full flex justify-center items-center order-1 md:order-2">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-lg w-64  md:w-80 p-4 relative z-10 -top-24 -left-5 md:top-10 md:-left-16 lg:left-24">
            <img
              src={HawaiiImg}
              alt="Trip to Hawaii"
              className="rounded-xl w-full h-40 object-fit"
            />
            <div className="mt-3 space-y-1">
              <h4 className="text-lg font-semibold text-gray-800">
                Trip to Hawaii
              </h4>
              <p className="text-sm text-gray-500">14-29 June | by JR Martin</p>

              <div className="flex items-center gap-4 mt-2 text-gray-500">
                {iconList.map(({ Icon, hoverBg }, i) => (
                  <div
                    key={i}
                    className={`lg:h-8 lg:w-8 md:h-12 md:w-12 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-300 cursor-pointer group p-2 ${hoverBg}`}
                  >
                    <Icon size={16} className="group-hover:text-white" />
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center mt-3">
                {/* left */}
                <div className="flex items-center gap-4 mt-3">
                  <PiCityLight size={20} className="text-gray-500" />
                  <p className="text-sm text-gray-400">
                    60 people are interested
                  </p>
                </div>
                {/* right */}
                <FaRegHeart
                  size={20}
                  className="text-gray-500 hover:text-red-500"
                />
              </div>
            </div>

            {/* Small floating card */}
            <div className="absolute bottom-12 left-44 md:top-50 md:right-[-86px] lg:right-[-60px] lg:top-48 bg-white rounded-xl shadow-md px-4 py-3 w-40 md:w-52 text-sm">
              <div className="flex gap-2">
                <img
                  src={RomeImg}
                  alt="RomeTower"
                  className="w-8 h-8 md:w-12 md:h-12 rounded-full"
                />
                <div className="flex flex-col">
                  <p className="text-xs text-gray-500 mb-1">Ongoing</p>
                  <h4 className="font-semibold text-md text-gray-800 whitespace-nowrap">
                    Trip to Rome
                  </h4>
                  <p className="text-xs mt-1 font-semibold whitespace-nowrap">
                    <span className="text-orange-500">40% </span> completed
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Blurred Glow */}
          <div className="absolute top-0 left-0 md:top-20 md:left-24 lg:top-20 lg:left-52 transform translate-x-1/2 -translate-y-1/2">
            <div className="glow-circle"></div>
          </div>

          {/* background element */}
          <div className="absolute md:left-0 md:-bottom-40 lg:-bottom-40 lg:left-36 transform translate-x-1/2 -translate-y-1/2">
            <img
              src={backgroundElement}
              alt="Background Element"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Airplane */}
          <div className="absolute top-0 right-0 md:left-44 md:top-40 lg:top-2 lg:right-0 transform translate-x-1/2 -translate-y-1/2 w-full md:w-1/2 xl:w-2/3">
            <img
              src={AeroplaneImg}
              alt="Aeroplane"
              className="w-full  h-auto object-contain"
            />
          </div>
        </div>

        <div className="space-y-6 order-2 md:order-1">
          <PreHeading>Fast & Easy</PreHeading>
          <h2 className="text-4xl font-extrabold text-gray-800 leading-snug">
            Get Your Favourite <br /> Resort Bookings
          </h2>

          <div className="space-y-5">
            {menuItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div
                  className={`w-18 h-12 flex items-center justify-center rounded-md ${item.bgColor}`}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
