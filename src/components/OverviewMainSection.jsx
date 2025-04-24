import React, { useRef, useState, useEffect } from "react";
import {
  Heart,
  Bookmark,
  BedIcon,
  BathIcon,
  UsersIcon,
  CalendarIcon,
} from "lucide-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { FaClock, FaCalendarAlt, FaExclamationCircle } from "react-icons/fa"; // Importing icons from react-icons
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import imageUrl from "/src/assets/images/srilankabanner.jpg";
import { MapPin, Clock } from "lucide-react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import {
  FaRegCheckCircle,
  FaTaxi,
  FaUtensils,
  FaBed,
  FaBusAlt,
} from "react-icons/fa";
import {
  FaRegTimesCircle,
  FaHotel,
  FaMoneyBillWave,
  FaPlane,
  FaMedkit,
} from "react-icons/fa";
import {
  FaRegLightbulb,
  FaSuitcaseRolling,
  FaUmbrella,
  FaExclamationTriangle,
} from "react-icons/fa";

const OverviewMainSection = () => {
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

  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const features = [
    {
      id: 1,
      icon: BedIcon,
      label: "Bedrooms",
      value: "2 Bedrooms",
    },
    {
      id: 2,
      icon: BathIcon,
      label: "Bathrooms",
      value: "1 Bathroom",
    },
    {
      id: 3,
      icon: UsersIcon,
      label: "Guests",
      value: "Up to 4 Guests",
    },
    {
      id: 4,
      icon: CalendarIcon,
      label: "Minimum Stay",
      value: "Min. 2 Nights",
    },
  ];
  const overview = {
    title: "Sri Lanka Coastal Retreat",
    description:
      "Experience the charm of Sri Lanka with this cozy, modern coastal house nestled near the vibrant streets of Galle. Just a 10-minute tuk-tuk ride from Galle Fort and a short stroll from golden beaches, this home offers the perfect mix of culture, relaxation, and local flavor. Enjoy peaceful mornings with sea breezes and spend your evenings exploring seaside cafés and bustling markets.",
    highlights: [
      "Local tuk-tuks easily available from right outside the house.",
      "Only 10 minutes by tuk-tuk to historic Galle Fort and iconic lighthouse.",
      "Beach access just a 5-minute walk — perfect for morning swims or sunset views.",
      "Authentic Sri Lankan street food stalls 3 mins walk from the home.",
      "Supermarkets, cafés, and boutique stores all within a 10-minute walking radius.",
      "Ayurvedic spas and yoga studios nearby for relaxation and wellness.",
      "Train station nearby — easy day trips to Unawatuna and Mirissa beaches.",
    ],
    tripRules: [
      "No loud parties",
      "No smoking indoors",
      "Respect local customs",
    ],
    luggages: "Maximum 2 Bags with a person",
  };

  const itinerary = [
    {
      day: 1,
      title: "Arrival in Colombo",
      description:
        "Land at Bandaranaike International Airport. Transfer to your hotel and explore Galle Face Green and Pettah Market.",
    },
    {
      day: 2,
      title: "Colombo to Kandy",
      description:
        "Visit the Temple of the Sacred Tooth Relic, stroll around Kandy Lake, and explore local markets.",
    },
    {
      day: 3,
      title: "Kandy to Nuwara Eliya",
      description:
        "Scenic train ride through tea plantations. Visit a tea factory and relax by Gregory Lake.",
    },
    {
      day: 4,
      title: "Nuwara Eliya to Ella",
      description:
        "Drive to Ella. Visit Nine Arches Bridge, enjoy the view from Ella Rock or Little Adam’s Peak.",
    },
    {
      day: 5,
      title: "Ella to Yala National Park",
      description:
        "Head south to Yala for a wildlife safari. Spot elephants, leopards, and exotic birds.",
    },
    {
      day: 6,
      title: "Beach Day in Mirissa",
      description:
        "Relax at the beach, try surfing, and enjoy seafood. Optional whale watching tour in the morning.",
    },
    {
      day: 7,
      title: "Galle Fort & Departure",
      description:
        "Explore the Dutch Galle Fort, local cafés and art shops. Return to Colombo for departure.",
    },
  ];

  const inclusions = [
    {
      id: 1,
      icon: FaRegCheckCircle,
      label: "All Entrance Fees to Attractions",
    },
    {
      id: 2,
      icon: FaTaxi,
      label: "Airport Transfers",
    },
    {
      id: 3,
      icon: FaUtensils,
      label: "Daily Breakfast and Selected Meals",
    },
    {
      id: 4,
      icon: FaBed,
      label: "Accommodation in 3-Star Hotels",
    },
    {
      id: 5,
      icon: FaBusAlt,
      label: "Transport via Air-Conditioned Vehicle",
    },
  ];

  const exclusions = [
    {
      id: 1,
      icon: FaRegTimesCircle,
      label: "Personal Expenses (Shopping, Snacks)",
    },
    {
      id: 2,
      icon: FaPlane,
      label: "International Flights (Arrivals & Departures)",
    },
    {
      id: 3,
      icon: FaHotel,
      label: "Room Service or Special Requests in Hotels",
    },
    {
      id: 4,
      icon: FaMoneyBillWave,
      label: "Tips & Gratuities for Guides and Drivers",
    },
    {
      id: 5,
      icon: FaMedkit,
      label: "Travel Insurance (Recommended)",
    },
  ];

  const others = [
    {
      id: 1,
      icon: FaRegLightbulb,
      label: "Local Culture & Etiquette",
      details:
        "Please be respectful of local customs, especially in religious sites. Modest clothing is recommended when visiting temples.",
    },
    {
      id: 2,
      icon: FaSuitcaseRolling,
      label: "What to Pack",
      details:
        "We recommend packing lightweight, breathable clothing, a hat, sunscreen, and swimwear. Don’t forget your camera!",
    },
    {
      id: 3,
      icon: FaUmbrella,
      label: "Weather Alerts",
      details:
        "Sri Lanka's weather is tropical. Carry an umbrella, especially if traveling between May and October due to monsoon seasons.",
    },
    {
      id: 4,
      icon: FaExclamationTriangle,
      label: "Important Notes",
      details:
        "Due to local regulations, some areas may require additional permits or advance bookings for entry. Please check with us for more details.",
    },
  ];

  const mapLocation = {
    lat: 13.7468, // Latitude for the location
    lng: 100.5622, // Longitude for the location
  };
  // Nearest places data
  const nearestInfo = {
    airports: [
      { name: "Suvarnabhumi Airport", distance: "30 mins drive" },
      { name: "Don Mueang Airport", distance: "45 mins drive" },
    ],
    restaurants: [
      { name: "Siam Niramit", distance: "5 mins walk" },
      { name: "Thonglor Road Food Street", distance: "10 mins walk" },
    ],
    malls: [
      { name: "J-Avenue Mall", distance: "15 mins walk" },
      { name: "EmQuartier Mall", distance: "25 mins walk" },
    ],
  };
  const imageUrls = [
    "/src/assets/images/gallary/g3.webp",
    "/src/assets/images/gallary/g4.webp",
    "/src/assets/images/gallary/g7.webp",
    "/src/assets/images/gallary/g7.webp",
    "/src/assets/images/gallary/g4.webp",
    "/src/assets/images/gallary/g7.webp",
  ];

  return (
    <div className="flex justify-center mt-30 font-sans">
      <div className="flex w-full max-w-screen-2xl">
        {/* Left Column */}
        <div className="hidden lg:block w-[10%] bg-white "></div>

        {/* Middle Column */}
        <div className="min-h-screen flex flex-col lg:flex-row w-full">
          {/* Main Content */}
          <div className="w-[97%] lg:w-[70%] mx-auto lg:mx-0 bg-white flex-1 overflow-y-auto">
            <div className="p-2">
              <div className="flex items-center justify-between px-4 py-2 flex-wrap">
                {/* Heading */}
                <h1 className="text-3xl text-black font-bold w-full lg:w-auto text-center lg:text-left mb-2 lg:mb-0">
                  Tropical Paradise
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

                  {/* Save Button */}
                  <button
                    onClick={() => setSaved(!saved)}
                    className={`flex items-center gap-1 px-3 py-1.5 border rounded-full transition duration-200 cursor-pointer ${
                      saved
                        ? "bg-blue-100 text-blue-600 border-blue-400"
                        : "bg-white text-blue-600 border-blue-300"
                    } hover:bg-blue-200 hover:border-blue-400`}
                  >
                    <Bookmark
                      size={18}
                      fill={saved ? "currentColor" : "none"}
                    />
                    <span className="hidden sm:inline">Save</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Image */}
              <img
                src={imageUrl}
                alt="Dynamic"
                className="w-full max-w-full mx-auto my-8 object-contain"
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
                        {pickupLocation} - {dropLocation}
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
                        {duration}
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
                className="px-4 py-2 bg-white w-full text-center max-w-5xl mx-auto mt-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  Overview
                </h2>
              </div>

              {/* Overview Section */}
              <div className="px-4 py-2 bg-white w-full max-w-5xl mx-auto space-y-6">
                {/* Title */}
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  {overview.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">
                  {overview.description}
                </p>

                {/* Highlights */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Highlights
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {overview.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* House Rules */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Trip Rules
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {overview.tripRules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>

                {/* Bathrooms */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Luggages
                  </h3>
                  <p className="text-gray-700">{overview.luggages}</p>
                </div>
              </div>

              {/* Itinerary Section (Dynamic) */}
              <div
                id="itinerary"
                className="px-4 py-6 bg-white w-full max-w-5xl mx-auto"
              >
                <h2 className="text-2xl font-bold text-center text-black mb-6">
                  Sri Lanka Itinerary
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {itinerary.map(({ day, title, description }) => (
                    <div
                      key={day}
                      className="bg-gray-50 rounded-xl shadow-sm p-4 flex flex-col items-start border border-gray-200"
                    >
                      <div className="text-sm text-indigo-500 font-semibold mb-1">
                        Day {day}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-600">{description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusion section */}
              <div
                id="inclusions"
                className="px-4 py-6 bg-white w-full max-w-5xl mx-auto"
              >
                <h2 className="text-2xl font-bold text-center text-black mb-6">
                  Trip Inclusions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {inclusions.map(({ id, icon: Icon, label }) => (
                    <div
                      key={id}
                      className="flex items-center space-x-3 bg-gray-50 rounded-xl shadow-sm p-4 border border-gray-200"
                    >
                      <Icon className="w-6 h-6 text-blue-500" />
                      <p className="text-sm text-gray-700">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusion section */}
              <div
                id="exclusions"
                className="px-4 py-6 bg-white w-full max-w-5xl mx-auto"
              >
                <h2 className="text-2xl font-bold text-center text-black mb-6">
                  Trip Exclusions
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {exclusions.map(({ id, icon: Icon, label }) => (
                    <div
                      key={id}
                      className="flex items-center space-x-3 bg-gray-50 rounded-xl shadow-sm p-4 border border-gray-200"
                    >
                      <Icon className="w-6 h-6 text-red-500" />
                      <p className="text-sm text-gray-700">{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Others section */}
              <div
                id="others"
                className="px-4 py-8 bg-white w-full max-w-5xl mx-auto"
              >
                <h2 className="text-2xl font-bold text-center text-black mb-6">
                  Other Important Information
                </h2>
                <div className="space-y-6">
                  {others.map(({ id, icon: Icon, label, details }) => (
                    <div
                      key={id}
                      className="flex items-start space-x-4 bg-gray-50 rounded-xl shadow-sm p-4 border border-gray-200"
                    >
                      <Icon className="w-6 h-6 text-green-500" />
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">
                          {label}
                        </h3>
                        <p className="text-sm text-gray-700">{details}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Nearest Information Section */}
              <div
                id=""
                className="w-full max-w-5xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Nearest Airports */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Nearest Airports
                  </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {nearestInfo.airports.map((airport, index) => (
                      <li key={index}>
                        <strong>{airport.name}:</strong> {airport.distance}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nearest Restaurants */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Nearest Restaurants
                  </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {nearestInfo.restaurants.map((restaurant, index) => (
                      <li key={index}>
                        <strong>{restaurant.name}:</strong>{" "}
                        {restaurant.distance}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Nearest Malls */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    Nearest Malls
                  </h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {nearestInfo.malls.map((mall, index) => (
                      <li key={index}>
                        <strong>{mall.name}:</strong> {mall.distance}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="my-8">
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                  Things to Know
                </h2>

                <div className="space-y-6">
                  {/* Check-in / Check-out Timings */}
                  <div className="flex items-center space-x-4">
                    <FaClock size={24} className="text-blue-500" />
                    <div>
                      <h3 className="font-bold text-gray-600">
                        Check-in / Check-out
                      </h3>
                      <p className="text-gray-500">
                        Check-in after 4 pm • Check-out by 11 am
                      </p>
                    </div>
                  </div>

                  {/* Cancellation Policy */}
                  <div className="flex items-center space-x-4">
                    <FaCalendarAlt size={24} className="text-green-500" />
                    <div>
                      <h3 className="font-bold text-gray-600">
                        Cancellation Policy
                      </h3>
                      <p className="text-gray-500">
                        Enter your trip dates to see an exact cancellation
                        policy.
                      </p>
                    </div>
                  </div>

                  {/* House Rules */}
                  <div className="flex items-center space-x-4">
                    <FaExclamationCircle size={24} className="text-red-500" />
                    <div>
                      <h3 className="font-bold text-gray-600">House Rules</h3>
                      <p className="text-gray-500">
                        Pets not allowed, No smoking
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container mx-auto p-4">
                <h2 className="text-3xl font-bold text-black m-4">
                  Similar Pictures
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-2 max-w-[100%] md:max-w-[100%] place-items-center">
                  {/* Loop through the image URLs and display them */}

                  {imageUrls.map((image, index) => (
                    <img
                      key={index}
                      className="hover:opacity-75 rounded-2xl"
                      src={image}
                      alt={`Gallery Image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="relative w-full bg-white pt-2 pb-8 mt-4 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-4">
                <div className=" px-2">
                  <div className="flex flex-col items-center">
                    <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                      FAQ
                    </h2>
                    <p className="mt-3 text-lg text-neutral-500 md:text-xl">
                      Frequenty asked questions
                    </p>
                  </div>
                  <div className="mx-auto mt-8 grid max-w-full divide-y divide-neutral-200">
                    <div className="py-5">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span> How does the billing work?</span>
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
                          Springerdata offers a variety of billing options,
                          including monthly and annual subscription plans, as
                          well as pay-as-you-go pricing for certain services.
                          Payment is typically made through a credit card or
                          other secure online payment method.
                        </p>
                      </details>
                    </div>
                    <div className="py-5">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span> Can I get a refund for my subscription?</span>
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
                          We offer a 30-day money-back guarantee for most of its
                          subscription plans. If you are not satisfied with your
                          subscription within the first 30 days, you can request
                          a full refund. Refunds for subscriptions that have
                          been active for longer than 30 days may be considered
                          on a case-by-case basis.
                        </p>
                      </details>
                    </div>
                    <div className="py-5">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span> How do I cancel my subscription?</span>
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
                          To cancel your subscription, you can log in to your
                          account and navigate to the subscription management
                          page. From there, you should be able to cancel your
                          subscription and stop future billing.
                        </p>
                      </details>
                    </div>
                    <div className="py-5">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span> Is there a free trial?</span>
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
                          We offer a free trial of our software for a limited
                          time. During the trial period, you will have access to
                          a limited set of features and functionality, but you
                          will not be charged.
                        </p>
                      </details>
                    </div>
                    <div className="py-5">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span> How do I contact support?</span>
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
                          If you need help with our platform or have any other
                          questions, you can contact the company's support team
                          by submitting a support request through the website or
                          by emailing support@ourwebsite.com.
                        </p>
                      </details>
                    </div>
                    <div className="py-5">
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span>
                            {" "}
                            Do you offer any discounts or promotions?
                          </span>
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
                          We may offer discounts or promotions from time to
                          time. To stay up-to-date on the latest deals and
                          special offers, you can sign up for the company's
                          newsletter or follow it on social media.
                        </p>
                      </details>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer for small/medium screens */}
          <div className="lg:hidden fixed bottom-0 w-full z-50">
            {/* Toggle Button */}
            <div className="bg-white border-t px-4 py-2 shadow-md flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-800">
                Booking Summary
              </h3>
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-yellow-600 font-medium text-sm cursor-pointer"
              >
                {showDetails ? "Hide Details" : "Show Details"}
              </button>
            </div>

            {/* Dropdown Content */}
            {showDetails && (
              <div className="bg-white border-t">
                {/* Check-in / Check-out & Time Selectors */}
                <div className="px-4 py-3 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Departure Location
                      </label>
                      <input
                        type="text"
                        placeholder="enter your departure location..."
                        className="w-full border rounded-md p-2 text-gray-700"
                      />
                    </div>
                  </div>

                  {/* Number of Persons */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Total Persons
                    </label>
                    <input
                      type="number"
                      min="1"
                      className="w-full border rounded-md p-2 text-gray-700"
                      placeholder="Enter number of guests"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Bar (Always Visible) */}
            <div className="bg-white shadow-md px-4 py-3 flex items-center justify-between">
              <div className="text-xl font-bold text-gray-600">
                Price
                <span className="text-2xl text-gray-800"> $1200</span>
                <span className="text-sm text-gray-500">/night</span>
              </div>
              <RouterLink to="/bookingForm">
                <button className="bg-yellow-600 hover:bg-yellow-400 text-black font-medium px-4 py-2 rounded-xl transition duration-200 cursor-pointer">
                  Book Now
                </button>
              </RouterLink>
            </div>
          </div>

          {/* Sidebar for large screens */}
          <div className="hidden lg:block lg:w-[25%] p-4">
            <div className="bg-white rounded-2xl shadow-md p-4 space-y-4">
              {/* Booking Details Heading */}
              <h2 className="text-xl font-bold text-gray-800">
                Booking Details
              </h2>

              {/* Check-in and Check-out Date & Time */}
              <div className="space-y-2"></div>

              {/* Total Number of Persons */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Total Number of Persons
                </label>
                <input
                  type="number"
                  min="1"
                  placeholder="Enter number of persons"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Departure Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Departure Location
                </label>
                <input
                  type="text"
                  placeholder="Enter departure city"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              {/* Price Row */}
              <h1 className="text-lg font-bold">Price</h1>
              <div className="text-4xl font-semibold text-gray-800">
                $1200{" "}
                <span className="text-base font-normal text-gray-500">
                  / night
                </span>
              </div>

              {/* Book Now Button Row */}
              <RouterLink to="/bookingForm">
                <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-3xl transition duration-200 cursor-pointer">
                  Book Now
                </button>
              </RouterLink>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden lg:block w-[10%] bg-white p-2"></div>
      </div>
    </div>
  );
};

export default OverviewMainSection;
