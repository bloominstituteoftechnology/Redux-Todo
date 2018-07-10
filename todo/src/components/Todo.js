import React from 'react';
import {connect} from 'react-redux';
import {deleteTodo} from '../actions/index';

const Todo = (props) => {
    const toggleComplete = () => {
        console.log('delete')
        props.deleteTodo(props.todo)
    }

    return (
        <div>
            <p>{props.todo}</p>
            <button onClick={toggleComplete}> Completed</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      todos: state
    };
  };

  export default connect(
    mapStateToProps,
    { deleteTodo }
  )(Todo);