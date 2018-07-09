import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/addTodo'

class TodoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      newTodo: ''
    }
  }
  handleChange = (e) => {
    this.setState({ newTodo: e.target.value })
  }
  render () {
    return (
      <div>
        <form
          type='submit'
          onSubmit={(e) => {
            e.preventDefault()
            this.setState({ newTodo: '' })
            this.props.addTodo(this.state.newTodo)
          }}
        >
          <input
            type='text'
            placeholder='Add Todo'
            value={this.state.newTodo}
            onChange={this.handleChange}
            required
          />
          <button type='submit'>Add Todo</button>
        </form>
        <button>Clear Completed</button>
        <button>Clear All</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}
export default connect(mapStateToProps, { addTodo })(TodoForm)
