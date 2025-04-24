import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import SingleBlogMainSection from "../components/SingleBlogMainSection";
import Commonbg from "../components/Commonbg";
import bgImage from "/src/assets/images/backgrounds/blog-banner2.jpg";
import ContactForm from "../components/ContactForm";
const SingleBlog = () => {
  return (
    <div>
      <Headers />

      <SingleBlogMainSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default SingleBlog;