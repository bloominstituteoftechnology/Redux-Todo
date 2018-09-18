import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class TodoForm extends Component {
  state = {
    newTodo: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newTodo = {
      newTodo: this.state.newTodo
    }
    this.props.addTodo(newTodo)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="newTodo"
            type="text"
            placeholder="New Todo"
            value={this.state.newTodo}
            onChange={this.handleInput}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapActionsToProps = {
  addTodo
}

export default connect(null, mapActionsToProps)(TodoForm)