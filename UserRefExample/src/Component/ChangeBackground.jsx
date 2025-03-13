import React, { useRef } from 'react'

const ChangeBackground = () => {

let color=useRef()

let Change=()=>{
    color.current.style.backgroundColor="red"
}

  return (
    <>
    <div className="background" ref={color}>
        <h5>This is Heading 1</h5>

    <button onClick={Change}>ChangeColor</button>
    </div>
    
    </>
  )
}

export default ChangeBackground