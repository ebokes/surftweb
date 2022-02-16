import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0 1.6rem 0;
  position: fixed;
  height: 7.8rem;
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  position: relative;

  /* border: 2px solid yellow; */

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .down {
      display: none;

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        flex-direction: column;
        background-color: green;
        position: absolute;
        right: -100%;
        top: 7.8rem;
        width: 25rem;
        padding-left: 1rem;
        align-items: flex-start;
        height: 100rem;
        /* background-color: ${({ theme }) => theme.colors.primary2}; */
      }
    }

    .up {
      display: flex;
      align-items: center;

      @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
        display: none;
        /* flex-direction: column;
        background-color: ${({ theme }) => theme.colors.primary2};
        position: absolute;
        right: -7rem;
        top: 7.8rem;
        width: 25rem;
        padding-left: 1rem;
        align-items: flex-start;
        height: 100rem; */
      }

      li {
        &:not(:last-child) {
          margin-right: 4rem;

          @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
            margin-right: 1.5rem;
          }
        }

        @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
          margin-bottom: 2rem;
          /* border-bottom: 0.2rem solid; */
          padding-bottom: 1rem;
          padding-right: 10rem;
          position: relative;
        }
      }
    }
  }
`;

export const NavLinks = styled(LinkR)`
  color: ${({ theme }) => theme.colors.tertiary5};
  transition: all 0.1s;

  .active,
  :hover {
    color: ${({ theme }) => theme.colors.tertiary2};
    &:not(:last-child) {
      padding-bottom: 0.3rem;
      border-bottom: 0.2rem solid;
    }
    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      border-bottom: none;
    }
  }
  /* &::before {
    content: "";
    width: 20rem;
    height: 0.2rem;
    bottom: 0.1rem;
    left: 0.1rem;
    background-color: ${({ theme }) => theme.colors.tertiary2};
    position: absolute;
  } */
`;

export const MenuButton = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: block;
    cursor: pointer;
  }
`;

export const Logo = styled.span`
  width: 10%;
`;

export const CButton = styled.a`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.tertiary2};
  border: 2px solid ${({ theme }) => theme.colors.tertiary6};
  padding: 1rem 3rem;
  border-radius: 4.1rem;
  font-weight: 600;
  line-height: 3.2rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    border: none;
    font-weight: 400;
    padding: 0;
    color: ${({ theme }) => theme.colors.tertiary5};
  }

  &:hover {
    /* background-color: rgba(255, 255, 255, 0.1); */
    color: ${({ theme }) => theme.colors.tertiary2};
  }
`;
