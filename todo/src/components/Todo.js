import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const Todo = (props) => {
    const {text: todo } = {...props.todo}
    const {index, deleteTodo} = { ...props};
    return (
        <div className="Todo">
            {todo} <button onClick={() => deleteTodo(index)}>X</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        Todos: state,
    };
};

export default connect(mapStateToProps,{deleteTodo})(Todo);