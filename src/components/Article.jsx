import React from "react";
import { useState } from "react";
import { Title, Content, PublishButton, ChangeString, SwitchButton } from "./index";
import Button from '@mui/material/Button';

const Article = (props) => {

  const [isPublished, setIsPublished] = useState(false)
  const [isChanged, setIsChanged] = useState("Default Button Content")

  // SwitchButton state
  // const defaultContent = "🐶 Before Update Content"
  // const updatedContent = "😺 After Update Content"

  const [isSwitched, setIsSwitched] = useState(false)

  // const [isSwitched, setIsSwitched] = useState({
  //   status: false,
  //   content: defaultContent,
  // });

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

  const switchButtonContent = () => {
    if (isSwitched === true) {
      setIsSwitched(false)
    } else {
      setIsSwitched(true)
    }
  }

  // const switchButtonContent = () => {
  //   if (isSwitched["status"] === true) {
  //     setIsSwitched({
  //       status: true,
  //       content: updatedContent,
  //     });
  //   } else {
  //     setIsSwitched({
  //       status: false,
  //       content: defaultContent,
  //     });
  //   }
  // }

  return (
    <div className="content">
      <Title title={props.title} />
      <Content content={props.content} />
      <PublishButton isPublished={isPublished} onClick={publishArticle} />
      <Button onClick={ () => setIsPublished(true) } variant="contained" color="secondary">
        公開
      </Button>
      <br /><br />
      <ChangeString isChanged={isChanged} onClick={changeButtonContent} />
      <br /><br />
      <SwitchButton isSwitched={isSwitched} onClick={switchButtonContent} />
    </div>
  )
}

export default Article;
