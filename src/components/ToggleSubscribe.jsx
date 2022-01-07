import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const ToggleSubscribe = () => {
  const [subscription, setSubscription] = useState(false)

  const toggle = () => {
    setSubscription(prevState => !prevState)
  }

  useEffect(() => {
    console.log("Current Status: ",subscription ? `Subscribing (${subscription})` : `Unsubscribing (${subscription})`)
    if (subscription) {
      console.log('subscribing DataBase')
    }
    return () => {
      console.log('unsubscribing DataBase')
    }
  });

  return (
    <Button onClick={toggle} variant="contained" color={subscription ? "warning" : "primary"}>
      {subscription ? "Unsubscribe" : "Subscribe"}
    </Button>
  )
}

export default ToggleSubscribe;
