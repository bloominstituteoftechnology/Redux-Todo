import React from 'react';
import { connect } from 'react-redux';
import {newTodo} from './../actions/index';

const TodoForm = ({onClick}) => {

    return (
        <div>
            <input 
                type='text'
                placeholder='New Todo'
                defaultValue=''
                />
            <button onClick={onClick}>Add</button>
        </div>
    )
}

const mapDispatchToProps = (value) => {
    return  {
        onClick: () => newTodo(value)
    }
}

export default connect(mapDispatchToProps, {newTodo})(TodoForm);