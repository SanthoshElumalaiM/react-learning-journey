import React from 'react'
import { NavLink } from 'react-router-dom'
import Signin from './Signin'
import LoginLeft from './LoginLeft'
import LoginRight from './LoginRight'

const Login = () => {
  return (
    <>
        <div className="outer">
            <LoginLeft/>
            <LoginRight/>
            
        </div>
    
    </>
  )
}

export default Login