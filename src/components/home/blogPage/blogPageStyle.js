import styled from "styled-components";

export const BlogPageContainer = styled.div`
  h1 {
    margin-bottom: 2rem;
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 6.4rem;
  }
`;

export const Articles = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }
`;

export const Article = styled.div`
  width: 31.5%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }

  img {
    max-width: 100%;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin-top: 3rem;
    }
  }

  & > h4 {
    font-size: 2.4rem;
    font-weight: 500;
    line-height: 3.6rem;
  }
  & > p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.8rem;
    color: ${({ theme }) => theme.colors.primary1};
    opacity: 0.7;
    margin: 1.6rem 0;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin: 0.7rem 0;
    }
  }

  & > a {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.8rem;
  }
`;
