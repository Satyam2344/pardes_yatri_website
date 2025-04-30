import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import AboutMainSection from "../components/AboutMainSection";
import Commonbg from "../components/Commonbg";
import bgImage from "/src/assets/images/backgrounds/about.avif";
import ContactForm from "../components/ContactForm";
const AboutUs = () => {
  return (
    <div>
      <Headers />
      <Commonbg imageUrl={bgImage} />
      <AboutMainSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default AboutUs;
