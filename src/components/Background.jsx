import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Background() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleInputClick = () => {
    navigate("/selectdestination"); // Replace with your desired route
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/assets/images/backgrounds/bg.mp4"
          type="video/webm"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white bg-black/20 px-4">
        <h1 className="font-dancing text-3xl md:text-6xl font-bold mb-4">
          Yatra To Paradise
        </h1>
        <p className="text-base md:text-2xl mb-6">
          Find what you're looking for below.
        </p>

        {/* Gradient Border Search Input with Icon */}
        <div className="w-full max-w-md bg-gradient-to-r from-blue-500 to-purple-500 p-1 rounded-md">
          <div className="flex items-center bg-white rounded-md px-3 py-2">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>

            {/* Input */}
            <input
              type="text"
              placeholder="Search..."
              onClick={handleInputClick}
              className="w-full bg-transparent focus:outline-none text-gray-800"
              readOnly
            />
          </div>
        </div>
      </div>
    </section>
  );
}
