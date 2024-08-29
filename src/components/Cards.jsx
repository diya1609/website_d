import React, { useState } from "react";
import Paination from "./Paination";
import { cardsData } from "./cardsData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnapchatGhost, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Cards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the total number of pages
  const totalPages = Math.ceil(cardsData.length / itemsPerPage);

  // Get the items to be displayed on the current page
  const currentItems = cardsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <section className="w-screen py-20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="mb-2 ml-9 text-left font-sans text-4xl font-bold">
              Top Shopify Collections
            </h1>
            <h5 className="mb-12 ml-10 text-left font-sans">
              We use an agile approach to test assumptions and connect with the
              needs of your audience early and often.
            </h5>
          </div>
          <a href="#" className="text-blue-500 font-medium mr-10">
            See all
          </a>
        </div>

        <div className="mx-auto grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-10">
          {currentItems.map((card, index) => (
            <article
              key={index}
              className="group h-full w-full overflow-hidden rounded-lg border-2 border-gray-200 border-opacity-60 shadow-lg"
            >
              <div className="py-1 px-6">
                <h1 className="title-font mb-3 mt-2 inline-block cursor-pointer text-xl capitalize font-medium tracking-wide text-gray-800">
                  {card.title}
                </h1>
                <p className="line-clamp-6 mb-3 cursor-pointer overflow-hidden leading-relaxed text-gray-500">
                  {card.description}
                </p>
              </div>
              <div className="flex flex-col justify-between px-6 pt-1 pb-4">
                {/* <div className="flex space-x-2">
                  <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-yellow-500">
                    <i className="fab fa-snapchat-ghost text-yellow-50 text-xl"></i>
                  </div>
                  <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-green-500">
                    <i className="fab fa-whatsapp text-white text-xl"></i>
                  </div>
                  <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-pink-600">
                    <i className="fab fa-instagram text-white text-xl"></i>
                  </div>
                </div> */}
                <div className="flex space-x-2">
                  <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-yellow-500">
                    <FontAwesomeIcon
                      icon={faSnapchatGhost}
                      className="text-yellow-50 text-xl"
                    />
                  </div>
                  <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-green-500">
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-white text-xl"
                    />
                  </div>
                  <div className="h-8 w-8 flex items-center justify-center rounded-sm bg-pink-600">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-white text-xl"
                    />
                  </div>
                </div>
                <hr className="my-2 border-gray-300 mt-3" />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm font-medium text-green-500">
                    {card.apps}
                  </span>
                  <button className="flex items-center px-4 py-1 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800">
                    Explore More
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
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination Component */}
        <Paination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </section>
    </div>
  );
};

export default Cards;
