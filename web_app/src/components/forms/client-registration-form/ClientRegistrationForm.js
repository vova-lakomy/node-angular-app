import React, { Component } from 'react';
import css from './ClientRegistrationForm.css'
import FormItem from "../form-item/FormItem";
import FormWrapper from "../form-wrapper/FormWrapper";
import Submit from "../submit/Submit";


export default class ClientRegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        alert('submit');
    }

    render() {
        return (
            <FormWrapper header={'Client Registration Form'}>
                <form id={'client-registration-form'} className={'client-registration'}>
                    <FormItem id={'name'} type={'text'} name={'name'}> Name: </FormItem>
                    <FormItem id={'email'} type={'text'} name={'email'}> Email: </FormItem>
                    <FormItem id={'phone-number'} type={'text'} name={'phoneNumber'}> Phone Number: </FormItem>
                    <FormItem id={'password'} type={'password'} name={'password'}> Password: </FormItem>
                    <FormItem id={'confirm-password'} type={'password'} name={'confirm-password'}> Confirm Password: </FormItem>
                    <Submit text={'Submit'} action={this.handleSubmit}/>
                </form>
            </FormWrapper>
        );
    }

}