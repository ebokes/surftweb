import styled from "styled-components";

export const IntroContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const Col1 = styled.div`
  /* width: 61%; */
  width: 73rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }

  h4 {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.8rem;
    opacity: 70%;
  }
  h1 {
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 7.4rem;
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
    margin: 2.4rem 0 3.2rem 0;
  }
`;

// export const Social = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 14.7rem;
//   align-items: center;
//   margin: 0 auto;
// `;
