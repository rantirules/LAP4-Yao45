
/* eslint-disable no-unused-vars */

import React, {useState} from 'react'
import './nav.css'
import { NavLink, Link,  Outlet } from 'react-router-dom'

// import React from 'react'
// import { Link, Outlet } om 'react-router-dom'





const Navbar = (props) => {
  
  return (
    <>
    <nav className='navbar'>
      <ul className='navbar-links'>
       <li>
        <Link to="/">HOME</Link></li>
       <li>
        <Link to="/discover">DISCOVER</Link></li>

      </ul> 

      <ul className='navbar-nav'>{props.children}
      </ul>
      

    </nav>

     <Outlet/>
     </>
  )



}

export default Navbar
