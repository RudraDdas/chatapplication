import React from 'react'


function Login() {
  return (
    <>
      <span><lable for="mai_id" className="labels" >Email</lable>
        <br/>
        <input className='inputfields' placeHolder="abc@gmail.com" type="text" name="mail_id" />
      </span>
      <br />
      <span>
        <lable for="mai_id" className="labels" >Password</lable>
        <br/>
      <input className='inputfields' placeHolder="abc@123" type="text" name="mail_id" />
      </span>
      <button className='loginbtn' onClick={()=> alert("nothying")}>Login</button>
      
    
    
    </>
  )
}

export default Login