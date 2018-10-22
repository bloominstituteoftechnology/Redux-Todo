import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import {addItem} from './actions'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }
  changeHandler = e => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.addItem(this.state.input)
    this.setState({ input: "" });
  };
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h3>Todo List</h3>
        
        <Form
          input={this.state.input}
          changeHandler={this.changeHandler}
          submitHandler={this.submitHandler}
        />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, {addItem:addItem})(App);
