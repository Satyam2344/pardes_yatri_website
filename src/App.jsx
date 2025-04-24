import { useState } from "react";
import "./App.css";
import "./assets/fonts/fonts.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login"; // Adjust the path as needed
import Signup from "./pages/Signup"; // Adjust the path as needed
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import SinglePackage from "./pages/SinglePackage";
import Overview from "./pages/Overview";
import SelectionPage from "./pages/SelectionPage";
import BookingForm from "./pages/BookingForm";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/bloging" element={<SingleBlog />} />
          <Route path="/packages/srilanka" element={<SinglePackage />} />
          <Route path="/packages/srilanka/details" element={<Overview />} />
          <Route path="/selectdestination" element={<SelectionPage />} />
          <Route path="/bookingForm" element={<BookingForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
