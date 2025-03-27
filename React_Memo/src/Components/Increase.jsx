import React, { useRef, useState } from 'react'

const Increase = () => {

       let c= useRef(0)

  return (
    <>
        <hr />
         <h1>count is :{c.current++}</h1>
    </>
  )
}

export default React.memo(Increase)