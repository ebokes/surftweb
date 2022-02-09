import styled from "styled-components";

export const FeaturesPageContainer = styled.div`
  .title {
    text-align: center;
    p {
    }
    h1 {
      width: 60%;
      display: inline-block;
      margin-bottom: 4.7rem;

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 2.4rem;
      }
    }
  }
`;

export const Features = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* width: 100%;
  column-gap: 5%; */
  row-gap: 5%;
`;

export const Feature = styled.div`
  width: 31%;
  background-color: ${({ theme }) => theme.colors.tertiary2};
  margin-bottom: 3.2rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 48%;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 70%;
    margin: 0 auto 3.2rem auto;
  }
`;

export const Content = styled.div`
  width: 78%;
  margin: auto;
  padding-top: 5rem;
  padding-bottom: 4rem;

  h4 {
    font-weight: 500;
    margin: 1.2rem 0 1.2rem 0;
  }

  img {
    width: 3.5rem;
  }
`;
