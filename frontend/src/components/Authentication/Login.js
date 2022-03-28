import axios from 'axios'
import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import Spinner from '../mini_components/Spinner'



function Login({isloggedin}) {
  const [ishidde, setIshide] = useState(false)
  const [LoginData, setLoginData] = useState({
    Email: "",
    password:""
  })

  const [isErremail, setiSEmail] = useState("")
  const [isErrpassword, setIspassword] = useState("")
  const [toggleSpinner, settoggleSpinner] = useState(false)
  

  const togglehideshow = (e) => {
    e.preventDefault()
   setIshide(!ishidde)
  }
  const handleChange = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value })
    // setiSEmail("")
    // setIspassword("")
  }
  const Loginhandlesubmit = async (e) => {
    e.preventDefault()
    try {
       if (LoginData.Email === "") {
    // e.preventDefault()
    setiSEmail("*required")
    } else {
      setiSEmail("")
    }
    if (LoginData.password === "") {
    // e.preventDefault()
      setIspassword("*required")
    } else {
      setIspassword("")
      }
      if (LoginData.Email && LoginData.password) {
        settoggleSpinner(true)
        
        const {data} = await axios.post("/api/user/login", {
          email: LoginData.Email,
          password:LoginData.password
        },
          {
            headers: {
               "Content-Type":"application/json"
             }
          }
        )

        if (data) {
          
          isloggedin(true)
          settoggleSpinner(false)
        } else {
          isloggedin(false)
        }
      }
      
    } catch (error) {
      console.log(error.message)
    }
   

    
  }
  return (
    <>
      <form>
        <span className='passowrd_container' ><label className="labels" >Email</label><span className="unsubmitmsg">{isErremail}</span>
        <br/>
        <input value={LoginData.Email} className='inputfields' placeholder="abc@gmail.com" type="text" name="Email" onChange={handleChange}/>
      </span>
      <br />
      <span className='passowrd_container'>
        <label  className="labels" >Password</label><span className="unsubmitmsg">{isErrpassword}</span>
        <br/>
        <input value={LoginData.password} className='inputfields' onChange={handleChange} id="password_field" placeholder="abc@123" type= {ishidde ? "text" : "password"} name="password" />
        <button className='hideShow_btn'  onClick={togglehideshow} > { ishidde ? "Hide" : "Show"} </button>
      </span>
        <button className='loginbtn' type='submit' onClick={Loginhandlesubmit}>{ toggleSpinner ? <Spinner/> : "Login"}</button>
      <button className='guestuserbtn'>Get Guest user credential</button>
      </form>
    </>
  )
}

export default Login