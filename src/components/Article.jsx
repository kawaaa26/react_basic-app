import React from "react";
import { useState } from "react";
import { Title, Content, PublishButton, ChangeString, SwitchButton, TextInput, Counter, ToggleButton } from "./index";
import Button from '@mui/material/Button';

const Article = (props) => {

  // SwitchButton state for content
  const defaultContent = "🐶 Before Update Content"
  const updatedContent = "😺 After Update Content"

  const [isPublished, setIsPublished] = useState(false)
  const [isChanged, setIsChanged] = useState("Default Button Content")

  const [isSwitched, setIsSwitched] = useState({
    status: false,
    content: defaultContent,
    color: "warning",
  });

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
    if (isSwitched["status"] === true) {
      console.log('if behaved.')
      setIsSwitched({
        status: false,
        content: defaultContent,
        color: "warning",
      });
    } else {
      console.log('else behaved.')
      setIsSwitched({
        status: true,
        content: updatedContent,
        color: "success",
      });
    }
  }

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
      <br /><br />
      <TextInput />
      <br /><br />
      <Counter />
      <br /><br />
      <ToggleButton />
    </div>
  )
}

export default Article;
