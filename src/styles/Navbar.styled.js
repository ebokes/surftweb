import styled from "styled-components";

export const BackdropContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.tertiary2};
`;

export const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1.6rem;
  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Logo = styled.span`
  width: 10%;
`;
export const Links = styled.div`
  a {
    color: ${({ theme }) => theme.colors.tertiary2};
  }
`;
