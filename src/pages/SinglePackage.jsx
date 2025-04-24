import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import SinglePackageMainSection from "../components/SinglePackageMainSection";
import Commonbg from "../components/Commonbg";
import bgImage from "/src/assets/images/srilankabanner.jpg";
import ContactForm from "../components/ContactForm";
const SinglePackage = () => {
  return (
    <div>
      <Headers />
      <Commonbg imageUrl={bgImage} />
      <SinglePackageMainSection />
      <Footer />
    </div>
  );
};

export default SinglePackage;
