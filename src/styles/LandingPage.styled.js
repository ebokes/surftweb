import styled from "styled-components";

export const StyledLandingPage = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.tertiary2};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12.8rem 0;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Left = styled.div`
  width: 45%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 80%;
  }

  h1 {
    line-height: 5.4rem;
  }
  p {
    color: ${({ theme }) => theme.colors.tertiary5};
    margin-top: 2.4rem;
    margin-bottom: 4.8rem;
    line-height: 2.8rem;
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 43rem;

    a {
      color: ${({ theme }) => theme.colors.tertiary4};
      padding: 1.6rem 5.6rem;
      background-color: ${({ theme }) => theme.colors.secondary1};
      display: inline-block;
      border-radius: 4.1rem;
      font-weight: 600;
      line-height: 3.2rem;
      font-size: 1.8rem;
    }

    & a + a {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 15rem;
      background-color: transparent;
      color: ${({ theme }) => theme.colors.tertiary1};
      padding: 0;
      font-weight: 500;
    }
  }
`;
export const Right = styled.div`
  width: 50%;
  display: flex;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: none;
  }

  img {
    max-width: 100%;
    align-self: center;
  }
`;
