import styled from "styled-components";

export const ContactUsContainer = styled.div``;
export const Row1 = styled.div`
  /* text-align: center; */
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  h1 {
    font-size: 4.8rem;
    font-weight: 600;
    line-height: 6.4rem;
  }
  p {
    opacity: 0.7;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.8rem;
  }
`;
export const Row2 = styled.div`
  div {
    background-color: ${({ theme }) => theme.colors.tertiary1};
    height: 64rem;
    width: 1061px;
    margin: 0 auto;
    margin-top: 6.4rem;
  }
`;
