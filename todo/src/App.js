import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect}  from "react-redux"
import { addTodo } from "./actions/index"
import { toggleTodo } from "./actions/index"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ''
    }
  }

  changeHandler = ev => {
    this.setState({ [ev.target.name]: ev.target.value})
  }

  btnClickHandler = ev => {
    ev.preventDefault();
    console.log("click")
    this.props.addTodo(this.state.inputText)
  }

  clickHandler = id => {
    console.log(id)
    this.props.toggleTodo(id)
  }
  render() {
  return (
    <div>
    <form>
      <input placeholder="To do" type="text" name="inputText" onChange={this.changeHandler} value={this.state.inputText} />
      <button onClick={this.btnClickHandler}>Add Todo</button>
    </form>
    <div>
      <h1>TODO LIST</h1>
      {this.props.todos.map(item => <div key={item.id} onClick={() => this.clickHandler(item.id)}>{item.value}</div>)}
    </div>
    <button>Remove Selected</button>
    </div>
  )
}
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    todos: state

  }
}

export default connect(mapStateToProps, {addTodo, toggleTodo})(App);