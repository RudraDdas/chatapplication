import React, { useState } from 'react'


function Login() {
  const [ishidde, setIshide] = useState(false)

  const togglehideshow = (e) => {
    e.preventDefault()
   setIshide(!ishidde)
 }
  return (
    <>
      <form>
      <span><label  className="labels" >Email</label>
        <br/>
        <input className='inputfields' placeholder="abc@gmail.com" type="text" name="mail_id" />
      </span>
      <br />
      <span className='passowrd_container'>
        <label  className="labels" >Password</label>
        <br/>
        <input className='inputfields'  id="password_field" placeholder="abc@123" type= {ishidde ? "text" : "password"} name="mail_id" />
        <button className='hideShow_btn'  onClick={togglehideshow} > { ishidde ? "Hide" : "Show"} </button>
      </span>
      <button className='loginbtn' type='submit'>Login</button>
      <button className='guestuserbtn'>Get Guest user credential</button>
      </form>
    
    </>
  )
}

export default Login