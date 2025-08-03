import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const tourData = [
  {
    label: "Leisure & Getaways",
    percent: 75,
    color: "#FF7F50",
  },
  {
    label: "Honeymoon Retreats",
    percent: 55,
    color: "#FF69B4",
  },
  {
    label: "Festive Events",
    percent: 40,
    color: "#6A5ACD",
  },
];

const Trends = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Image */}
        <div className="w-full md:w-1/2">
          <img
            src="./assets/about/leftImage.png"
            alt="Popular Tour Plans"
            className="w-96"
          />
        </div>

        {/* Text + Animated Counters */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <p className="text-orange-600 font-semibold uppercase tracking-wide">
            Trend
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
            Our Popular Tour Plans
          </h1>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-prose">
            Discover unforgettable adventures with our expertly curated tours.
            From breathtaking landscapes to cultural gems, our plans ensure a
            seamless and memorable experience for every traveler.
          </p>

          <div className="flex flex-col items-center sm:flex-row gap-6 mt-8 justify-center md:pr-10">
            {tourData.map((item, idx) => {
              const radius = 50;
              const circumference = 2 * Math.PI * radius;
              const offset =
                circumference - (item.percent / 100) * circumference;

              return (
                <div
                  key={idx}
                  className="relative w-[160px] h-[160px] flex flex-col items-center justify-center"
                >
                  <svg
                    viewBox="0 0 120 120"
                    className="w-full h-full rotate-[-90deg]"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="12"
                    />
                    <circle
                      cx="60"
                      cy="60"
                      r={radius}
                      fill="none"
                      stroke={item.color}
                      strokeWidth="12"
                      strokeDasharray={circumference}
                      strokeDashoffset={inView ? offset : circumference}
                      style={{
                        transition: "stroke-dashoffset 2s ease",
                      }}
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Centered Percentage Text */}
                  <span className="absolute text-sm md:text-xl font-bold mb-8 lg:mb-5">
                    {inView && <CountUp end={item.percent} duration={3} />}%
                  </span>

                  {/* Label */}
                  <p className="text-sm text-gray-700 font-medium text-center max-w-[100px]">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trends;
