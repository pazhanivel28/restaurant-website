import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginPage from './LoginContainer/Login';
import HomeScreenContainer from './HomeScreenContainer';

import './App.css';

function App() {

  return (
    <div className="App">
           <Router>
                    <Switch>
                        <Route exact path="/" ><LoginPage /></Route>
                        <Route path="/HomeScreenContainer" component={HomeScreenContainer} />
       </Switch>
</Router>
         
   
    </div>
  );
}

export default App;
