import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;
  /* border: 2px solid green; */
`;

export const BackdropContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.tertiary2};
  /* border: 2px solid red; */ ;
`;

export const GreyBackdrop = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary1};
`;
