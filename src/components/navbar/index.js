import { useState } from "react";
import {
  BackdropContainer,
  Container,
} from "../../reuseableComponents/containerStyle";
import {
  NavbarContent,
  Logo,
  MenuButton,
  CButton,
  NavLinks,
} from "./navbarStyle";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
// import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  const handleClick = () => setToggleMenu((prevState) => prevState);

  return (
    <div>
      <BackdropContainer
        bg="#1C1E53"
        color="#fff"
        position="fixed"
        z="100"
        height="7.8rem"
      >
        <Container pad="0 0 0 0" padm="0 0 0 0">
          <NavbarContent>
            <Logo to="/">
              <h2>Surftweb</h2>
            </Logo>
            <nav>
              <ul onClick={handleClick} className={toggleMenu ? "up" : "down"}>
                <li>
                  <NavLinks className="active" to="/">
                    Home
                  </NavLinks>
                </li>
                <li>
                  <NavLinks to="/about-us">About Us</NavLinks>
                </li>
                <li>
                  <NavLinks to="/portfolio">Portfolio</NavLinks>
                </li>
                <li>
                  <NavLinks to="/pricing">Pricing</NavLinks>
                </li>
                <li>
                  <CButton bgh="rgba(255, 255, 255, 0.1)" href="/contact-us">
                    Contact Us
                  </CButton>
                </li>
              </ul>
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
