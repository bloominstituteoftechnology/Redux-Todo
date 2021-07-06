import React from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { completeTodo, deleteTodo } from "../actions";

export const Todo = props => {
  if (props.todo.completed) {
    return (
      <tr>
        <th scope="row">{props.todo.id}</th>
        <td style={{textDecoration: "line-through"}}>{props.todo.value}</td>
        <td>
          <Button
            color="success"
            onClick={() => props.completeTodo(props.todo.id)}
          >
            Complete
          </Button>
        </td>
        <td>
          <Button
            color="success"
            onClick={() => props.deleteTodo(props.todo.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  } else {
    return (
      <tr>
        <th scope="row">{props.todo.id}</th>
        <td>{props.todo.value}</td>
        <td>
          <Button
            color="success"
            onClick={() => props.completeTodo(props.todo.id)}
          >
            Complete
          </Button>
        </td>
        <td>
          <Button
            color="success"
            onClick={() => props.deleteTodo(props.todo.id)}
          >
            Delete
          </Button>
        </td>
      </tr>
    );
  }
};

const mapStateToProps = state => {
  return { todos: state };
};

export default connect(
  mapStateToProps,
  { completeTodo, deleteTodo }
)(Todo);
