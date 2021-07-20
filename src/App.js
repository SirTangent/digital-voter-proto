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

import ValidateUserDemo from "./firebase/schemas/UserDemo";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: null
        };
    }

    componentDidMount() {

        const test = {
            name: "Omar",
            age: -2
        }

        console.log("debug: ",ValidateUserDemo(test), ValidateUserDemo.errors)

        // Testing listener
        firestore.collection("test_collection").onSnapshot((snapshot) => {
          snapshot.forEach((doc) => {
              console.log(doc.data())
          })
        })
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
                        <Route path="/registration" component={RegisterForm}></Route>
                    </Switch>
                </div>
            </BrowserRouter>

        )
    }

}

export default App;
