import React, { Component}  from 'react';
import CSS from './FormItem.css'

const FormItem = ({id, children, className, type, name}) => {
    return (
        <div className={'form-item'}>
            <label htmlFor={id}>{children}</label>
            <input id={id} className={className} type={type} name={name}/>
        </div>
    )
};

export default FormItem