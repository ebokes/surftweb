import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  padding: ${({ pad }) => pad || "10rem 0 10rem 0"};

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 95%;
  }
`;

export const BackdropContainer = styled.div`
  background-color: ${({ bg }) => bg || "#F4F6FC"};
  color: ${({ color }) => color || "#000"};
  position: ${({ position }) => position || "static"};
  margin: 0 auto;
  z-index: ${({ z }) => z || "0"};
  height: ${({ height }) => height || "fit-content"};
  width: 100%;
  /* border: 2px solid red; */ ;
`;
