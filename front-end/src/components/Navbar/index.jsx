/* eslint-disable no-unused-vars */

import React, {useState} from 'react'
import './nav.css'
import { NavLink, Link,  Outlet } from 'react-router-dom'

// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'



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

//     <div>
//       <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           Your Logo
//         </Link>
//         <ul className="navbar-menu">
//           <li className="navbar-item">
//             <Link to="/home" className="navbar-link">
//               Home
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/about" className="navbar-link">
//               About
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/contact" className="navbar-link">
//               Contact
//             </Link>
//           </li>
//           <li className="navbar-item">
//             <Link to="/register" className="navbar-link">
//               Register
//             </Link>
//           </li>
//           {/* Add more menu items as needed */}
//         </ul>
//       </div>
//     </nav>
//     <Outlet/>
//     </div>
  )

}

export default Navbar
