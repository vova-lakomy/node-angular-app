import React from 'react';
import {Link, NavLink, Redirect, Route, Switch} from "react-router-dom";

export default class Home extends React.Component {

    render() {
        const { url } = this.props.match;
        return (
            <section>
                <h1>Tabs</h1>
                <div><NavLink to={ url + '/tab1' } activeClassName='active'>tab 1</NavLink></div>
                <div><NavLink to={ url + '/tab2' } activeClassName='active'>tab 2</NavLink></div>
                <Switch>
                    <Route path={url + "/tab1/:whatever?"} component={TabOne}/>
                    <Route path={url + "/tab2/:whatever?"} component={TabTwo}/>
                </Switch>
            </section>

        );
    }
}

const TabOne = (props) => (
    <div>Tab 1 {props.match.params.whatever}</div>
);

const TabTwo = (props) => (
    <div>Tab 2 {props.match.params.whatever}</div>
);
