import React, { useRef, useState, useEffect } from "react";

const AboutMainSection = () => {
  const cardGridRef1 = useRef(null); // Reference to the first grid for programmatic scrolling
  const cardGridRef2 = useRef(null); // Reference to the second grid for programmatic scrolling
  const gridRef1 = useRef(null); // Reference to the first grid for programmatic scrolling
  const gridRef2 = useRef(null); // Reference to the second grid for programmatic scrolling
  const [selectedRegion, setSelectedRegion] = useState("Europe");

  const testimonials = [
    {
      name: "About Us",
      quote:
        "Driven by a passion for seamless user experiences, we've meticulously curated pagedone to empower creators, designers, and developers alike. Our mission is to provide a comprehensive toolkit, enabling you to build intuitive, beautiful interfaces that resonate with users on every interaction.",
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
    description: `This is a description for Card ${i + 1}.`,
  }));
  const items = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: `src/assets/images/packages/p2-3.webp`,
    title: `Image Title ${i + 1}`,
  }));

  const items1 = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    image: `src/assets/images/packages/p2-4.webp`,
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
    { id: 1, title: "Paris", image: "src/assets/images/packages/p1-8.webp" },
    { id: 2, title: "Tokyo", image: "src/assets/images/packages/s2.webp" },
    { id: 3, title: "New York", image: "src/assets/images/packages/sl5.webp" },
    { id: 4, title: "Dubai", image: "src/assets/images/packages/sl3.webp" },
    { id: 5, title: "Sydney", image: "src/assets/images/packages/sl4.webp" },
    { id: 6, title: "Rome", image: "src/assets/images/packages/p2-2.webp" },
    { id: 7, title: "London", image: "src/assets/images/packages/sl2.webp" },
  ];

  const flowers = Array.from({ length: 7 }, (_, i) => ({
    id: i + 1,
    image: `src/assets/images/packages/p4-2.webp`,
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
    <>
      <div className="flex justify-center bg-gradient-to-br from-white to-indigo-50 mt-6">
        {/* Left Column (15%) */}
        <div className="hidden md:block" style={{ width: "15%" }}></div>

        {/* Center Column (70%) */}
        <div
          className="w-full flex flex-col justify-center items-center text-center px-4 py-4"
          style={{ width: "70%" }}
        >
          <section class="py-12 relative">
            <div class="w-full max-w-7xl px-2 md:px-2 lg:px-2 mx-auto">
              <div class="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                  <div class="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                    <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Building Stronger Communities through Collaboration and
                      Empowerment
                    </h2>
                    <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                      Through collaborationperse perspectives and strengths are
                      leveraged to create inclusive environments where everyone
                      has the opportunity to thrive. This approach not only
                      fosters personal growth and achievement but also
                      strengthens the fabric of society.
                    </p>
                  </div>
                  <button class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span class="px-1.5 text-white text-sm font-medium leading-6">
                      Get Started
                    </span>
                  </button>
                </div>
                <img
                  class="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717751272.png"
                  alt="about Us image"
                />
              </div>
            </div>
          </section>

          <section class="py-12 relative">
            <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
              <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                <div class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                  <div class="pt-4 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                    <img
                      class=" rounded-xl object-cover"
                      src="https://pagedone.io/asset/uploads/1717741205.png"
                      alt="about Us image"
                    />
                  </div>
                  <img
                    class="sm:ml-0 ml-auto rounded-xl object-cover"
                    src="https://pagedone.io/asset/uploads/1717741215.png"
                    alt="about Us image"
                  />
                </div>
                <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                  <div class="w-full flex-col justify-center items-start gap-8 flex">
                    <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        Empowering Each Other to Succeed
                      </h2>
                      <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                        Every project we've undertaken has been a collaborative
                        effort, where every person involved has left their mark.
                        Together, we've not only constructed buildings but also
                        built enduring connections that define our success
                        story.
                      </p>
                    </div>
                    <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                      <div class="flex-col justify-start items-start inline-flex">
                        <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          33+
                        </h3>
                        <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                          Years of Experience
                        </h6>
                      </div>
                      <div class="flex-col justify-start items-start inline-flex">
                        <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          125+
                        </h4>
                        <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                          Successful Projects
                        </h6>
                      </div>
                      <div class="flex-col justify-start items-start inline-flex">
                        <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          52+
                        </h4>
                        <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                          Happy Clients
                        </h6>
                      </div>
                    </div>
                  </div>
                  <button class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                    <span class="px-1.5 text-white text-sm font-medium leading-6">
                      Read More
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <div class="w-full bg-white dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
            <div class="mx-auto max-w-screen-7xl">
              <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                <div class="flex items-center gap-12">
                  <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                    Why you choose us
                  </h2>
                </div>
                <a
                  href="#"
                  class="inline-block rounded-lg border bg-indigo-500 dark:bg-gray-700 dark:border-none px-2 py-2 text-center text-sm font-semibold text-white dark:text-indigo-700 outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                >
                  More
                </a>
              </div>

              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <a
                  href="#"
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    VR
                  </span>
                </a>

                <a
                  href="#"
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src="https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=1000"
                    loading="lazy"
                    alt="Photo by Magicle"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Tech
                  </span>
                </a>

                <a
                  href="#"
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=1000"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Dev
                  </span>
                </a>

                <a
                  href="#"
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Retro
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Add more content below as needed... */}
        </div>

        {/* Right Column (15%) */}
        <div className="hidden md:block" style={{ width: "15%" }}></div>
      </div>
    </>
  );
};

export default AboutMainSection;
