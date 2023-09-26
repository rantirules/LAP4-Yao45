import './App.css'
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
//import * as Pages from './pages';
import { Routes, Route} from 'react-router-dom';
import  Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
import Discover from './pages/Discover';
import NavItem from './components/Navbar/NavItem';
import DropdownMenu from './components/Navbar/DropdownMenu';

function App() {
 return (
  <Navbar>
    <NavItem icon="🌎"/>
  <NavItem icon="💬"/>
  <NavItem icon="🔔"/>
  <NavItem icon="👤">
    {/*dropdown menu*/}
    <DropdownMenu />

    </NavItem>
    </Navbar> 
//   <Routes>
//       {/*public routes */}
//       <Route path="/" element={<Navbar> <li>X</li> </Navbar>}>
//       <Route index element={<HomePage />}/>
//       <Route path="/discover" element={<Discover/>}/>
//         </Route>
// </Routes>
  )
}

export default App
