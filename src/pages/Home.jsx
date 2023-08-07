import React from 'react'
import Jumbotron from '../components/cards/Jumbotron'
import { useAuth } from '../context/useAuth'

const Home = () => {
  const [auth,setAuth]=useAuth();
  return (
    <div>
        <Jumbotron title='homepage' subTitle='Welcome to homepage'/>
        <pre>{JSON.stringify(auth, null, 4)}</pre>
    </div>
  )
}

export default Home
