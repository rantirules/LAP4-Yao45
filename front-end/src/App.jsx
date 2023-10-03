import React,{ useState, createContext } from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
//import * as Pages from './pages';
import { Routes, Route} from 'react-router-dom';
import {FaBell, FaUser, FaEnvelope, FaCog} from 'react-icons/fa';

import Navbar from './components/Navbar/index'
import NavItem from './components/Navbar/NavItem';
import DropdownMenu from './components/Navbar/DropdownMenu';

import {HomePage, RegisterPage, LoginPage, Discover, RecipePage, MapPage, NewRecipePage, SavedRecipesPage, LogoutPage} from './pages';
import SearchPage from './pages/SearchPage/SearchPage';
import SecondaryNav from './components/Navbar/SecondaryNav/SecondaryNav';
import { AuthProvider } from './components/Auth/AuthContext';
export const UserContext = createContext()
const user = 'charlie1'

import { NavbarProvider } from './components/Navbar/NavbarContext'; 
import { Chat } from './components';


function App() {
 return (
  <AuthProvider>
  <UserContext.Provider value={user}>
    <NavbarProvider>
  <Routes>

  <Route path="/" element={
  <Navbar>
    <SecondaryNav/>
  {/* <NavItem icon={<FaEnvelope/>}/>
  <NavItem icon={<FaBell/>}/>
  <NavItem icon={<FaUser/>}>
    <DropdownMenu />
    
    </NavItem> */}
    </Navbar> 
              }>
    <Route index element={<HomePage />}/>

      <Route path="/discover" element={<Discover/>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<SearchPage/>}/>
        <Route path="/recipe/:id" element={<RecipePage />} />
        <Route path="/new-recipe" element={<NewRecipePage />} />
        <Route path="/messages" element={<Chat/>}/>
        <Route path="/map" element={<MapPage />} />
        <Route path="/saved" element={<SavedRecipesPage />} />
        <Route path="/logout" element={<LogoutPage />} />
    </Route>
</Routes>
</NavbarProvider>
</UserContext.Provider>
</AuthProvider>
  )
}

export default App
