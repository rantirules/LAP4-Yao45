import React from 'react'
import { Link, Outlet} from 'react-router-dom';



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
