import React, { useState } from 'react'

const App = () => {
  return (
    <Buttons/>
  )
}

const Buttons =()=>{
  const [count, setCount] = useState(0);
  const increment = () => {
    count<10 && setCount((c)=>c+1);
  }
  const decrement = () => {
    count>-10 && setCount((c)=>c-1);
  }
  return (
    <div>
      <h1>Practice</h1>
      <button onClick={increment}>+</button>
  <h1>{count}</h1>
      <button onClick={decrement}>-</button>
    </div>
  )
}

const Display = ()=>{
}

export default App
