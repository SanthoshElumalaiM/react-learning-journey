//!Resollving the sideEffect of useState-UseState is executing continously but while fetching the API data only one time 
//! can be fetch....UseEffect is can ba handled in three ways
//? 1.Normal
//? 2.Empty Array dependency-It will execute only one time
//? 3.inside dependency we have pass the state- whenever the state is excuted that time only it will excuted..

import React, { useEffect, useState } from 'react'

const App = () => {

  let [count,setCount]=useState(0)
  let[num,setNum]=useState(20)

  let decrease=()=>{
    setNum(num-1)
  }

  //* 1.Normal

  useEffect(()=>{
    console.log("I am normal UseEffect")
  })

  //? 2.Empty Array dependency-It will execute only one time

  useEffect(()=>{
    console.log("I will give output only one time...")
  },[])
  
//? 3.inside dependency we have pass the state- whenever the state is excuted that time only it will excuted..

  useEffect(()=>{
    console.log("Hello i am useEffect with dependency");
    
  },[num])

  return (
    <>
      <h1>count is :{count}</h1>
      <button onClick={()=>setCount(count+1)}>increase</button>
      <h1>Number is :{num}</h1>
      <button onClick={decrease}>decrease</button>
    </>
  )
}

export default App