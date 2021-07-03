import React from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../actions'
import './todo.css';

const Todo = (props) => {
    const {text: todo} = {...props}
    
    return (
        <div className="Todo">
        <span className="Todo--delete" onClick={() => this.props.deleteTodo()}>x :: </span>
            {text}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        Todos: state
    }
}

export default connect(mapStateToProps, { deleteTodo })(Todo)