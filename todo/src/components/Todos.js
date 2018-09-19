import React, { Component } from 'react';
import { connect } from 'react-redux';

const Todos = props => {
    return (
        <div>{props.todos.map(todo => <li key={todo.id}>{todo.text}</li>)}</div>
    );
}

const mapStateToProps = state => {
    return { todos: state };
}

export default connect(mapStateToProps)(Todos);