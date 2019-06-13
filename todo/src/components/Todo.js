import React from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/index';

const Todo = (props) => {
    const toggleDelete = () => {
        props.deleteTodo(props.todo)
    }
    return (
        <div>
            <p>{props.todo}</p>
            <button onClick={toggleDelete}>Delete</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        todos: state
    };
};
 
export default connect(mapStateToProps, { deleteTodo })(Todo);