import React,{ useState, createContext } from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars
//import * as Pages from './pages';
import { Routes, Route} from 'react-router-dom';
import {FaBell, FaUser, FaEnvelope, FaCog} from 'react-icons/fa';

import Navbar from './components/Navbar/index'
import NavItem from './components/Navbar/NavItem';

import Post from './components/Post/index';

import {HomePage, RegisterPage, LoginPage, Discover, RecipePage, MapPage, NewRecipePage, SavedRecipesPage, MessagePage, LogoutPage} from './pages';

import SearchPage from './pages/SearchPage/SearchPage';
import SecondaryNav from './components/Navbar/SecondaryNav/SecondaryNav';
import { AuthProvider } from './components/Auth/AuthContext';
export const UserContext = createContext()

import { NavbarProvider } from './components/Navbar/NavbarContext'; 
import { Chat, UserPost } from './components';
import MapHighlighter from './components/Navbar/SecondaryNav/DisplaySection/Maps/Maps';

import { Marker } from '@googlemaps/react-wrapper'
import { divIcon } from 'leaflet';

function MyMarker() {
  return <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
}


function App() {
 return (
  <AuthProvider>
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
        <Route path="/post" element ={<Post/>}/>
        {/* <Route path="/mapSub" element={<MapHighlighter apiKey="AIzaSyALeh2Hsx18D8MKadj-ZQEOlxmtvWpzNro"
          defaultZoom={8}
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
          // eslint-disable-next-line no-undef
          defaultOptions={{ disableDefaultUI: true }}
          > <MyMarker /></MapHighlighter>} /> */}
        <Route path="/saved" element={<SavedRecipesPage />} />
        <Route path='/messages' element={<MessagePage />} />
        <Route path="/logout" element={<LogoutPage />} />
    </Route>
</Routes>
</NavbarProvider>
</AuthProvider>
  )
}

export default App