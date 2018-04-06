import React, { Component } from "react";
import {Switch, Route, Redirect} from 'react-router-dom'
import Home from "../views/home";
import Test from "./Test";
import Login from "./Login";

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Test}/>
            <Route path='/home' component={Home}/>
            <Route path='/login' component={Login}/>
            <Route component={NoMatch}/>
        </Switch>
    </main>
)

export default Main

const NoMatch = (props) => (
    <h1>404 Not Found</h1>
);