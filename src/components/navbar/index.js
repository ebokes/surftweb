import { useState } from "react";
import {
  BackdropContainer,
  Container,
} from "../../reuseableComponents/containerStyle";
import { NavbarContent, Logo, Links, MenuButton, CButton } from "./navbarStyle";
// import { Button } from "../../reuseableComponents/buttonStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleClick = () => setToggleMenu((prevState) => !prevState);

  // <Logo/> :<Link/>;

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
              {/* <div className="link"> */}
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
                <li>
                  <CButton bgh="rgba(255, 255, 255, 0.1)" href="/contactus">
                    Contact Us
                  </CButton>
                </li>
                {/* <Button
                  bg="#1C1E53"
                  color="#fff"
                  border="2px solid #F4F6FC33"
                  padding="1rem 3rem"
                  bgh="rgba(255, 255, 255, 0.1)"
                  href="/contactus"
                >
                  Contact us
                </Button> */}
              </Links>
              {/* </div> */}
            </nav>
            <MenuButton onClick={handleClick}>
              {toggleMenu ? (
                <GiHamburgerMenu fontSize="2.8rem" />
              ) : (
                <MdOutlineClose fontSize="2.8rem" />
              )}
            </MenuButton>
          </NavbarContent>
        </Container>
      </BackdropContainer>
    </div>
  );
};

export default Navbar;
