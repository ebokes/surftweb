import styled from "styled-components";

export const OurTeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  /* div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  } */
`;
export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  div {
    background-color: ${({ theme }) => theme.colors.tertiary2};
    /* height: 34.4rem; */
    width: 22%;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    max-width: 100%;
  }

  h4 {
    margin: 3rem 0 0.4rem 0;
  }
`;

export const Title = styled.div`
  h2 {
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 6.4rem;
    margin-bottom: 4.8rem;
  }
`;
