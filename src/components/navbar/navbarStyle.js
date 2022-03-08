import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem 0 1.6rem 0;
  height: 7.8rem;
  margin: 0 auto;
  width: 100%;
  max-width: 120rem;

  .desktop-menu {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      display: none;
    }

    & > li {
      .navLink {
        margin-right: 3rem;
        color: ${({ theme }) => theme.colors.tertiary5};
        position: relative;
        transition: all 0.3s;

        :hover {
          color: ${({ theme }) => theme.colors.tertiary2};

          padding-bottom: 0.1rem;
          border-bottom: 2px solid #fff;
        }
      }
      .active {
        color: ${({ theme }) => theme.colors.tertiary2};

        padding-bottom: 0.1rem;
        border-bottom: 2px solid #ffffff8e;
      }
    }
  }

  .mobile-menu {
    background-color: #1c1e53e8;
    /* filter: sepia(3); */
    position: absolute;
    right: -7rem;
    top: 7.8rem;
    width: 25rem;
    padding-left: 1rem;
    padding-top: 1rem;
    height: 100vh;

    & > li {
      margin-bottom: 1rem;
      border-bottom: 0.1rem solid;
      padding-bottom: 1rem;
      padding-right: 10rem;

      a {
        color: ${({ theme }) => theme.colors.tertiary2};
      }
    }
  }
`;

export const Logo = styled(LinkR)`
  color: ${({ theme }) => theme.colors.tertiary2};
`;

export const CButton = styled(LinkR)`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.tertiary2};
  border: 2px solid ${({ theme }) => theme.colors.tertiary6};
  padding: 1rem 3rem;
  border-radius: 4.1rem;
  font-weight: 600;
  line-height: 3.2rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    border: none;
    font-weight: 400;
    padding: 0;
    color: ${({ theme }) => theme.colors.tertiary5};
    background-color: transparent;
    line-height: 1.2rem;
  }
`;

export const MenuButton = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    cursor: pointer;
  }
`;
