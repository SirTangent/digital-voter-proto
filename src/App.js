import './App.css';

import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Load components
import SignIn from "./components/SignIn";
import VoterForm from "./components/VoterForm";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
            <Switch>
                <Route exact path="/" component={SignIn}></Route>
                <Route path="/vote/:electionid" component={VoterForm}></Route>
            </Switch>
          </div>
      </BrowserRouter>

  )
}

export default App;
