import React from "react";

//connecting react redux
import { connect } from "react-redux";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(item => (
          <h3>{item.value}</h3>
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
)(TodoList);
