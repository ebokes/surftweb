import styled from "styled-components";

export const Container = styled.div`
  max-width: 120rem;
  width: 80%;
  margin: 0 auto;
`;

export const BackdropLContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  color: ${({ theme }) => theme.colors.tertiary2};
`;
