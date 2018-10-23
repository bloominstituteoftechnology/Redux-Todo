import React from 'react';
import { connect } from 'react-redux';
import { toggletodo, deletetodo } from '../actions';

const Todo = ({dispatch, todo, id}) => (
    <div className='todo'>
        <h3 
        className={todo.completed ? 'complete' : 'incomplete'} 
        onClick={() => dispatch(toggletodo(id))}
        >{todo.inputText}</h3>
        <div className='delete' onClick={() => dispatch(deletetodo(id))}>X</div>
    </div>
);

export default connect()(Todo);