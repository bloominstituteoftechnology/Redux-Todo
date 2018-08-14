import React, { Component } from 'react';
import { connect } from "react-redux";
import todos from './reducers';
import TodoList from './components/TodoList';
import addToDo from './actions';
import TodoForm from './components/TodoForm';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props),
    this.state = {
      newToDo: ''
    }
  }

  itemAdd = (event) => {
    this.setState({newToDo: event.target.value})
  }

  addNewTodo = (event) => {
    event.preventDefault();
    this.props.addToDo(this.state.newToDo);
    this.setState({newToDo: ''})
  }

  render() {
    return (
      <div className="App">
        <TodoList todos={this.props.todos} />
        <TodoForm itemAdd={this.itemAdd} value={this.state.newToDo} add={this.addNewTodo} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state
});

export default connect(mapStateToProps, { addToDo })(App);
