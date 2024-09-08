/* eslint-disable react/prop-types */
import React from "react";

const Header = ({ activeNav, setActiveNav }) => {
  return (
    <header className="shadow-md font-sans tracking-wide relative z-50 sticky top-0">
      <div className="flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]">
        <a href="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="219" height="36" viewBox="0 0 219 36" fill="none">
            <path d="M60.97 22.56C60.97 23.2733 60.88 23.9167 60.7 24.49C60.52 25.0633 60.28 25.5667 59.98 26C59.6867 26.44 59.34 26.8133 58.94 27.12C58.54 27.4267 58.1267 27.6767 57.7 27.87C57.2733 28.0633 56.8367 28.2067 56.39 28.3C55.95 28.3933 55.5367 28.44 55.15 28.44H41.17V24.82H55.15C55.8433 24.82 56.3833 24.6133 56.77 24.2C57.1567 23.7933 57.35 23.2467 57.35 22.56C57.35 22.2267 57.3 21.92 57.2 21.64C57.0933 21.36 56.9467 21.1167 56.76 20.91C56.5667 20.71 56.3333 20.5533 56.06 20.44C55.7867 20.3267 55.4833 20.27 55.15 20.27H46.81C46.2233 20.27 45.5933 20.1667 44.92 19.96C44.24 19.7467 43.61 19.41 43.03 18.95C42.45 18.4833 41.9667 17.8733 41.58 17.12C41.1933 16.3667 41 15.4467 41 14.36C41 13.2733 41.1933 12.3567 41.58 11.61C41.9667 10.8633 42.45 10.2533 43.03 9.78C43.61 9.31333 44.24 8.97333 44.92 8.76C45.5933 8.55333 46.2233 8.45 46.81 8.45H59.15V12.08H46.81C46.1233 12.08 45.5867 12.2867 45.2 12.7C44.8133 13.12 44.62 13.6733 44.62 14.36C44.62 15.06 44.8133 15.61 45.2 16.01C45.5867 16.4167 46.1233 16.62 46.81 16.62H55.15H55.17C55.5633 16.6267 55.98 16.68 56.42 16.78C56.8533 16.88 57.2867 17.03 57.72 17.23C58.1533 17.4367 58.5633 17.6967 58.95 18.01C59.3433 18.3167 59.69 18.69 59.99 19.13C60.29 19.5633 60.53 20.0633 60.71 20.63C60.8833 21.1967 60.97 21.84 60.97 22.56ZM72.75 20.22L81.28 28.44H76.06L68.75 21.39C68.3433 21.0167 68.1533 20.55 68.18 19.99C68.2 19.73 68.2667 19.4867 68.38 19.26C68.5 19.0333 68.66 18.84 68.86 18.68L75.48 13.34H81.28L72.75 20.22ZM67.26 7V28.44H63.64V7H67.26ZM87 7V10.28H83.37V7H87ZM87 13.37V28.44H83.37V13.37H87ZM97.09 24.82V28.44H95.47C94.95 28.44 94.3967 28.3533 93.81 28.18C93.2167 28 92.6667 27.7067 92.16 27.3C91.6467 26.9 91.2233 26.3767 90.89 25.73C90.5567 25.0833 90.39 24.29 90.39 23.35V7H94.01V23.35C94.01 23.7967 94.15 24.1533 94.43 24.42C94.71 24.6867 95.0567 24.82 95.47 24.82H97.09ZM106.04 24.82V28.44H104.42C103.9 28.44 103.347 28.3533 102.76 28.18C102.167 28 101.617 27.7067 101.11 27.3C100.597 26.9 100.173 26.3767 99.84 25.73C99.5 25.0833 99.33 24.29 99.33 23.35V7H102.96V23.35C102.96 23.7967 103.1 24.1533 103.38 24.42C103.66 24.6867 104.007 24.82 104.42 24.82H106.04ZM127.98 22.56C127.98 23.2733 127.89 23.9167 127.71 24.49C127.53 25.0633 127.29 25.5667 126.99 26C126.69 26.44 126.343 26.8133 125.95 27.12C125.55 27.4267 125.133 27.6767 124.7 27.87C124.273 28.0633 123.84 28.2067 123.4 28.3C122.96 28.3933 122.543 28.44 122.15 28.44H108.17V24.82H122.15C122.85 24.82 123.393 24.6133 123.78 24.2C124.167 23.7933 124.36 23.2467 124.36 22.56C124.36 22.2267 124.307 21.92 124.2 21.64C124.1 21.36 123.953 21.1167 123.76 20.91C123.573 20.71 123.343 20.5533 123.07 20.44C122.797 20.3267 122.49 20.27 122.15 20.27H113.82C113.233 20.27 112.6 20.1667 111.92 19.96C111.24 19.7467 110.61 19.41 110.03 18.95C109.45 18.4833 108.967 17.8733 108.58 17.12C108.2 16.3667 108.01 15.4467 108.01 14.36C108.01 13.2733 108.2 12.3567 108.58 11.61C108.967 10.8633 109.45 10.2533 110.03 9.78C110.61 9.31333 111.24 8.97333 111.92 8.76C112.6 8.55333 113.233 8.45 113.82 8.45H126.15V12.08H113.82C113.133 12.08 112.597 12.2867 112.21 12.7C111.823 13.12 111.63 13.6733 111.63 14.36C111.63 15.06 111.823 15.61 112.21 16.01C112.597 16.4167 113.133 16.62 113.82 16.62H122.15H122.18C122.573 16.6267 122.987 16.68 123.42 16.78C123.86 16.88 124.297 17.03 124.73 17.23C125.157 17.4367 125.567 17.6967 125.96 18.01C126.347 18.3167 126.693 18.69 127 19.13C127.3 19.5633 127.54 20.0633 127.72 20.63C127.893 21.1967 127.98 21.84 127.98 22.56ZM146.8 18.36C146.8 18.86 146.71 19.4033 146.53 19.99C146.357 20.57 146.073 21.1067 145.68 21.6C145.28 22.1 144.763 22.5167 144.13 22.85C143.49 23.1833 142.717 23.35 141.81 23.35H135.27V19.91H141.81C142.303 19.91 142.683 19.76 142.95 19.46C143.223 19.1533 143.36 18.7767 143.36 18.33C143.36 17.8567 143.207 17.4867 142.9 17.22C142.6 16.9467 142.237 16.81 141.81 16.81H135.27C134.777 16.81 134.397 16.9633 134.13 17.27C133.857 17.57 133.72 17.9433 133.72 18.39V23.45C133.72 23.93 133.873 24.3067 134.18 24.58C134.48 24.8467 134.853 24.98 135.3 24.98H141.81V28.44H135.27C134.77 28.44 134.23 28.3533 133.65 28.18C133.07 28 132.53 27.7133 132.03 27.32C131.53 26.9267 131.113 26.41 130.78 25.77C130.447 25.1367 130.28 24.3633 130.28 23.45V18.36C130.28 17.86 130.37 17.32 130.55 16.74C130.723 16.16 131.007 15.62 131.4 15.12C131.793 14.6267 132.31 14.21 132.95 13.87C133.583 13.5367 134.357 13.37 135.27 13.37H141.81C142.31 13.37 142.85 13.46 143.43 13.64C144.01 13.8133 144.55 14.0967 145.05 14.49C145.543 14.89 145.96 15.4067 146.3 16.04C146.633 16.68 146.8 17.4533 146.8 18.36ZM165.45 18.36C165.45 18.86 165.36 19.4033 165.18 19.99C165.007 20.57 164.723 21.1067 164.33 21.6C163.93 22.1 163.413 22.5167 162.78 22.85C162.147 23.1833 161.373 23.35 160.46 23.35H153.92V19.91H160.46C160.953 19.91 161.333 19.76 161.6 19.46C161.873 19.1533 162.01 18.7767 162.01 18.33C162.01 17.8567 161.857 17.4867 161.55 17.22C161.25 16.9467 160.887 16.81 160.46 16.81H153.92C153.427 16.81 153.047 16.9633 152.78 17.27C152.507 17.57 152.37 17.9433 152.37 18.39V23.45C152.37 23.93 152.523 24.3067 152.83 24.58C153.13 24.8467 153.503 24.98 153.95 24.98H160.46V28.44H153.92C153.42 28.44 152.88 28.3533 152.3 28.18C151.72 28 151.18 27.7133 150.68 27.32C150.18 26.9267 149.763 26.41 149.43 25.77C149.097 25.1367 148.93 24.3633 148.93 23.45V18.36C148.93 17.86 149.02 17.32 149.2 16.74C149.373 16.16 149.657 15.62 150.05 15.12C150.45 14.6267 150.967 14.21 151.6 13.87C152.24 13.5367 153.013 13.37 153.92 13.37H160.46C160.96 13.37 161.5 13.46 162.08 13.64C162.66 13.8133 163.2 14.0967 163.7 14.49C164.2 14.89 164.617 15.4067 164.95 16.04C165.283 16.68 165.45 17.4533 165.45 18.36ZM177.06 20.22L185.59 28.44H180.36L173.06 21.39C172.653 21.0167 172.463 20.55 172.49 19.99C172.51 19.73 172.577 19.4867 172.69 19.26C172.81 19.0333 172.97 18.84 173.17 18.68L179.79 13.34H185.59L177.06 20.22ZM171.57 7V28.44H167.94V7H171.57ZM203.35 18.36C203.35 18.86 203.263 19.4033 203.09 19.99C202.91 20.57 202.623 21.1067 202.23 21.6C201.837 22.1 201.32 22.5167 200.68 22.85C200.047 23.1833 199.273 23.35 198.36 23.35H191.82V19.91H198.36C198.853 19.91 199.233 19.76 199.5 19.46C199.773 19.1533 199.91 18.7767 199.91 18.33C199.91 17.8567 199.757 17.4867 199.45 17.22C199.15 16.9467 198.787 16.81 198.36 16.81H191.82C191.327 16.81 190.947 16.9633 190.68 17.27C190.413 17.57 190.28 17.9433 190.28 18.39V23.45C190.28 23.93 190.43 24.3067 190.73 24.58C191.03 24.8467 191.403 24.98 191.85 24.98H198.36V28.44H191.82C191.32 28.44 190.78 28.3533 190.2 28.18C189.62 28 189.08 27.7133 188.58 27.32C188.087 26.9267 187.67 26.41 187.33 25.77C186.997 25.1367 186.83 24.3633 186.83 23.45V18.36C186.83 17.86 186.92 17.32 187.1 16.74C187.273 16.16 187.557 15.62 187.95 15.12C188.35 14.6267 188.867 14.21 189.5 13.87C190.14 13.5367 190.913 13.37 191.82 13.37H198.36C198.86 13.37 199.4 13.46 199.98 13.64C200.567 13.8133 201.107 14.0967 201.6 14.49C202.1 14.89 202.517 15.4067 202.85 16.04C203.183 16.68 203.35 17.4533 203.35 18.36ZM218.98 13.37V17H210.82C210.327 17 209.957 17.1233 209.71 17.37C209.457 17.61 209.33 17.97 209.33 18.45V28.44H205.71V18.45C205.71 17.8233 205.787 17.2633 205.94 16.77C206.1 16.2767 206.313 15.8433 206.58 15.47C206.847 15.09 207.15 14.77 207.49 14.51C207.837 14.2433 208.197 14.0267 208.57 13.86C208.95 13.6933 209.33 13.57 209.71 13.49C210.097 13.41 210.457 13.37 210.79 13.37H218.98Z" fill="black" />
            <path d="M17.5715 19.1808C17.5715 19.1808 2.85718 25.2646 8.44578 32.1266C8.44578 32.1266 2.36198 29.2969 2.92792 25.7598C3.28163 23.4253 9.36543 18.6856 17.5715 19.1808Z" fill="url(#paint0_linear_20_24)" />
            <path d="M16.5809 18.6149C16.5809 18.6149 1.37137 13.8044 1.30063 22.6472C1.30063 22.6472 -1.52905 16.5634 1.15914 14.2289C2.92769 12.7433 10.6386 13.0263 16.5809 18.6149Z" fill="url(#paint1_linear_20_24)" />
            <path d="M16.2272 17.6241C16.2272 17.6241 7.73815 4.1831 1.93732 10.8328C1.93732 10.8328 3.70586 4.39533 7.24296 4.32458C9.57744 4.32458 15.3075 9.48874 16.2272 17.6241Z" fill="url(#paint2_linear_20_24)" />
            <path d="M16.581 16.6339C16.581 16.6339 18.774 0.858489 10.002 2.27333C10.002 2.27333 15.5199 -1.54674 18.2788 0.717005C20.1181 2.13184 21.1085 9.77197 16.581 16.6339Z" fill="url(#paint3_linear_20_24)" />
            <path d="M17.5007 16.0678C17.5007 16.0678 29.3146 5.38582 21.7452 0.858337C21.7452 0.858337 28.395 1.49501 29.1024 5.03211C29.4561 7.29585 25.3531 13.7334 17.5007 16.0678Z" fill="url(#paint4_linear_20_24)" />
            <path d="M18.5615 16.2096C18.5615 16.2096 34.4784 15.7144 31.6488 7.29608C31.6488 7.29608 36.3177 12.1065 34.6199 15.1484C33.3466 17.2707 26.0602 19.5344 18.5615 16.2096Z" fill="url(#paint5_linear_20_24)" />
            <path d="M19.2692 17.0585C19.2692 17.0585 31.7905 26.9624 34.9739 18.6856C34.9739 18.6856 35.4691 25.3353 32.1442 26.6087C29.9512 27.3868 22.8063 24.4157 19.2692 17.0585Z" fill="url(#paint6_linear_20_24)" />
            <path d="M19.2689 18.1194C19.2689 18.1194 22.4523 33.7534 30.2339 29.5089C30.2339 29.5089 26.3431 34.956 22.9475 33.7534C20.7545 32.9045 17.2882 26.0425 19.2689 18.1194Z" fill="url(#paint7_linear_20_24)" />
            <path d="M18.5619 18.9683C18.5619 18.9683 10.9217 32.9752 19.623 34.7438C19.623 34.7438 13.1147 36.3708 11.3462 33.2582C10.1436 31.2067 11.9121 23.708 18.5619 18.9683Z" fill="url(#paint8_linear_20_24)" />
            <defs>
              <linearGradient id="paint0_linear_20_24" x1="10.2311" y1="19.1448" x2="1.34759" y2="34.5837" gradientUnits="userSpaceOnUse">
                <stop stop-color="#48BEFE" />
                <stop offset="1" stop-color="#2B7298" />
              </linearGradient>
              <linearGradient id="paint1_linear_20_24" x1="8.29044" y1="13.4619" x2="3.65177" y2="26.3303" gradientUnits="userSpaceOnUse">
                <stop stop-color="#48BEFE" />
                <stop offset="1" stop-color="#2B7298" />
              </linearGradient>
              <linearGradient id="paint2_linear_20_24" x1="9.08225" y1="4.32459" x2="-0.246453" y2="19.7284" gradientUnits="userSpaceOnUse">
                <stop stop-color="#48BEFE" />
                <stop offset="1" stop-color="#2B7298" />
              </linearGradient>
              <linearGradient id="paint3_linear_20_24" x1="14.9135" y1="3.57715e-07" x2="1.80924" y2="11.8925" gradientUnits="userSpaceOnUse">
                <stop stop-color="#48BEFE" />
                <stop offset="1" stop-color="#2B7298" />
              </linearGradient>
              <linearGradient id="paint4_linear_20_24" x1="23.3121" y1="0.858338" x2="11.4274" y2="14.8154" gradientUnits="userSpaceOnUse">
                <stop stop-color="#48BEFE" />
                <stop offset="1" stop-color="#2B7298" />
              </linearGradient>
              <linearGradient id="paint5_linear_20_24" x1="26.7766" y1="7.29608" x2="20.7884" y2="21.5612" gradientUnits="userSpaceOnUse">
                <stop stop-color="#48BEFE" />
                <stop offset="1" stop-color="#2B7298" />
              </linearGradient>
              <linearGradient id="paint6_linear_20_24" x1="27.1346" y1="17.0585" x2="21.8554" y2="30.2555" gradientUnits="userSpaceOnUse">
                <stop stop-color="#48BEFE" />
                <stop offset="1" stop-color="#2B7298" />
              </linearGradient>
              <linearGradient id="paint7_linear_20_24" x1="24.4567" y1="18.1194" x2="12.0291" y2="32.0797" gradientUnits="userSpaceOnUse">
                <stop stop-color="#48BEFE" />
                <stop offset="1" stop-color="#2B7298" />
              </linearGradient>
              <linearGradient id="paint8_linear_20_24" x1="15.3093" y1="18.9683" x2="2.73965" y2="29.2554" gradientUnits="userSpaceOnUse">
                <stop stop-color="#48BEFE" />
                <stop offset="1" stop-color="#2B7298" />
              </linearGradient>
            </defs>
          </svg>
        </a>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>

          <ul className="lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)">
                <img
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#HeroSection"
                className={`hover:text-[#007bff] ${activeNav == "HeroSection" ? "text-[#007bff]" : ""} block font-bold text-[15px]`}
                onClick={() => { setActiveNav("HeroSection") }}
              >
                Home
              </a>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#FeatureSection"
                className={`hover:text-[#007bff] ${activeNav == "FeatureSection" ? "text-[#007bff]" : ""} block font-bold text-[15px]`}
                onClick={() => { setActiveNav("FeatureSection") }}
              >
                Feature
              </a>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#AboutSection"
                className={`hover:text-[#007bff] ${activeNav == "AboutSection" ? "text-[#007bff]" : ""} block font-bold text-[15px]`}
                onClick={() => { setActiveNav("AboutSection") }}
              >
                About
              </a>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#TestimonialsSection"
                className={`hover:text-[#007bff] ${activeNav == "TestimonialsSection" ? "text-[#007bff]" : ""} block font-bold text-[15px]`}
                onClick={() => { setActiveNav("TestimonialsSection") }}
              >
                Testimonials
              </a>
            </li>

            <li className="max-lg:border-b max-lg:py-3 px-3">
              <a
                href="#ContactSection"
                className={`hover:text-[#007bff] ${activeNav == "ContactSection" ? "text-[#007bff]" : ""} block font-bold text-[15px]`}
                onClick={() => { setActiveNav("ContactSection") }}
              >
                Contact
              </a>
            </li>

          </ul>
        </div>

        <div className="flex max-lg:ml-auto">
          <button id="toggleOpen" className="lg:hidden">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
