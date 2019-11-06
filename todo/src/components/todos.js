import React, { Component } from "react";
import { connect } from "react-redux";
import { remove } from "../actions";

class Todos extends Component {
  render() {
    const { todos, remove } = this.props;
    return (
      <div>
        <h2>To-do List:</h2>
        {todos.length > 0 &&
          todos.map((todo, index) => (
            <div key={todo.value}>
              <div>{todo.value}</div>
              <button onClick={() => remove(index)}>Delete</button>
            </div>
          ))}
      </div>
    );
  }
}
const mapStateToProps = state => {
  const { todos } = state;
  return {
    todos
  };
};

export default connect(mapStateToProps, { remove })(Todos);
