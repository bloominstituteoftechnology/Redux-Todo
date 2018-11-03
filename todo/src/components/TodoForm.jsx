import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputChange, addToDo } from '../actions/actions';

class ToDoForm extends Component {
  inputChange = event => {
    this.props.inputChange(event.target.value)
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addToDo()
  }

  render() {
    return(
      <div>
        <h2>ToDo List (Redux)</h2>
        <input type="text" value={this.props.input} placeholder='Add Todo...' onChange={this.inputChange}/>
        <button onClick={this.handleSubmit}>Add ToDo</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    input: state.input
  }
}

export default connect(mapStateToProps, { inputChange, addToDo })(ToDoForm)