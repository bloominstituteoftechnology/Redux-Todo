import React from "react";
import {connect} from "react-redux";
import {addTodo, toggleCompleted, deleteTodo} from "../actions";
import "../App.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.inputText);
    this.setState({inputText: ""});
  };

  // handleDelete = e => {

  // }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputText}
            name="inputText"
            placeholder="What would you like to do?"
            onChange={this.changeHandler}
          />
          <button>Submit</button>
        </form>
        <ul>
          {this.props.todos.map((todo, index) => (
            <li
              key={index}
              onClick={() => this.props.toggleCompleted(index)}
              className={todo.completed ? `completed` : null}
            >
              {todo.value}{" "}
              <span>
                <button onClick={() => this.props.deleteTodo(index)}>
                  Delete
                </button>
              </span>
            </li>
          ))}
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
  {addTodo, toggleCompleted, deleteTodo}
)(TodoList);
