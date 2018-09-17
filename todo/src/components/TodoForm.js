import React, { Component } from 'react'

export default class TodoForm extends Component {
  state = {
    newTodo: ''
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <input
            name="newTodo"
            placeholder="New Todo"
            value={this.state.newTodo}
            onChange={(e) => this.handleInput(e)}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
