import React, { useState, createContext, useContext } from 'react'
import NavItem from '../NavItem'
import { FaGlobeAfrica, FaUserCircle, FaFacebookMessenger, FaMapMarkedAlt, FaMapMarkerAlt, FaArrowAltCircleUp, FaArrowCircleDown } from 'react-icons/fa'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import DropdownMenu from '../DropdownMenu'
import Account from './DisplaySection/Account/Account';
import DisplaySection from './DisplaySection/DisplaySection';
import { useNavigate } from 'react-router-dom';



import { useNavbar } from '../NavbarContext';



const SecondaryNav = ({ userName }) => {
  // const [navbarPosition, setNavbarPosition] = useState('open');

  const {navbarPosition, updateNavbarPosition } = useNavbar()
  const [displayArrow, setDisplayArrow] = useState("show");
  const [displayArrowDown, setDisplayArrowDown] = useState("hide");
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const navigate = useNavigate();

  const takeToMsgs = () => {
    navigate('/messages');
  }

  const takeToMaps = () => {
    navigate('/map');
  }

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
    console.log("clicked!")
  };


  const toggleAccountSection = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
    console.log("click me bro")
    if (navbarPosition === 'closed') {
      openNavbar();
    }
  };

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
          <div onClick={takeToMsgs}>
          <NavItem className="icons" icon={<FaFacebookMessenger />} /></div>
          
          <div onClick={takeToMaps}><NavItem className="icons" icon={<FaMapMarkerAlt />} /> </div>
          <div onClick={toggleAccountSection}>
          <NavItem className="icons" icon={<FaUserCircle />} /> </div>
        </div>
        <div className={`display ${displayArrow}`}>
        {isAccountMenuOpen ? <Account /> :
        <DisplaySection navbarPosition={navbarPosition} closeNavbar={closeNavbar}userName={userName}/>}
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

