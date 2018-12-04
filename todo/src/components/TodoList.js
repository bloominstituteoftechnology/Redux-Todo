import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const TodoList = props => {
    return(
        <div>
            {props.todos.map((individualTodo, index) => (
                <Todo data={individualTodo} key={index} />
            ))}
        </div>
    );
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
    }
}

export default connect(mapStateToProps)(TodoList);