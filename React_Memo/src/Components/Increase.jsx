import React, { useRef, useState } from 'react'

const Increase = () => {

       let count= useRef(0)

  return (
    <>
         <h1>count is :{count.current+1}</h1>
    </>
  )
}

export default Increase