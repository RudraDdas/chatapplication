import React, { useState } from 'react'

function Signup() {
  const [pswd_visibility, setpswd_visibility] = useState(false)
  const [cPswd_visibility, setcpswd_visibility] = useState(false)


   const togglehideshow_1 = (e) => {
     e.preventDefault()
     setpswd_visibility(!pswd_visibility)
   
  }
   const togglehideshow_2 = (e) => {
     e.preventDefault()
     setcpswd_visibility(!cPswd_visibility)
   
 }
  return (
    <form>
      <span className='passowrd_container'> <label  className="labels" >Name</label><span className="unsubmitmsg">*required</span>
        <br/>
        <input className='inputfields' placeholder="abac das" type="text" name="Name" />
      </span>
      <br />
      <span className='passowrd_container'><label  className="labels" >Email</label><span className="unsubmitmsg">*required</span>
        <br/>
        <input className='inputfields' placeholder="abc@gmail.com" type="text" name="mail_id" />
      </span>
      <br />
      <span className='passowrd_container'>
        <label  className="labels" >Password</label><span className="unsubmitmsg">*required</span>
        <br/>
        <input className='inputfields' type={ pswd_visibility ? "text":"password"} id="password_field" placeholder="abc@123" name="password" />
        <button className='hideShow_btn'  onClick={togglehideshow_1} > { pswd_visibility ? "Hide" : "Show"} </button>

      </span>
      <br />
      <span className='passowrd_container'>
        <label  className="labels" >Conform Password</label><span className="unsubmitmsg">*required</span>
        <br/>
        <input className='inputfields' type={ cPswd_visibility ? "text":"password"} id="password_field2" placeholder="abc@123" name="cpassword" />
        <button className='hideShow_btn'  onClick={togglehideshow_2} > { cPswd_visibility ? "Hide" : "Show"} </button>
        
      </span>
      <br/>
      <span className='passowrd_container'>
        <label className="labels" >Display picture</label><span className="unsubmitmsg">*required</span>
        <br />
        <input  type="file" className='inputfields'  id="password_field" placeholder="abc@123" name="cpassword" />
      </span>
      <button className='loginbtn' id="signupbtn">Signup</button>
      </form>
  )
}

export default Signup