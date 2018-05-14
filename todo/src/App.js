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
          console.log(e.completed)
          return (
            <div key={e.id}>

              <p style={e.completed ? { textDecoration: "line-through" } : { textDecoration: "none" }}> {e.value} </p>
              <button onClick={() => {
                this.props.deleteTodo(e.id)
              }}>delete</button>
              <button onClick={() => {
                this.props.completeTodo(e.id)
              }}>Mark Completed</button>
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
