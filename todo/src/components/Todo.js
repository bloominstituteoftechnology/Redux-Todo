import React from 'react';
import { toggleTodo } from '../actions/index';
import { connect } from 'react-redux'

const Todo = props => {
    return (
            <div onClick={() => props.toggleTodo(props.todo.id)} style={props.todo.completed ? { textDecoration: 'line-through' } : null} >
                {props.todo}
            </div>
    );
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};


export default connect(mapStateToProps, { toggleTodo })(Todo);