import React from "react";
import { connect } from "react-redux";
import Todo from './Todo'
import { toggle } from './../actions/actions'


const TodoList = props => {
  return (
    <ul className="todo-list">
    props.todoList.map(todo => <Todo key={todo.id}>{todo.todo}</Todo>)
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };

export default connect(
  mapStateToProps,
  {toggle}
)(TodoList);
