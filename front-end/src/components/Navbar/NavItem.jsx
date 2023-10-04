import React, { useState} from 'react'
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
    const [open, setOpen] = useState(false);

  return (
    <li>
      <NavLink className='icon-button' onClick={() => setOpen(!open)}>{props.icon}</NavLink>
      { open && props.children}
    </li>
  )
}

export default NavItem
