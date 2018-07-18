import React from 'react';
import { addTodo, toggleTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
  state = { todoText: '' }

  inputHandler = (e) => {
    this.setState({ todoText: e.target.value });
  }
  addHandler = (e) => {
    const todo = {
      value: this.state,
      completed: false,
      id: Math.random()
    }
    this.props.addTodo(todo);
    this.setState({ toDotext: '' })
  }
  render() { 
    return (
      <div>
        <input onChange={this.inputHandler} type="text"/>
        <button onClick={this.addHandler}>Add Todo</button>
      </div>
      );
  }
}
 
export default connect(null, {addTodo, toggleTodo})(TodoForm);