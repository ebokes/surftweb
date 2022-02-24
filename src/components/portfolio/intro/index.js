import { IntroContainer, Col1, Social } from "./introStyle";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Intro = () => {
  return (
    <BackdropContainer>
      <Container pad="17rem 0 10rem 0">
        <IntroContainer>
          <Col1>
            <h4>What we created</h4>
            <h1>Our Work Portfolio</h1>
            <p>
              We help teams create great digital products by providing them with
              tools and technology to make the design-to-code process
              universally accessible.
            </p>
            <Social>
              <MdFacebook size={25} />
              <FaTwitter size={25} />
              <FaInstagram size={25} />
              <FaLinkedin size={25} />
            </Social>
          </Col1>
        </IntroContainer>
      </Container>
    </BackdropContainer>
  );
};

export default Intro;
