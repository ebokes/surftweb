import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Col1 = styled.div`
  width: 45%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }

  h4 {
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 3.2rem;
  }
  h1 {
    font-size: 5rem;
    font-weight: 600;
    line-height: 7.4rem;
    margin-bottom: 3rem;
    margin-top: 0.8rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 3.2rem;
      line-height: 4.4rem;
    }
  }
  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.8rem;
    opacity: 70%;
  }
`;

export const Col2 = styled.div`
  display: flex;
  align-items: center;
  width: 45%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }

  img {
    max-width: 100%;
    margin-top: 6rem;
  }
`;
