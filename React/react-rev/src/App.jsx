import React, { useState } from 'react'
// import App3, {App4,App5,app6} from './App3';
import MainApp, {App3,App4,App5,app6} from './App3';

const App = () => {
  const [count, setCount] = useState(0)
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);  
  }
  return (
    <>
    <App2/>
    <div className='count'>{count}
      <button onClick={count < 10 && increment}>+</button>
      <button onClick={count > -10 && decrement}>-</button>
    </div>
    <App4/>
    <p>{App5("Om")}</p>
    {app6}
    </>
  )
}

const App2 =  () => {
  return(
    <>
    <App3/>
    <div>Hello Student</div>
    </>
  )
}

export default App