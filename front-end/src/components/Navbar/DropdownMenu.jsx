import React, {useState} from 'react'
import { act } from 'react-dom/test-utils';
import {CSSTransition} from 'react-transition-group';
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
                <span className='icon-button'>{props.leftIcon}</span>
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
      <DropDownItem>My profile</DropDownItem>
      <DropDownItem leftIcon="😁" rightIcon="🖕" goToMenu="settings">Settings</DropDownItem>
      </div>
      </CSSTransition>
      <CSSTransition in={activeMenu === 'settings'} 
      unmountOnExit 
      timeout={500} 
      classNames="menu-secondary">
            <div className='menu'>
      <DropDownItem leftIcon="⬅️" goToMenu="main"/>
      <DropDownItem>Settings</DropDownItem>

      </div>
      </CSSTransition>
    </div>
  )
}

export default DropdownMenu
