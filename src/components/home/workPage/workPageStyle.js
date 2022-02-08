import styled from "styled-components";

export const WorkPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12.8rem 0 12.8rem 0;
`;

export const Col1 = styled.div`
  width: 40%;

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
  display: flex;
  /* width: 60rem; */
  flex-wrap: wrap;
  width: 60%;
`;

export const List = styled.div`
  width: 40%;
  margin-bottom: 4.8rem;
  margin-right: 3.5rem;

  h5 {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 4.8rem;
    color: ${({ theme }) => theme.colors.primary1};
  }
`;
