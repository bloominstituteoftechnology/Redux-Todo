import React, { Component } from 'react';
import { addTodo } from '../actions'
import { connect } from 'react-redux';

class TodoForm extends Component {
  state = {
    newTodo: ''
  }

  onInputChange = (event) => {
    this.setState({ newTodo: event.target.value})
  }

  onItemAdd = (event) => {
    event.preventDefault();
    this.props.addTodo(this.state.newTodo);
    this.setState({ newTodo: ''})
  }

  render(){
    return (
      <form onSubmit={this.onItemAdd}>
        <input 
          type="text" 
          placeholder="Add todo" 
          onChange={this.onInputChange}
          value={this.state.newTodo}
          name="newTodo" />
        <button type="submit">Add Task</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);