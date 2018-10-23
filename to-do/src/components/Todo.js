import React from "react";
import { connect } from "react-redux"; // HOC!!!!
import { addTodo, toggleTodo } from "../actions";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: "",
      todo: []
    };
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleNewTask = ev => {
    ev.preventDefault();
    this.props.addTodo(this.state.todo);
  };

  render() {
    return (
      <div className="app-box">
        {this.props.todo.map((t, index) => (
          <div key={index} className="list">
            <h3 onClick={() => this.props.toggleTodo(index)} class="task-box">
              {t.name}
            </h3>
          </div>
        ))}
        <form onSubmit={this.handleNewTask} className="form-box">
          <input
            type="text"
            name="todo"
            onChange={this.handleChanges}
            placeholder="Add Todo..."
            value={this.state.todo}
          />
          <button onClick={this.handleNewTask}>Add Todo</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.todo
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleTodo }
)(Todo);
