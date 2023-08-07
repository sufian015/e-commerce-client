import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Loading = () => {

     const [count,setCount]=useState(3);

     const navigate=useNavigate();

     useEffect(()=>{

          const interval=setInterval(()=>{

               setCount((currentCount)=> --currentCount);

               count === 0 && navigate('/login');
               return ()=> clearInterval(interval);

          },1000)

     },[count])



  return (
    
     <div className="d-flex justify-content-center align-items-center vh-100">
      Redirecting you in {count} seconds
    </div>
     
    
  )
}

export default Loading
