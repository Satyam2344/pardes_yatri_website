import React from "react";
import Headers from "../components/Headers";
import Footer from "../components/Footer";
import AllBlogs from "../components/AllBlogs";
import Commonbg from "../components/Commonbg";
import bgImage from "/assets/images/backgrounds/blog-banner2.jpg";
import ContactForm from "../components/ContactForm";
const Blog = () => {
  return (
    <div>
      <Headers />
      <AllBlogs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Blog;
