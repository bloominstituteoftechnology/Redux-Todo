import React, { Component } from 'react';
import { connect } from 'react-redux';
import { add, remove } from './actions';
import './App.css';
import TodoList from './Components/TodoList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  componentDidMount = () => {
    this.getTodos();
  }

  getTodos = () => {
    this.setState({ todos: this.props.todos });
  }

  addTask = event => {
    event.preventDefault();
    const task = {
      value: this.state.value,
      completed: false
    }
    this.props.add(task);
    this.setState({ value: '' });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value})
  }

  render() {
    const { todos } = this.props;
    const mappedTodos = todos.map(todo =>
      <div>
        {todo.value}
        <button onClick={() => this.props.remove({value: todo.value})} className="button button-delete" > X </button>
      </div>)

    if(!this.state.todos) return (
      <div>
          Please wait...
      </div>
    )

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todos</h1>
        </header>
        <p> Add To Do </p>
        <form className="todoForm" onSubmit={this.addTask}>
          <input 
            className="input"
            onChange={this.handleInputChange}
            placeholder="Add Task"
            value={this.state.value}
            name="value"
          />
          <button className="button button-add" type="submit">Add To List</button>
        </form>
        <p> List of Todo's </p>
        <div className="todoList" >
          <div className="todos" >
            <u1>{mappedTodos}</u1>
          </div>
        </div>
      </div>
    );
  }
}

const appProps = state => {
  return {
    todos: state
  };
};

export default connect(appProps, { add, remove })(App);