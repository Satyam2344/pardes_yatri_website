import React, { useRef, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const SimilarTripSection = () => {
  const cardGridRef1 = useRef(null); // Reference to the first grid for programmatic scrolling
  const [likedCards, setLikedCards] = useState({});

  const toggleLike = (id) => {
    setLikedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  const cardItems = Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Card Title ${i + 1}`,
    description: "Explore the best places in town with our top-rated guides.",
    imageUrl: "/assets/images/touriest/guide-1.webp",
    rating: 4,
    price: 49,
  }));

  // Scroll function for left and right
  const handleScroll = (direction, gridRef) => {
    if (gridRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200; // Scroll amount in pixels
      gridRef.current.scrollLeft += scrollAmount; // Scroll horizontally
    }
  };
  return (
    <div className="lg:p-8 p-4">
      {/* Header with Heading on the Left and Buttons on the Right */}
      <div className="flex justify-between items-center mb-4 mt-8">
        <h1 className="text-4xl font-bold">More Trips Like This</h1>
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
            className="flex-none relative w-85 h-[460px] rounded-lg shadow-md overflow-hidden group"
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
    </div>
  );
};

export default SimilarTripSection;
