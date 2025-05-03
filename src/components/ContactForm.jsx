import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.match(/^[0-9]{10,15}$/))
      newErrors.phone = "Phone must be a valid number (10-15 digits)";
    if (!formData.email.includes("@"))
      newErrors.email = "Email must contain @";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form submitted:", formData);
      // Submit logic here
    }
  };

  return (
    <div className="min-h-[50%] bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-5xl w-full grid grid-cols-1 md:grid-cols-2">
        {/* Left Column */}
        <div className="bg-blue-700 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-bold mb-4 text-center cursor-default">Get in Touch</h2>
          <img
            src="/assets/images/contact-form.png"
            alt="Contact Us"
            className="w-3/4 max-w-sm"
          />
        </div>

        {/* Right Column */}
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Name..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div>
              <label className="block mb-1 font-semibold">Phone</label>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91-XXXXXXXXXX"
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                required
              />
              {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>

            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email.."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ente message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2"
              />
              {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-300 transition cursor-pointer"
            >
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
