import './App.css';
import { Switch,Route } from "react-router-dom"
import Homepage from './components/Homepage';
import Chatpage from './components/Chatpage';
import Popup from './components/Popup';
import {useState} from "react"


function App() {
  const [isloggedinsuccess, setisloggedinsuccess] = useState(false)
  
  const isloggedin = (val) => {
  setisloggedinsuccess(val)
}

  return (
    <div className="App">
      <Switch>
         <Route path="/"  exact><Homepage isloggedin={isloggedin}/></Route>
         <Route path="/chat" exact><Chatpage/></Route>
        
      </Switch>
      {isloggedinsuccess ?<Popup/> :null}
       
    </div>
  );
}

export default App;
