import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom'
import App from './components/App';
import Home from "./views/home";

export default () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/home' component={Home} />
        </Switch>
    </HashRouter>
);