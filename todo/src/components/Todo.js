import React from 'react';
import { connect } from 'react-redux';
import {  addTodo, toggleComplete } from '../actions';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      newTodo: ''
    };
  }


  handleTodoInput = event => {
    this.setState({
      newTodo: event.target.value
    })
  }

  handleAddNewTodo = event => {
    event.preventDefault();
    this.props.addTodo({this.state.newTodo, completed: false});
    this.setState({newTodo: ''});
  }

  toggleComplete = () => {
    this.setState({
      newTodo: event.target.value
    })
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.props.todos.map((todo, index) => (
          <p 
            key={index} 
            onClick = { () => this.props.toggleComplete(index)} 
            style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
          >
            {todo.task}
          </p>
        ))}
        <form onSubmit = { this.handleAddNewTodo }>
          <input
            type = "text"
            placeholder = "Add New Todo"
            value = { this.state.newTodo }
            name = "newTodo"
            onChange = { this.handleTodoInput } 
          />
          <button onClick = { this.handleAddNewTodo }>Add Todo</button>
        </form>
        
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(
  mapStateToProps,
  { addTodo, toggleComplete}
)(Todo);