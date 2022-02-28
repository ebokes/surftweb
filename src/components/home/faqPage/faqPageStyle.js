import styled from "styled-components";

export const FaqPageContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
  }
`;

export const Col1 = styled.div`
  width: 27%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    margin-bottom: 4rem;
    width: 100%;
  }
  h1 {
    font-size: 3.8rem;
    font-weight: 600;
  }

  & > a {
    color: ${({ theme }) => theme.colors.primary3};
  }
`;
export const Col2 = styled.div`
  width: 65%;
  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
    /* border-bottom: 1px solid grey; */
  }
  h4 {
    font-size: 2.4rem;
    font-weight: 500;
  }
  .sn {
    color: ${({ theme }) => theme.colors.primary3};

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      margin-right: 10%;
    }
  }

  .question-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .no-quest-close {
    display: flex;
    justify-content: space-between;
  }
  .no-quest {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  .answer {
    color: ${({ theme }) => theme.colors.primary1};
    font-size: 1.8rem;
    font-weight: 500;
    line-height: 3.2rem;
    margin-top: 1.6rem;
  }

  .quest-ans {
    width: 90%;
  }

  .toggle {
    cursor: pointer;
    font-size: 2rem;
  }

  hr {
    margin-top: 4rem;
    font-weight: 500;
  }

  .answer-container {
    padding-left: 8%;
    width: 84%;
  }

  .no-ans {
    display: none;
  }

  .content {
    width: 100%;
  }
  .line {
    margin: 3.2rem 0;
    border-bottom: 2px solid #ececf1;
  }
`;
