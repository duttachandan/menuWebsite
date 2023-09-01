import React from 'react'
import { NavLink } from 'react-router-dom';
const MainNav = () => {
  return (
    <div className='main_nav'>
        <NavLink className="main" to="/">Menu</NavLink>
        <NavLink className="sign_in" to="/sign">Sign In</NavLink>
    </div>
  )
}

export default MainNav
