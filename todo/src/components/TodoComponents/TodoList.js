import React from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';

const TodoList = props => {
    return (
        <ul>
            {props.todos.map((todo, index) => <Todo key={index} todo={todo} />)}
        </ul>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state
    };
};

export default connect(mapStateToProps, {})(TodoList);
