import React from 'react';
import './form.css';
import Input from '../input/input.js';
import Submit from '../submit/submit.js';

const Form = (props) => {
    return (
        <div className='form'>
            <div className='inputBar'>
                <Input />
                <Submit />
            </div>
            <div className='todos'>
                I have to do the following:
                </div>
            <div>{props.todoList.map(t => <div>{t}</div>)}</div>
        </div>

    )
}

export default Form;