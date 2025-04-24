// src/pages/Login.jsx
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md m-4">
        <div className="text-center mb-6">
          <LoginIcon fontSize="large" className="text-indigo-500" />
          <h1 className="text-2xl font-bold text-gray-700">
            Login to Your Account
          </h1>
        </div>
        <form className="space-y-4">
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
            Login
          </button>
        </form>
        <p className="text-center text-sm mt-4 text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-indigo-600 hover:underline">
            Sign Up
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
