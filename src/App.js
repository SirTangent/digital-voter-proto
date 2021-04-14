import './App.css';

import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Load components
import SignIn from "./components/SignIn";

function App() {

  return (
      <BrowserRouter>
          <div className="App">
            <Switch>
                <Route exact path="/" component={SignIn}></Route>
            </Switch>
          </div>
      </BrowserRouter>

  )
}

export default App;
