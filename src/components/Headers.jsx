import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Login from "../pages/Login";
import Signup from "../pages/Signup"; // Adjust the path as needed

export default function Headers() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  const servicesTimeout = useRef(null);
  const destinationsTimeout = useRef(null);

  const menuItems = ["International Tour Packages", "Domestic Tour Packages"];

  return (
    <header className="bg-yellow-500 fixed top-0 left-0 w-full z-50 ">
      <div className="lg:mx-4 lg:px-2 px-1 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-600 flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/src/assets/images/logo3.png"
              alt="Logo"
              className="w-20 md:w-32 lg:w-20 h-16 md:h-20 lg:h-16 object-contain"
            />
            <h2 className="text-2xl font-extrabold text-blue-800">
              PARADISE YATRA
            </h2>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-18">
          {menuItems.map((item) => {
            if (item === "International Tour Packages") {
              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => {
                    clearTimeout(servicesTimeout.current);
                    setIsServicesOpen(true);
                  }}
                  onMouseLeave={() => {
                    servicesTimeout.current = setTimeout(() => {
                      setIsServicesOpen(false);
                    }, 200); // Delay to prevent flickering
                  }}
                >
                  <a
                    href="#"
                    className="flex items-center space-x-1 text-indigo-700 font-semibold text-lg"
                  >
                    <span>{item}</span>
                    {isServicesOpen ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </a>

                  {isServicesOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-xl-md py-2 z-10">
                      <Link
                        to="/packages/srilanka"
                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                      >
                        Srilanka
                      </Link>
                      <Link
                        to="/packages/srilanka"
                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                      >
                        United States Tour Package
                      </Link>
                      <Link
                        to="/packages/srilanka"
                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                      >
                        Europe Tour Package
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            if (item === "Domestic Tour Packages") {
              return (
                <div
                  key={item}
                  className="relative"
                  onMouseEnter={() => {
                    clearTimeout(destinationsTimeout.current);
                    setIsDestinationsOpen(true);
                  }}
                  onMouseLeave={() => {
                    destinationsTimeout.current = setTimeout(() => {
                      setIsDestinationsOpen(false);
                    }, 200);
                  }}
                >
                  <a
                    href="#"
                    className="flex items-center space-x-1 text-indigo-700 font-semibold text-lg"
                  >
                    <span>{item}</span>
                    {isDestinationsOpen ? (
                      <FaChevronUp className="w-3 h-3" />
                    ) : (
                      <FaChevronDown className="w-3 h-3" />
                    )}
                  </a>

                  {isDestinationsOpen && (
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-xl-md py-2 z-10">
                      <Link
                        to="/packages/srilanka"
                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                      >
                        Srilanka Tour Package
                      </Link>
                      <Link
                        to="/packages/srilanka"
                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                      >
                        United States Tour Package
                      </Link>
                      <Link
                        to="/packages/srilanka"
                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                      >
                        Europe Tour Package
                      </Link>
                      <Link
                        to="/packages/srilanka"
                        className="block px-4 py-2 text-gray-700 hover:bg-indigo-100"
                      >
                        Middle East Asia Tour Package
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={item}
                href="#"
                className="text-gray-700 hover:text-indigo-700 font-medium"
              >
                {item}
              </a>
            );
          })}
        </nav>

        {/* Auth Buttons + Contact Info */}
        <div className="hidden md:flex items-center space-x-4 font-sans">
          <Link to="/login">
            <button className=" text-indigo-900 bg-yellow-50 hover:bg-yellow-300 hover:text-white border px-4 py-2 border-amber-800 hover:border-yellow-200 rounded-lg transition cursor-pointer">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-blue-800 text-white px-4 py-2 rounded-lg hover:bg-indigo-400 transition cursor-pointer">
              Register
            </button>
          </Link>
          <div className="text-center mt-7">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-400 transition cursor-pointer">
              Pay Now
            </button>

            <p className="mt-2 text-sm text-gray-600">
              <i>*Instant payment with RazorPay</i>
            </p>
          </div>

          {/* Contact + Enquiry Button */}
          <div className="flex flex-col items-center text-md text-center text-indigo-700 pl-10 border-l border-white space-y-1 ml-6">
            <span className="font-semibold border border-indigo-700 rounded-xl px-3 py-1">
              📞 +91- 8979396413
            </span>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-gray-800 mb-1 transition ${
              isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-gray-800 mb-1 transition ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <div
            className={`w-6 h-0.5 bg-gray-800 transition ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow px-4 pt-2 pb-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = activeMobileDropdown === item;

            return (
              <div key={item} className="space-y-1">
                <button
                  onClick={() =>
                    setActiveMobileDropdown(isActive ? null : item)
                  }
                  className="block w-full text-left text-gray-700 font-semibold hover:text-blue-800"
                >
                  {item}
                </button>

                {isActive && (
                  <div className="ml-4 space-y-1 text-sm font-medium text-gray-600 hover:text-yellow-800">
                    {item === "Explore Destinations" && (
                      <>
                        <Link
                          to="/packages/srilanka"
                          className="block hover:text-indigo-500"
                        >
                          Srilanka
                        </Link>
                        <Link
                          to="/packages/srilanka"
                          className="block hover:text-indigo-500"
                        >
                          United States
                        </Link>
                        <Link
                          to="/packages/srilanka"
                          className="block hover:text-indigo-500"
                        >
                          Europe
                        </Link>
                      </>
                    )}
                    {item === "Holiday Tour Packages" && (
                      <>
                        <Link
                          to="/packages/srilanka"
                          className="block hover:text-indigo-500"
                        >
                          Srilanka Tour
                        </Link>
                        <Link
                          to="/packages/srilanka"
                          className="block hover:text-indigo-500"
                        >
                          United States
                        </Link>
                        <Link
                          to="/packages/srilanka"
                          className="block hover:text-indigo-500"
                        >
                          Europe
                        </Link>
                        <Link
                          to="/packages/srilanka"
                          className="block hover:text-indigo-500"
                        >
                          Middle East Asia
                        </Link>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <hr className="my-2" />
          <Link to="/login">
            <button className="block w-[25%] text-center border rounded-lg py-2 hover:bg-yellow-200 text-gray-700 hover:text-indigo-600">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="block w-[25%] text-center bg-blue-800 text-white py-2 rounded-lg hover:bg-blue-400 mt-2">
              Register
            </button>
          </Link>
          <div className="text-left mt-2">
            <button className="block w-[25%] text-center bg-green-600 text-white py-2 rounded-lg hover:bg-green-400 mt-2">
              Pay Now
            </button>
            <p className="mt-2 text-sm text-gray-600">
              <i>*Instant payment with RazorPay</i>
            </p>
          </div>
          <div className="mt-4 text-md text-gray-700 space-y-2">
            <p className="text-yellow-800 font-bold italic tracking-wide hover:text-yellow-600 transition duration-200">
              Enquiry Now
            </p>
            <p className="font-semibold">📞 +91-987XXXXXXXXX</p>
          </div>
        </div>
      )}
    </header>
  );
}
