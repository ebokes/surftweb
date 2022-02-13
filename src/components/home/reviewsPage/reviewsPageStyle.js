import styled from "styled-components";

export const ReviewsPageContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
  }
`;

export const Col1 = styled.div`
  width: 30%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin-bottom: 4rem;
    width: 100%;
  }
  & > h1 {
    font-size: 3.8rem;
    font-weight: 600;
    line-height: 5.6rem;
  }

  & > p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.8rem;
    opacity: 0.7;
  }
`;
export const Col2 = styled.div`
  width: 65%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
    width: 100%;
  }

  h1 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.8rem;
  }
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      margin-top: 3rem;
      align-items: center;

      .img-container {
        img {
          border-radius: 50%;
        }
      }
      .text-container {
        margin-left: 1rem;
        h5 {
          font-size: 1.8rem;
          font-weight: 500;
        }
        p {
          font-size: 1.2rem;
          font-weight: 500;
          line-height: 2.8rem;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
  }
`;
