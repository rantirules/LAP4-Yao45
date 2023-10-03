import React, {useState} from 'react'
import { act } from 'react-dom/test-utils';
import {CSSTransition} from 'react-transition-group';
import { FaCog, FaArrowLeft, FaArrowRight, FaUserCircle } from 'react-icons/fa';

const DropdownMenu = () => {

    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null)

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }



    function DropDownItem(props) {
        return (
            <a href='#' className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='icon-button-sec'>{props.leftIcon}</span>
                {props.children}
                <span className='icon-right'>{props.rightIcon}</span>

            </a>
        )
    }
  return (
    <div className='dropdown' style = {{ height: menuHeight}}>



        <CSSTransition in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500} 
        classNames="menu-primary" 
        onEnter={calcHeight}>
        <div className='menu'>
      
      <DropDownItem role="settings" leftIcon={<FaCog/>} rightIcon={<FaArrowRight/>} goToMenu="settings"> Settings</DropDownItem>
      </div>
      </CSSTransition>
      <CSSTransition in={activeMenu === 'settings'} 
      unmountOnExit 
      timeout={500} 
      classNames="menu-secondary">
            <div role="secondary-menu" className='menu'>
      <DropDownItem leftIcon={<FaArrowLeft/>} goToMenu="main"/>
      <DropDownItem> Settings </DropDownItem>
     
      </div>
      </CSSTransition>
    </div>
  )
}

export default DropdownMenu
