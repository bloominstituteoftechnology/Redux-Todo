import React from 'react';
import { connect } from 'react-redux';
import { completeTodo } from '../actions';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <div
                    style={todo.completed ? { textDecoration: 'line-through' } : null}
                    onClick={() => props.completeTodo(todo.id)}
                    key={todo.id}
                >
                    {todo.task}
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        todos: state
    };
};
export default connect(mapStateToProps, { completeTodo })(TodoList);


