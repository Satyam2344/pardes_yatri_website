import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingFormMainSection = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1); // Navigate back
  };

  const formFields = [
    { label: "Full Name", name: "name", type: "text", section: 0 },
    { label: "Email Address", name: "email", type: "email", section: 0 },
    { label: "Phone Number", name: "phone", type: "tel", section: 1 },
    { label: "Number of Guests", name: "guests", type: "number", section: 1 },
    { label: "Preferred Date", name: "date", type: "date", section: 1 },
    {
      label: "Special Requests",
      name: "requests",
      type: "textarea",
      section: 2,
    },
  ];

  const sectionTitles = ["Personal Info", "Payment", "Confirmation"];

  const sectionCompletion = [0, 1, 2].map((sectionIndex) =>
    formFields
      .filter((f) => f.section === sectionIndex)
      .every((f) => formData[f.name] && formData[f.name].trim() !== "")
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-10">
      {/* Step Tracker */}
      <div className="flex justify-between items-center w-full max-w-xl mb-8 px-4">
        {sectionTitles.map((title, index) => (
          <div key={index} className="flex flex-col items-center w-1/3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-1 text-white font-bold
                ${sectionCompletion[index] ? "bg-green-500" : "bg-blue-500"}`}
            >
              {index + 1}
            </div>
            <span className="text-xs sm:text-sm text-center text-gray-800">
              {title}
            </span>
          </div>
        ))}
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-xl relative">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-indigo-600 mb-6 text-center">
          Book Your Yatra
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => (
            <div key={field.name}>
              <label
                htmlFor={field.name}
                className="block mb-1 font-medium text-gray-700"
              >
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={3}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              ) : (
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
                />
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
    </div>
  );
};

export default BookingFormMainSection;
