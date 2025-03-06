// import React from 'react'
// import SignUp from './Components/SignUp'
// import Login from './Components/Login'
// //! Conditional rendering using if-elase
// const App = () => {

// let hello=false;
// if(hello)
// {
//   return(
//     <SignUp/>
//   )
// }
// else{
//   return(
//     <Login/>
//   )
// }
 
// }

// export default App

//! Conditional rendering using ternary operator

import React from 'react'
import Home from './Components/Home';
import Login from './Components/Login';

const App = () => {
  let islogged=false;
  let a=1
  return (
    <>
    {
      islogged?<Home/>:<Login/>
    }
    {/* {
      (a%2==0!==0)?<h1>It is even</h1>:<h1>it is odd</h1>
    } */}
    {
      (a%2==0!==0)&&<h1>It is even</h1>
    }
    </>
  )
}

export default App