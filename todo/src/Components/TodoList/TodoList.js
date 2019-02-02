import React from "react";
import { connect } from "react-redux";

import { addTodo, toggleCompleted, removeTodo } from "../../actions/actions";

class TodoList extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      todoText: ""
    };
  }

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.props.todos, {
      value: this.state.todoText,
      completed: false
    });
    this.setState({ todoText: "" });
  };

  toggleCompleted = i => {
    console.log(i);
    this.props.toggleCompleted(this.props.todos, i);
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map((todo, i) => {
            return (
              <li key={i}>
                <div>
                  <span onClick={() => this.toggleCompleted(i)}>
                    {todo.value}
                  </span>
                  <button onClick={() => this.props.removeTodo(i)}>
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <input
          type="text"
          name="todoText"
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button onClick={this.addTodo}>Add Todo</button>
      </div>
    );
  }
}

//maps whatever the state in the store you want to props
const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTodo, toggleCompleted, removeTodo }
)(TodoList);
