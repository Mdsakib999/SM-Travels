import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "Flights", to: "/flights" },
    { label: "Hotels", to: "/hotels" },
    { label: "Holiday Packages", to: "/holiday-packages" },
    { label: "About Us", to: "/about" },
    { label: "Contact Us", to: "/contact" },
  ];

  return (
    <nav className="w-full bg-white shadow-md text-black sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-4 h-20 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl sm:text-3xl font-extrabold cursor-pointer text-orange-600"
        >
          SM Travels
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 items-center">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `cursor-pointer transition duration-300 ${
                  isActive
                    ? "text-orange-600 font-semibold border-b-2 border-orange-600"
                    : "text-gray-700 hover:text-orange-500"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-3xl text-orange-600 cursor-pointer transition"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed top-0 left-0 w-full h-screen bg-black/50  backdrop-blur z-50 flex flex-col items-center justify-center gap-6 p-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-3xl text-orange-600"
            aria-label="Close Menu"
          >
            <HiX />
          </button>

          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-xl font-medium ${
                  isActive
                    ? "text-orange-600 border-b-2 border-orange-600"
                    : "hover:text-orange-500 text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
