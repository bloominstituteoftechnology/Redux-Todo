import React, { Component } from 'react'
import Todo from './Todo'

export class TodosList extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        {this.props.todos.map(todo => <Todo todo={todo} key={todo.value} />)}
      </div>
    )
  }
}

export default TodosList
