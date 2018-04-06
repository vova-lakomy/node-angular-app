import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";
import NavMenu from "./nav-menu/NavMenu";
import LoginForm from "./login-form/LoginForm";

const Header = () => (
    <header>
        <NavMenu>
            <LoginForm/>
        </NavMenu>
    </header>
)

export default Header