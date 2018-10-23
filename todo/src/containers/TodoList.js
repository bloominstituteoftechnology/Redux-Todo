import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleCompleted, deleteTodo } from "../actions";
import './styles.css';

import Todo from "./Todo";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: ""
    };
  }

  handleChanges = ev => {
    this.setState({ [ev.target.name]: ev.target.value });
  };

  handleNewTodo = ev => {
    ev.preventDefault();
    this.props.addTodo(this.state.todoText);
    this.setState({
      todoText: ""
    });
  };

  render() {
    return (
      <div className="todoList">
        <h1>TODOs</h1>
        <form onSubmit={this.handleNewTodo}>
          <input
            type="text"
            name="todoText"
            onChange={this.handleChanges}
            placeholder="New Todo"
            value={this.state.todoText}
          />
          <button onClick={this.handleNewTodo}>Add Todo</button>
        </form>
        {this.props.todos.map((todo, index) => {
          return <Todo todo={todo} index={index} toggleCompleted={this.props.toggleCompleted} deleteTodo={this.props.deleteTodo}/>;
        })}
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
  { addTodo, toggleCompleted, deleteTodo }
)(TodoList);
