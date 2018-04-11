import React, { Component }  from 'react';
import css from './Submit.css'

export default class Submit extends Component {

    constructor(props) {
        super(props);
    }

    evaluate(action) {
        return () => {
            console.log('evaluating');
            action();
        };
    }

    render() {
        const {text, action} = this.props;
        return (
            <input className={'button'} type={'submit'} value={text} onClick={this.evaluate(action)}/>
        );
    }
}