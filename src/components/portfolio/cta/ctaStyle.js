import styled from "styled-components";

export const Col = styled.div`
  width: 45%;
  text-align: center;
  margin: 0 auto;

  h1 {
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 6.4rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 3.6rem;
      line-height: 4.8rem;
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.8rem;
    margin-top: 2.4rem;
    margin-bottom: 4.8rem;
    opacity: 0.7;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
`;
