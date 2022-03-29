import './App.css';
import { Switch,Route } from "react-router-dom"
import Homepage from './components/Homepage';
import Chatpage from './components/Chatpage';
import Popup from './components/Popup';
import { useState } from "react"
import Signuppopup from './components/mini_components/Signuppopup';


function App() {
  const [isloggedinsuccess, setisloggedinsuccess] = useState(false)
  const [isSignupsuccess, setisSignupsuccess] = useState(false)
  
  const isloggedin = (val) => {
  setisloggedinsuccess(val)
  }
  
  const isSignup = (val) => {
    setisSignupsuccess(val)
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact><Homepage isloggedin={isloggedin} isSignup={isSignup}/></Route>
         <Route path="/chat" exact><Chatpage/></Route>
        
      </Switch>
      {isloggedinsuccess ? <Popup /> : null}
  
      {isSignupsuccess ? <Signuppopup/> : null}
       
    </div>
  );
}

export default App;
