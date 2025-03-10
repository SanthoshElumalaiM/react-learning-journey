import React, { useState } from 'react'

const MyName = () => {

    let [firsName,setName]=useState("Sant")
  return (
    <>
    <h1>{firsName}</h1>
    <button onClick={()=>setName(firsName=" JavaDeveloper")}>LastName</button>
    <button onClick={()=>setName(firsName="Sant")}>FirstName</button>
    </>
  )
}

export default MyName