import styled from "styled-components";

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
    width: 100%;
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

    @media (max-width: 506px) {
      display: inline-block;
      text-align: center;
      width: 24rem;
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
      font-size: 1.8rem;

      @media (max-width: 506px) {
        margin-left: 5rem;
        margin-top: 3rem;
      }
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
