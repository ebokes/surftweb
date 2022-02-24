import {
  TemplateContainer,
  Col1,
  TemplateItem,
  TemplateNav,
} from "./templateStyle";
import { Container } from "../../../reuseableComponents/containerStyle";
import templateData from "../../../data/templateSectionData";
import { SubLink } from "../../../reuseableComponents/subLinkStyle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Template = () => {
  return (
    <Container>
      <TemplateContainer>
        <TemplateNav>
          <li>
            <a href="/all" className="active">
              All
            </a>
          </li>
          <li>
            <a href="ui-design">UI Design</a>
          </li>
          <li>
            <a href="/webflow-design">Webflow Design</a>
          </li>
          <li>
            <a href="/figma-design">Figma Design</a>
          </li>
        </TemplateNav>
        <Col1>
          {templateData.map((item) => (
            <TemplateItem key={item.id}>
              <img src={item.img} alt={`template${item.id}`} />
              <h2>Template {item.id}</h2>
              <p>{item.text}</p>
              <SubLink margin="0" href="/contactus" color="#282938">
                View Portfolio
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </SubLink>
            </TemplateItem>
          ))}
        </Col1>
      </TemplateContainer>
    </Container>
  );
};

export default Template;
