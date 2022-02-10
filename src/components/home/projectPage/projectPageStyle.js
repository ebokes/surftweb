import styled from "styled-components";
import project2 from "../../../images/galleryImg2.png";
import project3 from "../../../images/galleryImg3.png";
import project1 from "../../../images/galleryImg1.png";

export const ProjectPageContainer = styled.div``;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.4rem;

  h1 {
    font-size: 4.8rem;
    font-weight: 600;
  }
`;
export const ProjectGallery = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: baseline; */
  /* height: 80rem; */
`;
export const Col1 = styled.div`
  width: 67%;
  background-image: url(${project1});
  height: 62.9rem;
  background-repeat: no-repeat;
  background-size: 100%;
`;
export const Col2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 35%;
  /* height: 100%; */

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: 100%;
    width: 97%;
    height: 47%;
    background-image: linear-gradient(
        329.39deg,
        #1c1e53 -10.96%,
        rgba(28, 30, 83, 0.42) 103.96%
      ),
      url(${project2});
    background-repeat: no-repeat;
    max-width: 100%;

    section {
      /* margin: 1rem 0 4.5rem 5.6rem; */

      h4 {
        color: ${({ theme }) => theme.colors.tertiary2};
        /* margin-left: 5.6rem; */
        width: 16rem;
      }

      a {
        color: ${({ theme }) => theme.colors.secondary1};
      }
      width: 97%;
      height: 50%;
      background-repeat: no-repeat;
    }
  }
  aside {
    background-image: url(${project3});
    width: 97%;
    height: 50%;
    background-repeat: no-repeat;
    background-size: 100%;
  }
`;
