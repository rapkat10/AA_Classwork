import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import { Route } from 'react-router-dom';
import LoginFormContainer from './sessionform/login_form_container';
import SignupFormContainer from './sessionform/signup_form_container'

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
            <Route path="/" />
            <Link to="/">Home</Link>
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;