import React from "react";
import { Title, Content } from "./index";

const Article = (props) => {
  return (
    <div>
      <Title title={props.title} />
      <Content content={props.content} />
    </div>
  )
}

export default Article;
