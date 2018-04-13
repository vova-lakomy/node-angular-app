import React, { Component }  from 'react';
import css from './FormWrapper.css'
import FormItem from "../form-item/FormItem";

const FormWrapper2 = ({header, children, data, action}) => {
    const formItems = data.items.map((item, index)=>{
        return <FormItem key={item.id} id={item.id} type={item.type} name={item.name} order={index}> {item.label} </FormItem>
    });
    return (
        <div id={data.id} className={'form-wrapper ' + data.className}>
            <h2>{header}</h2>
            {formItems}
        </div>
    )
};

export default FormWrapper2