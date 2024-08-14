import React, { useState } from 'react';
import Sidebar from '../sidebar';
import { Link } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-900 dark:bg-gray-800 text-white">
      <nav className="flex justify-between items-center px-4 py-5">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            aria-controls="logo-sidebar"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <a href="#" className="text-xl font-semibold whitespace-nowrap ms-3">
            MyApp
          </a>
        </div>
        <div className='hidden sm:flex  space-x-4 pr-6' >
          <Link to={"/auth/login"} className='text-2xl'>
            <FiLogOut />
          </Link>
        </div>
        {/* <div className="hidden sm:flex space-x-4">
          <a href="#" className="hover:underline">
            Dashboard
          </a>
          <a href="#" className="hover:underline">
            Profile
          </a>
          <a href="#" className="hover:underline">
            Settings
          </a>
        </div> */}
      </nav>

      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Navbar;
