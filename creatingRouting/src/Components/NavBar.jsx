import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <div className="nav">
        <ul>
            <NavLink to='/' ><li>Home</li></NavLink>  
            <NavLink to='/about'><li>About</li></NavLink>
            <NavLink to='/contact'><li>Contact Us</li></NavLink>
        </ul>    

    </div>   

    </>
  )
}

export default NavBar