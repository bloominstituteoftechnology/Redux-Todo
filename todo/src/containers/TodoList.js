import React, { Component } from "react"
import { connect } from "react-redux"

import Todo from "../components/Todo"
import { addTodo } from "../store/actions"

class TodoList extends Component {
  state = {
    todoText: ""
  }

  saveInputHandler = event => {
    this.setState({ todoText: event.target.value })
  }

  addTodoHandler = event => {
    event.preventDefault()
    this.props.addTodo(this.state.todoText)
    this.setState({ todoText: "" })
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <Todo todo={todo} key={todo.value} />
          ))}
        </ul>
        <form onSubmit={this.addTodoHandler}>
          <input
            type="text"
            placeholder="Todo"
            value={this.state.todoText}
            onChange={this.saveInputHandler}
          />
          <button type="submit">Add Todo</button>
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
  { addTodo }
)(TodoList)
