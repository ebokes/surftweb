// import { useState } from "react";
import { BackdropContainer, Container } from "../styles/Container.styled";
import { NavbarContent, Logo, Links } from "../styles/Navbar.styled";
import { Button } from "../styles/Button.styled";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  //   const [onIconClick, setOnIconClick] = useState(false);
  //   const handleClick = () => setOnIconClick(!onIconClick);
  //   const closeMenuLink = () => setOnIconClick(true);

  //   {
  /* <ul className={onClick ? "openMenu" : "closeMenu"}> */
  //   }
  //   {
  /* <a onClick={closeMenuLink} className="active" href="/"> */
  //   }
  return (
    <div>
      <BackdropContainer>
        <Container>
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
