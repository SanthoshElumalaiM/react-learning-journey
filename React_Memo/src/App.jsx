import React, { useState } from 'react'
import Increase from './Components/Increase'

const App = () => {

  let [count ,setCount]= useState(0)
  return (
    <>
      <button onClick={()=>setCount(count+1)}> count</button>
      {
        <h1>{count}</h1>
      }
      <Increase/>
    </>
  )
}

export default App