import styled from "styled-components";
import { Link } from "react-router-dom";

export const SubLink = styled(Link)`
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

export const SocialStyle = styled.div`
  margin: ${({ margin }) => margin || "2.8rem 0 0 0"};
  width: 16rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Handle = styled.a`
  color: ${({ color }) => color || "#fff"};
`;
