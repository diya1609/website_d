import React from "react";

const Paination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav
      aria-label="Page Navigation"
      className="mx-auto my-10 flex max-w-md justify-between space-x-2 rounded-md bg-white py-2"
    >
      <button
        className="flex items-center space-x-1 font-medium text-gray-400"
        aria-label="Previous Page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
        <span>Prev</span>
      </button>
      <ul className="flex">
        {[...Array(totalPages)].map((_, index) => (
          <li key={index}>
            <button
              className={`px-2 text-lg font-medium sm:px-3 ${
                currentPage === index + 1
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "hover:text-blue-600"
              }`}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
      </ul>
      <button
        className="flex items-center space-x-1 font-medium hover:text-blue-600"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next Page"
      >
        <span>Next</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Paination;
