import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SelectionPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [internationalCountries, setInternationalCountries] = useState([]);
  const [indianStates, setIndianStates] = useState([]);

  useEffect(() => {
    const fetchInternationalCountries = async () => {
      const countries = [
        "USA",
        "Canada",
        "France",
        "Germany",
        "Australia",
        "Japan",
        "Brazil",
        "South Africa",
        "UK",
        "Italy",
        "SriLanka",
      ];
      setInternationalCountries(countries);
    };

    const fetchIndianStates = async () => {
      const states = [
        "Uttar Pradesh",
        "Andhra Pradesh",
        "Bihar",
        "Delhi",
        "Gujarat",
        "Karnataka",
        "Maharashtra",
        "Punjab",
        "Rajasthan",
        "Tamil Nadu",
        "West Bengal",
        "Meghalay",
        "Sikkim",
      ];
      setIndianStates(states);
    };

    fetchInternationalCountries();
    fetchIndianStates();
  }, []);

  const filteredInternational = internationalCountries.filter((country) =>
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredIndianStates = indianStates.filter((state) =>
    state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 md:p-10 max-w-6xl mx-auto bg-white shadow-xl rounded-2xl">
      <div className="flex justify-end mb-4">
        <Link
          to="/"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-700 transition"
        >
          Back
        </Link>
      </div>
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
        <i>Pick you Destination for next vacations</i>
      </h1>

      {/* Search */}
      <div className="mb-8">
        <div className="p-1 rounded-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500">
          <div className="flex items-center bg-white rounded-2xl px-4 py-2">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>

            {/* Input */}
            <input
              type="text"
              placeholder="Search countries or states..."
              className="w-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* International Countries */}
        <div className="bg-indigo-50 p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
            🌍 International Countries
          </h2>
          <ul className="space-y-3">
            {filteredInternational.map((country) => (
              <li key={country}>
                <Link
                  to={`/packages/${country.toLowerCase().replace(/ /g, "-")}`}
                  className="block bg-white px-4 py-2 rounded-lg border border-indigo-200 hover:bg-indigo-100 text-indigo-700 transition shadow-sm hover:shadow-md"
                >
                  {country}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Indian States */}
        <div className="bg-yellow-50 p-6 text-yellow-800 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-6">
            🇮🇳 Domestic Tour (Indian States)
          </h2>
          <ul className="space-y-3 text-yellow-800">
            {filteredIndianStates.map((state) => (
              <li key={state}>
                <Link
                  to={`/packages/${state.toLowerCase().replace(/ /g, "-")}`}
                  className="block bg-white px-4 py-2 rounded-lg border border-yellow-200 hover:bg-yellow-100 text-yellow-700 transition shadow-sm hover:shadow-md"
                >
                  {state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
