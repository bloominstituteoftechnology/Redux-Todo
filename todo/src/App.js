import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./actions";
import Todos from "./Todos";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="TodoList">
        <h2>My Todo List</h2>
        {
          this.props.todos.map(todo => {
          return <Todos key={todo.id} todo={todo} />
        })}
        <form
          onSubmit={(event) => {
            event.preventDefault();
            this.props.addTodo(this.textInput.value);
            this.textInput.value = "";
          }}
        >
          <input type="text" ref={(input) => { this.textInput = input; }}/>
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

export default connect(mapStateToProps, { addTodo })(App);
