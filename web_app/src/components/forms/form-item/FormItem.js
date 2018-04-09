import React, { Component}  from 'react';
import CSS from './FormItem.css'

const FormItem = (props) => {
    return (
        <div className={'form-item'}>
            <label htmlFor={props.id}>{props.children}</label>
            <input id={props.id} className={props.className} type={props.type} name={props.name}/>
        </div>
    )
};

export default FormItem