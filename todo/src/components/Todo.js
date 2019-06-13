import React from 'react';
import { completedTodo } from './../actions/index';
import { connect } from 'react-redux';

const Todo = (props, {onClick, completed}) => {
    return (
        <div onClick={onClick}
        style={{
            textDecoration: !props.completed ? 'line-through' : 'none'
          }}>
            {props.item}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        completed: state.completed
    };
}

export default connect(mapStateToProps, {completedTodo})(Todo);
