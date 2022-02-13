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
import { SubLink } from "../../../reuseableComponents/subLinkStyle";

const ProjectPage = () => {
  return (
    <Container>
      <ProjectPageContainer>
        <Title>
          <h1>View our projects</h1>
          <SubLink margin="0" href="/projects">
            View More
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </SubLink>
        </Title>
        <ProjectGallery>
          <Col1></Col1>
          <Col2>
            <div>
              <section>
                <h4>Unisaas Website Design</h4>
                <SubLink color="#FCD980" href="/portfolio">
                  View portfolio
                  <span>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </SubLink>
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
