import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "../actions";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChanges = e => {
    e.preventDefault();
    console.log(e.target.name, [e.target.name]);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    console.log("Submitting...");
    this.props.addTodo(this.state.text);
    // Reset everything
    e.target.reset();
    this.setState({
      text: ""
    });
  };

  markTodo = e => {
    console.log("Marking...", e.target.id);
    this.props.toggleTodo(e.target.id);
  };

  render() {
    return (
      <div className="todoList">
        <ul>
          {this.props.todos.map((todo, index) => {
            return (
              <li onClick={this.markTodo} key={index} id={index}>
                {todo.value}, {`${todo.completed}`}
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.submitTodo}>
          <input
            onChange={this.handleChanges}
            type="text"
            name="text"
            placeholder="Enter todo here"
          />
          <button>Submit todo</button>
        </form>
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
  { addTodo, toggleTodo }
)(TodoList);
