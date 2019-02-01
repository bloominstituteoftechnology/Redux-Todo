import React, { Component } from 'react';
import { toggleTodo } from '../actions'
import { connect } from 'react-redux';

class TodoList extends Component {

  toggleComplete = () => {
    this.props.toggleTodo(this.id)
  }

  render(){
    return (
      <ul>
        {this.props.todos.map((todo, index) => <li key={index} id={index} onClick={this.toggleComplete}>{todo.value}</li>)}
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