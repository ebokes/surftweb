import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  column-gap: 25%;
  color: ${({ theme }) => theme.colors.tertiary2};

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    column-gap: 0;
  }
`;

export const Col1 = styled.div`
  display: flex;
  width: 32%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const Col2 = styled.div`
  width: 33%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 40%;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-top: 4rem;
    width: 100%;
  }
`;

export const Bottom = styled.div`
  color: ${({ theme }) => theme.colors.tertiary2};
  display: flex;
  column-gap: 17.5%;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 4rem;
    text-align: center;
  }

  div {
    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      /* margin: 4rem auto 0 auto; */
    }
  }

  div > p {
    opacity: 0.5;
  }
`;

export const Contact = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary1};
  color: ${({ theme }) => theme.colors.primary1};
  display: flex;
  justify-content: space-around;
  padding: 2rem;
  /* width: 48rem; */
  width: 40%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    margin-bottom: 4rem;
    width: 100%;
  }

  h5 {
    font-size: 1.8rem;
    font-weight: 500;
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-between;
  width: 16rem;
  margin-top: 2.8rem;
`;
