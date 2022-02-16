import React from "react";
import LandingPage from "./landingPage/index";
import WorkPage from "./workPage/index";
import ProjectPage from "./projectPage/index";
import FeaturesPage from "./featuresPage/index";
import ReviewsPage from "./reviewsPage/index";
import FaqPage from "./faqPage/index";
import ContactForm from "./contactForm/index";

import BlogPage from "./blogPage/index";

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
