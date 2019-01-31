import React from "react";
import { connect } from "react-redux";

const TodoList = props => {
  return (
    <div className="todos">
      {props.todoList.map(todo => {
        return (
          <div key={todo.id} className="todos_item">
            {todo.task}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
