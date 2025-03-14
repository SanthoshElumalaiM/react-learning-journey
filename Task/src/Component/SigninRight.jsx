import React from 'react'
import { NavLink } from 'react-router-dom'
import Signin from './Signin'
import Login from './Login'

const SigninLeft = () => {
  return (
    <>
        <div className="right">
                <div className="container1">
                    <form action="">
                        <input type="text" placeholder='Name  ' />
                        <input type="text" placeholder='Email address or Phone Number' />
                        <input type="text" placeholder='Password' />
                        <input type="text" placeholder='Phone No' />
                        <button id='btn'>Signin</button>
                        <div className="container2">
                                <h6><NavLink to='/' >You have an account</NavLink></h6>
                        </div>
                        
                    </form>
                </div>
              
            </div>
    
    </>
  )
}

export default SigninLeft