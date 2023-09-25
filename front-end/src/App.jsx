import React from 'react'
import './App.css'
// eslint-disable-next-line no-unused-vars

//import * as Pages from './pages';
import { Routes, Route} from 'react-router-dom';
import  Navbar from './components'
import {HomePage, RegisterPage} from './pages';
// import HomePage from './pages/HomePage';
// import RegisterPage from './pages/RegisterPage';

const App = () => {
 return (
 
    <Routes>
        {/*public routes */}
        <Route path="/" element={<Navbar />}>
        <Route index element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />} />
          </Route>
  </Routes>
  )
}

export default App
