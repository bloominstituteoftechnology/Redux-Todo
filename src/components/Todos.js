import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTodo, deleteTodo } from '../actions';
import Todo from './Todo';

class Todos extends Component {

  todoClick = (event) => {
    this.props.completeTodo(event.target.value);
  }
  render() {
    return (
      <ul className="todos">
        {this.props.todos.map( (todo, i) => {
          return <Todo 
                  key={i}
                  value={todo.value} 
                  completed={todo.completed} 
                  onClick={this.todoClick}
                 />
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { 
  completeTodo,
  deleteTodo 
})(Todos);