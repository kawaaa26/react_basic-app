import Button from '@mui/material/Button';

const SwitchButton = (props) => {
  // console.log(props.isSwitched["status"])
  // console.log(props.isSwitched["content"])
  // console.log(props.isSwitched["color"])
  // console.log(`props named: content is... ${props.content}`);
  // console.log(`props named: onClick is... ${props.onClick}`);
  // console.log(`props ["status"] in isSwitched is... ${props.isSwitched["status"]}`)
  // console.log(`props ["content"] in isSwitched is... ${props.isSwitched["content"]}`)
  // console.log(`props ["color"] in isSwitched is... ${props.isSwitched["color"]}`)

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
