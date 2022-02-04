import { Fragment } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary1: "#282938",
    primary2: "#1C1E53",
    primary3: "#2405F2",
    primary4: "#EEF4FA",
    secondary1: "#FCD980",
    tertiary1: "#F4F6FC",
    tertiary2: "#FFF",
    tertiary3: "#000",
    tertiary4: "#1B1C2B",
    tertiary5: "rgba(255, 255, 255, 0.7)",
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
        <h1>Hello world</h1>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
