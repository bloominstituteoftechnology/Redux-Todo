import React, { Component } from "react";
import { connect } from 'react-redux';

import { addTodo } from '../actions'

class TodoForm extends Component {
  state = {
    todo: ""
  };

  handleChange = e => {
      this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit = (e, todo) => {
      e.preventDefault();
      if(!todo){
          alert('add a todo pleeeeeese')
      } else {
        this.props.addTodo(todo)
        this.setState({
            todo: ''
        })
      }
  }

  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.todo}
          name="todo"
          onChange={e => this.handleChange(e)}
        />
        <button onClick={e => this.handleSubmit(e, this.state.todo)}>Add Todo</button>
      </>
    );
  }
}

export default connect(null, {addTodo})(TodoForm);
