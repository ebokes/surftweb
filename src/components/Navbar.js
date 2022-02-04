import { Container } from "../styles/Container.styled";
import {
  BackdropContainer,
  NavbarContent,
  Logo,
  Links,
} from "../styles/Navbar.styled";
import { Button } from "../styles/Button.styled";

const Navbar = () => {
  return (
    <div>
      <BackdropContainer>
        <Container>
          <NavbarContent>
            <Logo>
              <h2>Surftweb</h2>
            </Logo>
            <div>
              <Links>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/aboutus">About Us</a>
                  </li>
                  <li>
                    <a href="/features">Features</a>
                  </li>
                  <li>
                    <a href="pricing">Pricing</a>
                  </li>
                </ul>
              </Links>
              <Button bg="#1C1E53" color="#fff" border=" 2px solid #F4F6FC33">
                Contact us
              </Button>
            </div>
          </NavbarContent>
        </Container>
      </BackdropContainer>
    </div>
  );
};

export default Navbar;
