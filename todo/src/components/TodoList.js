import React from 'react';

import {addTodo, deleteTodo} from '../actions';
import {connect} from 'react-redux';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map((todo) => {
                if(todo.completed){
                    return (
                        <li key={todo.id}>
                                {todo.task}
                <button onClick={ () => {props.deleteTodo(todo)} }> Delete</button> 
                </li>
                    )
                } else {
                    return (
                        <li>
                            {todo.task}
                            <button onClick={ () => {props.deleteTodo(todo)} }>Delete</button>
                        </li>
                    )
                }
            })}
            </ul>
       
    );
} ;

const mapStateToProps = (state) => {
    return {
        todos:state
    }
}

export default connect(mapStateToProps, {addTodo, deleteTodo})(TodoList);