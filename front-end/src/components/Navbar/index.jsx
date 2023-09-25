/* eslint-disable no-unused-vars */
import React from 'react'
import './nav.css'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  const styles = ({ isActive }) => ({ color: 'black', textDecoration: isActive ? 'underline' : 'none', fontWeight: isActive? 'bold' : 'normal' });

  return (
    <>
      <header className="navbar">
        <NavLink to="/" className="links" styles = {styles} role="link">
          Home
        </NavLink>
        <NavLink to="/discover"className="links" styles = {styles} role="link">
          Discover
        </NavLink>
      </header>
      <Outlet />
    </> )
}

export default Navbar
