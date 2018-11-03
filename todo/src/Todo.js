import React from 'react';
import { connect } from "react-redux";
import {completed,deleted } from './Actions';
const Todo = (props) => {
    console.log(props.todo)
    return (
       <>
        <li style={{
            textDecoration: props.todo.completed ? 'line-through' : 'none'
        }} onClick={() => { props.completed(props.id) }}>{props.todo.value}</li>
            <button onClick={() => { props.deleted(props.id) }}>delete</button>
        </>
    )
}

const mapStateToProps = state => {
    return {};

};
export default connect(mapStateToProps, { completed: completed, deleted:deleted })(Todo);

