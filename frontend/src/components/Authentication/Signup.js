import axios from 'axios'
import React, { useState } from 'react'
import Spinner from '../mini_components/Spinner'

function Signup({isSignup}) {
  const [pswd_visibility, setpswd_visibility] = useState(false)
  const [cPswd_visibility, setcpswd_visibility] = useState(false)
  const [signupData, setSignupData] = useState({
    Name: "",
    Email: "",
    Password: "",
    Cpassword: "",
    Image:""
  })

  const [NameErr, setNameErr] = useState("")
  const [EmailErr, setEmailErr] = useState("")
  const [PswdErr, setPswdErr] = useState("")
  const [CpswdErr, setCpswdErr] = useState("")

  const [toggleSpinner, settoggleSpinner] = useState(false) // spinner icon toggeler




   const togglehideshow_1 = (e) => {
     e.preventDefault()
     setpswd_visibility(!pswd_visibility)
   
  }
   const togglehideshow_2 = (e) => {
     e.preventDefault()
     setcpswd_visibility(!cPswd_visibility)
   
  }
  const HandleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
      setNameErr("")
      setCpswdErr("")
    setEmailErr("")
      setPswdErr("")
    



  }
  // form is submiting function
  const HandleSignupData = (e) => {
    e.preventDefault()
    const {Name , Email , Password, Cpassword} = signupData
    
    if (signupData.Name === "") {
      setNameErr("*required")
    } else {
      setNameErr("")
    }
    if (signupData.Email === "") {
      setEmailErr("*required")
    } else {
      setEmailErr("")
    }
    if (signupData.Password === "") {
      setPswdErr("*required")
    } else {
      setPswdErr("")
    }
    if (signupData.Cpassword === "") {
      setCpswdErr("*required")
    } else {
      setCpswdErr("")
    }

    if (signupData.Cpassword !== signupData.Password) {
      setCpswdErr("not matching")
      setPswdErr("not matching")
    } else if( Name & Password & Cpassword & Email) {
      settoggleSpinner(true) //activate the toggle spinner
      
      axios.post("/api/user/signup", {
        name:signupData.Name,
        email: signupData.Email,
        password: signupData.Password,
        // pic:signupData.image
        
      }, {
        headers: {
          "Content-Type":"application/json"
        }
      })
        .then((response) => {
          console.log(response.data)
          isSignup(true)
          settoggleSpinner(false)

        })
        .catch((e)=>console.log(e))


    }
  }
  return (
    <form>
      <span className='passowrd_container'> <label className="labels" >Name</label><span className="unsubmitmsg">{ NameErr}</span>
        <br/>
        <input onChange={HandleChange} value={signupData.Name} className={NameErr?"inputfield_ERr":'inputfields'} placeholder="abac das" type="text" name="Name" />
      </span>
      <br />
      <span className='passowrd_container'><label className="labels" >Email</label><span className="unsubmitmsg">{ EmailErr}</span>
        <br/>
        <input onChange={HandleChange} value={signupData.Email }className={EmailErr? "inputfield_ERr":'inputfields'} placeholder="abc@gmail.com" type="Email" name="Email" />
      </span>
      <br />
      <span className='passowrd_container'>
        <label className="labels" >Password</label><span className="unsubmitmsg">{ PswdErr}</span>
        <br/>
        <input onChange={HandleChange} className={PswdErr? "inputfield_ERr":'inputfields'} type={ pswd_visibility ? "text":"password"} id="passsword_field" placeholder="abc@123" name="Password" />
        <button className='hideShow_btn'  onClick={togglehideshow_1} > { pswd_visibility ? "Hide" : "Show"} </button>

      </span>
      <br />
      <span className='passowrd_container'>
        <label className="labels" >Conform Password</label><span className="unsubmitmsg">{CpswdErr}</span>
        <br/>
        <input onChange={HandleChange} className={CpswdErr? "inputfield_ERr":'inputfields'} type={ cPswd_visibility ? "text":"password"} id="cpassword_field2" placeholder="abc@123" name="Cpassword" />
        <button className='hideShow_btn'  onClick={togglehideshow_2} > { cPswd_visibility ? "Hide" : "Show"} </button>
        
      </span>
      <br/>
      <span className='passowrd_container'>
        <label className="labels" >Display picture</label>
        <br />
        <input onChange={HandleChange}  type="file" className='inputfields'  id="image_field" name="Image" />
      </span>
      <button className='loginbtn' id="signupbtn" onClick={HandleSignupData}>{toggleSpinner ?<Spinner/> :"Signup"}</button>
      </form>
  )
}

export default Signup