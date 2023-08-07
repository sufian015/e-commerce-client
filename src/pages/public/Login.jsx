import React, { useState } from 'react'
import Jumbotron from '../../components/cards/Jumbotron'
import axios from 'axios';
import { useAuth } from '../../context/useAuth';
import toast from "react-hot-toast";

const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  // context

  const [auth,setAuth]=useAuth();


  const handleSubmit=async (e)=>{

    e.preventDefault();

    try {

      const {data}=await axios.post(`${import.meta.env.VITE_API_URL}/login`,

      {
        email,
        password
        
      }
     )
     console.log(data);

     if(data?.error){
      return toast.error(data.error)

     }
     else{
      localStorage.setItem("auth",JSON.stringify(data));
      setAuth({...auth,user:data.user,token:data.token});
      toast.success("login successful");

     }

      
    } catch (err) {

      console.log(err)
      toast.error("Login failed. Try again.");

    }

  }


  return (
    <div>
       <Jumbotron title='LoginPage' subTitle='welcome to loginpage'/>

       <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">

            <form onSubmit={handleSubmit}>

            <input type="email" className="form-control mb-4 p-2" name='email' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)} />

            <input type="password" className='form-control mb-4 p-2' name='password' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button type='submit' className='btn btn-primary'>Submit</button>



            </form>


          </div>
        </div>
       </div>
    </div>
  )
}

export default Login
