import React, { Component } from 'react';
import styles from './LoginForm.css'


export default class LoginForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form id={'login-form'} className={'login'}>
                <input type={'text'} name={'email'}/>
                <div className={'button button-white'}>Sign In</div>
            </form>
        );
    }

}