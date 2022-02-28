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
          <h1 data-aos="fade-up" data-aos-duration="2000">
            View our projects
          </h1>
          <SubLink
            data-aos="fade-up"
            data-aos-duration="2000"
            margin="0"
            href="/portfolio"
          >
            View More
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </SubLink>
        </Title>
        <ProjectGallery>
          <Col1 data-aos="fade-right" data-aos-duration="2000"></Col1>
          <Col2 data-aos="fade-left" data-aos-duration="2000">
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
            <aside data-aos="fade-up" data-aos-duration="1000"></aside>
            {/* <img src={project3} alt="project snapshot3" /> */}
          </Col2>
        </ProjectGallery>
      </ProjectPageContainer>
    </Container>
  );
};

export default ProjectPage;
