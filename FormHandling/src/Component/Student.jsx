import React, { useState } from 'react'

const Student = () => {

    let [sname,setsname]=useState("")
    let[ph,setph]=useState("")
    let[pass,setpass]=useState("")

    let handledSubmit=(e)=>{
        e.preventDefault();
        console.log({sname,ph,pass});
        
        console.log("FromSubitted");
        setsname("")
        setph("")
        setpass("")
        
    }
    let nameChanged=(e)=>{

        // console.log(e.target.value);
        setsname(e.target.value)
        
    }

    let phChanged=(e)=>{
        setph(e.target.value)
    }
  return (
    <>
        <h1></h1>
        <div className="card">
            <h1>Student form</h1>
            <form action="" onSubmit={handledSubmit}>

                <label htmlFor="">Student Name</label>
                <input type="text" placeholder='Enter Name' onChange={nameChanged}  value={sname}/>
                <label htmlFor="">Student Phone</label>
                <input type="text" placeholder='Enter Phone' onChange={phChanged}  value={ph}/>
                <label htmlFor="">Password</label>
                <input type="text" placeholder='Enter password' onChange={(e)=>setpass(e.target.value)} value={pass} />

                <button>Signup</button>
            </form>
        </div>
    </>
  )
}

export default Student