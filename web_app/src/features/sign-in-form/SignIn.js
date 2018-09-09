import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd';
import './SignIn.css'

const FormItem = Form.Item;

export default class SignInForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signedIn: false,
            modalVisible: false,
            buttonLoading: false
        };
    }

    fakeApiRequest = () => {
      return new Promise((resolve, reject) => {

          setTimeout(() => {
              resolve({
                  status: 'OK',
                  user: {
                      id: '007',
                      firstName: 'John',
                      lastName: 'Doe'
                  }
              });
          }, 2000);

      });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({
            buttonLoading: true
        });
        console.log('handle submit');
        console.log(event);
        this.fakeApiRequest()
            .then((response) => {
                console.log('response: ', response);
                this.setState({
                    signedIn: true,
                    buttonLoading: false
                });
            })
            .catch((error) => {
                console.error('error');
            })
    };

    handleChange = (event) => {
        console.log('handle change');
        console.log(event);
        console.log(event.target);
        this.validateForm();

    };

    forgotPasswordClick = (event) => {
        event.preventDefault();
        this.setState({
            modalVisible: true,
        });
    };

    handleModalOk = (event) => {
        this.setState({
            modalVisible: false,
        });
    };

    handleModalCancel = (event) => {
        this.setState({
            modalVisible: false,
        });
    };

    validateForm = () => {

    };

    performSignIn = () => {

    };

    signIn(state = {signedIn: false}, action) {
        switch (action.type) {
            case 'SET_SIGNED_IN':
                console.log('perform sign in');
                this.setState();
                return {signedIn : true};
            default :
                return state;
        }
    }

    render() {
        return (
            <div className="login-form-wrapper">
                <Form onChange={this.handleChange} onSubmit={this.handleSubmit} className="login-form">
                    <FormItem>
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: 'rgba(0,0,0,.25)' }}
                                    />}
                                placeholder="Username"
                            />
                    </FormItem>
                    <FormItem>
                            <Input
                                prefix={
                                <Icon
                                    type="lock"
                                    style={{ color: 'rgba(0,0,0,.25)' }}
                                />}
                                type="password"
                                placeholder="Password"
                            />
                    </FormItem>
                    <FormItem>
                            <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href="#" onClick={this.forgotPasswordClick}>Forgot password</a>
                        <Button type="primary" htmlType="submit" className="login-form-button " loading={this.state.buttonLoading}>
                            Log in
                        </Button>
                        Or <a href="#">register now!</a>
                    </FormItem>
                </Form>

                <Modal
                    title="Password Reset"
                    visible={this.state.modalVisible}
                    onOk={this.handleModalOk}
                    onCancel={this.handleModalCancel}
                >
                    <p>Hello world</p>
                </Modal>
            </div>
        );
    }

}