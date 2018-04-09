import React, { Component } from "react";
import Header from "./header/Header";
import Main from "./Main";
import Footer from "./footer/Footer";
import styles from "./App.css";
import '../../node_modules/font-awesome/css/font-awesome.min.css'

const App = () => (
    <div>
        <Header />
        <Main />
        <Footer/>
    </div>
)

export default App