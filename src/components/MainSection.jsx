import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const MainSection = () => {
  const cardGridRef1 = useRef(null); // Reference to the first grid for programmatic scrolling
  const cardGridRef2 = useRef(null); // Reference to the second grid for programmatic scrolling
  const gridRef1 = useRef(null); // Reference to the first grid for programmatic scrolling
  const gridRef2 = useRef(null); // Reference to the second grid for programmatic scrolling
  const [selectedRegion, setSelectedRegion] = useState("Europe");
  const [likedCards, setLikedCards] = useState({});
  const [showVideo, setShowVideo] = useState(false);
  const [cardItems1, setCardItems1] = useState([]);
  const [cardItems2, setCardItems2] = useState([]);
  const [cardItems3, setCardItems3] = useState([]);
  const [cardItems4, setCardItems4] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // const toggleLike = (id) => {
  //   setLikedCards((prev) => ({
  //     ...prev,
  //     [id]: !prev[id],
  //   }));
  // };

  const testimonials = [
    {
      name: "Lucia",
      quote:
        "Travel isn’t always pretty. It isn’t always comfortable. Sometimes it hurts, it even breaks your heart. But that’s okay. The journey changes you — it should change you.",
      image: "/assets/images/touriest/guide-3.webp",
    },
    {
      name: "Carlos",
      quote:
        "The world is a book, and those who do not travel read only one page.",
      image: "/assets/images/touriest/guide-1.webp",
    },
    {
      name: "Aisha",
      quote:
        "To travel is to discover that everyone is wrong about other countries.",
      image: "/assets/images/touriest/guide-2.webp",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextTestimonial = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const { name, quote, image } = testimonials[current];

  // const cardItems = Array.from({ length: 6 }, (_, i) => ({
  //   id: i + 1,
  //   title: `Card Title ${i + 1}`,
  //   description: "Explore the best places in town with our top-rated guides.",
  //   imageUrl: "/assets/images/touriest/guide-1.webp",
  //   rating: 4,
  //   price: 49,
  // }));

  useEffect(() => {
    fetch(`${baseUrl}/api/trending-destinations/`) // Replace with your actual backend URL
      .then((res) => res.json())
      .then((data) => {
        if (data.packages) {
          setCardItems1(data.packages);
        }
      })
      .catch((error) => console.error("Failed to fetch packages:", error));
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/api/recently-booked/`) // Replace with your actual backend URL
      .then((res) => res.json())
      .then((data) => {
        if (data.packages) {
          setCardItems2(data.packages);
        }
      })
      .catch((error) => console.error("Failed to fetch packages:", error));
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/api/premium-packages/`) // Replace with your actual backend URL
      .then((res) => res.json())
      .then((data) => {
        if (data.packages) {
          setCardItems3(data.packages);
        }
      })
      .catch((error) => console.error("Failed to fetch packages:", error));
  }, []);

  useEffect(() => {
    fetch(`${baseUrl}/api/adventure-packages/`) // Replace with your actual backend URL
      .then((res) => res.json())
      .then((data) => {
        if (data.packages) {
          setCardItems4(data.packages);
        }
      })
      .catch((error) => console.error("Failed to fetch packages:", error));
  }, []);

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const items = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: `/assets/images/packages/p2-3.webp`,
    title: `Image Title ${i + 1}`,
  }));

  const items1 = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: `/assets/images/packages/p2-4.webp`,
    title: `Image Title ${i + 1}`,
  }));

  // Scroll function for left and right
  const handleScroll = (direction, gridRef) => {
    if (gridRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200; // Scroll amount in pixels
      gridRef.current.scrollLeft += scrollAmount; // Scroll horizontally
    }
  };

  const cities = [
    { id: 1, title: "Paris", image: "/assets/images/packages/p1-8.webp" },
    { id: 2, title: "Tokyo", image: "/assets/images/packages/s2.webp" },
    { id: 3, title: "New York", image: "/assets/images/packages/sl5.webp" },
    { id: 4, title: "Dubai", image: "/assets/images/packages/sl3.webp" },
    { id: 5, title: "Sydney", image: "/assets/images/packages/sl4.webp" },
    { id: 6, title: "Rome", image: "/assets/images/packages/p2-2.webp" },
    { id: 7, title: "London", image: "/assets/images/packages/sl2.webp" },
  ];

  const flowers = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    image: `/assets/images/packages/p4-2.webp`,
    title: `Image Title ${i + 1}`,
  }));

  const allCities = {
    Europe: [
      "Paris",
      "Rome",
      "Berlin",
      "Barcelona",
      "Amsterdam",
      "Vienna",
      "Prague",
      "Lisbon",
    ],
    Asia: [
      "Tokyo",
      "Seoul",
      "Bangkok",
      "Singapore",
      "Delhi",
      "Jakarta",
      "Beijing",
      "Manila",
    ],
    America: [
      "New York",
      "Los Angeles",
      "Chicago",
      "Toronto",
      "Mexico City",
      "Miami",
      "San Francisco",
      "Lima",
    ],
    Africa: [
      "Cairo",
      "Cape Town",
      "Nairobi",
      "Lagos",
      "Accra",
      "Algiers",
      "Marrakech",
      "Addis Ababa",
    ],
  };

  return (
    <main className="w-full px-4 lg:py-4 py-2 font-sans">
      {/*  Section (Middle Content) */}
      <div className="max-w-full mx-sm flex flex-col md:flex-row gap-4">
        {/* Left Sidebar */}
        <aside className="w-full md:w-[7.5%] bg-white p-4 rounded"></aside>

        <section className="w-full md:w-[85%] bg-white p-4 rounded relative mb-8">
          {/* Header with Heading on the Left and Buttons on the Right */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold">Trending destinations</h1>
            <div className="flex space-x-2">
              <button
                onClick={() => handleScroll("left", cardGridRef1)}
                className="bg-white text-amber-500 hover:text-amber-700 px-4 py-2 border border-amber-500 hover:border-amber-700 hover:bg-gray-50 rounded-full transition-all duration-200 cursor-pointer"
              >
                &lt;
              </button>
              <button
                onClick={() => handleScroll("right", cardGridRef1)}
                className="bg-white text-amber-500 hover:text-amber-700 px-4 py-2 border border-amber-500 hover:border-amber-700 hover:bg-gray-50 rounded-full transition-all duration-200 cursor-pointer"
              >
                &gt;
              </button>
            </div>
          </div>
          {/* Cards Row */}
          <div
            ref={cardGridRef1}
            className="flex space-x-4 overflow-x-hidden pb-4 scroll-smooth"
          >
            {cardItems1.length === 0 ? (
              <div className="w-full flex justify-center items-center py-10">
                <img
                  src="/assets/images/nopackages-available.png"
                  alt="No packages available"
                  className="w-96 h-auto object-contain"
                />
              </div>
            ) : (
              <div
                ref={cardGridRef1}
                className="flex space-x-4 overflow-x-hidden pb-4 scroll-smooth"
              >
                {cardItems1.map((card) => (
                  <Link
                    key={card._id}
                    to={`/packages/${card.sub_menu.toLowerCase()}`}
                    className="flex-none relative w-72 h-[420px] rounded-lg shadow-md overflow-hidden group"
                  >
                    {/* Badge */}
                    <div className="absolute top-2 left-2 bg-orange-400 text-white px-2 py-1 text-sm font-semibold rounded-full z-10">
                      Trending{" "}
                      {/* You can change "Badge Text" to whatever you need */}
                    </div>

                    {/* Image with fallback */}
                    <img
                      src={
                        card?.image_url
                          ? `${baseUrl}${card.image_url}`
                          : "/assets/images/nopackages-available.png"
                      }
                      alt={card?.heading || "No image"}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                    />

                    {/* Like Button */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLike(card._id);
                      }}
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:text-red-500 transition"
                    >
                      <Heart
                        size={20}
                        fill={likedCards[card._id] ? "red" : "none"}
                        color={likedCards[card._id] ? "red" : "gray"}
                      />
                    </button>

                    {/* Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-4 text-white">
                      <h3 className="font-semibold text-lg mb-2 text-left">
                        {card.heading}
                      </h3>

                      <div className="flex justify-between text-sm">
                        <div className="space-y-2 mt-2">
                          <p>
                            🕒 {card.duration.nights}N - {card.duration.days}D
                          </p>
                          <p>⭐ {parseFloat(card.rating).toFixed(1)}</p>
                        </div>

                        <div className="space-y-2 text-right">
                          <div className="text-right space-y-2">
                            <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full border border-white text-sm font-semibold">
                              ₹{card.price}/- onwards
                            </div>
                            <p>
                              📍 {card.location.pickup_location} -{" "}
                              {card.location.drop_location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Header with Heading on the Left and Buttons on the Right */}
          <div className="flex justify-between items-center mb-4 mt-8">
            <h1 className="text-3xl font-bold">Recently Booked</h1>
            <div className="flex space-x-2">
              <button
                onClick={() => handleScroll("left", cardGridRef2)}
                className="bg-white text-amber-500 hover:text-amber-700 px-4 py-2 border border-amber-500 hover:border-amber-700 hover:bg-gray-50 rounded-full transition-all duration-200 cursor-pointer"
              >
                &lt;
              </button>
              <button
                onClick={() => handleScroll("right", cardGridRef2)}
                className="bg-white text-amber-500 hover:text-amber-700 px-4 py-2 border border-amber-500 hover:border-amber-700 hover:bg-gray-50 rounded-full transition-all duration-200 cursor-pointer"
              >
                &gt;
              </button>
            </div>
          </div>
          {/* Cards Section Below Image Grids */}
          {/* Cards Row */}
          <div
            ref={cardGridRef2}
            className="flex space-x-4 overflow-x-hidden pb-4 scroll-smooth"
          >
            {cardItems2.length === 0 ? (
              <div className="w-full flex justify-center items-center py-10">
                <img
                  src="/assets/images/nopackages-available.png"
                  alt="No packages available"
                  className="w-96 h-auto object-contain"
                />
              </div>
            ) : (
              <div
                ref={cardGridRef2}
                className="flex space-x-4 overflow-x-hidden pb-4 scroll-smooth"
              >
                {cardItems2.map((card) => (
                  <Link
                    key={card.id}
                    to={`/packages/srilanka`}
                    className="flex-none relative w-72 h-[420px] rounded-lg shadow-md overflow-hidden group"
                  >
                    {/* Badge */}
                    <div className="absolute top-2 left-2 bg-cyan-400 p-2 text-white px-2 py-1 text-sm font-semibold rounded-full z-10">
                      Top{" "}
                      {/* You can change "Badge Text" to whatever you need */}
                    </div>
                    {/* Image with fallback */}
                    <img
                      src={
                        card.image_url
                          ? `${baseUrl}${card.image_url}`
                          : "/assets/images/nopackages-available.png"
                      }
                      alt={card.heading || "Package Image"}
                      className="w-full h-full object-cover mx-auto transition-transform group-hover:scale-105 duration-300"
                    />

                    {/* Heart Icon */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleLike(card.id);
                      }}
                      className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:text-red-500 transition"
                    >
                      <Heart
                        size={20}
                        fill={likedCards[card.id] ? "red" : "none"}
                        color={likedCards[card.id] ? "red" : "gray"}
                      />
                    </button>

                    {/* Overlay Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white">
                      <h3 className="font-semibold text-lg mb-2 text-left">
                        {card.heading}
                      </h3>

                      <div className="flex justify-between text-sm">
                        <div className="space-y-2 mt-2">
                          <p>
                            🕒 {card.duration.nights}N - {card.duration.days}D
                          </p>
                          <p>⭐ {parseFloat(card.rating).toFixed(1)}</p>
                        </div>

                        <div className="space-y-2 text-right">
                          <div className="text-right space-y-2">
                            <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full border border-white text-sm font-semibold">
                              ₹{card.price}/- onwards
                            </div>
                            <p>
                              📍 {card.location.pickup_location} -{" "}
                              {card.location.drop_location}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Simple Grey Section */}
          <div className="mt-8 bg-indigo-100 py-10 px-4 md:px-8 rounded text-center">
            <div className="max-w-9xl mx-auto text-center">
              <h2 className="text-4xl md:text-3xl font-bold mb-4">
                Holidays for every
              </h2>
              <p className="font-cursive text-gray-700 text-base md:text-lg">
                Discover amazing places, experiences, and offers curated just
                for you. Stay tuned for more updates and stories.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    title: "Beach Holidays",
                    desc: "Relax by the sea with sunny escapes.",
                    img: "/assets/images/gallary/v4.webp",
                  },
                  {
                    title: "Mountain Treks",
                    desc: "Adventure awaits in the highlands.",
                    img: "/assets/images/gallary/v3.webp",
                  },
                  {
                    title: "City Breaks",
                    desc: "Explore vibrant city life and culture.",
                    img: "/assets/images/gallary/g4.webp",
                  },
                  {
                    title: "Wildlife Tours",
                    desc: "Get close to nature and exotic animals.",
                    img: "/assets/images/gallary/g5.webp",
                  },
                ].map((box, index) => (
                  <div
                    key={index}
                    className="relative h-72 rounded-lg overflow-hidden shadow-md text-white flex items-end justify-center p-4"
                    style={{
                      backgroundImage: `url('${box.img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="relative z-10 text-center">
                      <h3 className="text-xl font-bold">{box.title}</h3>
                      <p className="text-sm">{box.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Rounded city of europe */}
          <div className="max-w-7xl my-10 mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Europe Tour</h2>

            <div className="flex flex-wrap justify-center gap-6">
              {cities.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center w-32 sm:w-40 md:w-48 lg:w-56"
                >
                  {/* Wrap the image in a clickable link */}
                  <Link to={`/destination/${item.id}`} className="block">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover rounded-full border-4 border-white shadow-md transition-transform transform hover:scale-105"
                    />
                  </Link>

                  <p className="mt-2 text-center text-md font-medium">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Gallery Section */}
          <div className="mt-8">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">
                Explore Our Premium Packages
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleScroll("left", gridRef1)} // <-- fixed
                  className="bg-white text-amber-500 hover:text-amber-700 px-4 py-2 border border-amber-500 hover:border-amber-700 hover:bg-gray-50 rounded-full transition-all duration-200 cursor-pointer"
                >
                  &lt;
                </button>
                <button
                  onClick={() => handleScroll("right", gridRef1)} // <-- fixed
                  className="bg-white text-amber-500 hover:text-amber-700 px-4 py-2 border border-amber-500 hover:border-amber-700 hover:bg-gray-50 rounded-full transition-all duration-200 cursor-pointer"
                >
                  &gt;
                </button>
              </div>
            </div>

            {/* Image Grid */}
            <div
              ref={gridRef2}
              className="flex space-x-4 scroll-smooth"
              style={{ overflowX: "hidden" }}
            >
              {cardItems3.length === 0 ? (
                <div className="w-full flex justify-center items-center py-10">
                  <img
                    src="/assets/images/nopackages-available.png"
                    alt="No packages available"
                    className="w-96 h-auto object-contain"
                  />
                </div>
              ) : (
                <div
                  ref={cardGridRef1}
                  className="flex space-x-4 overflow-x-hidden pb-4 scroll-smooth"
                >
                  {cardItems3.map((card) => (
                    <Link
                      key={card._id}
                      to={`/packages/${card.sub_menu.toLowerCase()}`}
                      className="flex-none relative w-72 h-[420px] rounded-lg shadow-md overflow-hidden group"
                    >
                      {/* Badge */}
                      <div className="absolute top-2 left-2 bg-orange-400 text-white px-2 py-1 text-sm font-semibold rounded-full z-10">
                        Trending{" "}
                        {/* You can change "Badge Text" to whatever you need */}
                      </div>

                      {/* Image with fallback */}
                      <img
                        src={
                          card?.image_url
                            ? `${baseUrl}${card.image_url}`
                            : "/assets/images/nopackages-available.png"
                        }
                        alt={card?.heading || "No image"}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                      />

                      {/* Like Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleLike(card._id);
                        }}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:text-red-500 transition"
                      >
                        <Heart
                          size={20}
                          fill={likedCards[card._id] ? "red" : "none"}
                          color={likedCards[card._id] ? "red" : "gray"}
                        />
                      </button>

                      {/* Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-4 text-white">
                        <h3 className="font-semibold text-lg mb-2 text-left">
                          {card.heading}
                        </h3>

                        <div className="flex justify-between text-sm">
                          <div className="space-y-2 mt-2">
                            <p>
                              🕒 {card.duration.nights}N - {card.duration.days}D
                            </p>
                            <p>⭐ {parseFloat(card.rating).toFixed(1)}</p>
                          </div>

                          <div className="space-y-2 text-right">
                            <div className="text-right space-y-2">
                              <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full border border-white text-sm font-semibold">
                                ₹{card.price}/- onwards
                              </div>
                              <p>
                                📍 {card.location.pickup_location} -{" "}
                                {card.location.drop_location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Simple Grey Section */}

          {/* Image Gallery Section */}
          <div className="mt-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">Epic Adventure Escapes</h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleScroll("left", gridRef2)} // <-- fixed
                  className="bg-white text-amber-500 hover:text-amber-700 px-4 py-2 border border-amber-500 hover:border-amber-700 hover:bg-gray-50 rounded-full transition-all duration-200 cursor-pointer"
                >
                  &lt;
                </button>
                <button
                  onClick={() => handleScroll("right", gridRef2)} // <-- fixed
                  className="bg-white text-amber-500 hover:text-amber-700 px-4 py-2 border border-amber-500 hover:border-amber-700 hover:bg-gray-50 rounded-full transition-all duration-200 cursor-pointer"
                >
                  &gt;
                </button>
              </div>
            </div>

            {/* Image Grid */}
            <div
              ref={gridRef2}
              className="flex space-x-4 scroll-smooth"
              style={{ overflowX: "hidden" }}
            >
              {cardItems4.length === 0 ? (
                <div className="w-full flex justify-center items-center py-10">
                  <img
                    src="/assets/images/nopackages-available.png"
                    alt="No packages available"
                    className="w-96 h-auto object-contain"
                  />
                </div>
              ) : (
                <div
                  ref={cardGridRef1}
                  className="flex space-x-4 overflow-x-hidden pb-4 scroll-smooth"
                >
                  {cardItems4.map((card) => (
                    <Link
                      key={card._id}
                      to={`/packages/${card.id}/details`}
                      className="flex-none relative w-72 h-[420px] rounded-lg shadow-md overflow-hidden group"
                    >
                      {/* Badge */}
                      <div className="absolute top-2 left-2 bg-violet-400 text-white px-2 py-1 text-sm font-semibold rounded-full z-10">
                        Adventure{" "}
                        {/* You can change "Badge Text" to whatever you need */}
                      </div>

                      {/* Image with fallback */}
                      <img
                        src={
                          card?.image_url
                            ? `${baseUrl}${card.image_url}`
                            : "/assets/images/nopackages-available.png"
                        }
                        alt={card?.heading || "No image"}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                      />

                      {/* Like Button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleLike(card._id);
                        }}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:text-red-500 transition"
                      >
                        <Heart
                          size={20}
                          fill={likedCards[card._id] ? "red" : "none"}
                          color={likedCards[card._id] ? "red" : "gray"}
                        />
                      </button>

                      {/* Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent p-4 text-white">
                        <h3 className="font-semibold text-lg mb-2 text-left">
                          {card.heading}
                        </h3>

                        <div className="flex justify-between text-sm">
                          <div className="space-y-2 mt-2">
                            <p>
                              🕒 {card.duration.nights}N - {card.duration.days}D
                            </p>
                            <p>⭐ {parseFloat(card.rating).toFixed(1)}</p>
                          </div>

                          <div className="space-y-2 text-right">
                            <div className="text-right space-y-2">
                              <div className="inline-block bg-yellow-500 text-black px-3 py-1 rounded-full border border-white text-sm font-semibold">
                                ₹{card.price}/- onwards
                              </div>
                              <p>
                                📍 {card.location.pickup_location} -{" "}
                                {card.location.drop_location}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Two-Column Section */}
          <div className="mt-8 px-2">
            <div className="max-w-9xl mx-auto flex flex-col md:flex-row">
              {/* Left Column */}
              <div className="w-full md:w-[50%] bg-white p-2 rounded shadow">
                {/* Video Section */}
                <div className="relative w-full h-100">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover rounded"
                    src="/assets/images/smallVideo.mp4"
                    type="video/mp4"
                  />

                  {/* Watch Button */}
                  <button
                    onClick={() => setShowVideo(true)}
                    className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-400 text-white px-12 py-3 rounded-xl hover:bg-green-700 focus:outline-none transition-all duration-300 cursor-pointer"
                  >
                    Watch
                  </button>
                </div>

                {/* Fullscreen Modal with Video */}
                {showVideo && (
                  <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
                    <div className="relative w-full max-w-5xl aspect-video">
                      <button
                        onClick={() => setShowVideo(false)}
                        className="absolute top-2 right-2 text-white text-3xl z-10"
                      >
                        ✕
                      </button>
                      <video
                        src="/assets/images/smallVideo.mp4"
                        controls
                        autoPlay
                        className="w-full h-full object-contain rounded"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column */}
              <div className="w-full md:w-[50%] bg-yellow-100 p-6 text-center rounded shadow mx-auto">
                <h1 className="text-3xl font-bold mb-4 italic">Testimonials</h1>
                <img
                  src={image}
                  alt={name}
                  className="w-30 h-30 rounded-full mx-auto mb-4 border-4 border-indigo-600 "
                />
                <h3 className="text-xl font-semibold mb-2">{name}</h3>
                <p className="text-gray-700 mb-4">{quote}</p>
                <div className="flex justify-center gap-4">
                  <button
                    onClick={prevTestimonial}
                    className="bg-white text-amber-500 hover:text-amber-700 px-4 py-2 border border-amber-500 hover:border-amber-700 hover:bg-amber-200 rounded-full transition-all duration-200 cursor-pointer"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-white text-amber-500 hover:text-amber-700 px-4 py-2 border border-amber-500 hover:border-amber-700 hover:bg-amber-200 rounded-full transition-all duration-200 cursor-pointer"
                  >
                    &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-200 via-indigo-200 to-blue-200 py-20 px-6 mt-12">
            <div className="max-w-4xl mx-auto text-center px-4 animate-fade-in">
              {/* Quotation Icon */}
              <svg
                className="mx-auto mb-6 w-14 h-14 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7.17 5.59C5.63 7.13 5 9.04 5 12v7h6v-7H7.83c.21-1.39.77-2.42 1.75-3.41l-2.41-2zm9 0C14.63 7.13 14 9.04 14 12v7h6v-7h-3.17c.21-1.39.77-2.42 1.75-3.41l-2.41-2z" />
              </svg>

              {/* Quote */}
              <p className="text-3xl md:text-4xl font-semibold italic text-gray-800 leading-relaxed mb-6">
                “The journey of a thousand miles begins with a single step.”
              </p>

              {/* Author */}
              <p className="text-lg md:text-xl font-medium text-gray-600">
                — Lao Tzu
              </p>
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="w-full md:w-[7.5%] bg-white p-4 rounded"></aside>
      </div>
    </main>
  );
};

export default MainSection;
