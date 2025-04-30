import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import SinglePackageMainSection from "../components/SinglePackageMainSection";
import Commonbg from "../components/Commonbg";
// import bgImage from "//assets/images/srilankabanner.jpg";
import ContactForm from "../components/ContactForm";
import { useLocation } from 'react-router-dom';
const SinglePackage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const imageUrl = queryParams.get('imageUrl');
  
  return (
    <div>
      <Headers />
      <Commonbg imageUrl={imageUrl} />
      <SinglePackageMainSection />
      <Footer />
    </div>
  );
};

export default SinglePackage;
