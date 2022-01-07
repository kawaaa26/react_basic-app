import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';

const Counter = () => {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

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

  const count2Up = () => {
    setCount2(prevState => prevState + 2)
  }

  const count2Down = () => {
    setCount2(prevState => prevState - 2)
  }

  useEffect(() =>  {
    console.log("Current count is...", count)
  }, [count])
  // the second argument will be a trigger for useEffect.

  return (
    <div>
      <p>Current Count: {count}</p>
      <Button onClick={countUp} variant="contained" color="primary">UP</Button>
      <Button onClick={countDown} variant="contained" color="warning">DOWN</Button>
      <br />
      <br />
      <p>Current Count 2: {count2}</p>
      <Button onClick={count2Up} variant="contained" color="primary">UP2</Button>
      <Button onClick={count2Down} variant="contained" color="warning">DOWN2</Button>
    </div>
  )
}

export default Counter;
