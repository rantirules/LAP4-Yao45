import React, {useState} from 'react'
import NavItem from '../NavItem'
import {FaGlobeAfrica, FaUserCircle, FaFacebookMessenger,FaMapMarkedAlt, FaMapMarkerAlt, FaArrowAltCircleUp, FaArrowCircleDown } from 'react-icons/fa'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import DropdownMenu from '../DropdownMenu'
DropdownMenu
const SecondaryNav = () => {
  const [navbarPosition, setNavbarPosition] = useState('open'); 
  const [displayArrow, setDisplayArrow] = useState("show");
  const [displayArrowDown, setDisplayArrowDown] = useState("hide");


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
    <>
    
    <section className={`secondary-nav ${navbarPosition}`}>
        <div className='icon-wrapper'>
      <NavItem className="icons" icon={<FaFacebookMessenger/>}/>
  <NavItem className="icons"icon={<FaMapMarkerAlt/>}/>
  <NavItem className="icons"icon={<FaUserCircle/>}> </NavItem>
  </div>
  <div className={`arrow-wrap ${displayArrow}`} onClick={handleNavItemClick}>
  <NavItem className="arrow-up"  icon={<KeyboardDoubleArrowUpIcon selected />} /> 

  </div>
  <div className={`arrow-down-wrap ${displayArrowDown}`} onClick={handleNavItemClick}>
  <NavItem className="arrow-down"  icon={<KeyboardArrowDownIcon selected />} /> 
  </div>
    </section>
    </>
  )
}

export default SecondaryNav
