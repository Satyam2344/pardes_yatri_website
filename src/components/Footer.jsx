import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  // Dynamic data for the sections
  const sections = [
    {
      title: "International Trip",
      key: "international",
      items: [
        { label: "Trip to Europe", link: "/international/trip1" },
        { label: "Trip to Asia", link: "/international/trip2" },
        { label: "Trip to Australia", link: "/international/trip3" },
      ],
    },
    {
      title: "India Trip",
      key: "india",
      items: [
        { label: "Trip to Goa", link: "/india/trip1" },
        { label: "Trip to Kerala", link: "/india/trip2" },
        { label: "Trip to Rajasthan", link: "/india/trip3" },
      ],
    },
    {
      title: "Quick Links",
      key: "quick",
      items: [
        { label: "Home", link: "/" },
        { label: "About", link: "/aboutus" },
        { label: "Contact", link: "/contactus" },
        { label: "Blog", link: "/blog" },
      ],
    },
    {
      title: "Trending Destinations",
      key: "trending",
      items: [
        { label: "Maldives", link: "/trending/destination1" },
        { label: "Bali", link: "/trending/destination2" },
        { label: "Paris", link: "/trending/destination3" },
        { label: "New York", link: "/trending/destination4" },
      ],
    },
  ];
  return (
    <>
      {/* Trip Links Section */}

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 px-4 mt-10">
        <div className="text-white border-b border-gray-400 pb-6">
          {/* Desktop Grid */}
          <div className="hidden sm:grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-4 text-center">
            {sections.map((section) => (
              <div key={section.key}>
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <ul className="space-y-1">
                  {section.items.map((item) => (
                    <li key={item.link}>
                      <Link
                        to={item.link}
                        className="text-gray-300 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile Dropdowns */}
          <div className="sm:hidden max-w-3xl mx-auto space-y-4 mt-4 px-4">
            {sections.map((section) => (
              <div key={section.key} className="bg-gray-800 rounded-lg p-4">
                <button
                  onClick={() => toggleSection(section.key)}
                  className="w-full text-left text-lg font-semibold text-white flex justify-between items-center"
                >
                  {section.title}
                  <span>{openSection === section.key ? "▲" : "▼"}</span>
                </button>
                {openSection === section.key && (
                  <ul className="mt-2 space-y-1">
                    {section.items.map((item) => (
                      <li key={item.link}>
                        <Link
                          to={item.link}
                          className="block text-gray-300 hover:text-white"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Brand Info */}
          <div>
            {/* Heading with image */}
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl font-bold text-indigo-400">
                PARDISE YATRA
              </h2>
            </div>

            <p className="text-yellow-400 mb-4">Yatra To Paradise</p>

            {/* Location */}
            <div className="flex items-start gap-2 mb-2">
              <img
                src="/src/assets/images/others/location.png"
                alt="Location"
                className="w-6 h-6"
              />
              <span className="text-gray-300">
                48, General Mahadev Singh Rd, near Balliwala chowk, Shakti
                Enclave, Mohit Nagar, Dehradun, Uttarakhand 248001.
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <img
                src="/src/assets/images/others/phone.png"
                alt="Phone"
                className="w-5 h-5"
              />
              <span className="text-gray-300">+91 8979396413</span>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex flex-wrap gap-4 text-2xl">
              {/* Facebook */}
              <a href="#" className="hover:text-blue-400">
                <img
                  src="/src/assets/images/social_media/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 hover:opacity-70 transition"
                />
              </a>

              {/* Twitter */}
              <a href="#" className="hover:text-blue-500">
                <img
                  src="/src/assets/images/social_media/twitter.png"
                  alt="Twitter"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              {/* Generic Social */}
              <a href="#" className="hover:text-pink-500">
                <img
                  src="/src/assets/images/social_media/social.png"
                  alt="Social"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              {/* Instagram */}
              <a href="#" className="hover:text-pink-600">
                <img
                  src="/src/assets/images/social_media/instagram.png"
                  alt="Instagram"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              {/* Gmail */}
              <a
                href="mailto:your-email@gmail.com"
                className="hover:text-red-600"
              >
                <img
                  src="/src/assets/images/social_media/gmail.png"
                  alt="Gmail"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <img
                  src="/src/assets/images/social_media/linkedin.png"
                  alt="LinkedIn"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img
                  src="/src/assets/images/social_media/telegram.png"
                  alt="Telegram"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              {/* Reddit */}
              <a
                href="https://reddit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                <img
                  src="/src/assets/images/social_media/reddit.png"
                  alt="Reddit"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Futurteria. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
