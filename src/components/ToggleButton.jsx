import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const ToggleButton = () => {

  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(prevState => !prevState)
  }

  useEffect(() => {
    console.log('Current state: ', open)
    if (open) {
      console.log('Subscribing database')
    }
    return () => {
      console.log('Unsubscribing database')
    }
  });

  return (
    <Button onClick={toggle} variant="contained" color={open ? "primary" : "error"}>
      {open ? 'OPEN' : 'CLOSE'}
    </Button>
  );
};

export default ToggleButton;
