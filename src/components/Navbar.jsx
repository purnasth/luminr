import React from "react";
import luminr from "../assets/logo.svg";
import { navLinks } from "../constants/data";
import Appointment from "./Appointment";

const Navbar = () => {
  return (
    <nav className="fixed top-4 w-full z-50">
      <div className="container">
        {/* <div className="w-full flex items-center justify-between backdrop-blur-md border border-luminr-white/[0.16] px-4 py-2 rounded-full "> */}
        <div className="flex items-center justify-between text-luminr-white gap-4 mx-auto border border-luminr-white/[0.16] px-4 py-2 rounded-lg backdrop-blur-md z-50">
          <a href="/">
            <img
              src={luminr}
              alt="Luminr.co"
              className="w-24 h-auto object-contain"
            />
          </a>
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.id} className="group relative">
                <a href={link.url} className="hover:text-gray-400 text-lg">
                  {link.title}
                </a>
                {link.sublinks && (
                  <ul className="absolute hidden bg-gray-800 text-luminr-white rounded-md py-2 space-y-2 group-hover:block">
                    {link.sublinks.map((sublink) => (
                      <li key={sublink.id}>
                        <a href={sublink.url} className="hover:text-gray-400">
                          {sublink.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-luminr-white font-bold py-2 px-4 rounded">
            Hop on a call
          </button> */}

          <Appointment/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
