import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const Todos = props => {
  console.log(props.todos);
  const todos = props.todos.map((todo, i) => (
    <Todo todo={todo} key={i} index={i} />
  )); //providing index for toggling
  return <ul>{todos}</ul>;
}

const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(Todos); //because connect is there it is a Container component
