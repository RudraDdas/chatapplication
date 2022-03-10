import './App.css';
import { Switch,Route } from "react-router-dom"
import Homepage from './components/Homepage';
import Chatpage from './components/Chatpage';


function App() {
  return (
    <div className="App">
      <Switch>
         <Route path="/" component={Homepage} exact/>
         <Route path="/chat" component={Chatpage} exact/>
        
     </Switch>
    </div>
  );
}

export default App;
