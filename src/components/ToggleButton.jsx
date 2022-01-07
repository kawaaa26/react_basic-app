import React, { useState } from 'react';
import Button from '@mui/material/Button';

const ToggleButton = () => {

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <Button onClick={toggle} variant="contained" color={open ? "primary" : "error"}>
      {open ? 'OPEN' : 'CLOSE'}
    </Button>
  );
};

export default ToggleButton;
