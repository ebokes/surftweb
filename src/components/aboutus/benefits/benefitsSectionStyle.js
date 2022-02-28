import styled from "styled-components";

export const BenefitsSectionContainer = styled.div`
  .title {
    text-align: center;
    p {
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 2.8rem;
      opacity: 0.7;
    }
    h1 {
      width: 50%;
      display: inline-block;
      margin-bottom: 4.7rem;
      font-size: 4.8rem;
      font-weight: 600;
      line-height: 6.4rem;

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        font-size: 3rem;
        line-height: 4rem;
        width: 80%;
      }

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        font-size: 3rem;
        line-height: 4rem;
        width: 60%;
      }

      img {
        max-width: 100%;
      }
    }
  }
`;

export const Benefits = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  row-gap: 5%;
`;

export const Benefit = styled.div`
  width: 31%;
  background-color: ${({ theme }) => theme.colors.tertiary1};
  margin-bottom: 3.2rem;
  box-shadow: 0 0 10px 3px #0000001f;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 48%;
  }
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 40rem;
    margin: 0 auto 3.2rem auto;
  }
  @media (max-width: 500px) {
    width: 90%;
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
    font-size: 2.4rem;
    margin: 1.2rem 0 1.2rem 0;
  }

  img {
    width: 3.5rem;
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
    opacity: 0.7;
  }
`;

export const Icons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  img {
    max-width: 100%;
    margin-top: 1rem;
  }

  img + img {
    margin-left: 2rem;
  }
`;
