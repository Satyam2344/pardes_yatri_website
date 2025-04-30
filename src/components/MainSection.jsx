import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

const MainSection = () => {
  const cardGridRef1 = useRef(null); // Reference to the first grid for programmatic scrolling
  const cardGridRef2 = useRef(null); // Reference to the second grid for programmatic scrolling
  const gridRef1 = useRef(null); // Reference to the first grid for programmatic scrolling
  const gridRef2 = useRef(null); // Reference to the second grid for programmatic scrolling
  const [selectedRegion, setSelectedRegion] = useState("Europe");
  const [likedCards, setLikedCards] = useState({});

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

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

  const cardItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Card Title ${i + 1}`,
    description: "Explore the best places in town with our top-rated guides.",
    imageUrl: "/assets/images/touriest/guide-1.webp",
    rating: 4,
    price: 49,
  }));

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
            {cardItems.map((card) => (
              <Link
                key={card.id}
                to={`/packages/srilanka`}
                className="flex-none relative w-72 h-[420px] rounded-lg shadow-md overflow-hidden group"
              >
                {/* Full-size Image */}
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                />

                {/* Heart Icon */}
                <button
                  onClick={(e) => {
                    e.preventDefault(); // prevent navigation on heart click
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

                {/* Darker Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white">
                  <h3 className="font-semibold text-lg mb-1 text-center">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-2 text-center line-clamp-2">
                    {card.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>{i < card.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                    <span className="text-green-400 font-medium">
                      ${card.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
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
            {cardItems.map((card) => (
              <Link
                key={card.id}
                to={`/packages/srilanka`}
                className="flex-none relative w-72 h-[420px] rounded-lg shadow-md overflow-hidden group"
              >
                {/* Full-size Image */}
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                />

                {/* Heart Icon */}
                <button
                  onClick={(e) => {
                    e.preventDefault(); // prevent navigation on heart click
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

                {/* Darker Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4 text-white">
                  <h3 className="font-semibold text-lg mb-1 text-center">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-200 mb-2 text-center line-clamp-2">
                    {card.description}
                  </p>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>{i < card.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                    <span className="text-green-400 font-medium">
                      ${card.price}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
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
              <h2 className="text-3xl font-bold">Middle East Vacations</h2>
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
              {items.map((item) => (
                <Link
                  to={`/destination/${item.id}`}
                  key={item.id}
                  className="flex-none w-72 rounded-lg overflow-hidden shadow relative bg-gray-200"
                >
                  <div className="relative cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[420px] object-cover"
                    />

                    {/* Bottom-Center Overlay */}
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent px-4 py-5 text-white flex flex-col items-center text-center">
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-sm">Grading Trip</p>

                      <div className="mt-1 text-sm space-y-0.5">
                        <div>⭐ {item.rating} Reviews</div>
                        <div className="text-green-400 font-semibold">
                          ${item.price}
                        </div>
                        <div className="text-xs text-gray-300">
                          {item.days} Days / {item.nights} Nights
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          {/* Simple Grey Section */}

          {/* Image Gallery Section */}
          <div className="mt-10">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold">
                United States Famous Destinations
              </h2>
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
              {items.map((item) => (
                <Link
                  to={`/destination/${item.id}`}
                  key={item.id}
                  className="flex-none w-72 rounded-lg overflow-hidden shadow relative bg-gray-200"
                >
                  <div className="relative cursor-pointer">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[420px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                      <h3 className="text-white text-2xl font-extrabold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
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
                    src="/assets/images/smallVideo.mp4" // Replace this with the actual path of your video
                    type="video/mp4"
                  />
                  {/* Button on Video */}
                  <button className="absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-600 text-white px-12 py-3 rounded-lg hover:bg-green-700 focus:outline-none transition-all duration-300 cursor-pointer">
                    Watch Video
                  </button>
                </div>
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
          <div className="mt-16">
            <div className="mb-6">
              <label
                htmlFor="region"
                className="block text-3xl font-bold text-center mb-4"
              >
                Explore All Packages
              </label>
              <select
                id="region"
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full md:w-1/3 border border-amber-300 rounded-xl px-4 py-2 focus:outline-none "
              >
                {Object.keys(allCities).map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Grid of Cities */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allCities[selectedRegion].map((city, index) => (
                <div
                  key={index}
                  className="bg-yellow-200 p-4 rounded-xl shadow text-center font-medium text-gray-800 cursor-pointer"
                >
                  {city}
                </div>
              ))}
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
