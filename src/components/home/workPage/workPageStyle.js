import styled from "styled-components";

export const WorkPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12.8rem 0 12.8rem 0;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
    padding: 6rem 0 6rem 0;
  }
`;

export const Col1 = styled.div`
  width: 40%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
    margin-bottom: 5rem;
  }

  h1 {
    font-size: 4.8rem;
    font-weight: 600;
    font-style: normal;
  }

  p {
    width: 70%;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 18rem;
    color: ${({ theme }) => theme.colors.primary3};
  }
`;

export const Col2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 1fr);
  width: 60%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }

  @media (max-width: 500px) {
    display: block;
  }
`;

export const List = styled.div`
  width: 60%;
  margin-bottom: 4.8rem;
  margin-right: 3.5rem;

  .writeup {
    width: 116%;

    /* @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      width: 116%;
    } */
  }

  .vector {
    position: relative;
    width: 5rem;
    height: 5rem;
  }
  .block1 {
    background: #5239fa;
    position: absolute;
    width: 42px;
    height: 42px;
    left: 8px;
    bottom: 8px;
    border-radius: 0 1rem 0rem 1rem;

    p {
      color: ${({ theme }) => theme.colors.tertiary2};
      font-size: 1.8rem;
      font-weight: 500;
      position: absolute;
      left: 8px;
      top: 13px;
    }
  }
  .block2 {
    background: #fcd980;
    position: absolute;
    width: 25px;
    height: 25px;
    left: 0px;
    bottom: 0px;
    border-radius: 0rem 0rem 0rem 1rem;
  }
  .block3 {
    background: #2405f2;
    position: absolute;
    width: 5rem;
    height: 5rem;
    left: 1px;
    bottom: 1px;
    border-radius: 1rem 1rem 1rem 1rem;
  }
  .block4 {
  }

  h5 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.8rem;
    color: ${({ theme }) => theme.colors.primary1};
  }
`;
