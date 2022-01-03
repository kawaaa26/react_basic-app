import Button from '@mui/material/Button';
import { useState } from "react";

const SwitchButton = (props) => {
  // console.log(props.isSwitched["status"])
  // console.log(props.isSwitched["content"])
  // console.log(props.isSwitched["color"])
  // console.log(`props named: content is... ${props.content}`);
  // console.log(`props named: onClick is... ${props.onClick}`);
  // console.log(`props ["status"] in isSwitched is... ${props.isSwitched["status"]}`)
  // console.log(`props ["content"] in isSwitched is... ${props.isSwitched["content"]}`)
  // console.log(`props ["color"] in isSwitched is... ${props.isSwitched["color"]}`)

  // below blocks are disabled for attempted version.
  // const defaultContent = "🐶 Before Update Content"
  // const updatedContent = "😺 After Update Content"

  // const [isSwitched, setIsSwitched] = useState({
  //   status: false,
  //   content: defaultContent,
  //   color: "primary",
  // });

  // const switchButtonContent = () => {
  //   if (isSwitched["status"] === true) {
  //     setIsSwitched({
  //       status: true,
  //       content: updatedContent,
  //       color: "success",
  //     });
  //   } else {
  //     setIsSwitched({
  //       status: false,
  //       content: defaultContent,
  //       color: "primary",
  //     });
  //   }
  // }
  // SwitchButton content
  // const defaultContent = "🐶 Before Update Content"
  // const updatedContent = "😺 After Update Content"


  // let content = defaultContent;
  // let color = "primary"

  // if (props.isSwitched === false) {
  //   content = defaultContent
  //   color = "primary"
  // } else {
  //   content = updatedContent
  //   color = "success"
  // }

  return (
    <div>
      <Button onClick={() => props.onClick()} variant="contained" color={props.isSwitched["color"]}>
        Switch Content: {props.isSwitched["content"]}
      </Button>
      <br />
    </div>
  )
}

export default SwitchButton;
