import React, { useRef, useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link, useParams } from "react-router-dom";

const SinglePackageMainSection = () => {
  const { slug } = useParams();
  const [packageData, setPackageData] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    fetch(`${baseUrl}/api/packages/${slug}/`)
      .then((res) => {
        if (!res.ok) {
          setNotFound(true);
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data.packages && Array.isArray(data.packages)) {
          setPackageData(data.packages);
          setNotFound(false);
        } else {
          setPackageData([]);
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.error("Error fetching package:", err);
        setNotFound(true);
      });
  }, [slug, baseUrl]);

  if (notFound) {
    return (
      <div className="w-full min-h-90% flex justify-center items-start mt-4 p-2">
        <div className="text-center bg-red-100 text-red-700 p-6 rounded shadow-md text-xl font-semibold">
          <img
            src="/assets/images/nopackages-available.png"
            alt="Warning"
            className="mx-auto mb-4 w-[500px] h-40"
          />
        </div>
      </div>
    );
  }

  // If packageData is null or still loading, display a loading message.
  if (!packageData) return <p>Loading package...</p>;

  const budgetOptions = [
    "Under ₹10,000",
    "₹10,000 - ₹20,000",
    "₹20,000 - ₹30,000",
    "Above ₹30,000",
  ];

  const amenitiesOptions = [
    "Air Conditioned",
    "Fully Furnished",
    "Semi Furnished",
    "Internet or WiFi",
  ];

  const testimonials = [
    {
      name: "John Doe",
      image: "https://i.pravatar.cc/100?img=3",
      text: "This podcast is amazing! The storytelling and production quality are top-notch. I can't wait for the next episode!",
      rating: 5,
    },
    {
      name: "Jane Smith",
      image: "https://i.pravatar.cc/100?img=5",
      text: "This podcast kept me on the edge of my seat. It's a must-listen for true crime enthusiasts!",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      image: "https://i.pravatar.cc/100?img=7",
      text: "I can't get enough of this podcast! The host's voice is so soothing, and the stories are gripping. Highly recommend!",
      rating: 5,
    },
  ];
  // Star Icon Component
  const StarIcon = () => (
    <svg
      className="text-yellow-500 w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      stroke="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  // const [showMore, setShowMore] = useState(false);
  // const [showFilters, setShowFilters] = useState(false);

  //  const [showMoreStates, setShowMoreStates] = useState(Array(5).fill(false));
  const formatSlug = (text) => {
    return text.toLowerCase().replace(/\s+/g, ""); // removes all spaces
  };
  const toggleShowMore = (index) => {
    setShowMoreStates((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  // const cards = [];
  const cards = packageData.map((packageDatas, index) => (
    <div
      key={index}
      className="w-full h-full lg:w-full bg-gray-50 p-4 rounded space-y-4"
    >
      <div className="w-full h-full bg-white rounded shadow-md overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2 h-100 md:h-auto relative">
          <div className="absolute top-2 left-2 bg-yellow-500 text-white text-sm font-bold px-5 py-2 rounded-full shadow-md z-10 cursor-pointer">
            Premium
          </div>
          <img
            src={`${baseUrl}${packageDatas.image_url}`}
            alt="Card"
            className="w-full h-full p-4 object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
            style={{ imageRendering: "auto" }}
          />
        </div>

        <div className="md:w-1/2 p-4 flex flex-col justify-between bg-white shadow-lg rounded-lg">
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              {packageDatas.heading}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              {packageDatas.description}
            </p>

            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-semibold text-amber-950">
                ₹{packageDatas.price}
              </span>
              <span className="text-sm text-gray-500">per person</span>
            </div>

            <div className="space-y-2 mb-4">
              {packageDatas.features && packageDatas.features.length > 0 ? (
                packageDatas.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start space-x-2"
                  >
                    <svg
                      className="w-5 h-5 text-amber-950 shrink-0 mt-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.293 5.293a1 1 0 00-1.414 0L8 11.586 5.121 8.707a1 1 0 00-1.414 1.414l3.536 3.536a1 1 0 001.414 0l7.071-7.071a1 1 0 000-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))
              ) : (
                <p>No features available.</p>
              )}
            </div>

            <div className="flex items-center space-x-2 mb-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 fill-current ${
                      i < packageDatas.ratings
                        ? "text-amber-500"
                        : "text-gray-300"
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.562-.955L10 0l2.95 5.955 6.562.955-4.756 4.635 1.122 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-600">
                ({packageDatas.ratings}.0 from 1.2k reviews)
              </span>
            </div>

            <Link to={`/packages/${packageDatas._id}/details`}>
              <button className="w-full py-2 bg-amber-950 text-white text-sm font-semibold rounded-lg hover:bg-amber-700 transition cursor-pointer">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="w-full bg-black  lg:mt-2 md:mt-0 sm:mt-0 flex justify-center items-center p-4">
        {/* Outer Wrapper with Flex for Columns */}
        <div className="flex w-full max-w-screen-2xl">
          {/* Left Column */}
          <div className="hidden sm:block w-[2.5%] lg:w-[10%]"></div>

          {/* Middle Column */}
          <div className="w-full sm:w-[95%] lg:w-[80%] space-y-2">
            {/* First Row */}
            <div className="flex justify-between items-center w-full">
              {/* Left: Duration & Price */}
              <div className="text-gray-200 text-xs sm:text-sm md:text-base font-semibold flex space-x-6 sm:space-x-10 md:space-x-14">
                <span>IDEAL DURATION</span>
                <span>PRICE RANGE</span>
              </div>

              {/* Right: Our Expertise */}
              <div className="text-gray-200 text-xs sm:text-sm md:text-base font-semibold text-right">
                OUR EXPERTISE
              </div>
            </div>

            {/* Second Row */}
            <div className="flex justify-between items-center w-full">
              {/* Left: Duration & Price */}
              <div className="text-white text-xs sm:text-sm md:text-base font-semibold flex space-x-18 sm:space-x-24 md:space-x-28">
                <span>4 - 5 nights</span>
                <span>24k - 25k</span>
              </div>

              {/* Right: Our Expertise */}
              <div className="text-white text-xs sm:text-sm md:text-base font-bold text-right sm:ml-4">
                4.0from 4.1ktravellers
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="hidden sm:block w-[2.5%] lg:w-[10%]"></div>
        </div>
      </div>

      <div className="w-screen flex justify-center px-2 mt-2">
        <div className="flex w-full max-w-screen-2xl">
          {/* Left Column */}
          <div className="hidden lg:block w-[10%] bg-white "></div>

          {/* Middle Column */}
          <div className="w-[95%] lg:w-[80%] bg-white mx-auto mt-4 mb-4 font-sans">
            <div className="text-sm text-gray-600 font-medium mt-4 ">
              <nav className="flex items-center space-x-1">
                <span className="hover:underline cursor-pointer">Home</span>
                <span className="ml-2">{">"}</span>
                <span className="hover:underline cursor-pointer ml-2">
                  {packageData.main_menu}
                </span>
                <span className="ml-2">{">"}</span>
                <span className="text-amber-950 font-semibold ml-2">
                  {packageData.sub_menu}
                </span>
              </nav>
            </div>
            <div className="w-full bg-gray-300 rounded-lg text-left mt-2 mb-4 p-6 sm:p-4 md:p-5 min-h-[80px]">
              <p className="text-3xl text-black font-bold sm:text-xl md:text-2xl">
                {packageData.sub_menu}
              </p>
            </div>

            {/* Two Columns */}
            <div className="flex flex-col lg:flex-row w-full gap-4">
              {/* Left Column - 20% on large screens */}
              <div className="w-full lg:w-[20%] p-4 rounded space-y-6">
                {/* Budget Section */}
                <div>
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    Budget
                  </h2>
                  <div className="flex flex-col space-y-2">
                    {budgetOptions.map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox text-amber-950 w-5 h-5 checked:bg-amber-600"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Ratings Section */}
                <div>
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    Rating
                  </h2>
                  <div className="flex flex-col space-y-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <label
                        key={rating}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox text-amber-950 w-5 h-5"
                        />
                        <span>
                          {rating} Star{rating > 1 ? "s" : ""}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Amenities Section */}
                <div>
                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    Amenities
                  </h2>
                  <div className="flex flex-col space-y-2">
                    {amenitiesOptions.map((option, index) => (
                      <label
                        key={index}
                        className="flex items-center space-x-2"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox text-amber-950 w-5 h-5 checked:bg-amber-600"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - 70% on large screens */}
              <div className="w-full h-full lg:w-[70%] bg-gray-50 p-4 rounded space-y-4">
                {cards}
              </div>
            </div>

            <section className="bg-white px-4 py-4 md:py-4">
              <div className="max-w-screen-md mx-auto">
                <h2 className="font-black text-black text-center text-3xl leading-none uppercase mb-6">
                  Reviews from travellers
                </h2>
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                >
                  {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                      <div className="bg-gray-200 rounded-lg p-8 text-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-20 h-20 rounded-full mx-auto mb-4"
                        />
                        <p className="font-bold uppercase">
                          {testimonial.name}
                        </p>
                        <p className="text-xl font-light italic text-gray-700 mt-2">
                          {testimonial.text}
                        </p>
                        <div className="flex items-center justify-center space-x-2 mt-4">
                          {Array.from(
                            { length: testimonial.rating },
                            (_, i) => (
                              <StarIcon key={i} />
                            )
                          )}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="hidden lg:block w-[10%] bg-white p-2"></div>
        </div>
      </div>
    </>
  );
};

export default SinglePackageMainSection;
