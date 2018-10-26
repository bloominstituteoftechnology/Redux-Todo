import React, { Component } from "react";
import TodoForm from "./components/form";
// import TodoList from "./components/todolist";
import TodoList from "./components/todolist";
import { connect } from "react-redux";
import { addTodo, deleteTodo } from "./actions/action";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heading: "Todo List:",
      todo: ""
    };
    console.log(this.props, "props in app");
  }

  changeTaskHandler = event => {
    this.setState({ todo: event.target.value });
  };
  addTask = event => {
    // console.log(this.props, "this.props");
    event.preventDefault();
    // const todos = this.state.todos.slice();
    // todos.push({ value: this.state.todo, id: Math.random(), completed: false });
    // this.setState({ todos, todo: "" });
    this.props.addTodo({
      todo: this.state.todo,
      complete: false
    });
    this.setState({
      todo: ""
    });
  };

  clearTodo = () => {
    this.props.deleteTodo();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo Redux</h1>
        </header>

        <TodoForm
          value={this.state.todo}
          eventHandler={this.changeTaskHandler}
          addTaskEvent={this.addTask}
        />
        <button onClick={() => this.clearTodo()}>Clear Todos</button>
        <TodoList todos={this.props.todo} />
        {/* <TodoList todos={this.props.todos} /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state, "state in app");
  return {
    todos: state
  };
};

export default connect(
  mapStateToProps,
  { addTodo, deleteTodo }
)(App);
