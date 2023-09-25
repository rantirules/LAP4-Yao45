/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './nav.css'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    console.log(isDropdownVisible)
  };
 const styles = ({ isActive }) => ({
  color: isActive ? 'black' : 'inherit', // Change the color for active elements
  fontWeight: isActive ? 'bold' : 'normal',
});

  return (
    <>
      <header className="navbar">
      <nav className='nav-links'>
        <NavLink to="/" className="logo">
          Culturify
        </NavLink>
      
        <NavLink to="/" className="link"style={styles} role="link">
          HOME
        </NavLink>
        <NavLink to="/discover"className="link" style={styles}role="link">
          DISCOVER
        </NavLink>
        <div className='user-icon' >
        <button className='account-btn' onClick={toggleDropdown} style={{ backgroundImage: 'url("/src/assets/account-icon.png")', backgroundSize: 'cover' }}>
  {/* Your content */}
</button>

     
        </div>
        {isDropdownVisible && (

                <ul className="user-dropdown">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Log Out</a></li>
                </ul>

        )}
      
        </nav>

      </header>
      <Outlet />
    </> )
}

export default Navbar
