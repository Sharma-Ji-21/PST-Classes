import { useState } from 'react'
import './App.css'
import { Header, Footer } from './Extra'
import {Greeting, Greetings} from './Greeting'
import Border from './Border'
import Welcome from './Welcome'

function App() {
  // const arr=["a","b","c"];
  // props is basically a object as we don't know like how many values are we assigning 
  return (
    <>
      <Welcome name="Om"/>
      <Welcome name="Sachin"/>
      <Greetings name={(x)=>x.map((x1,idx)=><Border key={idx}><div>{x1},{idx} </div></Border>)}/>

        {/* {arr.map((name,index)=> <Greetings key={index} name={name}/>)} */}
      <Extra/>
      <Header/>
      <Footer/>
      <InputHandel/>
      {/* <Greetings name="Om" age={17}/>
      <Greetings name="Devesh"/>
      <Greetings name="Sachin" age={17}/> */}
    </>
  )
}


const InputHandel=()=>{
  const [name, setName]= useState("");
  function updateName(e){
    setName(e.target.value);
  }
  return (
    <Greeting name={name} updateName={updateName}/>
  )
}

const Extra= () => {
  const [count, setCount] = useState(0);
  function increase(){
    setCount((c)=>c+1);
  }
  function decrease(){
    setCount((c)=>c-1);
  }
  return (
    <>
    <h1>Practice</h1>
    <Display count={count}/>
    <Buttons increase={increase} decrease={decrease}/>
    </>
  );
}

const Buttons = ({increase,decrease}) =>{
  
  return (
    <div>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

const Display = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
    </div>
  );
}
export default App
