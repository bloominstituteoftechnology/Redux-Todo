import React from 'react';
import { connect } from 'react-redux';

import { add_todo_item, complete_todo_item } from '../actions';


class TodoForm extends React.Component {
  state = {
    todoItemInput: '',
  }
  onChange = (event) => {
    this.setState({ todoItemInput: event.target.value });
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.props.add_todo_item(this.state.todoItemInput);
        }}>
          <input onChange={this.onChange} placeholder='todo'/>
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

export default connect(mapStatetoProps, { add_todo_item, complete_todo_item })(TodoForm);