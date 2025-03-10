import React, { useState } from 'react'

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
    </>
  )
}

export default App