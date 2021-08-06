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
import RegistrationConfirmation from "./components/RegistrationConfirmation";
import PreBallot from "./components/PreBallot";
import DialogConfirmVote from "./components/DialogConfirmVote";

import {firestore} from "./firebase/firebase";

import schema from "./firebase/handlers/demo";
import {sex, isBoundedNumber, isNumber} from "./firebase/type-validators";
import Header from "./components/layout/Header";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            test: null
        };
    }

    componentDidMount() {

        console.log(isBoundedNumber(18,100, true)("3e"));

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
                    <Header msg="Alabama Voting Portal" show={true}></Header>
                    <div className={"app-page"}>
                        <Switch>
                            <Route exact path="/" component={Welcome}></Route>
                            <Route path="/signIn" component={SignIn}></Route>
                            <Route path="/vote/:electionid" component={VoterForm}></Route>
                            <Route path="/register" component={RegisterForm}></Route>
                            <Route path="/voter-documents" component={VoterIdDocuments}></Route>
                            <Route path="/registration-confirmation" component={RegistrationConfirmation}></Route>
                            <Route path="/authentication" component={Authentication}></Route>
                            <Route path="/ballot" component={Ballot}></Route>
                            <Route path="/pre-ballot" component={PreBallot}></Route>
                            <Route path="confirm-vote" component={DialogConfirmVote}></Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>

        )
    }

}

export default App;
