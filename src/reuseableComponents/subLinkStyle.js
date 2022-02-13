import styled from "styled-components";

export const SubLink = styled.a`
  display: flex;
  align-items: center;
  color: ${({ color }) => color || "#2405F2"};
  width: ${({ width }) => width || "fit-content"};

  margin: ${({ margin }) => margin || "0 auto"};

  @media (max-width: 506px) {
    width: ${({ width }) => width || "fit-content"};
    margin-top: ${({ mlt }) => mlt || "0"};
  }
  span {
    margin-left: ${({ ml }) => ml || "0.7rem"};
    margin-top: 0.5rem;
  }
`;
