import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addTodoAction } from './actions'

class SubmitTodo extends Component {
    constructor(props){
        super(props);
        this.state = {
            todoInput: ''
        }
    }

    inputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    formSubmitHandler = e => {
        e.preventDefault();
        this.props.addTodoAction(this.state.todoInput);
        this.setState({
            todoInput: ''
        })
    }

    render() {
    return (
      <form onSubmit={this.formSubmitHandler}>
        <input 
            name='todoInput'
            type='text'
            placeholder='Type to-do item here'
            onChange={this.inputHandler}
            value={this.state.todoInput}
        />
        <button type='submit'>
            Submit to-do item
        </button>
      </form>
    );
  }
}

export default connect(() => ({}), {addTodoAction})(SubmitTodo);
