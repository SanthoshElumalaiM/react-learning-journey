import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <ul>
             {/?* Refreshing entire page using anchor tag .. */}
            {/* <a href="/"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="/contact"><li>ContactUs</li></a> */}
             {/?* Using NavLink loading only part of the page */}
           <NavLink to='/'><li>Home</li></NavLink> 
           <NavLink to='/about'><li>About</li></NavLink> 
           <NavLink to='/contact'><li>Contact Us</li></NavLink> 
        </ul>

    </>
  )
}

export default NavBar