import React from "react";

const AboutMainSection = () => {

  return (
    <>
      <section className="relative w-screen overflow-hidden">
        <div
          className="w-full h-[500px] sm:h-96 md:h-[500px] lg:h-[500px] xl:h-[600px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/about.avif')",
          }}
        ></div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/10"></div>
      </section>
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
                      Who We Are
                    </h2>
                    <p class="text-gray-900 text-base font-normal leading-relaxed lg:text-start text-center">
                      Paradise Yatra Our desire to see new places can never
                      cease. Even though lost, one can truly find his actual
                      self in the laps of nature. Though, vibrant it may appear
                      but it fills us with calmness from within. A journey
                      becomes beautiful with good companionship and excellent
                      facilities. Paradise yatra guides you throughout your
                      journey till you reach home safely. We are your tour
                      operator for domestic as well as international trips.
                      Weather solo, couple or group tour packages, we assist you
                      and your fellow mates for adventure, sightseeing or any
                      other activity you look forward to.
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
                      class="w-[800px] h-[400px] rounded-xl object-cover"
                      src="/assets/images/about-2.jpeg"
                      alt="about Us image"
                    />
                  </div>
                  <img
                    class="w-[800px] h-[400px] sm:ml-0 ml-auto rounded-xl object-cover"
                    src="/assets/images/about-3.jpeg"
                    alt="about Us image"
                  />
                </div>
                <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                  <div class="w-full flex-col justify-center items-start gap-8 flex">
                    <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                      <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                        About Us
                      </h2>
                      <p class="text-gray-900 text-base font-normal leading-relaxed lg:text-start text-center">
                        Paradise yatra is one of the best travel agency in
                        Dehradun. We believe in giving our customers a lifelong
                        memorable ‘yatra to paradise’. We have a sincere and
                        hardworking team working day and night to give a
                        comfortable tour packages. From Customizing itinerary to
                        arranging flight tickets, train ticket and bus ticket,
                        we do it all for you. We cover most of the north Indian
                        states, Kerala, Goa, Golden triangle and some luxurious
                        foreign destination. We are an all year affordable tour
                        conducting travel agency in Dehradun. From shivery cold
                        winters to sweaty hot summers. We can give a total
                        different experience to you and your loved ones. We
                        provide comfortable transport and accommodation as per
                        your need. If someone confide in us, we take a full
                        responsibility of our guest from picking till dropping
                        you home. We are an experienced and responsible travel
                        agency. We have best honeymoon destinations in India,
                        international honeymoon tour packages and char Dham
                        package at nominal price. All the extra requirements of
                        our guest are fulfilled. When our guest is satisfied and
                        happy, only then are we.
                      </p>
                    </div>
                    <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                      <div class="flex-col justify-start items-start inline-flex">
                        <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          2000+
                        </h3>
                        <h6 class="text-gray-900 text-base font-normal leading-relaxed">
                          Trips Sold
                        </h6>
                      </div>
                      <div class="flex-col justify-start items-start inline-flex">
                        <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          4300+
                        </h4>
                        <h6 class="text-gray-900 text-base font-normal leading-relaxed">
                          Happy Clients
                        </h6>
                      </div>
                      <div class="flex-col justify-start items-start inline-flex">
                        <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          2380+
                        </h4>
                        <h6 class="text-gray-900 text-base font-normal leading-relaxed">
                          Destinations
                        </h6>
                      </div>
                      <div class="flex-col justify-start items-start inline-flex">
                        <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                          5000+
                        </h4>
                        <h6 class="text-gray-900 text-base font-normal leading-relaxed">
                          Customers
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
                  <h2 class="text-5xl font-bold text-gray-800 lg:text-3xl dark:text-white">
                    Why You Choose Us
                  </h2>
                </div>
                <a
                  href="#"
                  class="inline-block rounded-lg border bg-indigo-500 dark:bg-gray-700 dark:border-none px-2 py-2 text-center text-sm font-semibold text-white dark:text-indigo-700 outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
                >
                  Get Start With Us
                </a>
              </div>

              <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                <a
                  href="#"
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src="/assets/images/team-work.jpeg"
                    loading="lazy"
                    alt="Photo by Minh Pham"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Best Team Work
                  </span>
                </a>

                <a
                  href="#"
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src="/assets/images/customer-satisfaction.jpg"
                    loading="lazy"
                    alt="Photo by Magicle"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Customer Satisfaction
                  </span>
                </a>

                <a
                  href="#"
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
                >
                  <img
                    src="/assets/images/best-quality.jpg"
                    loading="lazy"
                    alt="Photo by Martin Sanchez"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Best Quality Trips
                  </span>
                </a>

                <a
                  href="#"
                  class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                >
                  <img
                    src="/assets/images/secure-payements.webp"
                    loading="lazy"
                    alt="Photo by Lorenzo Herrera"
                    class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                  />

                  <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                  <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                    Secure Payments
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
