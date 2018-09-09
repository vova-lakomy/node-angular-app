import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import NavBar from "../nav-bar/NavBar";
import LoginForm from "../forms/login-form/LoginForm";
import Clock from "../nav-bar/Clock";

const Header = () => (
    <header>
        <NavBar>
            <Clock/>
        </NavBar>
    </header>
);

export default Header