import React from "react";

import { connect } from "react-redux";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    };
  }
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
        <h1>{todo.value}</h1>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(Todo);
