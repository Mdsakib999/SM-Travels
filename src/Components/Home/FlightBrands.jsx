import Marquee from "react-fast-marquee";

export const FlightBrands = () => {
  const brands = [
    { id: 1, name: "Air India", logo: "/assets/Flights/AirIndia.jpg" },
    { id: 2, name: "Indigo", logo: "/assets/Flights/Indigo.jpg" },
    { id: 3, name: "Spicejet", logo: "/assets/Flights/spicejet.jpg" },
    { id: 4, name: "Vistara", logo: "/assets/Flights/Vistara.jpg" },
    { id: 5, name: "Air Asia", logo: "/assets/Flights/AirAsia.jpg" },
    { id: 6, name: "Go Air", logo: "/assets/Flights/GoAir.webp" },
    { id: 7, name: "Jet Airways", logo: "/assets/Flights/JetAirways.jpg" },
    { id: 8, name: "Fly Emirates", logo: "/assets/Flights/FlyEmirates.jpg" },
    { id: 9, name: "trivago", logo: "/assets/Flights/trivago.jpg" },
    { id: 10, name: "airbnb", logo: "/assets/Flights/airbnb.jpg" },
    { id: 11, name: "Swiss", logo: "/assets/Flights/Swiss.jpg" },
    {
      id: 12,
      name: "Turkish Airlines",
      logo: "/assets/Flights/TurkishAirline.jpg",
    },
  ];

  return (
    <div className="overflow-hidden text-center my-20 md:my-32 lg:my-40">
      <Marquee
        pauseOnHover={true}
        speed={60}
        delay={1}
        className="overflow-hidden"
      >
        {brands.map((brand) => (
          <div
            key={brand.id}
            className="p-5 rounded-lg transition duration-300 transform hover:scale-105 mx-4"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="w-32 h-20 object-contain"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};
