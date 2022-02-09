import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  /* padding: 12.8rem 0 12.8rem 0; */
  /* border: 2px solid green; */

  /* @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    padding: 6rem 0 6rem 0;
  } */
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
