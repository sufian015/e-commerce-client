import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/useAuth'

const Menu = () => {

   const [auth,setAuth]=useAuth();
   const navigate = useNavigate();

   const logout=()=>{

     setAuth({...auth,user:null,token:""});
     localStorage.removeItem("auth");
     navigate("/login")

   }



  return (
    <>
      <ul className="nav d-flex justify-content-evenly shadow-sm mb-2">
          <li className="nav-item">
               <NavLink className="nav-link" aria-current="page" to='/'>HOME</NavLink>
          </li>

          {!auth?.user ? (<>

                <li className="nav-item">
                    <NavLink className="nav-link" to='/login'>LOGIN</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to='/register'>REGISTER</NavLink>
                </li>

          </>): (
                  <li className="nav-item pointer">
                  <NavLink className="nav-link" onClick={logout}>LOGOUT</NavLink>
            </li>
          )}
            
         
      </ul>
      
    </>
  )
}

export default Menu
