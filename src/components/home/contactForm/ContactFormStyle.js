import styled from "styled-components";
import study from "../../../images/studying.svg";

export const ContactFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Col1 = styled.div`
  background-image: linear-gradient(#1c1e5380, #1c1e5380), url(${study});
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  background-color: #1c1e5380;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    display: none;
  }

  div {
    padding: 9rem 0;
    color: ${({ theme }) => theme.colors.tertiary2};
    margin: 0 auto;
    width: 70%;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: 85%;
    }

    h1 {
      font-size: 5.4rem;
      font-weight: 600;
      line-height: 7.4rem;
      margin-bottom: 2.4rem;
    }

    p {
      font-weight: 500;
      line-height: 2.8rem;
    }
  }
`;

export const Col2 = styled.div`
  background-color: ${({ theme }) => theme.colors.primary2};
  width: 50%;

  @media (max-width: ${({ theme }) => theme.mediaQuery.mobile}) {
    width: 100%;
  }

  div {
    color: ${({ theme }) => theme.colors.tertiary2};
    padding: 9rem 0;
    width: 70%;
    margin: 0 auto;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: 85%;
    }

    h5 {
      font-size: 3.2rem;
      font-weight: 500;
      line-height: 4.8rem;
      margin-bottom: 1.6rem;
    }

    p {
      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.8rem;
    }

    form {
      display: flex;
      flex-direction: column;
      margin: 2.4rem 0;

      input {
        background-color: ${({ theme }) => theme.colors.primary2};
        width: 100%;
        /* height: 6.4rem; */
        border-radius: 0.8rem;
        border: 1.5px solid ${({ theme }) => theme.colors.tertiary6};
        outline: none;
        margin-top: 1.6rem;
        /* padding-left: 2rem; */
        color: ${({ theme }) => theme.colors.tertiary2};
        padding: 2rem 2rem;

        &::placeholder {
          color: ${({ theme }) => theme.colors.tertiary2};
          opacity: 0.6;
        }

        &:focus {
          border-bottom: 2px solid #fff;
          background-color: ${({ theme }) => theme.colors.tertiary6};
          color: ${({ theme }) => theme.colors.tertiary2};
        }
      }
      span {
        height: 4rem;
      }
    }
  }
`;

// export const Content = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
