<<<<<<< HEAD
import React from 'react'
import { Link, Outlet} from 'react-router-dom';
=======
/* eslint-disable no-unused-vars */

import React, {useState} from 'react'
import './nav.css'
import { NavLink, Link,  Outlet } from 'react-router-dom'

// import React from 'react'
// import { Link, Outlet } from 'react-router-dom'


>>>>>>> 35ccfe33a96ac1dbc5016de0ed627868c72e8d07



const Navbar = (props) => {
  
  return (

    <>
    <nav className='navbar'>
      <ul className='navbar-links'>
       <li>
        <Link to="/">HOME</Link></li>
       <li>
        <Link to="/discover">DISCOVER</Link></li>
     
<<<<<<< HEAD
      </ul> 
     
      <ul className='navbar-nav'>{props.children}
      </ul>
     
    </nav>
    
     <Outlet/>
     </>
  )
=======
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
 // )

>>>>>>> 35ccfe33a96ac1dbc5016de0ed627868c72e8d07
}

export default Navbar
