import styled from "styled-components";
import blue from "../../../images/man-in-blue.png";

export const WhoWeAreContainer = styled.div`
  div {
    /* padding: 0 2.5rem 2.5rem 2.5rem; */
    /* width: 120rem; */
    background-color: #f4f5f5;
    h4 {
      padding-left: 6.1rem;
      padding-top: 4rem;
      font-size: 1.3rem;
      font-weight: 500;
      line-height: 2.8rem;

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        padding-left: 0;
      }
    }
  }
`;

export const Row1 = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 5rem;
  /* width: 80%; */

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
    /* width: 90%; */
  }
`;
export const Row2 = styled.div`
  background-image: url(${blue});
  height: 35rem;
  background-position: top;
  background-repeat: no-repeat;
  /* margin-top: 5rem; */
`;
export const Col1 = styled.div`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin-bottom: 4rem;
  }
`;

export const Col2 = styled.div`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
