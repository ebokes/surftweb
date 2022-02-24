import { useState } from "react";
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
import liData from "../../../data/liData";
const Template = () => {
  //   const [option, setOption] = useState(id);
  //   const [select, setSelect] = useState({});

  //   const active = (index) => {
  //     setSelect((prev) => ({
  //       ...prev,
  //       [index]: !prev[index],
  //     }));
  //   };

  //   const handleClick = () => {
  //     setOption();
  //   };

  return (
    <Container>
      <TemplateContainer>
        <TemplateNav>
          {liData.map((item, index) => (
            <li key={index}>
              <div
                // onClick={active}
                // className={select[index] ? "active" : "nonactive"}
                href={item.url}
              >
                {item.title}
              </div>
            </li>
          ))}
          {/* <li>
            <a
              href="/all"
              id="1"
              onClick={active}
              className={select[index] ? "active" : "nonactive"}
            >
              All
            </a>
          </li>
          <li>
            <div
              //   href="ui-design"
              id="2"
              onClick={active}
              className={select[index] ? "active" : "nonactive"}
            >
              UI Design
            </div>
          </li>
          <li>
            <a
              id="3"
              href="/webflow-design"
              onClick={active}
              className={select[index] ? "active" : "nonactive"}
            >
              Webflow Design
            </a>
          </li>
          <li>
            <a
              id="4"
              href="/figma-design"
              onClick={active}
              className={select[index] ? "active" : "nonactive"}
            >
              Figma Design
            </a>
          </li> */}
        </TemplateNav>
        <Col1>
          {templateData.map((item, index) => (
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
