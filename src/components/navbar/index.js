import { useState } from "react";
import {
  BackdropContainer,
  Container,
} from "../../reuseableComponents/containerStyle";
import {
  NavbarContainer,
  Logo,
  CButton,
  NavLink,
  MenuButton,
} from "./navbarStyle";
import { Sling as Hamburger } from "hamburger-react";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleClose = () => setToggle(false);

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
          <NavbarContainer>
            <Logo onClick={handleClose} to="/">
              <h2>Surftweb</h2>
            </Logo>
            <ul className={toggle ? "mobile-menu" : "desktop-menu"}>
              <li>
                <NavLink
                  onClick={handleClose}
                  className=
                  // {handleActive ? 
                    "activated" 
                    // :
                    //  "deactivated"
                    // }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClose} to="/about-us">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClose} to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink onClick={handleClose} to="/pricing">
                  Pricing
                </NavLink>
              </li>
              <li>
                <CButton
                  bgh="rgba(255, 255, 255, 0.1)"
                  onClick={handleClose}
                  to="/contact-us"
                >
                  Contact Us
                </CButton>
              </li>
            </ul>
            <MenuButton className="menu-button">
              <Hamburger toggled={toggle} toggle={setToggle} />
            </MenuButton>
          </NavbarContainer>
        </Container>
      </BackdropContainer>
    </div>
  );
};

export default Navbar;
