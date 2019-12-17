import React from 'react';
import { connect } from 'react-redux';

import { todoComplete } from '../actions/index';
import '../App.css';



const TodoList = props => {
    console.log(props);
    return (
        <div className='todoWrapper'>

            {props.todos.map(todo =>
                <ul onClick={() => props.todoComplete(todo.id)} className={todo.completed ? 'complete' : 'incomplete'}
                    key={todo.id}>
                    <li>{todo.task}</li>
                </ul>

            )}

        </div>

    )
};


const mapStateToProps = state => {
    console.log(state);
    return {
        todos: state
    }
};

export default connect(mapStateToProps, { todoComplete })(TodoList);
