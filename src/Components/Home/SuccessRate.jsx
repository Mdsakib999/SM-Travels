import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import shape1 from "/assets/Shapes/shape_1.png";
import shape2 from "/assets/Shapes/shape_2.png";
import shape3 from "/assets/Shapes/shape_3.png";
import shape5 from "/assets/Shapes/shape_5.png";
import shape6 from "/assets/Shapes/shape_6.png";

export const SuccessRate = () => {
  const { ref, inView } = useInView({ triggerOnce: false });

  const menuItems = [
    { id: 1, title: 12, desc: "Years Experience", suffix: "+" },
    { id: 2, title: 97, desc: "Retention Rate", suffix: "%" },
    {
      id: 3,
      title: 8000,
      desc: "Tour Completed",
      suffix: "k+",
      divideBy: 1000,
    },
    {
      id: 4,
      title: 19000,
      desc: "Happy Travelers",
      suffix: "k+",
      divideBy: 1000,
    },
  ];

  const dotPositions = [
    "bottom-12 right-0 md:-right-2 lg:right-0",
    "top-10 right-1 lg:right-1 md:-right-2",
    "bottom-10 left-1 lg:left-1 md:-left-1",
    "top-10 left-1 lg:left-1 md:-left-1.5",
  ];

  return (
    <div
      ref={ref}
      className="relative max-w-7xl mx-auto py-5 min-h-[600px] md:flex md:items-center md:justify-center my-20"
    >
      {/* Background Shapes */}
      <img src={shape1} alt="" className="absolute top-0 left-0" />
      <img src={shape2} alt="" className="absolute top-20 left-5" />
      <img src={shape3} alt="" className="absolute top-0 left-20" />
      <img src={shape5} alt="" className="absolute top-0 right-0" />
      <img src={shape6} alt="" className="absolute bottom-0 left-0" />

      {/* Main Info Circles */}
      <div className="flex items-center justify-center gap-4 lg:gap-10 flex-wrap  py-16 md:py-40 lg:py-0">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className={`relative w-52 h-52 md:w-40 md:h-40 lg:w-52 lg:h-52 rounded-full border-2 border-[#C0E6F9] flex items-center justify-center 
              ${index % 2 === 0 ? "lg:mt-10" : "mt-0"}`}
          >
            <div className="w-44 h-44 md:w-36 md:h-36 lg:w-44 lg:h-44 bg-[#EAF8FF] rounded-full shadow-md flex flex-col items-center justify-center text-center">
              <h1 className="text-3xl font-bold text-black">
                {inView ? (
                  <CountUp
                    start={0}
                    end={
                      item.divideBy ? item.title / item.divideBy : item.title
                    }
                    duration={2}
                    suffix={item.suffix}
                    decimals={item.suffix === "k" ? 0 : 0}
                  />
                ) : (
                  "0"
                )}
              </h1>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>

            {/* Double Circle Decorative Dot */}
            <div
              className={`absolute ${dotPositions[index]} flex items-center justify-center transition-all duration-300 ease-in-out`}
            >
              <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-[#59C3F0]"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
