import React from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars

//import * as Pages from './pages';
import { Routes, Route} from 'react-router-dom';

// import  Navbar from './components/Navbar'
// import HomePage from './pages/HomePage';
// import Discover from './pages/Discover';
import  Navbar from './components'
import {HomePage, RegisterPage, Discover} from './pages';

const App = () => {
 return (
  <Routes>
      {/*public routes */}
      <Route path="/" element={<Navbar />}>
      <Route index element={<HomePage />}/>
      <Route path="/discover" element={<Discover/>}/>
        <Route path="/register" element={<RegisterPage />} />
        </Route>
</Routes>

  )
}

export default App
