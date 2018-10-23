import React from "react";
import { connect } from "react-redux";
import { addTask, toggleComplete, deleteTask } from "../actions";

class TodoWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      inputText: ""
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="InputDiv">
        <form className="inputForm">
          <input
            type="text"
            placeholder="Enter a todo"
            name="inputText"
            value={this.state.inputText}
            onChange={this.changeHandler}
          />

          <button
            onClick={ev => {
              ev.preventDefault();
              this.props.addTask(this.state.inputText);
            }}
          >
            Add Task
          </button>
        </form>
        <ul>
          {this.props.todos.map((task, index) => {
            return (
              <div className="listDiv" key={index}>
              <li
                onClick={() => {
                  this.props.toggleComplete(index);
                }}
              >
                {task.task}
              </li>
              <button onClick={() => {
                  this.props.deleteTask(index)
              }}>Delete Task</button>
              </div>
            );
          })}
        </ul>
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
  { addTask, toggleComplete, deleteTask }
)(TodoWrapper);
