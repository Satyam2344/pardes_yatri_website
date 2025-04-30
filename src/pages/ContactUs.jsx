import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import ContactMainSection from "../components/ContactMainSection";
import Commonbg from "../components/Commonbg";
import bgImage from "/assets/images/backgrounds/contact2.jpg";
const ContactUs = () => {
  return (
    <div>
      <Headers />
      <Commonbg imageUrl={bgImage} />
      <ContactMainSection />
      <Footer />
    </div>
  );
};

export default ContactUs;
