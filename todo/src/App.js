import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './components/Todo';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
    }
  }

  addTodo = (event) => {
    event.preventDefault();
    console.log("In addTodo")
  };

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  };

  render() {
return (
  <div className="App">
  <Todos todos={this.props.todos} />
  <TodoForm handleInput={this.handleInput}/>
  </div>
);
  }
}


const mapStateToProps = state => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(App);
