import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import NavBar from "../nav-bar/NavBar";
import LoginForm from "../forms/login-form/LoginForm";

const Header = () => (
    <header>
        <NavBar>
            <LoginForm/>
        </NavBar>
    </header>
);

export default Header