import React from "react";
import { connect } from "react-redux";

import { completeTodo } from "../actions";

export const Todo = (props) => {
    if(props.todo.completed) {
        return (
            <li style={{textDecoration: "line-through"}}>{props.todo.value}</li>
        )
    } else {
        return (
            <li onClick={() => props.completeTodo(props.todo.id)}>{props.todo.value}</li>
        )
    }
}

const mapStateToProps = state => {
  console.log(state)
  return  { todos: state };
  
};

export default connect(mapStateToProps, { completeTodo })(Todo);
