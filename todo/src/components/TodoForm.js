import React, { Component } from 'react';
import { addTodo, clearCompleted } from '../actions'
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
    if (this.state.newTodo.length > 0){
      this.props.addTodo(this.state.newTodo);
      this.setState({ newTodo: ''})
    }
  }

  onClearCompleted = (event) => {
    event.preventDefault();
    this.props.clearCompleted();
  }

  render(){
    return (
      <div className="todo-form">
        <form>
          <input 
            type="text" 
            placeholder="Add todo" 
            onChange={this.onInputChange}
            value={this.state.newTodo}
            name="newTodo"
            autocomplete="off" />
          <button onClick={this.onItemAdd} type="submit">Add Task</button>
          <button className="clear-completed-button" onClick={this.onClearCompleted}>Clear Completed</button>

        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { todos: state.todos }
}

export default connect(mapStateToProps, { addTodo, clearCompleted })(TodoForm);