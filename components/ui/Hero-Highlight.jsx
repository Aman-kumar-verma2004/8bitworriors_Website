import Link from "next/link";
import React, { useState } from "react";

const HeroSecton = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="">
      <header className="py-4 bg-black sm:py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="shrink-0">
              <a href="#" title="" className="flex">
                <img className="w-auto h-9" src="/8bit.png" alt="" />
              </a>
            </div>

            <div className="flex md:hidden">
              <button
                type="button"
                className="text-white"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {!expanded ? (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-7 h-7"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            <nav className="hidden md:flex md:items-center md:justify-end md:space-x-12">
              <Link
                href="/resources"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Resources{" "}
              </Link>
              <Link
                href="/tools"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                Tools{" "}
              </Link>
              <Link
                href="/events"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                Events
              </Link>
              <Link
                href="/about"
                className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
              >
                {" "}
                About Us{" "}
              </Link>
            </nav>
          </div>

          {expanded && (
            <nav>
              <div className="flex flex-col pt-8 pb-4 space-y-6">
                <Link
                  href="/resources"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  {" "}
                  Resources{" "}
                </Link>
                <Link
                  href="/tools"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  {" "}
                  Tools{" "}
                </Link>
                <Link
                  href="/events"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  Events
                </Link>
                <Link
                  href="/about"
                  className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white"
                >
                  {" "}
                  About Us{" "}
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      <section className="py-12 bg-black sm:pb-16 lg:pb-20 xl:pb-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="relative">
            <div className="lg:w-2/3">
              <p className="text-sm font-normal tracking-widest text-gray-300 uppercase">
                A Hub Where Tech Meets Creativity!
              </p>
              <h1 className="mt-6 text-4xl font-normal text-white sm:mt-10 sm:text-5xl lg:text-6xl xl:text-8xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-green-800">
                  Code Like Warriors
                </span>
              </h1>
              <p className="max-w-lg mt-4 text-xl font-normal text-gray-400 sm:mt-8">
                Join 8-Bit Warriors and embark on an exciting journey to
                transform your future in tech!
              </p>
              <div className="relative inline-flex items-center justify-center mt-8 sm:mt-12 group">
                <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-green-100 to-green-700-500 group-hover:shadow-lg group-hover:shadow-green-500/50"></div>
                <a
                  href="#"
                  title=""
                  className="relative inline-flex items-center justify-center px-8 py-3 text-base font-normal text-white bg-black border border-transparent rounded-full"
                  role="button"
                >
                  Learn more
                </a>
              </div>

              <div>
                <div className="inline-flex items-center pt-6 mt-8 border-t border-gray-800 sm:pt-10 sm:mt-14">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    strokeWidth="1.5"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13 7.00003H21M21 7.00003V15M21 7.00003L13 15L9 11L3 17"
                      stroke="url(#a)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <defs>
                      <linearGradient
                        id="a"
                        x1="3"
                        y1="7.00003"
                        x2="22.2956"
                        y2="12.0274"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "var(--color-cyan-500)" }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "var(--color-purple-500)" }}
                        />
                      </linearGradient>
                    </defs>
                  </svg>

                  <span className="ml-2 text-base font-normal text-white">
                    {" "}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 md:absolute md:mt-0 md:top-32 lg:top-0 md:right-0">
              <img
                className="w-full max-w-2xl mx-auto lg:max-w-3xl xl:max-w-xxl h-auto lg:h-auto 4xl:h-auto object-contain mr-20 mt-[-60px] hover:scale-105 transition-all"
                src="/ionic-removebg-preview.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSecton;
