import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [sections, setSections] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${baseUrl}/api/sub_menus/`);
        const data = await response.json();

        const menus = data.menus[0]; // Since menus is an array, we extract the first item
        const subMenus = data.subMenus;

        const formattedSections = [
          {
            title: menus.left_menu,
            key: "left-menu",
            items: subMenus
              .filter((sub) => sub.main_menu === menus.left_menu)
              .map((sub) => ({
                label: sub.sub_menu,
                link: sub.link,
                imageUrl: sub.image_url,
              })),
          },
          {
            title: menus.middle_menu,
            key: "middle-menu",
            items: subMenus
              .filter((sub) => sub.main_menu === menus.middle_menu)
              .map((sub) => ({
                label: sub.sub_menu,
                link: sub.link,
                imageUrl: sub.image_url,
              })),
          },
          {
            title: menus.right_menu,
            key: "right-menu",
            items: subMenus
              .filter((sub) => sub.main_menu === menus.right_menu)
              .map((sub) => ({
                label: sub.sub_menu,
                link: sub.link,
                imageUrl: sub.image_url,
              })),
          },
        ];

        setSections(formattedSections); // Set the state with the formatted sections
      } catch (error) {
        console.error("Failed to fetch footer menus:", error);
      }
    };

    fetchMenu();
  }, [baseUrl]);

  // Quick Links section
  const quickLinks = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/aboutus" },
    { label: "Contact", link: "/contactus" },
    { label: "Blog", link: "/blog" },
    { label: "Privacy", link : "/PrivacyPolicy"}
  ];

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-6 px-4 mt-10">
        <div className="text-white border-b border-gray-400 pb-6">
          {/* Desktop Grid */}
          <div className="hidden sm:grid max-w-7xl mx-auto grid-cols-1 sm:grid-cols-4 text-center">
            {sections.length > 0 &&
              sections.map((section) => (
                <div key={section.key}>
                  <h3 className="text-xl font-semibold mb-2">
                    {section.title}
                  </h3>
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

            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-1">
                {quickLinks.map((item) => (
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
          </div>

          {/* Mobile Dropdowns */}
          <div className="sm:hidden max-w-3xl mx-auto space-y-4 mt-4 px-4">
            {sections.length > 0 &&
              sections.map((section) => (
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

            {/* Quick Links Section for Mobile */}
            <div className="bg-gray-800 rounded-lg p-4">
              <button
                onClick={() => toggleSection("quick-links")}
                className="w-full text-left text-lg font-semibold text-white flex justify-between items-center"
              >
                Quick Links
                <span>{openSection === "quick-links" ? "▲" : "▼"}</span>
              </button>
              {openSection === "quick-links" && (
                <ul className="mt-2 space-y-1">
                  {quickLinks.map((item) => (
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
          </div>
        </div>

        {/* Brand Info Section */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
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
                src="/assets/images/others/location.png"
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
                src="/assets/images/others/phone.png"
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
              {/* Social Media Links */}
              <a href="#" className="hover:text-blue-400">
                <img
                  src="/assets/images/social_media/facebook.png"
                  alt="Facebook"
                  className="w-6 h-6 hover:opacity-70 transition"
                />
              </a>

              <a href="#" className="hover:text-blue-500">
                <img
                  src="/assets/images/social_media/twitter.png"
                  alt="Twitter"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              <a href="#" className="hover:text-pink-500">
                <img
                  src="/assets/images/social_media/social.png"
                  alt="Social"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              <a href="#" className="hover:text-pink-600">
                <img
                  src="/assets/images/social_media/instagram.png"
                  alt="Instagram"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              <a
                href="mailto:your-email@gmail.com"
                className="hover:text-red-600"
              >
                <img
                  src="/assets/images/social_media/gmail.png"
                  alt="Gmail"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
              >
                <img
                  src="/assets/images/social_media/linkedin.png"
                  alt="LinkedIn"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              <a
                href="https://t.me/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <img
                  src="/assets/images/social_media/telegram.png"
                  alt="Telegram"
                  className="w-7 h-7 hover:opacity-70 transition"
                />
              </a>

              <a
                href="https://reddit.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                <img
                  src="/assets/images/social_media/reddit.png"
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
