import React from 'react';
import { addTodo, toggleTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
  state = { todo: '' }
  render() { 
    return (
      <div>
        <input type="text"/>
        <button>Add Todo</button>
      </div>
      );
  }
}
 
export default connect(null, {addTodo, toggleTodo})(TodoForm);