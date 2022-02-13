import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;

    /* @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    font-size: 58%
  }
    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    font-size: 50%
  } */
}

a{
    text-decoration: none;
}

ul{
    list-style-type: none;
    
}

body {
    font-size: 1.6rem;
    font-family: 'Poppins', sans-serif;
}

h1, h2,h3, h4, h5, a, p{
    &::selection {
      background-color: ${({ theme }) => theme.colors.primary2};
      color: ${({ theme }) => theme.colors.tertiary2};
    }
}

`;
