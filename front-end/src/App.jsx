import React,{ useState, createContext } from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
//import * as Pages from './pages';
import { Routes, Route} from 'react-router-dom';


import  {Navbar, Chat} from './components/Navbar'
import NavItem from './components/Navbar/NavItem';
import DropdownMenu from './components/Navbar/DropdownMenu';
import {HomePage, RegisterPage, Discover} from './pages';

export const UserContext = createContext()
const user = 'charlie1'


function App() {
 return (
  <UserContext.Provider value={user}>
  <Routes>
  <Route path="/" element={
  <Navbar>
    <NavItem icon="🌎"/>
  <NavItem icon="💬"/>
  <NavItem icon="🔔"/>
  <NavItem icon="👤">
    {/*dropdown menu*/}
    <DropdownMenu />
    
    </NavItem>
    </Navbar> 
              }>
    <Route index element={<HomePage />}/>
      <Route path="/discover" element={<Discover/>}/>
        <Route path="/register" element={<RegisterPage />} />
        </Route>
</Routes>
</UserContext.Provider>

  )
}

export default App
