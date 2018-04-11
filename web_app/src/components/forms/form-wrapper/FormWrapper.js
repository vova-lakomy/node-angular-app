import React, { Component }  from 'react';
import css from './FormWrapper.css'

const FormWrapper = ({header, children}) => {
    return (
        <div className={'form-wrapper'}>
            <h2>{header}</h2>
            {children}
        </div>
    )
};

export default FormWrapper