import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { addTodo, editInput, toggleTodo} from './actions';
import './App.css';

class App extends Component {

  editInputHandler = e => {
    this.props.editInput(e.target.value);
  }

  addTodoHandler = e => {
    this.props.addTodo(this.props.todo);
  }

  toggleTodoHandler = e => {
    e.preventDefault();
    this.props.toggleTodo(e.target.id);
  }

  render() {
    return (
      <div className="App">
        {this.props.todos.map(
          (todo, index) => 
            <p key={index} id={`${index}`} onClick={this.toggleTodoHandler}>Task: {todo.value} Completed: {todo.completed.toString()}</p>
          )}
        <input placeholder="Add Todo" onChange={this.editInputHandler}/>
        <button onClick={this.addTodoHandler}>Add Todo</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      todos: state.todos,
      todo: state.todo
  };
};

export default connect(mapStateToProps, {addTodo, editInput, toggleTodo})(App);
