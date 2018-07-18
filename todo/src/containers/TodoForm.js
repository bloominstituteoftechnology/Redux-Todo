import React from 'react';
import { addTodo } from '../actions/todoActions';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
  state = {todoText: '' }

  inputHandler = (e) => {
    e.preventDefault();
    this.setState({ todoText: e.target.value });
  }
  addHandler = () => {
    const text = this.state.todoText;
    const todo = {
      value: text,
      completed: false,
      id: Math.random()
    }
    this.props.addTodo(todo);
    this.setState({ todoText: '' })
  }

  render() { 
    return (
      <div>
        <input onChange={this.inputHandler} value={this.state.todoText} type="text"/>
        <button onClick={this.addHandler}>Add Todo</button>
      </div>
      );
  }
}
 
export default connect(null, {addTodo})(TodoForm);