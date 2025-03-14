import React from 'react'
import Login from './Login'
import { BrowserRouter,Routes,Route, NavLink } from 'react-router-dom'
import LoginLeft from './LoginLeft'
import SigninLeft from './SigninRight'
const Signin = () => {
  return (
    <>
       
            <div className="outer">
              <LoginLeft/>
              <SigninLeft/>
              
            </div>
        

    </>
  )
}

export default Signin