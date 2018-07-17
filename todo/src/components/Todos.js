import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo } from '../actions';

const Todos = props => {
    return (
        <div>
        {props.todos.map(todo => <li onClick={() => props.updateTodo(todo.id)}
         key={todo.id}>{todo.text}</li>)
        }</div>
    );
};

const mapStateToProps = state => {
    console.log(state);
    return { todos: state };
};

export default connect(mapStateToProps, { updateTodo } )(Todos);