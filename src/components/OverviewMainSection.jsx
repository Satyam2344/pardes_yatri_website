import React, { useRef, useState, useEffect } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaCheckCircle,
  FaTimes,
} from "react-icons/fa";
import { Heart } from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import { FaClock, FaCalendarAlt, FaExclamationCircle } from "react-icons/fa"; // Importing icons from react-icons
// import L from "leaflet";
import "leaflet/dist/leaflet.css";

// import imageUrl from "//assets/images/srilankabanner.jpg";
import { MapPin, Clock } from "lucide-react";
import { Link } from "react-scroll";
import { Link as RouterLink, useParams } from "react-router-dom";
import {
  FaRegLightbulb,
  FaSuitcaseRolling,
  FaUmbrella,
  FaExclamationTriangle,
} from "react-icons/fa";

const OverviewMainSection = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [showDetails, setShowDetails] = useState(false);
  const cardGridRef1 = useRef(null); // Reference to the first grid for programmatic scrolling
  const [pickupLocation, setPickupLocation] = useState("Bangkok");
  const [dropLocation, setDropLocation] = useState("Phuket");
  const [duration, setDuration] = useState("6 Nights - 7 Days");
  const cardItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Card Title ${i + 1}`,
    description: `This is a description for Card ${i + 1}.`,
  }));

  // Scroll function for left and right
  const handleScroll = (direction, gridRef) => {
    if (gridRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200; // Scroll amount in pixels
      gridRef.current.scrollLeft += scrollAmount; // Scroll horizontally
    }
  };

  const { slug } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeDays, setActiveDays] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/api/get_package/${slug}/`)
      .then((res) => res.json())
      .then((data) => setPackageData(data))
      .catch((err) => console.error("Error fetching package:", err));
  }, [slug]);

  if (!packageData) return <p>Loading package...</p>;

  const others = [
    {
      id: 1,
      icon: FaRegLightbulb,
      label: "Local Culture & Etiquette",
      details: packageData.other_info.local_culture,
    },
    {
      id: 2,
      icon: FaSuitcaseRolling,
      label: "What to Pack",
      details: packageData.other_info.what_to_pack,
    },
    {
      id: 3,
      icon: FaUmbrella,
      label: "Weather Alerts",
      details: packageData.other_info.weather_alerts,
    },
    {
      id: 4,
      icon: FaExclamationTriangle,
      label: "Important Notes",
      details: packageData.other_info.important_notes,
    },
  ];

  const faqList = [
    {
      question: "How does the billing work?",
      answer:
        "Springerdata offers a variety of billing options, including monthly and annual subscription plans, as well as pay-as-you-go pricing for certain services. Payment is typically made through a credit card or other secure online payment method.",
    },
    {
      question: "Can I get a refund for my subscription?",
      answer:
        "We offer a 30-day money-back guarantee for most of its subscription plans. If you are not satisfied with your subscription within the first 30 days, you can request a full refund. Refunds for subscriptions that have been active for longer than 30 days may be considered on a case-by-case basis.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "To cancel your subscription, you can log in to your account and navigate to the subscription management page. From there, you should be able to cancel your subscription and stop future billing.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "We offer a free trial of our software for a limited time. During the trial period, you will have access to a limited set of features and functionality, but you will not be charged.",
    },
    {
      question: "How do I contact support?",
      answer:
        "If you need help with our platform or have any other questions, you can contact the company's support team by submitting a support request through the website or by emailing support@ourwebsite.com.",
    },
    {
      question: "Do you offer any discounts or promotions?",
      answer:
        "We may offer discounts or promotions from time to time. To stay up-to-date on the latest deals and special offers, you can sign up for the company's newsletter or follow it on social media.",
    },
  ];

  const imageUrls = packageData.similar_images;

  const overviewText = `${packageData.overview}
  `;

  const maxLength = 400; // Define the maximum visible text length

  // Conditionally show the "Read More" / "Read Less"
  const visibleText = isExpanded
    ? overviewText
    : overviewText.substring(0, maxLength);

  const toggleDescription = (day) => {
    setActiveDays(
      (prev) =>
        prev.includes(day)
          ? prev.filter((item) => item !== day) // Remove day from active if it's already open
          : [...prev, day] // Add day to active if it's not already open
    );
  };

  return (
    <div className="flex justify-center mt-30 font-sans">
      <div className="flex w-full max-w-screen-2xl">
        {/* Left Column */}
        <div className="hidden lg:block w-[5%] bg-white "></div>

        {/* Middle Column */}
        <div className="min-h-screen flex flex-col lg:flex-row w-full">
          {/* Main Content */}
          <div className="w-[97%] lg:w-[90%] mx-auto lg:mx-0 bg-white flex-1 overflow-y-auto">
            <div className="p-2">
              <div className="flex items-center justify-between px-4 py-2 flex-wrap">
                {/* Heading */}
                <h1 className="text-5xl text-black font-bold w-full lg:w-auto text-center lg:text-left mb-2 lg:mb-0">
                  {packageData.heading}
                </h1>

                {/* Buttons (on the right side) */}
                <div className="flex items-center space-x-4 justify-center lg:justify-end w-full lg:w-auto">
                  {/* Add to Wishlist Button */}
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center gap-1 px-3 py-1.5 border rounded-full transition duration-200 cursor-pointer ${
                      liked
                        ? "bg-red-100 text-red-600 border-red-400"
                        : "bg-white text-red-500 border-red-300"
                    } hover:bg-red-200 hover:border-red-400`}
                  >
                    <Heart size={18} fill={liked ? "currentColor" : "none"} />
                    <span className="hidden sm:inline text-red-400 border-red-300">
                      Add to Wishlist
                    </span>
                  </button>
                </div>
              </div>

              {/* Dynamic Image */}
              <img
                src={`${baseUrl}${packageData.image_url}`}
                alt="Dynamic"
                className="w-full h-[500px] max-w-full mx-auto my-4 object-cover"
              />

              {/* Pickup/Drop and Duration Section */}
              <div className="px-2 py-4 bg-gray-50 w-full max-w-5xl mx-auto rounded-xl mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Pickup & Drop Locations */}
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-blue-500" />
                    <div>
                      <h3 className="text-gray-700 text-lg font-bold">
                        Pickup & Drop
                      </h3>
                      <p className="text-gray-600 text-md font-semibold">
                        {packageData.location.pickup_location} -{" "}
                        {packageData.location.drop_location}
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-green-500" />
                    <div>
                      <h3 className="text-gray-700 text-lg font-bold">
                        Duration
                      </h3>
                      <p className="text-gray-600 text-md font-semibold">
                        {packageData.duration.nights} Nights -{" "}
                        {packageData.duration.days} Days
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sticky top-0 bg-blue-200 rounded-lg border-white py-2">
                <div className="flex justify-start gap-28 overflow-x-auto px-4 py-1 cursor-pointer no-scrollbar">
                  <Link
                    to="overview"
                    smooth
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 text-lg font-bold transition-colors ml-6"
                  >
                    Overview
                  </Link>
                  <Link
                    to="itinerary"
                    smooth
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 text-lg font-bold transition-colors"
                  >
                    Itinerary
                  </Link>
                  <Link
                    to="inclusions"
                    smooth
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 text-lg font-bold transition-colors"
                  >
                    Inclusion
                  </Link>
                  <Link
                    to="exclusions"
                    smooth
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 text-lg font-bold transition-colors"
                  >
                    Exclusion
                  </Link>
                  <Link
                    to="others"
                    smooth
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 text-lg font-bold transition-colors"
                  >
                    Others
                  </Link>
                </div>
              </div>

              {/* Overview Section */}
              <div
                id="overview"
                className="px-6 py-6 bg-violet-50 w-full max-w-5xl mx-auto mt-8 rounded-2xl shadow-lg border-0 border-gray-300"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  OVERVIEW
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {visibleText}
                </p>

                {/* Read More / Read Less Button */}
                <div className="mt-4 text-right">
                  <span
                    className="text-blue-500 text-lg font-semibold cursor-pointer"
                    onClick={() => setIsExpanded(!isExpanded)}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </span>
                </div>
              </div>

              {/* Itinerary Section (Dynamic) */}
              <div
                id="itinerary"
                className="bg-slate-100 rounded-2xl shadow-lg p-6 border-0 border-gray-300 mt-12"
              >
                <h2 className="text-2xl font-bold text-center text-black mb-6">
                  ITINERARY
                </h2>
                <div className="space-y-4">
                  {packageData.itinerary.map(({ title, points }, index) => {
                    const day = index + 1;

                    return (
                      <div
                        key={index}
                        className={`rounded-xl shadow-sm p-6 border-0 border-gray-200 ${
                          activeDays.includes(day)
                            ? "bg-blue-50"
                            : "bg-yellow-50"
                        }`}
                      >
                        <div
                          className="flex justify-between items-center cursor-pointer"
                          onClick={() => toggleDescription(day)}
                        >
                          <div
                            className="flex items-center"
                            onClick={() => toggleDescription(day)}
                          >
                            <div className="text-lg font-semibold text-blue-600">
                              Day {day}
                            </div>
                            <div className="text-lg font-semibold text-gray-800 ml-2">
                              - {title}
                            </div>
                          </div>
                          <button
                            className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 focus:outline-none flex items-center cursor-pointer"
                            onClick={(e) => e.stopPropagation()} // Prevent triggering the parent click
                          >
                            {activeDays.includes(day) ? (
                              <FaChevronUp className="w-5 h-5 text-gray-400" />
                            ) : (
                              <FaChevronDown className="w-5 h-5 text-black" />
                            )}
                          </button>
                        </div>
                        <div
                          className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            activeDays.includes(day)
                              ? "max-h-[2000px]"
                              : "max-h-0"
                          }`}
                        >
                          <ul className="list-disc pl-5 text-lg text-gray-600 mt-6">
                            {points?.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Inclusion section */}
              <div
                id="inclusions"
                className="bg-green-50 rounded-2xl shadow-lg p-6 border-0 border-gray-300 mt-12"
              >
                <h2 className="text-2xl font-bold text-center text-black mb-6">
                  INCLUSIONS
                </h2>
                <div className=" rounded-xl p-2 ">
                  <ul className="list-none p-0 text-lg text-gray-600">
                    {Array.isArray(packageData?.inclusions) &&
                    packageData.inclusions.length > 0 ? (
                      packageData.inclusions.map((point, index) => (
                        <li key={index} className="flex items-start mt-4">
                          <FaCheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                          <span className="flex-grow">{point}</span>
                        </li>
                      ))
                    ) : (
                      <p>No inclusions available.</p>
                    )}
                  </ul>
                </div>
              </div>

              {/* Exclusion section */}
              <div
                id="exclusions"
                className="bg-red-50 rounded-2xl shadow-lg p-6 border-0 border-gray-300 mt-12"
              >
                <h2 className="text-2xl font-bold text-center text-black mb-6">
                  EXCLUSIONS
                </h2>
                <ul className="list-none p-2 text-lg text-gray-600">
                  {Array.isArray(packageData?.exclusions) &&
                  packageData.exclusions.length > 0 ? (
                    packageData.exclusions.map((point, index) => (
                      <li key={index} className="flex items-start mt-4">
                        <FaTimes className="w-6 h-6 text-red-400 mr-3 flex-shrink-0" />{" "}
                        <span className="flex-grow">{point}</span>
                      </li>
                    ))
                  ) : (
                    <p>No exclusions available.</p>
                  )}
                </ul>
              </div>

              {/* Others section */}
              <div
                id="others"
                className="bg-violet-50 rounded-2xl shadow-lg p-6 border-0 border-gray-300 mt-12"
              >
                <h2 className="text-2xl font-bold text-center text-black mb-6">
                  OTHERS
                </h2>
                <div className="space-y-6">
                  {others.map(({ id, icon: Icon, label, details }) => (
                    <div
                      key={id}
                      className="flex items-start space-x-4 bg-yellow-50 rounded-xl shadow-sm p-4 border-0 border-gray-200"
                    >
                      <Icon className="w-6 h-6 text-green-500 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">
                          {label}
                        </h3>
                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                          {Array.isArray(details) ? (
                            details.map((item, idx) => (
                              <li key={idx} className="text-lg">
                                {item}
                              </li>
                            ))
                          ) : (
                            <li className="text-lg">{details}</li> // fallback if it's not an array
                          )}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* SIMILAR PICTURES */}
              <div className="bg-indigo-50 rounded-2xl text-center shadow-lg p-2 border-0 border-gray-300 mt-12">
                <h2 className="text-2xl font-bold text-black m-4 mt-12">
                  UNFOLD STORY FRAME BY FRAME
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-2 max-w-[100%] md:max-w-[100%] place-items-center">
                  {/* Loop through the image URLs and display them */}

                  {imageUrls.map((image, index) => (
                    <img
                      key={index}
                      className="hover:opacity-75 rounded-2xl w-72 h-48 object-cover"
                      src={`${baseUrl}${image}`}
                      alt={`Gallery Image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="mx-auto mt-12 grid max-w-full mb-6">
                <div className="flex flex-col items-center">
                  <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                    FAQ
                  </h2>
                  <p className="mt-3 text-lg text-neutral-500 md:text-xl">
                    Frequently Asked Questions
                  </p>
                </div>
                {faqList.map((faq, index) => (
                  <div
                    key={index}
                    className="p-5 mt-4 text-lg shadow-lg rounded-xl"
                  >
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                        <span>{faq.question}</span>
                        <span className="transition group-open:rotate-180">
                          <svg
                            fill="none"
                            height="24"
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                          >
                            <path d="M6 9l6 6 6-6"></path>
                          </svg>
                        </span>
                      </summary>
                      <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                        {faq.answer}
                      </p>
                    </details>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer for small/medium screens */}
          <div className="lg:hidden fixed bottom-0 w-full z-50">
            {/* Toggle Button */}
            <div className="bg-white border-t px-4 py-2 shadow-md flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Starting from
              </h3>
            </div>

            {/* Bottom Bar (Always Visible) */}
            <div className="bg-white shadow-md px-4 py-3">
              <div className="text-xl font-bold text-gray-600 mb-2">
                <span className="text-2xl text-gray-800">
                  {" "}
                  ₹{packageData.price}/-
                </span>
                <span className="text-sm text-gray-500"> per person</span>
              </div>

              {/* Buttons in vertical stack */}
              <div className="flex flex-col space-y-2">
                <RouterLink
                  to={`/bookingForm?sub_menu=${encodeURIComponent(
                    packageData.sub_menu
                  )}&heading=${encodeURIComponent(packageData.heading)}`}
                >
                  <button className="w-full bg-yellow-400 hover:bg-yellow-600 shadow-amber-400 text-black font-medium py-2 px-4 rounded-xl transition duration-200">
                    Get Quotes
                  </button>
                </RouterLink>

                <a
                  href="#"
                  download
                  className="w-full text-center bg-blue-600 hover:bg-indigo-400 shadow-blue-500 shadow-blue-500 text-white font-medium py-2 px-4 rounded-xl transition duration-200"
                >
                  Download Itinerary
                </a>
                {/* {console.log("Main Menu Name:", packageData.main_menu)} */}

                {/* Pay Now (Only if Trekking) */}
                {packageData.main_menu
                  ?.toLowerCase()
                  .includes("trekking") && (
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-xl transition duration-200">
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar for large screens */}
          <div className="hidden lg:block lg:w-[25%] p-4">
            <div className="bg-white rounded-2xl shadow-md p-4 space-y-4">
              {/* Booking Details Heading */}
              <h2 className="text-md font-semibold text-gray-800">
                Starting From
              </h2>

              {/* Price Row */}
              <div className="text-4xl font-semibold text-gray-800">
                ₹{packageData.price}/-{" "}
                <span className="text-base font-normal text-gray-500">
                  per person
                </span>
              </div>

              {/* Book Now Button Row */}
              {/* Book Now and Download Itinerary Buttons */}
              <div className="flex flex-col space-y-2">
                <RouterLink
                  to={`/bookingForm?sub_menu=${encodeURIComponent(
                    packageData.sub_menu
                  )}&heading=${encodeURIComponent(packageData.heading)}`}
                >
                  <button className="w-full bg-yellow-400 hover:bg-yellow-200 shadow-amber-400 text-black font-semibold py-2 px-4 rounded-3xl transition duration-200 cursor-pointer">
                    Get Quotes
                  </button>
                </RouterLink>

                <a
                  href="#"
                  download
                  className="w-full text-center bg-blue-600 hover:bg-indigo-400 shadow-blue-500 text-white font-medium py-2 px-4 rounded-3xl transition duration-200"
                >
                  Download Itinerary
                </a>

                {/* Pay Now (Only if Trekking) */}
                {packageData.main_menu
                  ?.toLowerCase()
                  .includes("trekking") && (
                  <button className="w-full bg-green-500 hover:bg-green-300 text-white font-medium py-2 px-4 rounded-3xl transition duration-200 cursor-pointer">
                    Pay Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden lg:block w-[5%] bg-white p-2"></div>
      </div>
    </div>
  );
};

export default OverviewMainSection;
