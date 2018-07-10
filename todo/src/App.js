import React, { Component } from 'react';
import { addTodo } from './actions';
import { connect } from 'react-redux';
import './App.css';
import TodoList from './components/TodoList';
// import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: ''
    }
  }

  handleChange = event => {
    this.setState({ newTodo: event.target.value });
  }
  handleSubmit = () => {
    var todo = {
      task: this.state.newTodo,
      completed: false
    };
    if (this.state.name === '') {
      return
    } else {
      this.props.addTodo(todo);
      this.setState({newTodo: ''})
    }
  };

  render() {
    return (
      <div className="App">
        <input
          name="name"
          onChange={this.handleChange}
          value={this.state.newTodo}
          placeholder="Add Todo..."
        />
        <button onClick={this.handleSubmit}>Submit</button>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { addTodo })(App);
