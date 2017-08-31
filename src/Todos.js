import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { toggleTodo, deleteTodo } from './actions'

class Todos extends Component {
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {this.props.todos.map(todo =>
            <li
              key={todo.id}
              onClick={() => this.props.toggleTodo(todo.id)}
              className={todo.completed ? "toggled" : ''}
            >
            {todo.text}      <span onClick={() => this.props.deleteTodo(todo.id)}>&times;</span>
            </li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ toggleTodo, deleteTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)