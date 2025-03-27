// import React from 'react'

// const Contional = () => {
//   let age=20;
//   if(age>18)
//     {
//        return(
       
//         <h1>you are eligible for vote</h1>
//         )
//     }
//     else{
//       return(
//         <h1>You are not elligible for vote</h1>
//       )
//     }
  
// }

// export default Contional

import React from 'react'

const Conditional = () => {
  let age=20;
  return (
    <>
      {
        age>18?<h1>You are  Eligible for vote</h1>:<h1>You are Not Eligible for vote</h1>
      }
    </>
  )
}

export default Conditional