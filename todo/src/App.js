import React, { Component } from 'react';
import './App.css';
import { addTodo, deleteTodo, completeTodo } from './action'
import { connect } from "react-redux";
import ToDoForm from './TodoForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ToDoForm />
        {this.props.todos.map((e, i) => {
          return (
            <div key={e.id}>
              <p>{e.value}</p>
              <button onClick={() => {
                this.props.deleteTodo(e.id)
              }}>delete</button>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps, { addTodo, deleteTodo, completeTodo })(App);
