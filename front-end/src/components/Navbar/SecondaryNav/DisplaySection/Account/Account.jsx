import React, {useState} from 'react'
import { FaUserCircle,FaArrowRight } from 'react-icons/fa';


const Account = () => {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null)

          
    
  return (
   
    <ul>
      <li className="drop-item">
        <a href="">Profile</a>
      </li>
      <li className="drop-item">
        <a href="">Settings</a>
      </li>
      <li className="drop-item">
        <a href="http://localhost:5173/saved">Saved Recipes</a>
      </li>
      <li className="drop-item">
        <a href="">Privacy Notice</a>
      </li>
    </ul>
   

  )
}


export default Account
