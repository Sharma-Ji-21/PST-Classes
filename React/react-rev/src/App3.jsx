import React from 'react'

export const App3 = () => {
  return (
    <> 
    <div>App 3</div>
    </>
  )
}
export const App4 = () => {
  return (
    <> 
    <div>App 4</div>
    </>
  )
}

export const App5 = (name)=>`Hi ${name}`;

export const app6 = "Hello Himkar";

const MainApp={
  App3,
  App4,
  App5,
  app6
}
export default MainApp;