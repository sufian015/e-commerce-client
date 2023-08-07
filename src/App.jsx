import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


import { Toaster } from 'react-hot-toast'
import Menu from './components/nav/Menu'
import Login from './pages/public/Login'
import Register from './pages/public/Register'
import PrivateRoutes from './routes/PrivateRoutes'
import Dashboard from './pages/authUser/Dashboard'

function App() {
  

  return (
    <>
      <Menu />
      <Toaster />
      
       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
           
           {/* private Routes */}

           <Route path='/dashboard' element={<PrivateRoutes />}>
             <Route path='' element={<Dashboard />} />

           </Route>
       </Routes>
      
       
      
     
      
    </>
  )
}

export default App
