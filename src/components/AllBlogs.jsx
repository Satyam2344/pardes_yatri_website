import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
const blogPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxmb3Jlc3R8ZW58MHwwfHx8MTcyNjkxODYzNHww&ixlib=rb-4.0.3&q=80&w=1080",
    date: "September 10th 2023",
    title: "Journey to the Mountains",
    description:
      "Escape the hustle and explore the serene beauty of the mountains. Discover the peace and adventure that awaits.",
    link: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    date: "September 15th 2023",
    title: "Explore the Deep Oceans",
    description:
      "Dive into the deep oceans and explore the beauty and mystery of the underwater world. A truly unforgettable experience.",
    link: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1629112250823-3f091e001783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxEZXNlcnQlMjBTYWZhcml8ZW58MHwwfHx8MTcyNjkxODcwOHww&ixlib=rb-4.0.3&q=80&w=1080",
    date: "October 5th 2023",
    title: "Desert Safari",
    description:
      "Venture into the heart of the desert and experience the thrill of a safari amidst the dunes.",
    link: "#",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1629112250823-3f091e001783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxEZXNlcnQlMjBTYWZhcml8ZW58MHwwfHx8MTcyNjkxODcwOHww&ixlib=rb-4.0.3&q=80&w=1080",
    date: "October 5th 2023",
    title: "Desert Safari",
    description:
      "Venture into the heart of the desert and experience the thrill of a safari amidst the dunes.",
    link: "#",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1629112250823-3f091e001783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxEZXNlcnQlMjBTYWZhcml8ZW58MHwwfHx8MTcyNjkxODcwOHww&ixlib=rb-4.0.3&q=80&w=1080",
    date: "October 5th 2023",
    title: "Desert Safari",
    description:
      "Venture into the heart of the desert and experience the thrill of a safari amidst the dunes.",
    link: "#",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1629112250823-3f091e001783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxEZXNlcnQlMjBTYWZhcml8ZW58MHwwfHx8MTcyNjkxODcwOHww&ixlib=rb-4.0.3&q=80&w=1080",
    date: "October 5th 2023",
    title: "Desert Safari",
    description:
      "Venture into the heart of the desert and experience the thrill of a safari amidst the dunes.",
    link: "#",
  },
];

const AllBlogs = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[400px] sm:h-[300px] md:h-[300px] lg:h-[600px] xl:h-[600px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/assets/images/backgrounds/blog-banner2.jpg')",
            }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/10"></div>
        </div>
      </section>
      <div className="flex justify-center bg-gradient-to-br from-white to-indigo-50 mt-6">
        {/* Left Column (15%) */}
        <div className="hidden md:block" style={{ width: "15%" }}></div>

        {/* Center Column (70%) */}
        <div className="w-[95%] sm:w-[70%] flex flex-col justify-center items-center text-center px-4 py-4">
          <section className="bg-white dark:bg-gray-900">
            {/* Title Section */}
            <div className="text-center py-2">
              <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
                All Featured Blogs
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Explore, discover, and find inspiration through these exciting
                journeys.
              </p>
            </div>

            {/* Content Section */}
            <div className="px-2 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
              <div className="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                {blogPosts.map((post) => (
                  <div key={post.id} className="relative">
                    <a
                      href={post.link}
                      className="block overflow-hidden group rounded-xl shadow-lg"
                    >
                      <img
                        src={post.image}
                        className="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                        alt={post.title}
                      />
                    </a>
                    <div className="relative mt-5">
                      <p className="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                        {post.date}
                      </p>

                      <h2 className="text-2xl font-bold leading-5 p-2 text-black dark:text-white transition-colors duration-200">
                        {post.title}
                      </h2>

                      <Link
                        to="/bloging"
                        className="font-medium underline text-purple-600 dark:text-purple-400"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* More Button */}
              <div className="mt-12 flex justify-center">
                <Link to="#">
                  <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition duration-300 cursor-pointer">
                    More
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (15%) */}
        <div className="hidden md:block" style={{ width: "15%" }}></div>
      </div>
    </>
  );
};
export default AllBlogs;
