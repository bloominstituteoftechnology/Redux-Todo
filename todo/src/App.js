import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './Actions/actions';
import ToDoList from './components/ToDoList';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      newTodo: {
      value: '', 
      completed: false,
      }
    };
  }

  handleChange = event => {
    this.setState({ newTodo : { value: event.target.value, 
    completed: false,
    }});
  }

  handleSubmit = (props) => {
    this.props.addTodo(this.state.newTodo)
  }

  handleSwitchCompleted = (todo) => {
    this.props.slashTodo(todo)
  }

  render() {
    return (
      <div className="todo-wrapper">
        <h1 className="todo-header">TO-DO LIST</h1>
        <input type="text" placeholder="Add a todo..." onChange={this.handleChange} value={this.state.newTodo.value}></input>
        <button onClick={this.handleSubmit}>Add todo</button>
        <ul className="todos-list">
        {this.props.todos.filter(todo => !todo.completed ).
            map(todo => <div><li>{todo.value}</li><button onClick={() => this.handleSwitchCompleted(todo)}></button></div>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { addTodo, ToDoList })(App); 
