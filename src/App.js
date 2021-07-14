import './App.css';

import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'

// Load from src/components folder
import Welcome from "./components/Welcome";
import SignIn from "./components/SignIn";
import VoterForm from "./components/VoterForm";
import RegisterForm from "./components/RegisterForm";
import Ballot from "./components/Ballot";
import VoterIdDocuments from "./components/VoterIdDocuments";
import Authentication from "./components/Authentication";

function App() {

    // This is essentially the main() of the app.
    // Everything below is rendered by the web browser.
  return (
      <BrowserRouter>
          <div className="App">
              {/*Separates each page component by URI.*/}
              {/*Ex: https://votingportal.com/register -> RegisterForm component*/}
            <Switch>
                <Route exact path="/" component={Welcome}></Route>
                <Route path="/signIn"component={SignIn}></Route>
                <Route path="/vote/:electionid" component={VoterForm}></Route>
                <Route path="/registration" component={RegisterForm}></Route>
                <Route path="/voter-documents" component={VoterIdDocuments}></Route>
                <Route path="/authentication" component={Authentication}></Route>
                <Route path="/ballot" component={Ballot}></Route>
            </Switch>
          </div>
      </BrowserRouter>

  )
}

export default App;
