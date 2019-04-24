import React from "react";
import { addTodo, toggleCompleted } from "./../actions/index";
import { connect } from "react-redux";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ""
    };
  }

  changeHandler = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleAddTodo = ev => {
    ev.preventDefault();
    this.props.addTodo(this.state.todo);
    this.setState({
      todo: ""
    });
  };

  toggleCompleted = index => {
    this.props.toggleCompleted(index);
  };

  render() {
    return (
      <div>
        {this.props.todos.map((todo, index) => (
          <h2 onClick={() => this.toggleCompleted(index)} key={todo.name}>
            {todo.value}
          </h2>
        ))}
        <input
          type="text"
          name="todo"
          onChange={this.changeHandler}
          placeholder="New Todo"
          value={this.state.todo}
        />
        <button onClick={this.handleAddTodo}>Add Todo</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps,
  { addTodo, toggleCompleted }
)(Todo);