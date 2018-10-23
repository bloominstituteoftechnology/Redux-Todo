import React, { Fragment } from 'react';
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = props => {
  return (
    <ul>
      {props.todos.map((todo, index) => (
      <Fragment key={index} > 
        <Todo todo={todo} id={index} />
        <button onClick={() => {}} >x</button>
      </Fragment>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {})(TodoList);
