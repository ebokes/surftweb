import React from "react";
import { Container } from "../../../reuseableComponents/containerStyle";
import {
  ProjectPageContainer,
  Col1,
  Col2,
  Title,
  ProjectGallery,
} from "../projectPage/projectPageStyle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
// import project1 from "../../../images/galleryImg1.png";
// import project2 from "../../../images/galleryImg2.png";
// import project3 from "../../../images/galleryImg3.png";

const ProjectPage = () => {
  return (
    <Container>
      <ProjectPageContainer>
        <Title>
          <h1>View our projects</h1>
          <a href="/projects">
            View More <HiOutlineArrowNarrowRight />
          </a>
        </Title>
        <ProjectGallery>
          <Col1></Col1>
          <Col2>
            <div>
              <section>
                <h4>Unisaas Website Design</h4>
                <a href="/portfolio">
                  View portfolio
                  <HiOutlineArrowNarrowRight />
                </a>
              </section>
            </div>
            <aside></aside>
            {/* <img src={project3} alt="project snapshot3" /> */}
          </Col2>
        </ProjectGallery>
      </ProjectPageContainer>
    </Container>
  );
};

export default ProjectPage;
