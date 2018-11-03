import React from 'react';
import { connect } from 'react-redux'
import {} from './actions'
import Todo from './ToDo';

const List = (props) => {
    return (
        <div> {props.todo.map(item => <Todo />)} </div>
    )
}





const mapStatetoProps = (state) => {
    return state;
}

export default connect(mapStatetoProps,{})(List)