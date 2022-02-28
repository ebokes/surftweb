import { IntroContainer, Col1 } from "./introStyle";
import {
  Container,
  BackdropContainer,
} from "../../../reuseableComponents/containerStyle";
import { Handle } from "../../../reuseableComponents/subLinkStyle";
import { MdFacebook } from "react-icons/md";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SocialStyle } from "../../../reuseableComponents/subLinkStyle";

const Intro = () => {
  return (
    <BackdropContainer>
      <Container pad="17rem 0 10rem 0" padm="12rem 0 6rem 0">
        <IntroContainer>
          <Col1>
            <h4>What we created</h4>
            <h1>Our Work Portfolio</h1>
            <p>
              We help teams create great digital products by providing them with
              tools and technology to make the design-to-code process
              universally accessible.
            </p>
            <SocialStyle margin="0 auto">
              <Handle color="#000" href="https://facebook.com" target="_blank">
                <MdFacebook size={25} />
              </Handle>
              <Handle color="#000" href="https://twitter.com" target="_blank">
                <FaTwitter size={25} />
              </Handle>
              <Handle color="#000" href="https://instagram.com" target="_blank">
                <FaInstagram size={25} />
              </Handle>
              <Handle color="#000" href="https://linkedin.com" target="_blank">
                <FaLinkedin size={25} />
              </Handle>
            </SocialStyle>
          </Col1>
        </IntroContainer>
      </Container>
    </BackdropContainer>
  );
};

export default Intro;
