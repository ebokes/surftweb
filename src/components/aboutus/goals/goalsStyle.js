import styled from "styled-components";

export const GoalsContainer = styled.div``;
export const GoalsDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ fld }) => fld || "row"};

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
  }

  &:not(:last-child) {
    margin-bottom: 9.6rem;
  }
`;
export const Col1 = styled.div`
  width: 45%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }
  h4 {
    font-weight: 500;
    line-height: 2.8rem;
  }

  h1 {
    margin: 1.6rem 0;
    font-size: 3.8rem;
    font-weight: 600;
    line-height: 5.6rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin: 0.6rem 0;
    }
  }

  p {
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.8rem;
  }
`;
export const Col2 = styled.div`
  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
    margin-top: 1rem;
  }
  width: 40%;
  img {
    max-width: 100%;
    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin-top: 1.4rem;
    }
  }
`;
