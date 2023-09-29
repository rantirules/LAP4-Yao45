import React,{ useState, createContext } from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
//import * as Pages from './pages';
import { Routes, Route} from 'react-router-dom';
import {FaBell, FaUser, FaEnvelope, FaCog} from 'react-icons/fa';

import Navbar from './components/Navbar/index'
import NavItem from './components/Navbar/NavItem';
import DropdownMenu from './components/Navbar/DropdownMenu';
import {HomePage, RegisterPage, Discover, RecipePage, NewRecipePage} from './pages';
import SearchPage from './pages/SearchPage/SearchPage';

export const UserContext = createContext()
const user = 'charlie1'


function App() {
 return (
  <UserContext.Provider value={user}>
  <Routes>
    <Route path="/" element={
      <Navbar>
      <NavItem icon={<FaEnvelope/>}/>
      <NavItem icon={<FaBell/>}/>
      <NavItem icon={<FaUser/>}>
        {/*dropdown menu*/}
        <DropdownMenu />
        
      </NavItem>
      </Navbar> 
    }>
      <Route index element={<HomePage />}/>
      <Route path="/discover" element={<Discover/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/new-recipe" element={<NewRecipePage />} />
    </Route>
</Routes>
</UserContext.Provider>

  )
}

export default App
