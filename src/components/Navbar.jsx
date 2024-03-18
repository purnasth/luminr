import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import luminr from "../assets/logo.svg";
import mobileLuminr from "../assets/mobile_logo.svg";
import { navLinks } from "../constants/data";
import { HiOutlineChevronDown } from "react-icons/hi";
import Appointment from "./Appointment";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleSubMenu = (index) => {
    setShowSubMenu((prevIndex) => (prevIndex === index ? null : index));
  };

  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section[id]");
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    let currentActiveSection = "";
    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight;

      const threshold = windowHeight * 0.5;
      const isVisible =
        top - scrollPosition < windowHeight - threshold &&
        bottom - scrollPosition > threshold;

      if (isVisible) {
        currentActiveSection = section.id;
      }
    });

    setActiveSection(currentActiveSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (id) => {
    setActiveSection(id);
    smoothScrollTo(id);
  };

  return (
    <nav className="fixed top-4 w-full z-50 px-4">
      <div className="sm:container">
        <div className="w-full flex items-center justify-between backdrop-blur-md border border-luminr-white/[0.16] px-4 py-2 rounded-full ">
          <NavLink to="/">
            <img
              src={luminr}
              alt="Luminr.co"
              className="w-24 h-auto object-contain sm:block hidden"
            />
            <img
              src={mobileLuminr} // Using mobile logo on mobile devices
              alt="Luminr.co"
              className="w-10 h-8 object-contain sm:hidden block"
            />
          </NavLink>
          <div className="hidden lg:flex space-x-6">
            {navLinks.map((link, index) => (
              <div
                key={link.id}
                className="group relative"
                onMouseEnter={() => toggleSubMenu(index)}
                onMouseLeave={() => toggleSubMenu(null)}
              >
                <NavLink
                  // to={link.url}
                  className={`z-50 text-lg font-medium flex items-center ${
                    (location.hash === `#${link.id}` ||
                      location.pathname === link.url ||
                      activeSection === link.id) &&
                    "text-luminr-orange transition-color duration-300 ease-in-out"
                  }`}
                  onClick={() => handleNavLinkClick(link.id)}
                >
                  {link.title}
                  {link.sublinks && (
                    <HiOutlineChevronDown className="text-sm ml-1" />
                  )}
                </NavLink>
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
                        <NavLink
                          to={
                            sublink.url.startsWith("#")
                              ? sublink.url
                              : `#${sublink.id}`
                          }
                          className={`inline-block w-full p-4 py-2 ${
                            (location.hash === `#${sublink.id}` ||
                              location.pathname === sublink.url ||
                              activeSection === sublink.id) &&
                            "text-luminr-orange"
                          }`}
                          onClick={() => handleNavLinkClick(sublink.id)}
                        >
                          {sublink.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Appointment />
          </div>

          <div className="lg:hidden">
            {/* Hamburger menu icon */}
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 focus:outline-none transition-all duration-300 ease-linear transform hover:scale-110 bg-luminr-orange/10 hover:bg-luminr-orange/40 rounded-full backdrop-blur-md border border-luminr-white/[0] hover:border-luminr-white/[0.16]  text-luminr-white"
            >
              {showMenu ? (
                <IoCloseSharp className="text-2xl" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 0 24 24"
                  width="24px"
                  fill="#F2F3D9"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M21 18H2v2h19v-2zm-2-8v4H4v-4h15m1-2H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm1-4H2v2h19V4z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          showMenu
            ? "opacity-100 scale-100 -translate-y-0"
            : "opacity-0 scale-0 -translate-y-8"
        } sm:container lg:hidden transition-all duration-300 ease-out transform origin-top w-auto h-full z-40 backdrop-blur-md border bg-luminr-blue/30 border-luminr-white/[0.16] mt-4 pb-8 rounded-t-3xl rounded-b-3xl`}
      >
        <ul className="flex flex-col space-y-4 gap-2 mb-2 p-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                // to={link.url}
                className={`text-xl font-medium ${
                  (location.hash === `#${link.id}` ||
                    location.pathname === link.url ||
                    activeSection === link.id) &&
                  "text-luminr-orange"
                }`}
                onClick={() => handleNavLinkClick(link.id)}
              >
                {link.title}
              </NavLink>
              {link.sublinks && (
                <ul className="ml-4 mt-4">
                  {link.sublinks.map((sublink) => (
                    <li
                      key={sublink.id}
                      className="ml-5 text-xl list-disc text-luminr-orange"
                    >
                      <NavLink
                        to={
                          sublink.url.startsWith("#")
                            ? sublink.url
                            : `#${sublink.id}`
                        }
                        className={`text-base text-luminr-white ${
                          (location.hash === `#${sublink.id}` ||
                            location.pathname === sublink.url ||
                            activeSection === sublink.id) &&
                          "text-luminr-orange"
                        }`}
                        onClick={() => handleNavLinkClick(sublink.id)}
                      >
                        {sublink.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="text-center scale-110 w-auto">
          <Appointment />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
