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

import {firestore} from "./firebase/firebase";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: null
        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    {/*Separates each page component by URI.*/}
                    {/*Ex: https://votingportal.com/register -> RegisterForm component*/}
                    <Switch>
                        <Route exact path="/" component={SignIn}></Route>
                        <Route path="/vote/:electionid" component={VoterForm}></Route>
                        <Route path="/register" render={() => <RegisterForm district="Alabama"/> }></Route>
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }

}

export default App;
