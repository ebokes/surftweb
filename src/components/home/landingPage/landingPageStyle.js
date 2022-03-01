import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: space-between;

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
  .grp {
    display: flex;
    justify-content: space-between;
    width: 40rem;
    align-items: center;

    @media (max-width: 506px) {
      display: inline-block;
      justify-content: center;
      align-items: center;
      width: 24rem;

      div {
        align-self: center;
        display: flex;
      }
    }
  }
`;
export const Right = styled.div`
  width: 50%;
  display: flex;
  align-self: center;

  img {
    max-width: 100%;
    align-self: center;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: none;
  }
`;
