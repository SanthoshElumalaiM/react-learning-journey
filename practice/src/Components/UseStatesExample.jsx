import React, { useState } from 'react'

const UseStatesExample = () => 
{

    let [count,setCount]=useState(0)
    let value=0;

    let increase=()=>{
        value=value+1;
        console.log(value);
        
    }
    let increment=()=>
    {
      setCount(()=>count=count+1)
        
    }
        
        // console.log(count);
        
    
  return (
    <>
    
        <h1>{value}</h1>
        <button onClick={increase}>Increase</button>
        <h1>This is UseStatesExample</h1>
        <h1>{count}</h1>
        <button onClick={increment}>increment</button>
    </>
  )
}

export default UseStatesExample