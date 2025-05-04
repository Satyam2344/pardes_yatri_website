import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import AboutMainSection from "../components/AboutMainSection";
import Commonbg from "../components/Commonbg";
import bgImage from "/assets/images/backgrounds/about.avif";
import ContactForm from "../components/ContactForm";
const AboutUs = () => {
  return (
    <div>
      <Headers />
      <AboutMainSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default AboutUs;
