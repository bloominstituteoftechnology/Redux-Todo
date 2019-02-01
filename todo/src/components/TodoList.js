import React, { Component } from 'react';
import { toggleTodo } from '../actions'
import { connect } from 'react-redux';

class TodoList extends Component {

  toggleComplete = (id) => {
    // console.log(id)
    this.props.toggleTodo(id);
  }

  render(){
    return (
      <ul>
        {this.props.todos.map((todo) => { 
          return (
          <li 
            key={todo.id} 
            id={todo.id} 
            onClick={() => this.toggleComplete(todo.id)}>
            {todo.value}
          </li>)})}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { toggleTodo })(TodoList);