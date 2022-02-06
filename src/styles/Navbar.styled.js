import styled from "styled-components";

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.6rem;
  position: fixed;
  height: 7.8rem;
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 90%;
  max-width: 120rem;
  margin: 0 auto;
  /* border: 2px solid yellow; */

  nav {
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
      display: none;
    }
  }
`;

export const Logo = styled.span`
  width: 10%;
`;
export const Links = styled.ul`
    display: flex;

    li {
      margin-right: 4rem;
        
        @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
          margin-right: 1.5rem;     
      }
      }
      a {
        color: ${({ theme }) => theme.colors.tertiary5};
        transition: all 0.1s;
      }

      a.active,
      a:hover {
        border-bottom: 0.2rem solid;
        padding-bottom: 0.3rem;
        color: ${({ theme }) => theme.colors.tertiary2};
      }
    }

    /* .openMenu {
      display: none;

      @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
        display: block;
      } */
  }
  /* position: fixed; */
  /* inset: 0 0 0 50%;
      background-color: ${({ theme }) => theme.colors.tertiary4}; */
  /* background-color: hsl(0 0 100% /0.5);
        backdrop-filter: 10rem; */
  /* flex-direction: column;
      align-items: flex-end;
      width: 20rem;
      height: 20rem;
      padding: min(30vh 10rem) 2rem;
    } */
  /* } */
`;
