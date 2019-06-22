import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from '../actions/actions';

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => (
                <div style={todo.completed ? { textDecoration: 'line-through' } : null} onClick={() => props.toggleTodo(todo.id)} key={todo.id}
                >{todo.task}
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

export default connect(mapStateToProps, { toggleTodo })(TodoList);