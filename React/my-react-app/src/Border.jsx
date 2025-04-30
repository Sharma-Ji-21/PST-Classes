import React from 'react'

const Border = ({children}) => {
  return (
    <div style={{border:'2px solid black',backgroundColor:'steelblue',height:'150px',width:'150px'}}>{children}</div>
  )
}

export default Border