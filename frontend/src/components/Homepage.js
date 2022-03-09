import React, { useState } from 'react'
import Login from "./Authentication/Login"
import Signup from './Authentication/Signup'

const Homepage = () => {

  const [newUser, setNewuser] = useState(true)


  const toggelpage = () => {
    setNewuser(!newUser)
  }
    

  return (
    <div className='homepage_main'>
      <div className='app_name' onClick={toggelpage}>
          Lets Chat
      </div>

      <div className='authentication_subdiv'onClick={toggelpage} >
        <div className='login_div'>
          Login
        </div>
        <div className='signup_div'>
            Signup
        </div>
      </div>

      <div className='loginpage'> 
           { newUser ? <Login/>  : <Signup/> }
      </div>


    </div>
  )
}

export default Homepage