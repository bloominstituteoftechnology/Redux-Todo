import React, { Component } from 'react';

export default class TodoForm extends Component {
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
        <form action='' method='POST'>
          <input
            type='text'
            placeholder='What have you been putting off?'
            value={ this.state.todoInputVal }
            onChange={ this.setTodoInputVal }
          />

          <input
            type='submit'
            value='New Task'
            // onClick={}
          />
        </form>
      </div>
    )
  }
}