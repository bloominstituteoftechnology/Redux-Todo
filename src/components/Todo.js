import React, { Component } from 'react'
import { addTodo, deleteTodo, toggleCompleted } from '../actions'

import { connect } from 'react-redux'
import styled from 'styled-components'

const App = styled.main`
  margin: 0 auto;
  max-width: 400px;
`

const TodoList = styled.ul``

const TodoItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.25rem;
  div {
    width: 100%;
    margin-left: 1rem;
    text-align: left;
  }
  .item-completed {
    text-decoration: line-through;
  }
`

class TodoApp extends Component {
  state = {
    newTodo: '',
  }

  handleChanges = e => {
    this.setState({ newTodo: e.target.value })
  }

  addTodoToList = e => {
    e.preventDefault()
    this.props.addTodo(this.state.newTodo)
    this.setState({ newTodo: '' })
  }

  toggleCompleted = id => {
    this.props.toggleCompleted(id)
  }

  deleteTodo = id => {
    this.props.deleteTodo(id)
  }

  render() {
    return (
      <App className='container'>
        <section className='hero'>
          <div className='hero-body'>
            <h1 className='title'>Redux Todos</h1>
          </div>
        </section>

        <TodoList>
          {this.props.todoList.map((item, i) => (
            <TodoItem key={i}>
              <button
                className='button is-small is-success is-outlined'
                onClick={() => this.toggleCompleted(item.id)}>
                +
              </button>
              <div
                onClick={() => this.toggleCompleted(item.id)}
                className={`${item.completed ? 'item-completed' : null}`}>
                {item.todoItem}
              </div>
              <button
                type='button'
                className='button is-small is-danger'
                onClick={() => this.deleteTodo(item.id)}>
                x
              </button>
            </TodoItem>
          ))}
        </TodoList>

        <div className='field is-grouped'>
          <div className='control is-expanded'>
            <input
              className='input'
              name='newTodo'
              type='text'
              value={this.state.newTodo}
              onChange={this.handleChanges}
              placeholder='Add a new Todo'
            />
          </div>
          <div className='control'>
            <button className='button is-success' onClick={this.addTodoToList}>
              Add Todo
            </button>
          </div>
        </div>
      </App>
    )
  }
}

const mapStateToProps = state => ({
  todoList: state.todoItems,
})

export default connect(
  mapStateToProps,
  { addTodo, toggleCompleted, deleteTodo }
)(TodoApp)
