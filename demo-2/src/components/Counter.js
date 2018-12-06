import React from 'react'

const Counter = ({ value, decrementCount , onIncreaseClick, onDecreaseClick }) => (
  <div>
    <span>Increase: </span><span>{value}</span>
    <br/>
    <span>Decrease: </span><span>{decrementCount}</span>
    <br/>
    <button onClick={onIncreaseClick}>Increase</button>
    <button onClick={onDecreaseClick}>Decrease</button>
  </div>
)

export default Counter