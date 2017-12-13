import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoValue: ""
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.todoValue,
      completed: false
    });
    this.setState({
      todoValue: ""
    });
  }

  updateNewTodo(event) {
    this.setState({
      todoValue: event.target.value
    })
  }

  render() {
    return (
      <div className="TodoForm">
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.updateNewTodo}
            placeholder="new todo"
            value={this.state.todoValue}
          />
        </form>
      </div>
    ); 
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo })(TodoForm);
 

components/Todos.js

import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const Todos = (props) => {
  const todos = props.todos.map((todo, i) => <Todo todo={todo} key={i} index={i} />);
  return (
    <ul>
      { todos }
    </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(Todos);