import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
import { Todo } from './Todo';

let input;
export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  handleSubmit = event => {
    this.props.addTodo(input.value);
  }

  todoTasks = () => {
    return this.props.todos.map((todo, index) => <Todo {...todo} key={index} />);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref={node => (input = node)} placeholder="add new todo task" />
        </form>
        {console.log(this.props)}
      </div>
    )
  }
}

export default connect(null, { addTodo })(TodoList);