import styled from "styled-components";

export const ContactUsContainer = styled.div`
  margin: 0 auto;
`;
export const Row1 = styled.div`
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

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      font-size: 3rem;
    }
  }
  p {
    opacity: 0.7;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.8rem;
    text-align: center;
    width: 70rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: auto;
    }
  }
`;
export const Row2 = styled.div`
  background-color: ${({ theme }) => theme.colors.tertiary1};
  /* height: 64rem; */
  width: 80%;
  margin: 0 auto;
  margin-top: 6.4rem;
  border-radius: 1.2rem;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const FormField = styled.form`
  padding: 4.5rem 0 3rem 0;
  margin: 0 auto;
  width: 85%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    flex-direction: column;
  }
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  margin-top: 2rem;
  color: red;
  height: 12rem;
  justify-content: flex-start;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }

  & > label {
    font-size: 1.8rem;
    margin-bottom: 0.6rem;
    width: fit-content;
    color: #000;
  }

  input {
    width: 90%;
    padding: 1.8rem 3.2rem;
    border-radius: 0.8rem;
    border: 1px solid #0000001f;
    background-color: ${({ theme }) => theme.colors.tertiary1};
    outline: none;
    font-size: 1.8rem;

    @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
      width: 100%;
    }

    &:focus {
      border-bottom: 2px solid black;
    }
  }
`;

export const Textarea = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  color: red;

  & > label {
    font-size: 1.8rem;
    margin: 1.6rem 0 0.6rem 0;
    width: fit-content;
    color: #000;
  }

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 100%;
  }

  textarea {
    padding: 1.8rem 3.2rem;
    border-radius: 0.8rem;
    border: 1px solid #0000001f;
    background-color: ${({ theme }) => theme.colors.tertiary1};
    outline: none;
    font-size: 1.8rem;
    font-family: "Poppins", sans-serif;

    &:focus {
      border-bottom: 2px solid black;
    }
  }
`;

export const SubmitBtn = styled.button`
  color: ${({ theme }) => theme.colors.tertiary2};
  background-color: ${({ theme }) => theme.colors.primary1};
  display: inline-block;
  border-radius: 4.1rem;
  font-weight: 600;
  font-size: 1.8rem;
  text-align: center;
  width: 25rem;
  height: 7rem;
  cursor: pointer;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.mediaQuery.tablet}) {
    width: 18rem;
    height: 5rem;
  }
`;
