import React from "react";
import { Container } from "../../../reuseableComponents/containerStyle";
import { BlogPageContainer, Article, Articles } from "./blogPageStyle";
import blogData from "../../../data/blogPageData";
import { SubLink } from "../../../reuseableComponents/subLinkStyle";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

function BlogPage() {
  const article = blogData.map((article) => (
    <Article data-aos="fade-up" key={article.id}>
      <img src={article.img} alt="blog pic" />
      <p>{article.date}</p>
      <h4>{article.title}</h4>
      <p>{article.intro}</p>
      <SubLink margin="0" color="#282938" href={article.url}>
        Read More
        <span>
          <HiOutlineArrowNarrowRight />
        </span>
      </SubLink>
    </Article>
  ));

  return (
    <Container pad="0 0 10rem 0">
      <BlogPageContainer>
        <h1 data-aos="fade-up">Our blog</h1>
        <Articles>{article}</Articles>
      </BlogPageContainer>
    </Container>
  );
}

export default BlogPage;
