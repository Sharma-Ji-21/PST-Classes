import React from 'react'

export const Greeting = (props) => {
  return (
    <div>
    <input type="text" value={props.name} onChange={props.updateName}/>
      Hi There {props.name}
    </div>
  )
}
export const Greetings = ({name})=>{
  const arr=["Tarman","Devesh","JP"];

  return (
    <>
    {/* <div>Hi there {name()}</div> */}
    {<div>{name(arr)}</div>}
    </>
  )
}