import styled from "styled-components";

export const OurTeamContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    flex-direction: column;
    /* width: 100%; */
  }

  .figure {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.tertiary2};
    width: 23%;
    padding: 3.8rem 0;
    box-shadow: 1px 2px 8px 0px #00000044;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: 23%;
      padding: 2rem 0;
    }
    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      width: 70%;
      margin: 1rem auto;
    }
    @media (max-width: 500px) {
      width: 95%;
    }

    img {
      max-width: 100%;
      display: flex;

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        max-width: 90%;
        justify-content: center;
        align-items: center;
        margin: 0.9rem auto;
      }
    }

    h4 {
      margin: 3rem 0 0.4rem 0;
    }
  }
`;

export const Avatar = styled.figure`
  clip-path: circle(50% at 50% 50%);
  width: 16.8rem;
  height: 16.8rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    clip-path: circle(45% at 50% 50%);
  }
`;

export const Title = styled.div`
  h2 {
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 6.4rem;
    margin-bottom: 4.8rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      font-size: 3.8rem;
      margin-bottom: 2rem;
    }
  }
`;

export const Caption = styled.figcaption`
  width: 20rem;
  height: 15rem;
  /* border-radius: 50%; */
  position: absolute;
  bottom: 0;
  left: -2rem;
  opacity: 0;
  background: linear-gradient(#0000ff00, #5239fa);
  transition: all 0.3s ease-in;

  & > div {
    position: absolute;
    left: 5.8rem;
    width: 9rem;
    display: flex;
    justify-content: space-between;
  }
  &:hover {
    opacity: 1;
  }

  & > * {
    margin-top: 50%;
    cursor: pointer;
  }
`;
