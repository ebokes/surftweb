import styled from "styled-components";

export const PricingPlanContainer = styled.div``;
export const Row1 = styled.div`
  text-align: center;
  width: 50%;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 90%;
  }

  h2 {
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 6.4rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 3rem;
      line-height: 4.4rem;
    }
  }
  p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 2.8rem;
    opacity: 0.7;
  }
`;
export const Row2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 46rem;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  @media (max-width: 550px) {
    width: 95%;
  }
`;

export const Card = styled.div`
  width: 30.8%;
  border-radius: 1.2rem;
  padding: 6.2rem 0;
  margin-top: 6.4rem;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 16px 3px #ccc;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;

    &:hover {
      transform: scale(1);
      box-shadow: none;
    }
  }

  @media (max-width: 550px) {
    padding: 3.2rem 0;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 86%;
  margin: 0 auto;
  height: 50rem;
`;

export const Price = styled.div`
  display: flex;
  align-items: center;

  .price-tag {
    font-size: 3.8rem;
    font-weight: 600;
    line-height: 5.6rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 2.8rem;
      font-weight: 600;
      line-height: 3.6rem;
    }
  }

  span {
    margin-right: 1rem;
  }
`;
export const Text = styled.div`
  h3 {
    margin-bottom: 1rem;
  }
`;
export const List = styled.ul`
  /* margin: 7.8rem 0; */

  li {
    margin: 1.2rem 0;
    /* position: relative; */

    &::before {
      content: "\\25BA";
      width: 4rem;
      height: 4rem;
      color: #97daad;
      margin-right: 1rem;
    }
  }
`;
