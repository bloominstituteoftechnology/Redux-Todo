import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from './actions';

class TodoForm extends Component {
    state = {
      todoInputVal: '',
    };

  // setTodoInputVal
  setTodoInputVal = e => {
    const todoInputVal = e.target.value;
    this.setState({ todoInputVal });
  }

  render() {
    const { setTodoInputVal } = this;
    const { dispatchAddTodo } = this.props;
    const { todoInputVal }    = this.state;
    
    return (
      <div className='todo-form-container'>
        <form action='' method='POST' onSubmit={ e => e.preventDefault() }>
          <input
            type='text'
            placeholder='What have you been putting off?'
            value={ todoInputVal }
            onChange={ setTodoInputVal }
          />

          <input
            type='submit'
            value='New Task'
            onClick={ () => dispatchAddTodo(todoInputVal) }
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