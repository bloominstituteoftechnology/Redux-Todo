import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

class TodoList extends React.Component {
  state = {
    newTodo: ""
  };

  handleChanges = e => {
    this.setState({
      newTodo: e.target.value
    });
  };

  render() {
    return (
      <>
        <h2>Todo App</h2>
        <input
          type="text"
          value={this.state.newTodo}
          placeholder="Add a new todo"
          onChange={this.handleChanges}
        />
        <button onClick={this.addTodo}>Add Todo</button>
        <button onClick={this.filterTodo}>Clear</button>
        <div className="">
          {this.props.todos &&
            this.props.todos.map(todo => <h3>{todo.task}</h3>)}
        </div>
      </>
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
  { addTodo }
)(TodoList);
