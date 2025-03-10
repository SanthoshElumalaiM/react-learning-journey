import React, { useState } from 'react'
import MyName from './Component/MyName'

const App = () => {

  let[count,setCount]=useState(0)

  let increase=()=>{
    setCount(count+1)
  }
  let decrease=()=>{
    setCount(count-1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>decrease</button>
      <button onClick={()=>setCount(count+1)}>increase</button>
      <button onClick={()=>setCount(count-1)}>decrease</button>
      
      <MyName/>
      

    </>
  )
}

export default App