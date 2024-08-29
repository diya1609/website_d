import React from "react";

const Header = () => {
  return (
    <div>
      <header className="fixed top-0 left-0 z-50 w-full bg-white shadow-md text-slate-700 px-4 py-4 lg:px-8">
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center">
          <a
            href="#"
            className="flex items-center text-xl font-semibold text-purple-700"
          >
            <span>ShopDigest</span>
            <span className="text-gray-300 mx-2">|</span>
            <span className="flex items-center text-gray-700 text-base">
              Shopify
              <svg
                className="ml-2 h-4 w-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 9l6 6 6-6"
                ></path>
              </svg>
            </span>
          </a>

          <input type="checkbox" className="peer hidden" id="navbar-open" />
          <label
            className="absolute top-5 right-5 cursor-pointer lg:hidden"
            htmlFor="navbar-open"
          >
            <svg
              className="h-7 w-7"
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
              ></path>
            </svg>
          </label>
          <nav
            aria-label="Header Navigation"
            className="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row"
          >
            <ul className="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
              <li className="lg:mr-12">
                <a
                  className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-purple-700 focus:ring-offset-2"
                  href="#"
                >
                  Features
                </a>
              </li>
              <li className="lg:mr-12">
                <a
                  className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-purple-700 focus:ring-offset-2"
                  href="#"
                >
                  Marketplace
                </a>
              </li>
              <li className="lg:mr-12">
                <a
                  className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-purple-700 focus:ring-offset-2"
                  href="#"
                >
                  Company
                </a>
                
              </li>
              <li className="lg:mr-12">
                <a
                  className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-purple-700 focus:ring-offset-2"
                  href="#"
                >
                  Team
                </a>
              </li>
              <li className="lg:mr-12">
                <a
                  className="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-purple-700 focus:ring-offset-2"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
            <hr className="mt-4 w-full lg:hidden" />
            <div className="my-4 flex items-center space-x-6 space-y-2 lg:my-0 lg:ml-auto lg:space-x-8 lg:space-y-0">
              <a
                href="#"
                title="Log in"
                className="whitespace-nowrap rounded-xl border border-purple-700 text-purple-700 font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-purple-700 focus:ring-offset-2 hover:text-opacity-50 px-6 py-1"
              >
                Log in
              </a>
              <a
                href="#"
                title="Post"
                className="whitespace-nowrap rounded-xl bg-purple-700 text-white font-medium transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-purple-700 focus:ring-offset-2 hover:bg-purple-800 px-6 py-1 flex items-center"
              >
                Add Post
                <svg
                  className="ml-2 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M5 12h14m-7-7l7 7-7 7"
                  ></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
