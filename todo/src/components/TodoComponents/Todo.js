import React from 'react';
import { toggleCompleted, deleteTodo } from '../../actions/index';
import { connect } from 'react-redux';

const Todo = props => {
    return (
        <div>
            <li onClick={() => props.toggleCompleted(props.todo.id)} style={props.todo.completed ? { textDecoration: 'line-through' } : null}>
                {props.todo.value}
            </li>
            <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { toggleCompleted, deleteTodo })(Todo);



