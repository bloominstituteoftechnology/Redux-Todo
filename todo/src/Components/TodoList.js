import React, { Fragment } from 'react';
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <Fragment>
      {props.todos.map((todo, index) => (
        <Todo todo={todo} key={index} id={index} />
      ))}
    </Fragment>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {})(TodoList);
