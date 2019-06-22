import React from "react";

//connecting react redux
import { connect } from "react-redux";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((item, index) => (
          <h3 key={index}>{item.value}</h3>
        ))}
      </div>
    );
  }
}

//bringing the state in the const todos
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  {}
)(TodoList);
