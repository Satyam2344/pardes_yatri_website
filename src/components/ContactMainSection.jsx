import React, { useRef, useState, useEffect } from "react";

const ContactMainSection = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = formRef.current;
    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    setLoading(true);
    try {
      const response = await fetch(`${baseUrl}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      setModalMessage(result.message || "Submitted!");
      form.reset();
    } catch (error) {
      setModalMessage("Something went wrong. Try again.");
    } finally {
      setLoading(false);
      setShowModal(true);
    }
  };

  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="relative w-full h-[400px] sm:h-[300px] md:h-[300px] lg:h-[600px] xl:h-[600px]">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/assets/images/backgrounds/contact-banner.jpg')",
            }}
          ></div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10"></div>
        </div>
      </section>

      <div className="flex justify-center bg-gradient-to-br from-white to-indigo-50 mt-6">
        {/* Left Column (15%) */}
        <div className="hidden md:block" style={{ width: "15%" }}></div>

        {/* Center Column (70%) */}
        <div className="w-[95%] sm:w-[70%] flex flex-col justify-center items-center text-center px-4 py-4">
          <section className="w-full bg-gray-100">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-8 lg:px-8">
              <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Visit Our Location
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  This is our permanent locations
                </p>
              </div>
              <div className="mt-16 lg:mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.871788378154!2d78.04042097623518!3d30.32616450516666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092a19318db8c3%3A0xd8c55020cab7d0c4!2sParadise%20Yatra!5e0!3m2!1sen!2sin!4v1746271814912!5m2!1sen!2sin"
                      width="100%"
                      height="480"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map"
                    />
                  </div>
                  <div>
                    <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                      <div className="px-6 py-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Our Address
                        </h3>
                        <p className="mt-1 text-gray-600">
                          48, General Mahadev Singh Rd, near Balliwala chowk,
                          Shakti Enclave, Mohit Nagar, Dehradun, Uttarakhand
                          248001
                        </p>
                      </div>
                      <div className="border-t border-gray-200 px-6 py-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Hours
                        </h3>
                        <p className="mt-1 text-gray-600">
                          Monday - Friday: 9am - 5pm
                        </p>
                        <p className="mt-1 text-gray-600">
                          Saturday: 10am - 4pm
                        </p>
                        <p className="mt-1 text-gray-600">Sunday: Closed</p>
                      </div>
                      <div className="border-t border-gray-200 px-6 py-4">
                        <h3 className="text-lg font-medium text-gray-900">
                          Contact
                        </h3>
                        <p className="mt-1 text-gray-600">
                          Email: sales@paradiseyatra.com
                        </p>
                        <p className="mt-1 text-gray-600">
                          Phone: +91 9873391733
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="container my-12 mx-auto px-2 md:px-4 bg-gray-100">
            <section className="mb-12 mt-12">
              <div className="flex justify-center">
                <div className="text-center md:max-w-xl lg:max-w-3xl">
                  <h2 className="mb-12 px-6 text-3xl font-bold">Contact Us</h2>
                </div>
              </div>

              <div className="flex flex-wrap">
                <form
                  ref={formRef}
                  onSubmit={handleSubmit}
                  className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
                >
                  <div className="mb-3 w-full">
                    <label className="block font-medium mb-[2px] text-indigo-700">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      className="px-2 py-2 border w-full outline-none rounded-md"
                      placeholder="Name"
                      required
                    />
                  </div>

                  <div className="mb-3 w-full">
                    <label className="block font-medium mb-[2px] text-indigo-700">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      className="px-2 py-2 border w-full outline-none rounded-md"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>

                  <div className="mb-3 w-full">
                    <label className="block font-medium mb-[2px] text-indigo-700">
                      Phone
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      className="px-2 py-2 border w-full outline-none rounded-md"
                      placeholder="Enter contact number..."
                      required
                    />
                  </div>

                  <div className="mb-3 w-full">
                    <label className="block font-medium mb-[2px] text-indigo-700">
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="px-2 py-2 border rounded-[5px] w-full outline-none"
                      placeholder="Write here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="mb-6 inline-block w-full rounded bg-indigo-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-indigo-500"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </form>

                <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                  <div className="flex flex-wrap">
                    {/* Technical Support */}
                    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6 lg:mt-20">
                      <div className="flex flex-col items-center text-center">
                        <div className="inline-block rounded-md bg-indigo-100 p-4 text-indigo-700 mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                        </div>
                        <p className="mb-2 font-bold">Technical Support</p>
                        <p className="text-neutral-500">
                          sales@paradiseyatra.com
                        </p>
                        <p className="text-neutral-500">+91-9873391733</p>
                      </div>
                    </div>

                    {/* Sales Questions */}
                    <div className="mb-12 w-full md:w-6/12 md:px-3 lg:px-6 lg:mt-20">
                      <div className="flex flex-col items-center text-center">
                        <div className="inline-block rounded-md bg-indigo-100 p-4 text-indigo-700 mb-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>
                        </div>
                        <p className="mb-2 font-bold">Sales and Enquiry Questions</p>
                        <p className="text-neutral-500">
                          sales@paradiseyatra.com
                        </p>
                        <p className="text-neutral-500">+91-8979396413
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full text-center">
                <p className="text-lg font-semibold mb-4">{modalMessage}</p>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column (15%) */}
        <div className="hidden md:block" style={{ width: "15%" }}></div>
      </div>
    </>
  );
};

export default ContactMainSection;
