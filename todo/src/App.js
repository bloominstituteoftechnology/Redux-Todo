import React, { Component } from "react";
import "./App.css";
import Todos from "./containers/Todos";
import TodoForm from "./containers/TodoForm";
import { connect } from "react-redux";
import { addTodo } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };


  // set todoText to this.state
  // newTodo get new id, completed prop, and text, which is todoText
  // reset the todoText back to blank
  addTodo = () => {
    const { todoText } = this.state;
    const newTodo = {
      id: this.props.todos.length + 1,
      completed: false,
      text: todoText
    };
    this.props.addTodo(newTodo);
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <div className="App">
        <TodoForm
          handleInputChange={this.handleInputChange}
          todoText={this.state.todoText}
          addTodo={this.addTodo}
        />

        <Todos todos={this.props.todos} />
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
