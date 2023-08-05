import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import Menu from './components/nav/Menu'

function App() {
  

  return (
    <>
      <Menu />
      <Toaster />
      
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
       </Routes>
      
       
      
     
      
    </>
  )
}

export default App
