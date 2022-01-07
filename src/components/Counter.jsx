import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Counter = () => {
  const [count, setCount] = useState(0)

  const countUp = () => {
    setCount(prevState => prevState + 1)
    // prevState enables using previous state for updating state.
  }

  // the below block is unshorten code for countUp
  // const countUp = () => {
  //   setCount(prevState => {
  //     return prevState + 1
  //   })
  // }

  const countDown = () => {
    setCount(prevState => prevState - 1)
    // prevState enables using previous state for updating state.
  }

  return (
    <div>
      <p>Current Count: {count}</p>
      <Button onClick={countUp} variant="contained" color="primary">UP</Button>
      <Button onClick={countDown} variant="contained" color="warning">DOWN</Button>
    </div>
  )
}

export default Counter;
