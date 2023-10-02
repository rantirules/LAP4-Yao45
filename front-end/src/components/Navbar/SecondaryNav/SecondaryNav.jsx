import React, { useState, createContext, useContext } from 'react'
import NavItem from '../NavItem'
import { FaGlobeAfrica, FaUserCircle, FaFacebookMessenger, FaMapMarkedAlt, FaMapMarkerAlt, FaArrowAltCircleUp, FaArrowCircleDown } from 'react-icons/fa'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import DropdownMenu from '../DropdownMenu'
DropdownMenu


import { useNavbar } from '../NavbarContext';



const SecondaryNav = () => {
  // const [navbarPosition, setNavbarPosition] = useState('open');

  const {navbarPosition, updateNavbarPosition } = useNavbar()
  const [displayArrow, setDisplayArrow] = useState("show");
  const [displayArrowDown, setDisplayArrowDown] = useState("hide");


  const closeNavbar = () => {
    updateNavbarPosition('closed');
    setDisplayArrow("hide");
    setDisplayArrowDown("show");
  };

  const openNavbar = () => {
    updateNavbarPosition('open');
    setDisplayArrow("show");
    setDisplayArrowDown("hide")
  }

  const handleNavItemClick = () => {
    console.log("Called")
    console.log(displayArrow)

    if (navbarPosition === 'open') {
      closeNavbar();
      console.log("Closing")
      console.log("after close is executed: ",displayArrow)

    } else {
      openNavbar();
      // If the navbar is already closed, you can choose to open it again or do nothing
    }
  };


  console.log('navbar position line 49 secondary nav', navbarPosition)

  return (
    <section className={`secondary-nav ${navbarPosition}`}>
        <div className='icon-wrapper'>
          <NavItem className="icons" icon={<FaFacebookMessenger />} />
          <NavItem className="icons" icon={<FaMapMarkerAlt />} />
          <NavItem className="icons" icon={<FaUserCircle />}> </NavItem>
        </div>
        <div className={`arrow-wrap ${displayArrow}`} onClick={handleNavItemClick}>
          <NavItem className="arrow-up" icon={<KeyboardDoubleArrowUpIcon/>} />

  </div>
  <div onClick={handleNavItemClick} className={`${displayArrowDown}`}>
  <NavItem className='arrow-down' icon={<KeyboardArrowDownIcon/>}/> 
  </div>
    </section>
  )
}

export default SecondaryNav

