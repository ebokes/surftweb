import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  color: ${({ color }) => color || "#1B1C2B"};
  background-color: ${({ bg }) => bg || "#FCD980"};
  border: ${({ border }) => border || "none"};
  padding: ${({ padding }) => padding || "1.6rem 5.6rem"};
  display: inline-block;
  border-radius: 4.1rem;
  font-weight: 600;
  line-height: 3.2rem;
  font-size: 1.8rem;
  text-align: center;

  &:hover {
    background-color: ${({ bgh }) => bgh || "#FDE4A6"};
  }
`;
