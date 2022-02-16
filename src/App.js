import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./reuseableComponents/globalStyle";
import { ThemeProvider } from "styled-components";
import Navbar from "./components/navbar/index";
import Home from "./components/home/Home";
import FooterPage from "./components/footer/index";
import AboutUs from "./components/aboutus/AboutUs";

// import Slider from "./components/Slider";

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
    <Router>
      <ThemeProvider theme={theme}>
        <Fragment>
          <GlobalStyle />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
          <FooterPage />
        </Fragment>
      </ThemeProvider>
    </Router>
  );
}

export default App;
