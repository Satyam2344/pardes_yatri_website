import { useState } from "react";
import "./App.css";
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
import SimilarTrip from "./pages/SimilarTrip";
import FetchPage from "./pages/fetchPage";
import PaymentForm from "./pages/PaymentForm";
import PaymentFormTrekking from "./pages/PaymentFormTrekking";
import PrivacyPolicy from "./pages/PrivacyPolicy";
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
          <Route path="/packages/:slug" element={<SinglePackage />} />
          <Route path="/packages/:slug/details" element={<Overview />} />
          <Route path="/selectdestination" element={<SelectionPage />} />
          <Route path="/bookingForm" element={<BookingForm />} />
          <Route path="/similarTrips" element={<SimilarTrip />} />
          <Route path="/FetchPage" element={<FetchPage />} />
          <Route path="/PaymentForm" element={<PaymentForm />} />
          <Route path="/PaymentFormTrekking" element={<PaymentFormTrekking />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
