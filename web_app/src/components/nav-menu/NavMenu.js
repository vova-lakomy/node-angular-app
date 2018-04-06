import React, { Component}  from 'react';
import CSS from './NavMenu.css'

const NavMenu = ({ children }) => {
    return (
        <nav className={'nav-bar'}>
            { children }
        </nav>
    )
};

export default NavMenu