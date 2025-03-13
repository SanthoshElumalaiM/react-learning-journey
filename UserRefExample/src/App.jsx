import React, { useRef, useState } from 'react'
import ChangeBackground from './Component/ChangeBackground';

const App = () => {

  let [count,setCount]=useState(0)
  let num=useRef(0);
  // console.log(num);
  
  let increse=()=>{
    setCount(count+1)
    num.current=num.current+1;
    console.log(num.current);
    
  }

  return (
    <>
    <h1>UseRefExample</h1>
    <h1>{count}</h1>
    <h1>The number is {num.current}</h1>
    <button onClick={increse}>increment</button>

    <ChangeBackground/>
    </>
  )
}

export default App