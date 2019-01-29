import React from "react";
import { connect } from "react-redux";

const TodoList = props => {
  console.log(props);
  return (
    <div>
      {props.todos.map((todo, i) => {
        return <p key={i}>{todo}</p>;
      })}
    </div>
  );
};

//maps whatever the state in the store you want to props
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
