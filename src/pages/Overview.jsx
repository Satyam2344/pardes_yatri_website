import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import OverviewMainSection from "../components/OverviewMainSection";
import SimilarTrip from "../pages/SimilarTrip";
const Overview = () => {
  return (
    <div>
      <Headers />

      <OverviewMainSection />
      <SimilarTrip />
      
      <Footer />
    </div>
  );
};

export default Overview;