import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos, createTodo, completeTodo } from './actions';
import './App.css';
import AddTodo from './AddTodo';

class App extends Component {
  
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    console.log(this.props.todos)
    return (
      <div>
        <AddTodo />
        <h1>TODO LIST</h1>
        {this.props.todos.map(todo => 
          <li 
            
            onClick={() => this.props.completeTodo(todo.id)} 
            key={todo.id}>{todo.value}
          </li>
        )}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    todos: state 
  };
};

export default connect(mapStateToProps, { fetchTodos, createTodo, completeTodo})(App);
