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
    title: "House Rental",
    description:
      "Thai Colonial Style with classical touch. The house is 10 mins drive to BTS Thonglor. Few steps to local area that you can grab local food in cheap price and also another few steps to Thong Lor area where the famous hanging out area and many stylish restaurants in just 10 mins walk. Easily access to BTS with local tuk tuk just in front of the house.",
    highlights: [
      "Local tuk tuk (shuttle to BTS) is just a few step from house.",
      "To Thong lor famous area only 10 mins walk. You can find many restaurant there",
      "BTS Thonglor and Phrom Pong 2 km = 25 mins walk",
      "J-Avenue and Supermarket 15 mins walk",
      "7-11 and Local food area 5 mins walk",
      "Local restaurant only 1 min walk",
      "To famous Japanese and restaurant area is only 10 mins walk",
    ],
    houseRules: ["Pets not allowed", "Not suitable for children", "No smoking"],
    bathrooms: "2 Full baths",
  };
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
    <div className="flex justify-center px-2 mt-30 font-sans">
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
                        : "bg-white text-gray-600 border-gray-300"
                    } hover:bg-red-200 hover:border-red-400`}
                  >
                    <Heart size={18} fill={liked ? "currentColor" : "none"} />
                    <span className="hidden sm:inline">Add to Wishlist</span>
                  </button>

                  {/* Save Button */}
                  <button
                    onClick={() => setSaved(!saved)}
                    className={`flex items-center gap-1 px-3 py-1.5 border rounded-full transition duration-200 cursor-pointer ${
                      saved
                        ? "bg-blue-100 text-blue-600 border-blue-400"
                        : "bg-white text-gray-600 border-gray-300"
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
                <div className="flex justify-start gap-28 overflow-x-auto px-4 py-1 cursor-pointer">
                  <Link
                    to="overview"
                    smooth
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 text-lg font-bold transition-colors"
                  >
                    Overview
                  </Link>
                  <Link
                    to="features"
                    smooth
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 text-lg font-bold transition-colors"
                  >
                    Itinerary
                  </Link>

                  <Link
                    to="map"
                    smooth
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 text-lg font-bold transition-colors"
                  >
                    Inclusion
                  </Link>
                  <Link
                    to="faq"
                    smooth
                    duration={500}
                    className="text-gray-700 hover:text-blue-600 text-lg font-bold transition-colors"
                  >
                    Exclusion
                  </Link>
                  <Link
                    to="things-to-know"
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
                className="px-4 py-2 bg-white w-full max-w-5xl mx-auto mt-8"
              >
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Overview
                </h2>
              </div>

              {/* Features Section (Dynamic) */}
              <div
                id="features"
                className="px-4 py-6 bg-white w-full max-w-5xl mx-auto"
              >
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                  {features.map(({ id, icon: Icon, label, value }) => (
                    <div key={id} className="flex flex-col items-center">
                      <Icon className="w-6 h-6 text-blue-500 mb-2" />
                      <p className="text-sm text-gray-700 font-medium">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Overview Section */}
              <div className="px-4 py-6 bg-white w-full max-w-5xl mx-auto space-y-6">
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
                    House Rules
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {overview.houseRules.map((rule, index) => (
                      <li key={index}>{rule}</li>
                    ))}
                  </ul>
                </div>

                {/* Bathrooms */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Bathrooms
                  </h3>
                  <p className="text-gray-700">{overview.bathrooms}</p>
                </div>
              </div>

              {/* Map Section */}
              <div className="w-full max-w-5xl mx-auto my-8 relative z-0">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Map
                </h2>
                <div className="h-[400px] w-full rounded-md overflow-hidden relative z-0">
                  <MapContainer
                    center={[mapLocation.lat, mapLocation.lng]}
                    zoom={16}
                    scrollWheelZoom={false}
                    className="h-full w-full"
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[mapLocation.lat, mapLocation.lng]}>
                      <Popup>
                        House Rental Location
                        <br />
                        Thonburi, Bangkok
                      </Popup>
                    </Marker>
                  </MapContainer>
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
                  Similar Rentals
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
              <div class="relative w-full bg-white pt-2 pb-8 mt-4 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-4">
                <div class=" px-2">
                  <div class="flex flex-col items-center">
                    <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                      FAQ
                    </h2>
                    <p class="mt-3 text-lg text-neutral-500 md:text-xl">
                      Frequenty asked questions
                    </p>
                  </div>
                  <div class="mx-auto mt-8 grid max-w-full divide-y divide-neutral-200">
                    <div class="py-5">
                      <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span> How does the billing work?</span>
                          <span class="transition group-open:rotate-180">
                            <svg
                              fill="none"
                              height="24"
                              shape-rendering="geometricPrecision"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                          Springerdata offers a variety of billing options,
                          including monthly and annual subscription plans, as
                          well as pay-as-you-go pricing for certain services.
                          Payment is typically made through a credit card or
                          other secure online payment method.
                        </p>
                      </details>
                    </div>
                    <div class="py-5">
                      <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span> Can I get a refund for my subscription?</span>
                          <span class="transition group-open:rotate-180">
                            <svg
                              fill="none"
                              height="24"
                              shape-rendering="geometricPrecision"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                          We offer a 30-day money-back guarantee for most of its
                          subscription plans. If you are not satisfied with your
                          subscription within the first 30 days, you can request
                          a full refund. Refunds for subscriptions that have
                          been active for longer than 30 days may be considered
                          on a case-by-case basis.
                        </p>
                      </details>
                    </div>
                    <div class="py-5">
                      <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span> How do I cancel my subscription?</span>
                          <span class="transition group-open:rotate-180">
                            <svg
                              fill="none"
                              height="24"
                              shape-rendering="geometricPrecision"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                          To cancel your subscription, you can log in to your
                          account and navigate to the subscription management
                          page. From there, you should be able to cancel your
                          subscription and stop future billing.
                        </p>
                      </details>
                    </div>
                    <div class="py-5">
                      <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span> Is there a free trial?</span>
                          <span class="transition group-open:rotate-180">
                            <svg
                              fill="none"
                              height="24"
                              shape-rendering="geometricPrecision"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                          We offer a free trial of our software for a limited
                          time. During the trial period, you will have access to
                          a limited set of features and functionality, but you
                          will not be charged.
                        </p>
                      </details>
                    </div>
                    <div class="py-5">
                      <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span> How do I contact support?</span>
                          <span class="transition group-open:rotate-180">
                            <svg
                              fill="none"
                              height="24"
                              shape-rendering="geometricPrecision"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                          If you need help with our platform or have any other
                          questions, you can contact the company's support team
                          by submitting a support request through the website or
                          by emailing support@ourwebsite.com.
                        </p>
                      </details>
                    </div>
                    <div class="py-5">
                      <details class="group">
                        <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                          <span>
                            {" "}
                            Do you offer any discounts or promotions?
                          </span>
                          <span class="transition group-open:rotate-180">
                            <svg
                              fill="none"
                              height="24"
                              shape-rendering="geometricPrecision"
                              stroke="currentColor"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="1.5"
                              viewBox="0 0 24 24"
                              width="24"
                            >
                              <path d="M6 9l6 6 6-6"></path>
                            </svg>
                          </span>
                        </summary>
                        <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
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
                className="text-yellow-600 font-medium text-sm"
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
                        Check-in Date
                      </label>
                      <input
                        type="date"
                        className="w-full border rounded-md p-2 text-gray-700"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Check-in Time
                      </label>
                      <input
                        type="time"
                        className="w-full border rounded-md p-2 text-gray-700"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Check-out Date
                      </label>
                      <input
                        type="date"
                        className="w-full border rounded-md p-2 text-gray-700"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Check-out Time
                      </label>
                      <input
                        type="time"
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
                <span className="text-2xl text-gray-800"> $120</span>
                <span className="text-xl text-gray-600">/night</span>
              </div>
              <button className="bg-yellow-600 hover:bg-yellow-400 text-black font-medium px-4 py-2 rounded-xl transition duration-200 cursor-pointer">
                Book Now
              </button>
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
              <div className="space-y-2">
               
              </div>

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
                $120{" "}
                <span className="text-base font-normal text-gray-500">
                  / night
                </span>
              </div>

              {/* Book Now Button Row */}
              <button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-3xl transition duration-200 cursor-pointer">
                Book Now
              </button>
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
