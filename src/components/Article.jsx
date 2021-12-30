import React from "react";
import { useState } from "react";
import { Title, Content, PublishButton, ChangeString } from "./index";

const Article = (props) => {

  const [isPublished, setIsPublished] = useState(false)
  const [isChanged, setIsChanged] = useState("Default Button Content")

  const publishArticle = () => {
    if (isPublished === true) {
      setIsPublished(false)
    } else {
      setIsPublished(true)
    }
  }

  const changeButtonContent = () => {
    if (isChanged === "Default Button Content") {
      setIsChanged("Updated Button Content")
    } else {
      setIsChanged("Default Button Content")
    }
  }

  return (
    <div className="content">
      <Title title={props.title} />
      <Content content={props.content} />
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
      <button onClick={ () => setIsPublished(true) }>公開</button>
      <ChangeString isChanged={isChanged} onClick={changeButtonContent} />
    </div>
  )
}

export default Article;
