import React from 'react';
import { connect } from 'react-redux';
import { toggletodo } from '../actions';

const Todo = ({dispatch, todo, id}) => (
    <div className='todo'>
        <h3 
        className={todo.completed ? 'complete' : 'incomplete'} 
        onClick={() => dispatch(toggletodo(id))}
        >{todo.inputText}</h3>
    </div>
);

export default connect()(Todo);