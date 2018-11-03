import React, {Component} from "react";
import {connect} from 'react-redux';
import TodoList from './TodoList';

class TodoForm extends Component {
  constructor(props) {
    super(props);

  }

  inputHandler = e => {
    this.setState({
      [e.target.todo]: e.target.value
    });

  };

  render() {
    return (
      <div>
      <h1>
        DüStuf
      </h1>

        <TodoList />

      <form onSubmit={() => {
          return
        }}>
        <input onChange={this.inputHandler} placeholder="todo" name="todo" />
        <button type="submit">Add</button>
      </form>
    </div>);
  }




}

export default TodoForm;
