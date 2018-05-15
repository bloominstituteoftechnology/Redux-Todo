import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from './actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInputVal: '',
    };
  }

  // setTodoInputVal
  setTodoInputVal = e => {
    this.setState({ todoInputVal: e.target.value });
  }

  render() {
    return (
      <div className='todo-form-container'>
        <form action='' method='POST' onSubmit={ e => e.preventDefault() }>
          <input
            type='text'
            placeholder='What have you been putting off?'
            value={ this.state.todoInputVal }
            onChange={ this.setTodoInputVal }
          />

          <input
            type='submit'
            value='New Task'
            onClick={ () => this.props.dispatchAddTodo(this.state.todoInputVal) }
          />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    dispatchAddTodo: todoInputVal => dispatch(addTodo(todoInputVal))
  }
}

export default connect(null, mapDispatchToProps)(TodoForm);