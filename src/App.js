import { Fragment } from "react";
import { GlobalStyle } from "./reuseableComponents/globalStyle";
import { ThemeProvider } from "styled-components";
import LandingPage from "./components/home/landingPage/index";
import Navbar from "./components/navbar/index";
import WorkPage from "./components/home/workPage/index";
import ProjectPage from "./components/home/projectPage/index";
import FeaturesPage from "./components/home/featuresPage/index";
import ReviewsPage from "./components/home/reviewsPage/index";
import FaqPage from "./components/home/faqPage/index";
import ContactForm from "./components/home/contactForm/index";
import FooterPage from "./components/footer/index";
import BlogPage from "./components/home/blogPage/index";

const theme = {
  colors: {
    primary1: "#282938",
    primary2: "#1C1E53",
    primary3: "#2405F2",
    primary4: "#EEF4FA",
    secondary1: "#FCD980",
    secondary2: "#FDE4A6",
    tertiary1: "#F4F6FC",
    tertiary2: "#FFF",
    tertiary3: "#000",
    tertiary4: "#1B1C2B",
    tertiary5: "rgba(255, 255, 255, 0.7)",
    tertiary6: "#F4F6FC33",
  },

  mediaQuery: {
    mobile: "768px",
    tablet: "960px",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <Navbar />
        <LandingPage />
        <WorkPage />
        <ProjectPage />
        <FeaturesPage />
        <ReviewsPage />
        <FaqPage />
        <ContactForm />
        <BlogPage />
        <FooterPage />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
