import React, { Component } from "react"
import { connect } from "react-redux"

import { addTodo, toggleTodo, deleteTodo } from "../store/actions"
import { TodosWrapper, TodoWrapper } from "../styles/todoStyles"

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

  deleteTodoHandler = (event, id) => {
    event.stopPropagation()
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <TodosWrapper>
        <ul>
          {this.props.todos.map(todo => (
            <TodoWrapper
              key={todo.id}
              onClick={() => this.props.toggleTodo(todo.id)}
              completed={todo.completed}
            >
              {todo.value}
              <i
                onClick={event => this.deleteTodoHandler(event, todo.id)}
                className="far fa-minus-square"
              />
            </TodoWrapper>
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
      </TodosWrapper>
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
  { addTodo, toggleTodo, deleteTodo }
)(TodoList)
