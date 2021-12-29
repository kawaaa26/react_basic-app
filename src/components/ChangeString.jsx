const ChangeString = (props) => {
  return (
    <button onClick={() => props.onClick()}>
      Button Content: {props.isChanged}
    </button>
  )
}

export default ChangeString;
