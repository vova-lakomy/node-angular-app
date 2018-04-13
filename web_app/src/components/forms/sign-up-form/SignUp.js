import React, { Component } from 'react';
import styles from './SignUp.css'
import FormItem from "../form-item/FormItem";


export default class SignUpForm extends Component {

    constructor(props) {
        super(props);
        this.state = {signedUp: false};
        this.signUp = this.signUp.bind(this);
    }

    signUp(state = {signedUp: false}, action) {
        switch (action.type) {
            case 'SET_SIGNED_UP':
                console.log('perform sign up');
                this.setState();
                return {signedUp : true};
            default :
                return state;
        }

    }

    render() {
        return (
            <div>
                <h2>Sign up for free</h2>
                <form id={'sign-up-form'} className={'sign-up'}>
                    <FormItem id={'name'} type={'text'} name={'name'}> Name/Organization: </FormItem>
                    <FormItem id={'email'} type={'text'} name={'email'}> Email: </FormItem>
                    <div onClick={this.signUp} id={'sign-up-submit'} className={'button button-sign-up'} >Sign Up</div>
                </form>
            </div>
        );
    }

}