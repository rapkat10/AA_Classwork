import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './sessionform/login_form_container';
import SignupFormContainer from './sessionform/signup_form_container'
import { AuthRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
        </Switch>
    </div>
);

export default App;