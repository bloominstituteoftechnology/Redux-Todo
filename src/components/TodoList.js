import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, clearTodo } from "../actions";
import "./TodoList.css";

class TodoList extends React.Component {
  state = {
    newTodo: "",
  };

  handleChanges = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  };

  addTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: "" });
  };

  toggleTodo = (id) => {
    this.props.toggleTodo(id);
  };

  onSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="todo-wrapper">
        <h2>TO DO LIST APP</h2>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.newTodo}
            placeholder="...add a new todo"
            onChange={this.handleChanges}
          />
          <button onClick={this.addTodo}>Add Todo</button>
          <button onClick={this.props.clearTodo}>Clear</button>
          <div className="">
            {this.props.todos &&
              this.props.todos.map((todo) => (
                <h4 key={todo.id} onClick={() => this.toggleTodo(todo.id)}>
                  {todo.task}
                  {todo.completed && <i className="fa fa-check" />}
                </h4>
              ))}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo, toggleTodo, clearTodo })(
  TodoList
);
