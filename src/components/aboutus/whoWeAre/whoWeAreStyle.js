import styled from "styled-components";
import blue from "../../../images/man-in-blue.png";

export const WhoWeAreContainer = styled.div`
  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.8rem;
  }
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
  h2 {
    font-size: 3.8rem;
    font-weight: 600;
    line-height: 5.6rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.8rem;
    opacity: 70%;
  }
`;
export const Row2 = styled.div`
  background-image: url(${blue});
  height: 35rem;
  background-position: top;
  background-repeat: no-repeat;
  margin-top: 5rem;
`;
export const Col1 = styled.div`
  width: 45%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin-bottom: 4rem;
  }
`;

export const Col2 = styled.div`
  width: 45%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
