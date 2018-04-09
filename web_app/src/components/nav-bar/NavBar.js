import React, { Component}  from 'react';
import CSS from './NavMenu.css'

const NavBar = ({ children }) => {
    return (
        <nav className={'nav-bar'}>
            { children }
        </nav>
    )
};

export default NavBar