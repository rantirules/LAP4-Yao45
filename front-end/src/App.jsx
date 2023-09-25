import './App.css'
// eslint-disable-next-line no-unused-vars
import React from 'react'
//import * as Pages from './pages';
import { Routes, Route} from 'react-router-dom';
import  Navbar from './components/Navbar'
import HomePage from './pages/HomePage';
function App() {
 return (
  <Routes>
      {/*public routes */}
      <Route path="/" element={<Navbar />}>
      <Route index element={<HomePage />}/>
        </Route>
</Routes>
  )
}

export default App