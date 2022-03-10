import React from 'react'

function Signup() {
  return (
    <form>
      <span><label  className="labels" >Name</label>
        <br/>
        <input className='inputfields' placeholder="abac das" type="text" name="Name" />
      </span>
      <br />
      <span><label  className="labels" >Email</label>
        <br/>
        <input className='inputfields' placeholder="abc@gmail.com" type="text" name="mail_id" />
      </span>
      <br />
      <span className='passowrd_container'>
        <label  className="labels" >Password</label>
        <br/>
        <input className='inputfields'  id="password_field" placeholder="abc@123" name="password" />
      </span>
      <br />
      <span className='passowrd_container'>
        <label  className="labels" >Conform Password</label>
        <br/>
        <input className='inputfields'  id="password_field" placeholder="abc@123" name="cpassword" />
      </span>
      <br />

      <button className='loginbtn' id="signupbtn">Signup</button>
      {/* <button className='guestuserbtn'>Get Guest user credential</button> */}
      </form>
  )
}

export default Signup