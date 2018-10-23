import React from 'react';
import { toggletodo } from '../actions/index';
import { connect } from 'react-redux';

const Todo = ({todo, id}) => (
    <div className='todo'>
        <h3 
        className={todo.completed ? 'complete' : 'incomplete'} 
        onClick={() => toggletodo(id)}
        >{todo.inputText}</h3>
    </div>
);

export default connect()(Todo);