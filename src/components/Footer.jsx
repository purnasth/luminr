import React from "react";
import { IoLocationOutline, IoMailOpenOutline } from "react-icons/io5";
import footerContents from "../constants/data.js";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa";
import Bg from "./Bg.jsx";

const Footer = () => {
  return (
    <>
      <footer className="relative pt-48 pb-0 overflow-hidden">
        <Bg />
        {/* <div className="h-px w-full bg-luminr-white/20 -translate-y-20" /> */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-luminr-white to-transparent" />
        {/* <div className="h-px w-full bg-gradient-to-r from-transparent via-luminr-white/20 to-transparent -translate-y-20" /> */}
        <div className="container max-w-7xl -translate-y-32">
          {/* <svg
            viewBox="0 0 1024 1024"
            className="absolute -z-10 left-1/2  top-0  h-[100rem] w-[100rem] opacity-50 pointer-events-none -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
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
          </svg> */}
          <div className="bg-luminr-blue/20 border border-luminr-white/30 backdrop-blur-md rounded-3xl flex flex-col text-luminr-blue gap-20 justify-between px-10 py-16 z-10">
            <div className="flex flex-row gap-8 mx-auto">
              <svg
                className="lg:h-48 w-64 lg:w-auto"
                viewBox="0 0 499 189"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M104.488 88.2541C108.637 81.2897 111.02 73.151 111.02 64.4557C111.02 38.7388 90.1727 17.8911 64.4558 17.8911C38.7388 17.8911 17.8911 38.7388 17.8911 64.4557C17.8911 74.9735 21.3782 84.6769 27.2595 92.4727L17.7744 108.901C6.76084 97.3372 0 81.686 0 64.4557C0 28.8578 28.8578 0 64.4558 0C100.054 0 128.912 28.8578 128.912 64.4557C128.912 79.9546 123.441 94.1758 114.326 105.294L104.488 88.2541Z"
                  fill="#DB6332"
                ></path>
                <path
                  d="M73.6221 188.016C65.0546 188.016 58.949 186.196 55.3053 182.555C51.6617 178.914 49.8398 173.207 49.8398 165.434V87.0592H77.6104V162.334C77.6104 164.499 78.0536 165.975 78.9399 166.762C79.8262 167.451 81.2049 167.795 83.0759 167.795C84.3561 167.795 85.5871 167.697 86.7688 167.5C88.049 167.303 89.2307 167.008 90.314 166.614V185.064C87.7536 186.048 85.2424 186.786 82.7805 187.278C80.417 187.77 77.3642 188.016 73.6221 188.016Z"
                  fill="#F2F3D9"
                ></path>
                <path
                  d="M118.667 188.016C110.494 188.016 104.093 185.704 99.4643 181.079C94.8359 176.454 92.5216 169.665 92.5216 160.711V116.579H120.292V158.497C120.292 164.597 123.394 167.648 129.598 167.648C131.863 167.648 134.079 167.156 136.246 166.172C138.412 165.188 140.135 163.958 141.416 162.482V116.579H169.186V186.54H143.188L142.45 181.226C139.692 183.194 136.295 184.818 132.257 186.097C128.318 187.376 123.788 188.016 118.667 188.016Z"
                  fill="#F2F3D9"
                ></path>
                <path
                  d="M182.409 186.54V116.579H208.112L208.85 122.188C211.903 120.121 215.3 118.448 219.043 117.169C222.883 115.792 227.068 115.103 231.598 115.103C236.128 115.103 239.673 115.742 242.234 117.022C244.794 118.301 246.862 120.17 248.438 122.63C251.589 120.367 255.134 118.547 259.073 117.169C263.111 115.792 267.838 115.103 273.254 115.103C281.428 115.103 287.435 117.268 291.275 121.597C295.116 125.828 297.036 132.323 297.036 141.08V186.54H269.709V144.327C269.709 141.178 269.069 138.964 267.789 137.685C266.508 136.308 264.391 135.619 261.437 135.619C257.596 135.619 254.445 136.996 251.983 139.752C252.18 141.031 252.279 142.261 252.279 143.442C252.279 144.524 252.279 145.754 252.279 147.132V186.54H226.576V143.884C226.576 141.031 226.084 138.964 225.099 137.685C224.114 136.308 222.243 135.619 219.486 135.619C217.615 135.619 215.793 136.111 214.02 137.095C212.248 138.079 210.672 139.26 209.293 140.637V186.54H182.409Z"
                  fill="#F2F3D9"
                ></path>
                <path
                  d="M316.731 186.54V136.8H306.539L308.902 116.579H344.502V186.54H316.731Z"
                  fill="#F2F3D9"
                ></path>
                <path
                  d="M357.821 186.54V116.579H383.819L384.558 121.892C387.217 120.121 390.713 118.547 395.046 117.169C399.477 115.792 404.204 115.103 409.226 115.103C417.991 115.103 424.392 117.268 428.429 121.597C432.467 125.927 434.486 132.618 434.486 141.67V186.54H406.715V144.475C406.715 141.326 406.026 139.063 404.647 137.685C403.269 136.308 400.856 135.619 397.409 135.619C395.341 135.619 393.175 136.111 390.91 137.095C388.743 138.079 386.971 139.26 385.592 140.637V186.54H357.821Z"
                  fill="#F2F3D9"
                ></path>
                <path
                  d="M446.97 186.54V116.579H473.706L474.445 122.188C477.301 120.515 480.944 118.99 485.376 117.612C489.807 116.234 494.288 115.398 498.818 115.103V135.766C496.258 135.963 493.451 136.308 490.398 136.8C487.444 137.292 484.539 137.931 481.683 138.718C478.926 139.407 476.611 140.194 474.74 141.08V186.54H446.97Z"
                  fill="#F2F3D9"
                ></path>
                <path
                  d="M337.29 99.8067C337.29 106.024 332.246 111.064 326.023 111.064C319.801 111.064 314.757 106.024 314.757 99.8067C314.757 93.5895 319.801 88.5494 326.023 88.5494C332.246 88.5494 337.29 93.5895 337.29 99.8067Z"
                  fill="#DB6332"
                ></path>
              </svg>
              <svg
                className="lg:w-56 hidden lg:inline-block"
                viewBox="0 0 213 181"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M89.0008 79.8018C92.8712 89.0326 108.413 105.324 115.419 108.02C123.359 108.119 129.87 114.093 130.804 121.791C132.865 122.334 134.757 123.281 136.395 124.547C138.843 122.972 141.752 122.047 144.882 122.047C153.558 122.047 160.593 129.068 160.593 137.728C160.593 138.479 160.52 139.212 160.419 139.935C164.329 140.067 167.87 141.621 170.55 144.102C173.349 139.793 178.198 136.937 183.725 136.937C192.4 136.937 199.435 143.956 199.435 152.616C199.435 154.88 198.945 157.032 198.079 158.975C205.823 159.945 211.817 166.525 211.817 174.519C211.817 176.456 211.448 178.304 210.805 180.016H81.6112C81.5231 179.967 81.431 179.923 81.3429 179.873C81.2877 179.924 81.2259 179.966 81.1693 180.016H3.48837C1.8024 177.517 0.817383 174.508 0.817383 171.268C0.817383 162.608 7.8519 155.59 16.5277 155.59C21.0306 155.59 25.0785 157.492 27.9429 160.522C30.2903 158.039 33.4361 156.329 36.975 155.79C36.7396 154.884 36.6002 153.941 36.6002 152.961C36.6002 146.75 41.645 141.715 47.8681 141.715C49.0043 141.715 50.0985 141.886 51.1322 142.197C52.0001 134.357 58.6546 128.257 66.7399 128.257C69.7989 128.257 72.6356 129.147 75.0462 130.658C85.2856 112.989 77.5357 85.9513 77.5357 85.9513C84.5715 85.9513 89.0008 79.8018 89.0008 79.8018Z"
                  fill="#1E1E1D"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M89.0927 86.7578C88.4851 85.7096 88.9297 86.4382 89.0664 86.6867C89.1624 86.8616 89.4715 87.3745 89.3676 87.2036C89.1769 86.8906 89.1979 86.9379 89.0927 86.7578Z"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M91.0493 89.1917C93.2243 92.4541 94.9642 95.499 99.8359 100.455"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M101.29 102.284C101.914 103.194 102.982 103.826 103.558 104.748"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M105.275 106.564C106.173 107.186 107.146 107.915 107.936 108.673"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M87.1347 93.1067C93.877 106.374 94.0774 113.336 94.3233 115.516C94.4062 116.244 94.4824 117.012 94.4824 117.744C94.4824 117.864 94.4824 118.862 94.4824 118.548"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M83.0132 86.5336C83.1816 87.0307 83.6547 87.4516 84.1416 88.5957"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M94.4346 122.378C94.4346 123.144 93.829 126.216 93.2241 126.818"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M83.2554 96.3049C83.2554 100.223 84.4403 104.081 84.7138 108.003C84.8033 109.285 84.7914 110.624 84.7428 111.91C84.7204 112.51 84.5284 114.285 84.4547 113.689"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M138.1 127.716C138.1 124.693 130.247 121.124 127.886 122.635"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M175.456 170.131C175.456 168.416 176.807 166.69 176.205 164.784C174.92 160.723 167.061 158.165 163.958 161.455C163.645 161.787 164.027 160.545 164.027 160.09C164.027 159.405 164.166 158.541 164.012 157.872C163.548 155.845 160.475 153.34 158.522 152.966C155.373 152.365 152.321 152.859 149.667 154.608C148.857 155.142 147.875 155.893 147.48 156.8C147.279 157.263 147.247 158.803 147.247 158.298C147.247 154.222 138.138 152.435 135.353 153.245C132.546 154.062 129.952 156.396 129.243 159.268C129.121 159.766 129.183 163.76 129.041 163.794C127.73 164.111 126.199 163.617 124.855 163.806C122.991 164.067 119.64 166.799 119.64 168.863"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M152.668 163.971C152.668 162.1 150.837 160.648 149.313 159.928C146.208 158.463 142.924 158.412 140.046 160.566C139.421 161.034 138.545 161.641 138.241 162.404"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M196.862 166.832C198.315 165.653 198.291 163.316 197.889 161.68C197.071 158.345 195.043 155.762 191.555 154.884C190.798 154.693 189.776 154.395 188.992 154.638"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M100.112 160.581C100.112 160.951 99.7467 159.927 99.485 159.664C99.0918 159.271 98.5052 159.011 97.9937 158.811C96.4116 158.19 93.83 157.898 92.1993 158.456C90.3936 159.073 88.2645 160.428 87.6608 162.351C87.5254 162.784 87.8713 165.25 87.532 165.485C87.5109 165.498 84.5467 164.843 84.0732 164.888C80.4001 165.226 78.8259 168.469 78.8259 171.645"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M130.305 134.509C130.128 134.835 130.294 133.761 130.188 133.406C130.03 132.872 129.638 132.364 129.284 131.943C128.187 130.645 126.057 129.159 124.356 128.874C122.475 128.558 119.956 128.736 118.511 130.14C118.186 130.456 117.317 132.789 116.906 132.834C116.881 132.838 114.585 130.85 114.149 130.664C110.757 129.213 107.829 131.316 106.318 134.109"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M85.6553 147.534C85.6553 143.323 78.7549 141.985 75.9011 141.985C68.8048 141.985 64.1427 146.021 64.1427 153.101"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M72.6201 157.143C71.7232 155.089 67.8094 154.143 65.8854 153.944C61.3904 153.474 55.9616 156.617 54.7741 161.282C54.465 162.494 54.711 163.833 54.711 165.068"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M57.3438 156.125C57.3438 152.684 50.3395 152.53 48.2379 152.82C42.625 153.598 39.165 158.967 39.165 164.184"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M42.6523 173.412C42.6523 166.634 35.5652 163.542 29.6512 164.881C27.3497 165.402 22.8757 167.427 22.8757 170.376"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M16.6631 160.072C14.5181 159.381 11.6683 160.405 9.80348 161.38C9.14987 161.722 8.55411 162.169 8.0136 162.669C7.75321 162.91 7.27716 163.79 7.27716 163.436"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5.73633 165.916C5.72449 165.89 5.49305 166.17 5.45491 166.223C5.23002 166.545 5.04197 166.887 4.87232 167.241C4.82235 167.344 4.64086 167.786 4.63823 167.747"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M152.668 128.741C154.488 128.741 155.951 131.386 156.228 132.927"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M157.025 135.475C157.025 136.285 157.1 137.08 157.1 137.885"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M72.9434 133.402C71.577 133.018 70.5407 132.519 69.0638 132.519C68.9862 132.519 68.6285 132.465 68.6193 132.572"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M65.8076 132.271C64.0677 132.271 63.1971 132.601 61.7071 133.235"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M182.809 139.743C181.385 139.743 179.398 140.092 178.152 140.852"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M185.475 140.115C186.626 140.115 188.466 140.866 189.309 141.675"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M178.152 130.988C178.152 128.512 176.14 126.503 173.659 126.503C171.177 126.503 169.165 128.512 169.165 130.988C169.165 133.466 171.177 135.474 173.659 135.474C176.14 135.474 178.152 133.466 178.152 130.988Z"
                  fill="#1E1E1D"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M211.501 152.548C211.501 150.854 210.125 149.481 208.429 149.481C206.732 149.481 205.357 150.854 205.357 152.548C205.357 154.242 206.732 155.615 208.429 155.615C210.125 155.615 211.501 154.242 211.501 152.548Z"
                  fill="#1E1E1D"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M71.9521 116.58C71.9521 113.756 69.6586 111.467 66.8298 111.467C64.001 111.467 61.7074 113.756 61.7074 116.58C61.7074 119.403 64.001 121.693 66.8298 121.693C69.6586 121.693 71.9521 119.403 71.9521 116.58Z"
                  fill="#1E1E1D"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M30.9883 150.181C30.9883 148.836 29.8941 147.744 28.5461 147.744C27.1968 147.744 26.104 148.836 26.104 150.181C26.104 151.528 27.1968 152.619 28.5461 152.619C29.8941 152.619 30.9883 151.528 30.9883 150.181Z"
                  fill="#1E1E1D"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M118.398 109.377C118.801 111.067 120.502 112.111 122.197 111.709C123.891 111.305 124.936 109.607 124.532 107.916C124.129 106.225 122.427 105.182 120.733 105.584C119.039 105.988 117.994 107.686 118.398 109.377Z"
                  fill="#1E1E1D"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M160.637 124.45C160.853 125.353 161.762 125.911 162.666 125.695C163.571 125.48 164.129 124.574 163.914 123.67C163.698 122.767 162.79 122.209 161.885 122.425C160.98 122.64 160.422 123.546 160.637 124.45Z"
                  fill="#1E1E1D"
                  stroke="#FBFCE1"
                  strokeWidth="1.30496"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M56.0987 9.94206C56.0987 9.94206 53.3685 4.96003 48.4947 2.48999C43.6223 0.0199459 36.8547 0.29428 36.8547 0.29428C36.8547 0.29428 33.3789 5.39217 32.7686 10.8123C32.1584 16.2325 34.164 21.7425 34.164 21.7425L59.1629 68.2097L81.0977 56.4093L56.0987 9.94206Z"
                  fill="#DB6332"
                ></path>
                <path
                  d="M76.7606 33.2326C76.7606 33.2326 74.8024 29.6262 72.2695 27.3109C69.7353 24.9957 66.771 24.1582 66.771 24.1582C66.771 24.1582 65.9911 26.9098 66.5317 30.2973C67.0735 33.6847 68.7884 37.5216 68.7884 37.5216L86.8475 71.0899C86.8475 71.0899 86.7765 73.5465 91.2807 71.1228C95.4943 68.8568 94.8197 66.8013 94.8197 66.8013L76.7606 33.2326Z"
                  fill="#DB6332"
                ></path>
                <path
                  d="M50.3637 47.9299C50.3637 47.9299 48.4055 44.3235 45.8713 42.0082C43.3371 39.693 40.3742 38.8555 40.3742 38.8555C40.3742 38.8555 39.5943 41.607 40.1348 44.9945C40.6753 48.3819 42.3915 52.2182 42.3915 52.2182L60.4507 85.7877C60.4507 85.7877 61.7224 86.5203 65.3271 84.6594C67.3392 83.6218 68.4229 81.4979 68.4229 81.4979L50.3637 47.9299Z"
                  fill="#DB6332"
                ></path>
                <path
                  d="M88.5041 77.3565L75.1004 84.4831L76.5642 87.2356C76.5642 87.2356 80.2018 87.0647 84.4285 84.7567C88.5935 82.4828 89.9678 80.1104 89.9678 80.1104L88.5041 77.3565Z"
                  fill="#883513"
                ></path>
                <path
                  d="M87.9237 73.3965L71.2323 82.1078L73.151 85.7849C73.151 85.7849 77.7303 85.731 82.992 82.9048C88.1775 80.1194 89.8438 77.0736 89.8438 77.0736L87.9237 73.3965Z"
                  fill="#DB6332"
                ></path>
                <path
                  d="M59.5129 16.29C59.5129 16.29 59.4734 20.2066 50.1966 25.2571C41.5011 29.9905 37.5795 28.0905 37.5795 28.0905L68.0545 83.557C68.0545 83.557 70.3533 85.2798 80.2232 79.8892C89.5014 74.8207 89.9893 71.7565 89.9893 71.7565L59.5129 16.29Z"
                  fill="#FBFCE1"
                ></path>
                <path
                  d="M91.4609 68.2098L81.0979 48.1749L66.341 44.3791L80.6455 70.4744L91.4609 68.2098Z"
                  fill="#883513"
                  stroke="#883513"
                  strokeWidth="1.73995"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M63.5072 82.7064L52.747 62.8824L57.8891 48.5401L71.4531 75.0275L63.5072 82.7064Z"
                  fill="#883513"
                  stroke="#883513"
                  strokeWidth="1.73995"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M63.0664 36.0055C63.0664 32.2227 60.0009 29.1563 56.2173 29.1563C52.4351 29.1563 49.3682 32.2227 49.3682 36.0055C49.3682 39.7883 52.4351 42.8549 56.2173 42.8549C60.0009 42.8549 63.0664 39.7883 63.0664 36.0055Z"
                  fill="#1E1E1D"
                  stroke="#DB6332"
                  strokeWidth="2.60992"
                  strokeMiterlimit="10"
                  strokeLinejoin="round"
                ></path>
                <mask
                  id="mask0_75_119"
                  maskUnits="userSpaceOnUse"
                  x="49"
                  y="29"
                  width="15"
                  height="14"
                >
                  <path
                    d="M63.0664 36.0061C63.0664 32.2233 60.0009 29.1569 56.2173 29.1569C52.4351 29.1569 49.3682 32.2233 49.3682 36.0061C49.3682 39.7889 52.4351 42.8555 56.2173 42.8555C60.0009 42.8555 63.0664 39.7889 63.0664 36.0061Z"
                    fill="white"
                  ></path>
                </mask>
                <g mask="url(#mask0_75_119)">
                  <path
                    opacity="0.212781"
                    d="M62.8691 37.4865L52.03 30.809L50.8688 32.6936L61.7079 39.3712L62.8691 37.4865Z"
                    fill="#FBFCE1"
                  ></path>
                  <path
                    opacity="0.212781"
                    d="M61.5146 40.2401L50.6755 33.5625L50.2218 34.2997L61.0609 40.9772L61.5146 40.2401Z"
                    fill="#FBFCE1"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="flex lg:flex-row flex-col gap-10 lg:gap-0 lg:justify-between">
              <ul className="text-luminr-white transition-all text-2xl font-medium tracking-wide">
                {[
                  {
                    icon: (
                      <IoLocationOutline className="text-xl bg-gradient w-10 h-10 p-2 rounded-full text-luminr-white" />
                    ),
                    text: footerContents.address,
                    link: "https://maps.app.goo.gl/tm1B5cHUaCifb6am8",
                  },
                  {
                    icon: (
                      <IoMailOpenOutline className="text-xl bg-gradient w-10 h-10 p-2 rounded-full text-luminr-white" />
                    ),
                    text: footerContents.email,
                    link: `mailto:${footerContents.email}`,
                  },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="flex items-center justify-start gap-4 mb-4 hover:text-luminr-orange hover:tracking-wider transition-all duration-300 ease-in-out"
                    >
                      {item.icon}
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex lg:flex-row flex-col lg:gap-16 gap-4 text-luminr-white">
                <ul className="list-none flex flex-col gap-4">
                  {footerContents.navigationLinks
                    .slice(0, footerContents.navigationLinks.length / 2)
                    .map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.link}
                          className="text-2xl hover:text-luminr-orange hover:tracking-wider transition-all duration-300 ease-in-out"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                </ul>
                <ul className="list-none flex flex-col gap-4">
                  {footerContents.navigationLinks
                    .slice(footerContents.navigationLinks.length / 2)
                    .map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.link}
                          className="text-2xl hover:text-luminr-orange hover:tracking-wider transition-all duration-300 ease-in-out"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>

              <div className="flex flex-col gap-3 justify-end lg:items-end items-start">
                <ul className="flex space-x-8 mt-4">
                  {footerContents.socialMedia.map((social, index) => (
                    <li key={index}>
                      <a
                        href={social.link}
                        rel="noopener noreferrer"
                        className="w-10 h-10 mt-4 text-luminr-white flex space-x-2 items-center justify-center bg-gradient rounded-full text-xl hover:bg-none hover:text-luminr-orange transition-all duration-100 ease-in"
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
          </div>
        </div>

        <div className="container mt-4 -translate-y-20">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-luminr-white/20 to-transparent" />

          <div className="flex items-center justify-between gap-4 translate-y-9 text-luminr-white">
            <p className="text-luminr-white">
              &copy; 2024{" "}
              <span className="text-xl">{footerContents.companyName}</span>{" "}
              {"| "}All rights reserved {" |"}
            </p>
            <p className="text-center flex items-center flex-wrap justify-center text-luminr-white">
              Made with{/* */}{" "}
              <svg
                width={13}
                height={11}
                viewBox="0 0 13 11"
                fill="none"
                className="mx-3 scale-150"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4989 5.88096L6.4989 10.833L1.4989 5.88096C1.1691 5.56004 0.909327 5.17431 0.735931 4.74805C0.562534 4.3218 0.479273 3.86426 0.49139 3.40425C0.503508 2.94424 0.610741 2.49172 0.806337 2.07519C1.00193 1.65865 1.28166 1.28713 1.62789 0.984016C1.97412 0.6809 2.37937 0.452756 2.81811 0.31395C3.25684 0.175145 3.71957 0.128686 4.17714 0.177497C4.63472 0.226309 5.07723 0.369334 5.47682 0.597567C5.8764 0.8258 6.2244 1.1343 6.4989 1.50363C6.77459 1.13698 7.12299 0.831177 7.5223 0.605366C7.92161 0.379555 8.36323 0.238596 8.81952 0.19131C9.27581 0.144023 9.73695 0.191428 10.1741 0.330557C10.6112 0.469687 11.0149 0.697545 11.3599 0.999872C11.705 1.3022 11.9839 1.67249 12.1792 2.08756C12.3745 2.50263 12.4821 2.95355 12.4951 3.4121C12.5081 3.87065 12.4264 4.32696 12.255 4.75246C12.0836 5.17797 11.8262 5.56351 11.4989 5.88496"
                  fill="#F2F3D9"
                />
              </svg>
              by{"  "}
              <a
                className="ml-1 text-gradent"
                target="__blank"
                rel="noopener noreferrer"
                href={footerContents.createdBy.website}
              >
                {footerContents.createdBy.name}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
