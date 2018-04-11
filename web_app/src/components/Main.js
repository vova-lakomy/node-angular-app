import React, { Component } from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "../views/home";
import Login from "./Login";
import SignUpForm from "./forms/sign-up-form/SignUp";
import ClientRegistrationForm from "./forms/client-registration-form/ClientRegistrationForm";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={ClientRegistrationForm}/>
            <Route path='/home' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route component={NoMatch}/>
        </Switch>
    </main>
);

export default Main

const NoMatch = (props) => (
    <h1>404 Not Found</h1>
);