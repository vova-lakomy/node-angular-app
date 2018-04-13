import React, {Component} from 'react';
import css from './ClientRegistrationForm.css'
import FormItem from "../form-item/FormItem";
import FormWrapper from "../form-wrapper/FormWrapper";
import Submit from "../submit/Submit";


export default class ClientRegistrationForm extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        console.log('submit');
        console.log(this.state);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(this.state);
    }

    handleChange(event) {
        event.preventDefault();
        if (event.target) {
            const data = {};
            data[event.target.name] = event.target.value;
            this.setState(data);
        }
    }

    render() {
        return (
            <FormWrapper header={'Client Registration Form'}>
                <form id={'client-registration-form'} className={'client-registration'} onChange={this.handleChange}>
                    <FormItem id={'name'} type={'text'} name={'name'}> Name: </FormItem>
                    <FormItem id={'email'} type={'text'} name={'email'}> Email: </FormItem>
                    <FormItem id={'phone-number'} type={'text'} name={'phoneNumber'}> Phone Number: </FormItem>
                    <FormItem id={'password'} type={'password'} name={'password'}> Password: </FormItem>
                    <FormItem id={'confirm-password'} type={'password'} name={'confirm-password'}> Confirm
                        Password: </FormItem>
                    {/*<Submit text={'Submit'} action={this.handleSubmit}/>*/}
                    <input type={'submit'} value={'Submit'} onClick={this.handleSubmit}/>
                </form>
            </FormWrapper>
        );
    }

}

// this.formData = {
//     id: 'client-registration-form',
//     items: [
//         {
//             id: 'name',
//             type: 'text',
//             name: 'name',
//             label: 'Name:'
//         },
//         {
//             id: 'email',
//             type: 'text',
//             name: 'email',
//             label: 'Email:'
//         },
//         {
//             id: 'phone-number',
//             type: 'text',
//             name: 'phoneNumber',
//             label: 'Phone number:'
//         },
//         {
//             id: 'password',
//             type: 'password',
//             name: 'password',
//             label: 'Password:'
//         },
//         {
//             id: 'confirm-password',
//             type: 'password',
//             name: 'confirmPassword',
//             label: 'Confirm password:'
//         },
//     ]
// };