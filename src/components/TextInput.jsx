import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const TextInput = () => {

  const [name, setName] = useState("")

  const handleName = (event) => {
    console.log(event.target.value)
    setName(event.target.value)
  }

  console.log("Current: ", name)

  return (
    <TextField
      onChange={(event) => handleName(event)}
      type={'text'}
      value={name}
      multiline={false}
      rows={1}
      variant="filled"
    />
  );
};

export default TextInput;
