import React from "react";
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import footerContents from "../constants/data.js";
import logo from "../assets/logo.svg";
import rocket from "../assets/rocket.svg";
import fullLogo from "../assets/fullLogo.svg";

const FooterOld = () => {
  return (
    <>
      <footer className="bg-luminr-blue pt-20 pb-10 px-4 relative overflow-hidden z-40">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#989AA6]/[0.5] to-transparent -translate-y-20" />
        <div className="container">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute z-30 left-1/2  top-0  h-[100rem] w-[100rem] opacity-50 pointer-events-none -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                className="orange__gradient"
                id="759c1415-0410-454c-8f7c-9a820de03641"
              >
                <stop stopColor="#DB6332" />
                <stop offset={1} stopColor="#e49676" />
              </radialGradient>
            </defs>
          </svg>
          <div className="flex md:flex-row flex-col w-full mx-auto justify-between py-8 relative">
            <div className="lg:w-[50%] flex flex-col justify-between">
              <div>
                <a
                  className="flex items-center space-x-2 flex-shrink-0 relative z-50"
                  href="/"
                >
                  <h2 className="text-2xl text-gradient font-medium py-2">
                    {footerContents.companyName}
                  </h2>
                </a>
                <p className="text-luminr-white/80 text-sm mt-2 max-w-sm font-normal">
                  {footerContents.companyDescription}
                </p>
              </div>
              <div className="py-5">
                <ul className="text-luminr-white/80 mt-2">
                  {[
                    {
                      icon: <IoLocationOutline className="text-xl" />,
                      text: footerContents.address,
                      link: footerContents.address,
                    },
                    {
                      icon: <IoMailOpenOutline className="text-xl" />,
                      text: footerContents.email,
                      link: `mailto:${footerContents.email}`,
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        className="flex items-center justify-start gap-2 mb-4"
                      >
                        {item.icon}
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>

                <ul className="flex space-x-8 mt-4">
                  {footerContents.socialMedia.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.link}
                        rel="noopener noreferrer"
                        className="font-normal mt-4 text-luminr-white flex space-x-2 items-center"
                      >
                        {social.icon === "GrInstagram" && <GrInstagram />}
                        {social.icon === "FaFacebookF" && <FaFacebookF />}
                        {social.icon === "FaLinkedinIn" && <FaLinkedinIn />}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <img
              src={rocket}
              alt=""
              className="absolute left-1/2 top-1/2 -translate-x-1/2 w-1/2 -translate-y-32 h-full"
            />

            <div className="grid grid-cols-2 md:flex">
              <div className="flex flex-col text-base md:px-4 mb-4">
                {footerContents.navigationLinks.map((link, index) => (
                  <a
                    key={index}
                    target="__blank"
                    rel="noopener noreferrer"
                    href={link.link}
                    className="capitalize mt-4 text-luminr-white/60 hover:text-white transition-all"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container pt-20 pb-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-luminr-white/20 to-transparent" />
          <div className="text-sm pt-4 text-center text-luminr-white flex items-center flex-wrap justify-center">
            Made with{/* */}{" "}
            <svg
              width={13}
              height={11}
              viewBox="0 0 13 11"
              fill="none"
              className="mx-1 text-luminr-white "
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.4989 5.88096L6.4989 10.833L1.4989 5.88096C1.1691 5.56004 0.909327 5.17431 0.735931 4.74805C0.562534 4.3218 0.479273 3.86426 0.49139 3.40425C0.503508 2.94424 0.610741 2.49172 0.806337 2.07519C1.00193 1.65865 1.28166 1.28713 1.62789 0.984016C1.97412 0.6809 2.37937 0.452756 2.81811 0.31395C3.25684 0.175145 3.71957 0.128686 4.17714 0.177497C4.63472 0.226309 5.07723 0.369334 5.47682 0.597567C5.8764 0.8258 6.2244 1.1343 6.4989 1.50363C6.77459 1.13698 7.12299 0.831177 7.5223 0.605366C7.92161 0.379555 8.36323 0.238596 8.81952 0.19131C9.27581 0.144023 9.73695 0.191428 10.1741 0.330557C10.6112 0.469687 11.0149 0.697545 11.3599 0.999872C11.705 1.3022 11.9839 1.67249 12.1792 2.08756C12.3745 2.50263 12.4821 2.95355 12.4951 3.4121C12.5081 3.87065 12.4264 4.32696 12.255 4.75246C12.0836 5.17797 11.8262 5.56351 11.4989 5.88496"
                fill="rgba(255,255,255,0.64)"
              />
            </svg>
            by{"  "}
            <a
              className="ml-2"
              target="__blank"
              rel="noopener noreferrer"
              href={footerContents.createdBy.website}
            >
              {footerContents.createdBy.name}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOld;
