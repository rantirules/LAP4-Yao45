import React, { useState } from 'react'
import NavItem from '../NavItem'
import { FaGlobeAfrica, FaUserCircle, FaFacebookMessenger, FaMapMarkedAlt, FaMapMarkerAlt, FaArrowAltCircleUp, FaArrowCircleDown } from 'react-icons/fa'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import DropdownMenu from '../DropdownMenu'
import Account from './DisplaySection/Account/Account';
import DisplaySection from './DisplaySection/DisplaySection';


const SecondaryNav = () => {
  const [navbarPosition, setNavbarPosition] = useState('open');
  const [displayArrow, setDisplayArrow] = useState("show");
  const [displayArrowDown, setDisplayArrowDown] = useState("hide");
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);


  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
    console.log("clicked!")
  };


  const closeNavbar = () => {
    setNavbarPosition('closed');
    setDisplayArrow("hide");
    setDisplayArrowDown("show");
  };

  const openNavbar = () => {
    setNavbarPosition('open');
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

  return (
    
    
    <section className={`secondary-nav ${navbarPosition}`}>
        <div className='icon-wrapper'>
          <NavItem className="icons" icon={<FaFacebookMessenger />} />
          <NavItem className="icons" icon={<FaMapMarkerAlt />} />
          <NavItem className="icons" icon={<FaUserCircle />} onClick={toggleAccountMenu}/> 
        </div>
        <div className={`display ${displayArrow}`}>
        <DisplaySection navbarPosition={navbarPosition} closeNavbar={closeNavbar}/>
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
