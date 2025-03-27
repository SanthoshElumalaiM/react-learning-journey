import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const App = () => {

  let [count,setCount]=useState(0)
  let [num,setNum]=useState(0)

  let multiply=(num)=>{

    console.log("i am inside multiply function");
    
    for(let i=0;i<100000000;i++)
    {

    }
    return num*2
  }
  // let res=multiply(num)

  let res=useMemo(()=>{
    multiply()
  },[num])
  return (
    <>
      <h1>count is :{count}</h1>    
      <button onClick={()=>setCount(count+1)}>count</button>
      <hr />
      <input type="number" placeholder='Enter The Number'  onChange={(e)=>setNum(e.target.value)} />
      <h1>Num is :{res}</h1>

    </>
  )
}

export default App