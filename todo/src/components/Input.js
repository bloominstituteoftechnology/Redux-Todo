import React, { Component } from 'react'

class Input extends Component {
  state = {
    value: ''
  }

  handleChange = event => {
    console.log(event.target.value)
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addTodo(this.state.value)
    this.setState({ value: '' })
  }

  render() {
    const { value } = this.state
    const { handleChange, handleSubmit } = this

    return (
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
        <button type="submit">add todo</button>
      </form>
    )
  }
}

export default Input
