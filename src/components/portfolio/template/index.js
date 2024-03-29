// import { useState } from "react";
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
                to={item.url}
              >
                {item.title}
              </div>
            </li>
          ))}
        </TemplateNav>
        <Col1>
          {templateData.map((item) => (
            <TemplateItem data-aos="fade-up" data-aos-offset="3" key={item.id}>
              <img src={item.img} alt={`template${item.id}`} />
              <h2>Template {item.id}</h2>
              <p>{item.text}</p>
              <SubLink margin="0" to="/portfolio" color="#282938">
                Read case study
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
