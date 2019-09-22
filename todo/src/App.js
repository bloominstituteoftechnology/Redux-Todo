import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./actions";
import Todos from "./Todos";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="TodoList">
        <h2>My Todo List</h2>
        {this.props.todos.map(todo => {
            return (
              <Todos
                key={todo.id}
                todo={todo}
                onClick={() => {
                  this.props.toggleTodo(todo.id);
                }}
                delete={() => {
                  this.props.deleteTodo(todo.id);
                }}
              />
            );
        })}
        <form
          onSubmit={event => {
            event.preventDefault();
            this.props.addTodo(this.textInput.value);
            this.textInput.value = "";
          }}
        >
          <input
            type="text"
            ref={input => {
              this.textInput = input;
            }}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state
  };
};

export default connect(mapStateToProps, { addTodo, toggleTodo, deleteTodo })(App);
