import React, { Component } from 'react';

class ToDoForm extends Component {
  state = {
    newToDo: '',
  }

  formHandler = (event) => {
    // event.preventDefault();
    this.setState({ newToDo: event.target.value });
    console.log(this.state.newToDo);
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submitted new task:', this.state.newToDo)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.formHandler}/>
        <button type="submit">Add Todo</button>
      </form>
    )
  }
}

export default ToDoForm;