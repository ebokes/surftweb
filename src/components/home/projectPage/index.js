import React from "react";
import { Container } from "../../../reuseableComponents/containerStyle";
import {
  ProjectPageContainer,
  Col1,
  Col2,
  Title,
  ProjectGallery,
  Row1,
  Row2,
} from "../projectPage/projectPageStyle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { SubLink } from "../../../reuseableComponents/subLinkStyle";
import { Link } from "react-router-dom";

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
            to="/portfolio"
            color="#1C1E53"
          >
            View More
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </SubLink>
        </Title>
        <ProjectGallery>
          <Col1>
            <div>
              <h3>Workhub office Webflow Webflow Design</h3>
              <p>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>
              <Link className="view" to="/portfolio">
                View portfolio
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </Link>
            </div>
          </Col1>
          <Col2>
            <Row1>
              <div>
                <h4>Unisaas Website Design</h4>
                <Link className="view" to="/portfolio">
                  View portfolio
                  <span>
                    <HiOutlineArrowNarrowRight />
                  </span>
                </Link>
              </div>
            </Row1>
            <Row2 />
          </Col2>
        </ProjectGallery>
      </ProjectPageContainer>
    </Container>
  );
};

export default ProjectPage;
