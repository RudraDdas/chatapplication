import React, { useState } from 'react'


function Login() {
  const [ishidde, setIshide] = useState(false)
  const [LoginData, setLoginData] = useState({
    Email: "",
    password:""
  })

  const [isErremail, setiSEmail] = useState("")
  const [isErrpassword, setIspassword] = useState("")
  

  const togglehideshow = (e) => {
    e.preventDefault()
   setIshide(!ishidde)
  }
  const handleChange = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value })
    // setiSEmail("")
    // setIspassword("")
  }
  const Loginhandlesubmit = (e) => {
    if (LoginData.Email==="") {
    setiSEmail("*required")
    }
    if (LoginData.password === "") {
      setIspassword("*required")
    } else {
      setiSEmail("")
      setIspassword("")
    }
    e.preventDefault()
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
      <button className='loginbtn' type='submit' onClick={Loginhandlesubmit}>Login</button>
      <button className='guestuserbtn'>Get Guest user credential</button>
      </form>
    
    </>
  )
}

export default Login