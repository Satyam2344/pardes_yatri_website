// src/pages/Signup.jsx
import { Link } from "react-router-dom";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-indigo-100">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md m-4">
        <div className="text-center mb-6">
          <PersonAddAlt1Icon fontSize="large" className="text-indigo-500" />
          <h1 className="text-2xl font-bold text-gray-700">
            Create an Account
          </h1>
        </div>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-xl hover:bg-indigo-600 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-500">
          Already have an account?{" "}
          <Link to="/login" className="text-indigo-600 hover:underline">
            Login
          </Link>
        </p>
        <p className="text-center text-sm mt-4 text-gray-500">
          return to{" "}
          <Link to="/" className="text-indigo-600 hover:underline">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}
