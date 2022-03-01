import React from "react";
import LandingPage from "../components/home/landingPage/index";
import WorkPage from "../components/home/workPage/index";
import ProjectPage from "../components/home/projectPage/index";
import FeaturesPage from "../components/home/featuresPage/index";
import ReviewsPage from "../components/home/reviewsPage/index";
import FaqPage from "../components/home/faqPage/index";
import ContactForm from "../components/home/contactForm/index";

import BlogPage from "../components/home/blogPage/index";

const Home = () => {
  return (
    <div>
      <LandingPage />
      <WorkPage />
      <ProjectPage />
      <FeaturesPage />
      <ReviewsPage />
      <FaqPage />
      <ContactForm />
      <BlogPage />
    </div>
  );
};

export default Home;
