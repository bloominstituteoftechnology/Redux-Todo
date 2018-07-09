import React from 'react';
import { toggleCompleted } from '../../actions/index';
import { connect } from 'react-redux';

const Todo = props => {
    return (
        <li onClick={() => props.toggleCompleted(props.todo.id)} style={props.todo.completed ? { textDecoration: 'line-through' } : null}>
            {props.todo.value}
        </li>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { toggleCompleted })(Todo);



