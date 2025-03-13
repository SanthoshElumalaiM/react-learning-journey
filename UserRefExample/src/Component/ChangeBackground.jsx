import React, { useRef } from 'react'

const ChangeBackground = () => {

let color=useRef()

let Change=()=>{
    color.current.style.color="red"
}

  return (
    <>
    <div className="background">
        <h5 ref={color}>This is Heading 1</h5>

    <button onClick={Change}>ChangeColor</button>
    </div>
    
    </>
  )
}

export default ChangeBackground