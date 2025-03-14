import React from 'react'
import { NavLink } from 'react-router-dom'
import Signin from './Signin'

const LoginRight = () => {
  return (
    <>
        <div className="right">
                <div className="container1">
                    <form action="">
                        <input type="text" placeholder='Email address or Phone Number' />
                        <input type="text" placeholder='Password' />
                        <button id="btn">Login</button>
                        <h6><NavLink to='/signin'>Don't have an account</NavLink></h6>
                        <div className="container2">
                            <button id='btn2'><NavLink to='/signin' >Create a New Account</NavLink></button>
                        </div>
                    </form>
                </div>
                
                
                <p><span>create Page</span> for a celebrity ,brand or buisness</p>
            </div>
    </>
  )
}

export default LoginRight