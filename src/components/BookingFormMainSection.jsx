import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BookingFormMainSection = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const queryParams = new URLSearchParams(location.search);

  useEffect(() => {
    const subMenu = queryParams.get("sub_menu") || "";
    const heading = queryParams.get("heading") || "";

    setFormData((prev) => ({
      ...prev,
      sub_menu: subMenu,
      heading: heading,
    }));
  }, []);

  const handleCancel = () => {
    navigate(-1); // Navigate back
  };

  const formFields = [
    {
      label: "Package Name",
      name: "heading",
      type: "text",
      disabled: true,
      section: 3,
      required: true,
    },
    {
      label: "Country/State",
      name: "sub_menu",
      type: "text",
      disabled: true,
      section: 3,
      required: true,
    },
    {
      label: "Full Name",
      name: "name",
      type: "text",
      section: 0,
      required: true,
    },
    {
      label: "Email Address",
      name: "email",
      type: "email",
      section: 0,
      required: true,
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "tel",
      section: 1,
      required: true,
    },
    {
      label: "Number of Guests",
      name: "guests",
      type: "number",
      section: 1,
      required: true,
    },
    {
      label: "Preferred Date",
      name: "date",
      type: "date",
      section: 1,
      required: true,
    },
    {
      label: "Special Requests",
      name: "requests",
      type: "textarea",
      section: 2,
      required: false, // Make this field optional
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSubmitted(false);

    try {
      const response = await fetch(`${baseUrl}/api/submit-booking/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true); // Show success message
        setTimeout(() => {
          navigate(-1); // Go back after 1.5 seconds
        }, 1500);
      } else {
        alert("Submission failed: " + result.error);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-10">
      {/* Form Card with Increased Width */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-4xl relative">
        {" "}
        {/* Changed max-w-xl to max-w-4xl */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-600 mb-6 text-center">
          Book Your Yatra
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => (
            <div key={field.name}>
              {field.type !== "hidden" && field.label && (
                <label
                  htmlFor={field.name}
                  className="block mb-1 font-medium text-gray-700"
                >
                  {field.label}
                </label>
              )}

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={3}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.disabled ? formData[field.name] || "" : ""}
                  className={`w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                    field.disabled
                      ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={field.disabled}
                  required={field.required} // Set required based on field
                />
              ) : (
                <>
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange}
                    placeholder={
                      field.disabled ? formData[field.name] || "" : ""
                    }
                    className={`w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${
                      field.disabled
                        ? "bg-gray-100 text-gray-500 cursor-not-allowed"
                        : ""
                    }`}
                    required={field.required} // Set required based on field
                    disabled={field.disabled}
                  />
                  {/* Hidden input for disabled fields to submit value */}
                  {field.disabled && (
                    <input
                      type="hidden"
                      name={field.name}
                      value={formData[field.name] || ""}
                    />
                  )}
                </>
              )}
            </div>
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="max-w-[30%] bg-yellow-500 hover:bg-yellow-400 text-white text-center font-semibold py-2 px-4 rounded-xl transition duration-200 cursor-pointer"
          >
            Submit
          </button>
        </form>
        {/* Cancel Button */}
        <button
          type="button"
          onClick={handleCancel}
          className="absolute bottom-6 right-6 bg-gray-500 hover:bg-gray-400 text-white font-semibold py-2 px-4 rounded-xl transition duration-200 cursor-pointer"
        >
          Cancel
        </button>
      </div>

      {(loading || submitted) && (
        <div className="absolute inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50 rounded-2xl">
          {loading && (
            <>
              <svg
                className="animate-spin h-8 w-8 text-yellow-500 mb-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              <p className="text-gray-700 text-lg font-medium">
                Please wait...
              </p>
            </>
          )}
          {submitted && (
            <div className="text-center">
              <img
                src="/assets/images/Check animation.gif"
                alt="Success Animation"
                className="w-40 h-32 mx-auto mb-2"
              />
              <p className="text-green-600 text-3xl font-semibold">
                Submitted successfully!
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BookingFormMainSection;
