import Button from '@mui/material/Button';

const SwitchButton = (props) => {

  // SwitchButton content
  const defaultContent = "🐶 Before Update Content"
  const updatedContent = "😺 After Update Content"


  let content = defaultContent;
  let color = "primary"

  if (props.isSwitched === false) {
    content = defaultContent
    color = "primary"
  } else {
    content = updatedContent
    color = "success"
  }

  return (
    <div>
      <Button onClick={() => props.onClick()} variant="contained" color={color}>
        Switch Content: {content}
      </Button>
      <br />
    </div>
  )
}

export default SwitchButton;
