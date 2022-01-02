import Button from '@mui/material/Button';

const ChangeString = (props) => {
  return (
    <Button onClick={() => props.onClick()} variant="contained">
      Button Content: {props.isChanged}
    </Button>
  )
}

export default ChangeString;
