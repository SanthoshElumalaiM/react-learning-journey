import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
        <nav>
       <NavLink to='/Props'> <li>Props</li></NavLink>
        <NavLink to='/Condition'><li>Condition</li></NavLink>
        <NavLink to='/List'><li>List</li></NavLink>
        <NavLink to='/Forms'><li>Forms</li></NavLink>
        <NavLink to='/UseState'><li>UseState</li></NavLink>
        <NavLink to='/UseEffect'> <li>UseEffect</li></NavLink>
        <NavLink to='/UseRef'><li>UseRef</li></NavLink>
        </nav>

    </>
  )
}

export default NavBar