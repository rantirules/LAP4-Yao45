import React, { useState, createContext, useContext } from 'react'
import NavItem from '../NavItem'
import { FaGlobeAfrica, FaUserCircle, FaFacebookMessenger, FaMapMarkedAlt, FaMapMarkerAlt, FaArrowAltCircleUp, FaArrowCircleDown } from 'react-icons/fa'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import InsertCommentOutlinedIcon from '@mui/icons-material/InsertCommentOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import Account from './DisplaySection/Account/Account';
import DisplaySection from './DisplaySection/DisplaySection';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../Auth/AuthContext';


import { useNavbar } from '../NavbarContext';



const SecondaryNav = ({ userName }) => {
  const location = useLocation();
  // const [navbarPosition, setNavbarPosition] = useState('open');

  const {navbarPosition, updateNavbarPosition } = useNavbar()
  const { logout} = useAuth();
  const [displayArrow, setDisplayArrow] = useState("show");
  const [displayArrowDown, setDisplayArrowDown] = useState("hide");
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogoutClick = () => {
    console.log("Click me sis")
    logout();
    navigate('/logout')
    closeNavbar();
  }
  
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
          <NavItem className="icons" icon={<InsertCommentOutlinedIcon />} /></div>
          
          <div onClick={takeToMaps}><NavItem className="icons" icon={<LocationOnOutlinedIcon />} /> </div>
          <div onClick={toggleAccountSection}>
          <NavItem className="icons" icon={<AccountCircleOutlinedIcon />} /> </div>
          {localStorage.getItem('token') ? ( <div className="logout-icon" onClick={handleLogoutClick} >
            <NavItem className="icons" icon={<LogoutOutlinedIcon/>}/>
            {/* <Button
              color="primary"
              style={logoutButtonStyles}
              onClick={handleLogoutClick}
            > */}
              
            {/* </Button> */}
          </div>) : (<></>)}
        </div>
        
        <div className={`display ${displayArrow}`}>
       
       {location.pathname === '/recipe/:id' ? <img className="sec-nav-img" src="src/assets/63796774-relief-map-of-italy-and-the-nearby-countries-italy-is-highlighted-in-red.jpeg" alt="Recipe"/>
: (isAccountMenuOpen ? <Account /> :
        <DisplaySection navbarPosition={navbarPosition} closeNavbar={closeNavbar}userName={userName}/>)}
        </div>
        
        <div className={`arrow-wrap ${displayArrow}`} data-testid="arrow-div" onClick={handleNavItemClick}>
          <NavItem className="arrow-up" data-testid="arrow-up" icon={<KeyboardDoubleArrowUpIcon/>} />

  </div>
  <div onClick={handleNavItemClick} className={` arrow-down-wrap ${displayArrowDown}`}>
  <NavItem className='arrow-down' icon={<KeyboardArrowDownIcon/>}/> 
  </div>
    </section>
  )
}

export default SecondaryNav

