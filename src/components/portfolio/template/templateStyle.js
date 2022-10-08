import styled from "styled-components";

export const TemplateContainer = styled.div``;

export const TemplateNav = styled.ul`
  display: flex;
  width: 44rem;
  margin: 0 auto 4.8rem auto;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 80%;
    flex-direction: column;
    text-align: center;
  }

  & > li {
    .active {
      color: ${({ theme }) => theme.colors.primary3};
    }

    .nonactive {
      color: ${({ theme }) => theme.colors.primary2};
    }

    /* a {
      color: ${({ theme }) => theme.colors.primary2};
    } */
  }
`;

export const Col1 = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;
export const TemplateItem = styled.div`
  width: 48%;
  margin-bottom: 6.4rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 46%;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 90%;
  }

  h2 {
    font-size: 3.8rem;
    font-weight: 600;
    line-height: 7.4rem;
    margin-top: 0.8rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 3rem;
      line-height: 4.4rem;
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.8rem;
    opacity: 70%;
    margin: 1.4rem 0 2.2rem 0;
  }

  img {
    max-width: 100%;
  }
`;
