// import { useState } from "react";
import {
  BackdropContainer,
  Container,
} from "../../reuseableComponents/containerStyle";
import { NavbarContent, Logo, Links } from "./navbarStyle";
import { Button } from "../../reuseableComponents/buttonStyle";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  return (
    <div>
      <BackdropContainer
        bg="#1C1E53"
        color="#fff"
        position="fixed"
        z="100"
        height="7.8rem"
      >
        <Container pad="0 0 0 0">
          <NavbarContent>
            <Logo>
              <h2>Surftweb</h2>
            </Logo>
            <nav>
              <Links>
                <li>
                  <a className="active" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/aboutus">About Us</a>
                </li>
                <li>
                  <a href="/features">Features</a>
                </li>
                <li>
                  <a href="/pricing">Pricing</a>
                </li>
              </Links>
              {/* <GiHamburgerMenu />
              <MdOutlineClose /> */}
              <Button
                bg="#1C1E53"
                color="#fff"
                border="2px solid #F4F6FC33"
                padding="1rem 3rem"
                bgh="rgba(255, 255, 255, 0.1)"
                href="/contactus"
              >
                Contact us
              </Button>
            </nav>
          </NavbarContent>
        </Container>
      </BackdropContainer>
    </div>
  );
};

export default Navbar;
