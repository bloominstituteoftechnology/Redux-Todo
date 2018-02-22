import React from 'react';
import { connect } from 'react-redux';

import { add_todo_item } from '../actions';

class TodoForm extends React.Component {
  state = {
    todoItemInput: '',
  }
  onChange = (event) => {
    this.setState({ todoItemInput: event.target.value });
  }
  onSubmit = (e) => {
    e.preventDefault();
    this.props.add_todo_item(this.state.todoItemInput);
    this.setState({ todoItemInput: ''});
  }
  render() {
    return (
      <div className='form'>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} value={this.state.todoItemInput} placeholder='todo' required='true'/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    todo: state,
  }
}

export default connect(mapStatetoProps, { add_todo_item })(TodoForm);