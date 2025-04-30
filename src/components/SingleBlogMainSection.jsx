import React, { useRef, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const SingleBlogMainSection = () => {
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
    <div className="flex justify-center px-2 mt-24">
      <div className="flex w-full max-w-screen-2xl">
        {/* Left Column */}
        <div className="hidden lg:block w-[10%] bg-white "></div>

        {/* Middle Column */}
        <div className="w-[95%] lg:w-[80%] bg-white mx-auto">
          {/* Top Background Section */}
          <img
            src="/assets/images/instagram/insta-4.webp"
            alt="Header"
            className="w-full h-100 rounded-md object-cover"
          />

          {/* Table of Contents Dropdown - Only visible on small & medium screens */}
          <div className="lg:hidden mt-4">
            <details className="bg-yellow-100 p-3 rounded-xl text-xl cursor-pointer">
              <summary className="font-semibold">Table of Contents</summary>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>How to Get to Nusa Penida</li>
                <li>Best Places to Visit</li>
                <li>Where to Stay</li>
              </ul>
            </details>
          </div>

          {/* Inner Columns Wrapper */}
          <div className="flex flex-col lg:flex-row mt-4 gap-2 font-serif">
            {/* Left Inner Column */}
            <div className="w-full lg:w-[75%] bg-blue-100 p-2 rounded-xl">
              <h1 className="font-bold text-3xl ">
                Nusa Penida Island In Bali: Travel Guide & How To Visit
              </h1>

              {/* Author Info */}
              <div className="mt-2 flex items-center text-gray-600 text-sm md:text-base space-x-2">
                <img
                  src="/assets/images/instagram/insta-3.webp"
                  alt="Author"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <span className="font-medium">By Jane Doe</span>
                <span className="text-gray-400">•</span>
                <span>Published on April 18, 2025</span>
              </div>

              {/* Content */}
              <p className="text-2xl md:text-3xl mb-5 mt-4">
                Welcome fellow{" "}
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.tailwindcss.com"
                >
                  Tailwind CSS
                </a>{" "}
                and{" "}
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://www.ghost.org"
                >
                  Ghost
                </a>{" "}
                fan. This starter template is an attempt to replicate the
                default Ghost theme{" "}
                <a
                  className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                  href="https://demo.ghost.io/welcome"
                >
                  "Casper"
                </a>{" "}
                using Tailwind CSS and vanilla Javascript.
              </p>

              {/* More content... */}
              <p className="py-6 text-xl">
                The basic blog page layout is available and all using the
                default Tailwind CSS classes (although there are a few hardcoded
                style tags). If you are going to use this in your project, you
                will want to convert the classes into components.
              </p>

              <p className="py-6 text-xl">
                Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt
                lacus purus, in mattis tortor sollicitudin pretium. Phasellus at
                diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras
                nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at
                lorem condimentum, dignissim lorem eu, blandit massa. Phasellus
                eleifend turpis vel erat bibendum scelerisque. Maecenas id risus
                dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor
                in dolor molestie ornare. Aenean pulvinar diam nec neque
                tincidunt, vitae molestie quam fermentum. Donec ac pretium diam.
                Suspendisse sed odio risus. Nunc nec luctus nisi. className
                aptent taciti sociosqu ad litora torquent per conubia nostra,
                per inceptos himenaeos. Duis nec nulla eget sem dictum
                elementum.
              </p>

              <ol>
                <li className="py-3 text-xl">
                  Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
                  libero lectus. Fusce vehicula dictum mi. In non dolor at sem
                  ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
                  quam quam, commodo sit amet placerat in, interdum a ipsum.
                  Morbi sit amet tellus scelerisque tortor semper posuere.
                </li>
                <li className="py-3 text-xl">
                  Morbi varius posuere blandit. Praesent gravida bibendum neque
                  eget commodo. Duis auctor ornare mauris, eu accumsan odio
                  viverra in. Proin sagittis maximus pharetra. Nullam lorem
                  mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id
                  quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac
                  ornare vulputate, pretium nec felis.
                </li>
                <li className="py-3 text-xl">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras
                  leo mauris, tristique in risus ac, tristique rutrum velit.
                  Mauris accumsan tempor felis vitae gravida. Cras egestas
                  convallis malesuada. Etiam ac ante id tortor vulputate
                  pretium. Maecenas vel sapien suscipit, elementum odio et,
                  consequat tellus.
                </li>
              </ol>

              <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
                Crocodiles are easy. They try to kill and eat you. People are
                harder. Sometimes they pretend to be your friend first.
                <br /> - Steve Irwin
              </blockquote>

              {/* Image after blockquote */}
              <img
                src="/assets/images/packages/p1-3.webp"
                alt="Steve Irwin"
                className="w-full h-auto mt-2 rounded-md shadow-md"
              />
            </div>

            {/* Right Inner Column - Hidden on small & medium screens */}
            <div className="hidden lg:block w-[25%] bg-white space-y-6 font-serif">
              {/* Table of Content Section */}
              <div className="bg-yellow-100 p-2 rounded-xl">
                <h3 className="text-2xl font-semibold mb-2">
                  Table of Contents
                </h3>
                <ul className="list-disc list-inside space-y-1 text-xl">
                  <li>How to Get to Nusa Penida</li>
                  <li>Best Places to Visit</li>
                  <li>Where to Stay</li>
                </ul>
              </div>

              {/* Recent Posts Section */}
              <div className=" p-2 rounded-xl">
                <h3 className=" text-2xl font-semibold mb-3">Recent Posts</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5, 6].map((_, index) => (
                    <div
                      key={index}
                      className="flex space-x-2 bg-white p-2 border border-gray-200 rounded shadow-sm"
                    >
                      <img
                        src={`/assets/ets/images/touriest/guide-${
                          index + 1
                        }.webp`}
                        alt="Post Thumbnail"
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="text-sm font-bold leading-tight">
                          Exploring Ubud's Hidden Waterfalls
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Apr 15, 2025
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cards Grid Without Scroller */}
          {/* Header with Heading on the Left and Buttons on the Right */}
          <div className="flex justify-between items-center mb-4 mt-8">
            <h1 className="text-2xl font-bold">
              Discovere Trending Destinations
            </h1>
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
                className="flex-none relative w-73 h-[420px] rounded-lg shadow-md overflow-hidden group"
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

        {/* Right Column */}
        <div className="hidden lg:block w-[10%] bg-white p-2"></div>
      </div>
    </div>
  );
};

export default SingleBlogMainSection;
