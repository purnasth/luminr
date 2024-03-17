import React, { useState } from "react";
import luminr from "../assets/logo.svg";
import { navLinks } from "../constants/data";
import { HiOutlineChevronDown } from "react-icons/hi"; // Importing the dropdown icon
import Appointment from "./Appointment";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(null);

  const toggleSubMenu = (index) => {
    setShowSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <nav className="fixed top-4 w-full z-50">
      <div className="container">
        <div className="w-full flex items-center justify-between backdrop-blur-md border border-luminr-white/[0.16] px-4 py-2 rounded-full ">
          <a href="/">
            <img
              src={luminr}
              alt="Luminr.co"
              className="w-24 h-auto object-contain"
            />
          </a>
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className="group relative"
                onMouseEnter={() => toggleSubMenu(index)}
                onMouseLeave={() => toggleSubMenu(null)}
              >
                <a
                  href={link.url}
                  className="z-50 text-luminr-white hover:text-white text-lg font-medium flex items-center"
                >
                  {link.title}
                  {link.sublinks && (
                    <HiOutlineChevronDown className="text-sm ml-1" />
                  )}
                </a>
                {link.sublinks && (
                  <ul
                    className={`z-40 absolute py-5 transition-all duration-500 ease-out transform origin-top -translate-x-14 ${
                      showSubMenu === index
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-0 -translate-y-4"
                    }`}
                  >
                    {link.sublinks.map((sublink) => (
                      <li
                        key={sublink.id}
                        className="bg-luminr-orange/5 font-bold text-luminr-white hover:bg-gradient hover:text-luminr-blue rounded-full space-y-4 w-48 mb-2 text-center border border-luminr-white/[0.16] backdrop-blur-md"
                      >
                        <a
                          href={sublink.url}
                          className="inline-block w-full p-4 py-2"
                        >
                          {sublink.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <Appointment />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
