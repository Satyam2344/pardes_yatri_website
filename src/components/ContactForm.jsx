import React, { Component } from "react";

export class ContactForm extends Component {
  render() {
    return (
      <div className="lg:max-w-[50%] max-w-[85%] mx-auto">
        {/* Contact Form Section */}
        {/* Responsive Section Heading */}
        <h1 className="text-4xl font-bold text-center mt-2 mb-6">
          Get in Touch With Us
        </h1>

        {/* Contact Form Section */}
        <div className="mt-4 bg-white p-6 shadow lg:max-w-[80%] mx-auto border rounded-lg border-amber-600">
          <form className="space-y-4">
            {/* Name Field */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.121 17.804A9 9 0 1118.88 6.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Email Field */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 12H8m0 0l-4 4m4-4l-4-4m8 0h8" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="Enter Your Email ID"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Phone Field */}
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 5a2 2 0 012-2h3.6a1 1 0 01.94.658l1.518 4.554a1 1 0 01-.217.977l-2.13 2.13a11.042 11.042 0 005.48 5.48l2.13-2.13a1 1 0 01.977-.217l4.554 1.518A1 1 0 0121 17.4V21a2 2 0 01-2 2h-.01C10.61 23 1 13.39 1 3.01V3a2 2 0 012-2z" />
                </svg>
              </span>
              <input
                type="tel"
                placeholder="Enter Your Phone Number"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            {/* Message Field */}
            <div className="relative">
              <span className="absolute left-3 top-4 text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z" />
                </svg>
              </span>
              <textarea
                rows="4"
                placeholder="Type Your Message"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-500 text-white px-2 py-2 rounded-lg hover:bg-indigo-600 transition-all duration-200 w-[20%] mx-auto block cursor-pointer"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ContactForm;
